import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import useAxios from '../../hooks/useAxios';

import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import Conversations from '../../components/Messaging/Conversation/';

function Messages() {
	const { isLoading, isError, conversation_data } = useQuery(
		'conversations',
		() => useAxios({ url: `/conversations`, method: 'get' }),
	);
	console.log('conversation_data >>>>', conversation_data);

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
						key={conversation_data.id}
						id={conversation_data.id}
						request_id={conversation_data.request_id}
						messages={conversation_data.messages}
						// requester={}
					/>
				)}
			</Container>
		</>
	);
}
export default Messages;
