import { useState, useEffect, useRef } from 'react';
import { useQuery, useMutation } from 'react-query';
import useAxios from '../../hooks/useAxios';

import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import ConversationList from '../../components/Messaging/Conversations';

function Messages(props) {
	//use usestate

	const { status, isLoading, isError, data } = useQuery('conversations', () => {
		return useAxios({ url: `/conversations/`, method: 'get' });
	});
	console.log('Conversation List from Index.js >>>>', data);
	const [conversationList, setConversationList] = useState(data);

	useEffect(() => {
		if (status === 'success') {
			setConversationList(data);
		}
	}, [status, data]);

	//TODO: add styling for loading condition
	if (isLoading) return <p>Loading...</p>;
	return (
		<>
			<NavBar />
			<Container title='Talk With Requester'>
				{
					// status === 'success' ?
					<ConversationList key={data.id} data={data} />
					// : (
					// 	<h1>No Conversations to Display</h1>
					// )
					// //TODO: add styling for empty conversations
				}
				;
			</Container>
		</>
	);
}
export default Messages;
