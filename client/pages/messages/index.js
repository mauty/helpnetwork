import { useState, useEffect, useRef } from 'react';
import { useQuery, useMutation } from 'react-query';
import useAxios from '../../hooks/useAxios';

import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import ConversationList from '../../components/Messaging/Conversations';

function Messages(props) {
	const { isLoading, isError, data } = useQuery('conversations', () => {
		return useAxios({ url: `/conversations/`, method: 'get' });
	});

	console.log('Conversation List from Index.js >>>>', data);
	//TODO: add styling for loading condition
	if (isLoading) return <p>Loading...</p>;

	const convos = data.filter((conversation) => {
		return conversation.messages.length > 0;
	});
	return (
		<>
			<NavBar />
			<Container title='Messages'>
				{(data && <ConversationList key={data.id} convos={convos} />) || (
					//TODO: add styling for empty conversations
					<h1>No Conversations to Display</h1>
				)}
			</Container>
		</>
	);
}
export default Messages;
