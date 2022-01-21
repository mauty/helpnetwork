import { useState, useEffect, useRef } from 'react';
import { useQuery, useMutation } from 'react-query';
import useAxios from '../../hooks/useAxios';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import MessageList from '../../components/Messaging/Messages';
import { useContext } from 'react';
import { UserContext } from '../_app';

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
		useAxios({ url: `/conversations/1`, method: 'post', params: newMessage }),
	);

	const { currentUser } = useContext(UserContext);

	console.log ('currentUser', currentUser)

	function handleSubmit() {
		mutation.mutate({ body: text, sender_id: currentUser.id });
		setText('');
		setTimeout(() => {
			refreshButton.current.click();
			console.log('Reload function >>>>> ', refreshButton.current);
		}, 1500);
	}

	console.log('Data >>>>', data);

	return (
		<>
			<NavBar />
			<Container title='Message'>
				{data && <MessageList key={data.id} {...data} />}
				{/* COMPOSE MESSAGE */}
				<div className='w-full flex justify-between'>
					<textarea
						className='flex-grow focus:bg-white m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none'
						rows='1'
						placeholder='Message...'
						onChange={(event) => setText(event.target.value)}
						value={text}></textarea>
					<button className='p-5' onClick={handleSubmit}>
						Send
					</button>
				</div>
			</Container>
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
