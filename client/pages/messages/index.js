import { useState, useEffect, useRef } from 'react';
import { useQuery, useMutation } from 'react-query';
import useAxios from '../../hooks/useAxios';

import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import ConversationList from '../../components/Messaging/Conversations';

function Messages(props) {
	//use usestate
	const [conversationList, setConversationList] = useState({ data: {} });

	const { status, isLoading, isError, data } = useQuery('conversations', () => {
		console.log('Conversation List from Index.js >>>>', data);
		return useAxios({ url: `/conversations/`, method: 'get' });
	});

	useEffect(() => {
		if (status === 'success') {
			setConversationList({ data });
		}
	}, [status, data]);

	//TODO: add styling for loading condition
	if (isLoading) return <p>Loading...</p>;
	return (
		<>
			<NavBar />
			<Container title='Talk With Requester'>
				{
					status === 'success' ? (
						<ConversationList
							key={conversationList.id}
							data={conversationList}
						/>
					) : (
						<h1>No Conversations to Display</h1>
					)
					//TODO: add styling for empty conversations
				}
				;
			</Container>
		</>
	);
}
export default Messages;
