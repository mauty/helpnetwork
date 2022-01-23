import { useState, useRef } from 'react';
import { useQuery, useMutation } from 'react-query';
import useAxios from '../../hooks/useAxios';
import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import MessageList from '../../components/Messaging/Messages';
import { ArrowUpCircle } from 'react-feather';
import { useContext } from 'react';
import { UserContext } from '../_app';
import Head from 'next/head';
import Shimmer from '../../components/ui/Shimmer';
import ErrorMessage from '../../components/ui/ErrorMessage';
import Link from 'next/link';
import Header from '../../components/Header';
import useAuth from '../../hooks/useAuth';
import DesktopNav from '../../components/ui/DesktopNav';

export const getServerSideProps = async (ctx) => {
	// TODO: Get the data from the server here using ctx.params.id
	// TODO: Then return the component Profile with the data
	return { props: { id: ctx.params.id } };
};

function Conversation(props) {
	useAuth();

	const { isLoading, isError, data, refetch } = useQuery(
		'conversations',
		() => {
			console.log('Ok Refreshing page');
			return useAxios({ url: `/conversations/${props.id}`, method: 'get' });
		},
		{
			refetchInterval: 10000,
		},
	);

	console.log(data);

	const refreshButton = useRef(null);

	const [text, setText] = useState('');

	const mutation = useMutation((newMessage) =>
		useAxios({
			url: `/conversations/${props.id}`,
			method: 'post',
			params: newMessage,
		}),
	);

	const { currentUser } = useContext(UserContext);

	function handleSubmit() {
		mutation.mutate({ body: text, sender_id: currentUser.id });
		setText('');
		setTimeout(() => {
			refreshButton.current.click();
		}, 1500);
	}

	if (!data && isLoading)
		return (
			<div className='p-2'>
				<Shimmer />
			</div>
		);
	if (!data && isError)
		return (
			<div className='p-2'>
				<ErrorMessage title='Error' error='Something unexpected... Try again' />
			</div>
		);

	const user =
		data.sender?.id === currentUser?.id ? data.receiver : data.sender;

	return (
		<>
			<Head>
				<title>helpnetwork | message</title>
			</Head>
			<NavBar>
				<Container title='Message'>
					{data && <MessageList key={data.id} {...data} />}
					{/* COMPOSE MESSAGE */}
					<div className='w-full flex justify-between mt-2'>
						<textarea
							className='flex-grow focus:bg-white m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 text-lg resize-none'
							rows='1'
							placeholder='Message...'
							onChange={(event) => setText(event.target.value)}
							value={text}></textarea>
						<button
							className='p-5'
							disabled={text === ''}
							onClick={handleSubmit}>
							<ArrowUpCircle color='#0067ff' size={48} />
						</button>
					</div>
				</Container>
			</NavBar>
			<button ref={refreshButton} className='invisible' onClick={refetch}>
				{' '}
				Do refetch NOW{' '}
			</button>
		</>
	);
}
//help request header
//container for conversation
//send message button
export default Conversation;
