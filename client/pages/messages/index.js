import { useState, useEffect, useRef } from 'react';
import { useQuery, useMutation } from 'react-query';
import useAxios from '../../hooks/useAxios';

import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import ConversationList from '../../components/Messaging/Conversations';
import { useContext } from 'react';
import { UserContext } from '../../pages/_app';

function Messages() {
	//use usestate

	const { status, isLoading, isError, data } = useQuery('conversations', () => {
		console.log('During Query');
		return useAxios({ url: `/conversations/`, method: 'get' });
	});
	console.log('Conversation List from Index.js >>>>', data);

	// const convoData = useContext(UserContext);

	//console.log('Convo Data >>>>>>', convoData);
	const [conversationList, setConversationList] = useState([data]);

	// useEffect(() => {
	// 	if (status === 'success') {
	// 		setConversationList(data);
	// 	}
	// }, [status, data]);

	const log = () => {
		console.log('Inside Return');
	};
	//TODO: add styling for loading condition
	if (isLoading) return <p>Loading...</p>;
	return (
		<>
			<NavBar />
			<h1>{log}</h1>
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
