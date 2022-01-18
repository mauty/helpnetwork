import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import useAxios from '../hooks/useAxios';

import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import Conversations from '../../components/Messaging/Conversation/';

function Messages() {
	const { isLoading, isError, data } = useQuery('conversations', () =>
		useAxios({ url: `/conversations/1`, method: 'get' }),
	);
	console.log(data);
	return (
		<>
			<NavBar />
			<Container title='All Messages'>
				{data && (
					<Conversations
						key={data.conversation.id}
						id={data.conversation.id}
						helper_id={data.conversation.helper_id}
						requester_id={data.conversation.requester_id}
						request_id={data.conversation.request_id}
					/>
				)}
			</Container>
		</>
	);
}
export default Messages;
