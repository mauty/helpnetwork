import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import useAxios from '../hooks/useAxios';

import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import Conversations from '../../components/Messaging/Conversation/';

function Messages() {
	useViewport();

	const { isLoading, isError, data } = useQuery(
		['messages', copyViewport],
		() =>
			useAxios({
				url: '/conversations/1',
				method: 'get',
			}),
	);
	return (
		<>
			<NavBar />
			<Container title='All Messages'></Container>
			<Conversations></Conversations>
		</>
	);
}

//list of conversation
export default Messages;
