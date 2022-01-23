import { useState, useEffect, useRef, useContext } from 'react';
import { useQuery, useMutation } from 'react-query';
import useAxios from '../../hooks/useAxios';
import Shimmer from '../../components/ui/Shimmer';
import ErrorMessage from '../../components/ui/ErrorMessage';
import Empty from '../../components/ui/Empty';

import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import ConversationList from '../../components/Messaging/Conversations';
import useAuth from '../../hooks/useAuth';
import { UserContext } from '../_app';

function Messages(props) {
  useAuth();

  const { currentUser } = useContext(UserContext);
	const { isLoading, isError, data } = useQuery('conversations', () => {
		return useAxios({ url: `/conversations/`, method: 'get', params: { user_id: currentUser.id } });
	});

	console.log('Conversation List from Index.js >>>>', data);
	if (isLoading) return <div className='p-2'><Shimmer/></div>;
  if(isError) return <div className='p-2'><ErrorMessage title="Error" error="Something unexpected... Try again"/></div>

	return (
			<NavBar>
				<Container title='Messages'>
					{data && data.length > 0 ?
					(<ConversationList
						key={data.id}
						convos={data.filter(convo => convo.messages.length > 0)}
					/>) : (
            <Empty/>
					)}
				</Container>
			</NavBar>
	);
}
export default Messages;
