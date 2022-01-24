import { useState, useRef } from 'react';
import { useQuery, useMutation } from 'react-query';
import useAxios from '../../hooks/useAxios';
import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import MessageList from '../../components/Messaging/Messages';
import { ArrowUpCircle } from 'react-feather';
import { useContext } from 'react';
import { UserContext } from '../_app';
import Head from 'next/head';
import Shimmer from '../../components/ui/Shimmer';
import ErrorMessage from '../../components/ui/ErrorMessage';

export const getServerSideProps = async (ctx) => {
	// TODO: Get the data from the server here using ctx.params.id
	// TODO: Then return the component Profile with the data
	return { props: { id: ctx.params.id } };
};

function Conversation(props) {
	const { isLoading, isError, data, refetch } = useQuery(
		'conversations',
		() => {
			console.log('Ok Refreshing page');
			return useAxios({ url: `/conversations/${props.id}`, method: 'get' });
		},
		{
			refetchInterval: 10000,
		},
	);

	const refreshButton = useRef(null);

	const [text, setText] = useState('');

	const mutation = useMutation((newMessage) =>
		useAxios({
			url: `/conversations/${props.id}`,
			method: 'post',
			params: newMessage,
		}),
	);

	const { currentUser } = useContext(UserContext);

	function handleSubmit() {
		mutation.mutate({ body: text, sender_id: currentUser.id });
		setText('');
		setTimeout(() => {
			refreshButton.current.click();
		}, 1500);
	}

	if (isLoading) return <div className='p-2'><Shimmer/></div>;
  if(isError) return <div className='p-2'><ErrorMessage title="Error" error="Something unexpected... Try again"/></div>

	return (
		<>
			<Head>
				<title>helpnetwork | message</title>
			</Head>
			<NavBar>
        {
          data && (
            <Container title={
              data.sender && data.receiver && (
                <div className="flex justify-between">
                  <div class="-space-x-6 avatar-group">
                    <div class="avatar">
                      <div class="w-12 h-12">
                        <img src={data.sender.imgURL}/>
                      </div>
                    </div>
                    <div class="avatar">
                      <div class="w-12 h-12">
                        <img src={data.receiver.imgURL}/>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p>{data.sender.first_name} {data.sender.last_name}</p>
                    <p>{data.receiver.first_name} {data.receiver.last_name}</p>
                  </div>
                </div>
              )
            }>
              <MessageList key={data.id} {...data} />
              {/* COMPOSE MESSAGE */}
              <div className='block fixed inset-x-0 sm:left-32 bottom-16 z-10 bg-white'>
                <div className='flex w-full sm:w-11/12 justify-between'>
                  <textarea
                    className='flex-grow focus:bg-white m-2 py-2 px-4 mr-1 rounded-xl border border-gray-300 bg-gray-200 text-lg resize-none'
                    rows='1'
                    placeholder='Message...'
                    onChange={(event) => setText(event.target.value)}
                    value={text}></textarea>
                  <button
                    className='py-5 pr-3 pl-2'
                    disabled={text === ''}
                    onClick={handleSubmit}>
                    <ArrowUpCircle color='#0067ff' size={48} />
                  </button>
                </div>
              </div>
            </Container>
          )
        }
			</NavBar>
			<button ref={refreshButton} onClick={refetch}>
				{' '}
				Do refetch NOW{' '}
			</button>
		</>
	);
}
//help request header
//container for conversation
//send message button
export default Conversation;
