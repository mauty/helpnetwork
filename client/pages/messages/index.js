import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import useAxios from '../../hooks/useAxios';

import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import Conversations from '../../components/Messaging/Conversation/';
import MessageList from '../../components/Messaging/Messages/MessageList';
import Compose from '../../components/Messaging/Messages/Compose';

function Messages(props) {
	const { isLoading, isError, data, refetch } = useQuery(
		'conversations',
		() => useAxios({ url: `/conversations/1`, method: 'get' }),
		{
			refetchInterval: 50000,
		},
	);
	console.log('Data >>>>', data);

	// const [data, setData] = useState({}); // optional

  // function refetchData() {
  //   return refetch;
  // }
	//function to write msg to db
	//function to refresh page
	return (
		<>
			<NavBar />
			<Container title='Talk With Requester'>
				{data && <MessageList key={data.id} {...data} />}
				<Compose reload={() => {refetch}}/>
			</Container>
			<button onClick={refetch}> Do refetch NOW </button>
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
