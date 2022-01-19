import { useState, useEffect, useRef } from 'react';
import { useQuery, useMutation } from 'react-query';
import useAxios from '../../hooks/useAxios';

import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import Conversations from '../../components/Messaging/Conversation/';
import MessageList from '../../components/Messaging/Messages/MessageList';
import Compose from '../../components/Messaging/Messages/Compose';

function Messages(props) {
	const { isLoading, isError, data, refetch } = useQuery(
		'conversations',
		() => {
			console.log('Ok Refreshing page');
			return useAxios({ url: `/conversations/1`, method: 'get' });
		},
		{
			refetchInterval: 10000,
		},
	);
	console.log('Data >>>>', data);

	const refreshButton = useRef(null);

	// const [data, setData] = useState({}); // optional?

	// function refetchData() {
	//   return refetch;
	// }
	//function to write msg to db
	//function to refresh page

	const [text, setText] = useState('');

	const mutation = useMutation((newMessage) =>
		useAxios({ url: `/conversations/1`, method: 'post', params: newMessage }),
	);

	function handleSubmit() {
		mutation.mutate({ body: text, sender_id: 1 });
		setText('');
		setTimeout(() => {
			refreshButton.current.click();
			console.log('Reload function >>>>> ', refreshButton.current);
		}, 1500);
	}

	return (
		<>
			<NavBar />
			<Container title='Talk With Requester'>
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
export default Messages;

/*
function Messages() {
	const { isLoading, isError, data } = useQuery('conversations', () =>
		useAxios({ url: `/conversations`, method: 'get' }),
	);
	console.log('conversation_data >>>>', data);

	//Add profile information

	// const person_id = conversation_data.requester_id;
	// const { isLoading, isError, person_data } = useQuery('person', () =>
	// 	useAxios({ url: `/profile/${person_id}`, method: 'get' }),
	// );
	// console.log('person_data >>>>', person_data);

	return (
		<>
			<NavBar />
			<Container title='All Messages'>
				{data && (
					<Conversations
						key={data.conversation.id}
						id={data[0].id}
						request_id={data[0].request_id}
						messages={data[0].messages}
						// requester={}
					/>
				)}
			</Container>
		</>
	);
}
export default Messages;

*/
