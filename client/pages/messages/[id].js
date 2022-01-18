import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import useAxios from '../../hooks/useAxios';

import Container from '../../components/ui/Container';
import Messages from '../../components/Messaging/Messages';

export const getServerSideProps = async (ctx) => {
	// TODO: Get the data from the server here using ctx.params.id
	// TODO: Then return the component Profile with the data
	return { props: { id: ctx.params.id } };
};

function Conversation(props) {
	const { isLoading, isError, data } = useQuery('conversations', () =>
		useAxios({ url: `/conversations/${props.id}`, method: 'get' }),
	);
	console.log('Data >>>>', data);

	return (
		<div className='flex flex-col justify-between'>
			<Container title='Message'>
				{/* <Messages key={data.id} messages={data.messages} /> */}
			</Container>
		</div>
	);
}
//help request header
//container for conversation
//send message button
export default Conversation;
