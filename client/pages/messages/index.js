import { useContext } from 'react';
import { useQuery } from 'react-query';
import useAxios from '../../hooks/useAxios';
import Shimmer from '../../components/ui/Shimmer';
import ErrorMessage from '../../components/ui/ErrorMessage';
import Empty from '../../components/ui/Empty';
import Head from 'next/head';
import Header from '../../components/Header';

import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import ConversationList from '../../components/Messaging/Conversations';
import useAuth from '../../hooks/useAuth';
import { UserContext } from '../_app';

export default function Messages() {
  useAuth();

  const { currentUser } = useContext(UserContext);
	const { isLoading, isError, data } = useQuery('conversations', () => {
		return useAxios({ url: `/conversations/`, method: 'get', params: { user_id: currentUser.id } });
	});

	console.log('Conversation List from Index.js >>>>', data);
	if (isLoading) return <div className='p-2'><Shimmer/></div>;
  if(isError) return <div className='p-2'><ErrorMessage title="Error" error="Something unexpected... Try again"/></div>

	return (
      <>
        <Head>
          <title>helpnetwork | messages</title>
        </Head>
        <NavBar currentNav={'messages'}>
					<Header pageName="Messages" />
          <Container title='Messages'>
            { data && data.length > 0 ?
              <ConversationList
                key={data.id}
                currentUser={currentUser}
                convos={data.filter(convo => convo.messages.length > 0)}
              /> : <Empty/>
            }
          </Container>
        </NavBar>
      </>
	);
}