import { useState, useEffect, useRef } from 'react';
import { useQuery, useMutation } from 'react-query';
import useAxios from '../../hooks/useAxios';

import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import ConversationList from '../../components/Messaging/Conversations';
//query for conversation list
//pass props down
function Messages(props) {
	const { isLoading, isError, data } = useQuery('conversations', () => {
		return useAxios({ url: `/conversations/`, method: 'get' });
	});
	console.log('Conversation List Data >>>>', data);

	return (
		<>
			<NavBar />
			<Container title='Talk With Requester'>
				{data && <ConversationList key={data.id} data={data} />}
			</Container>
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
