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
	console.log('Conversation List Data >>>>', data);

	return (
		<>
			<NavBar />
			<Container title='Talk With Requester'>
				{(data && <ConversationList key={data.id} data={data} />) || (
					<h1>No Conversations to Display</h1>
				)}
			</Container>
		</>
	);
}
export default Messages;
