import { useState, useRef } from 'react';
import { useQuery, useMutation } from 'react-query';
import useAxios from '../../hooks/useAxios';
import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import MessageList from '../../components/Messaging/Messages';
import { ArrowUpCircle, ArrowDownCircle } from 'react-feather';
import { useContext } from 'react';
import { UserContext } from '../_app';
import Head from 'next/head';
import Header from '../../components/Header';

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

	console.log(data);

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
			console.log('Reload function >>>>> ', refreshButton.current);
		}, 1500);
	}

	console.log('Data from Dynamic Route >>>>', data);

	return (
		<>
			<Head>
				<title>helpnetwork | message</title>
			</Head>
			<NavBar>
				<Header pageName="Message" />
				<Container>
					{data && <MessageList key={data.id} {...data} />}
					{/* COMPOSE MESSAGE */}
					<div className='block fixed inset-x-0 bottom-16 z-10 bg-white'>
						<div className='flex w-full justify-between'>
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
