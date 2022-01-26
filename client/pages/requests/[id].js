import Link from 'next/link';
import { useContext } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { Send, File, Check, MessageSquare } from 'react-feather';
import { UserContext } from '../_app';

import Container from '../../components/ui/Container';
import useAxios from '../../hooks/useAxios';
import Shimmer from '../../components/ui/Shimmer';
import ErrorMessage from '../../components/ui/ErrorMessage';
import NavBar from '../../components/NavBar';
import Message from '../../components/ui/Message';
import Header from '../../components/Header';
import Comments from '../../components/Request/Comments';
import RequestMap from '../../components/Request/RequestMap';
import DesktopNav from '../../components/ui/DesktopNav';

export const getServerSideProps = async (ctx) => {
  // TODO: Get the data from the server here using ctx.params.id
  // TODO: Then return the component Profile with the data
  return { props: { id: ctx.params.id } };
};

function RequestId({ id }) {
  const router = useRouter();
  const { currentUser } = useContext(UserContext);

  const mutation = useMutation((newHelp) =>
    useAxios({ url: `/request/help/${id}`, method: 'post', params: newHelp }),
  );

  const mutationComplete = useMutation(() =>
    useAxios({ url: `/request/complete/${id}`, method: 'post' }),
  );

  const { isLoading, isError, data } = useQuery('request', () =>
    useAxios({ url: `/request/${id}`, method: 'get' }),
  );

  function offerHelp() {
    mutation.mutate(
      { helper_id: currentUser.id },
      {
        onSuccess: (data) => {
          router.push(`/messages/${data.id}`);
        },
      },
    );
  }

  function markComplete() {
    mutationComplete.mutate(
      {},
      {
        onSuccess: () => {
          router.reload(window.location.pathname);
        },
      },
    );
  }

  function findConversation() {
    const conversation = data.conversations.filter(
      (convo) =>
        convo.helper_id === currentUser.id ||
        convo.requester_id === currentUser.id,
    );
    router.push(`/messages/${conversation[0].id}`);
  }

  /************ Comments logic Begin  **************/

  return (
    <>
      <DesktopNav currentNav={'home'}/>
      <NavBar currentNav={'help'}>
        <Header pageName="Help For" />
        <Container>
          {isLoading && <Shimmer />}
          {isError && (
            <ErrorMessage
              title='Error'
              error='Something unexpected... Try again'
            />
          )}
          {data && data.request_claimed && data.request_completed === false ? (
            <Message
              message={`${
                currentUser && data.helper.id === currentUser.id
                  ? 'You are'
                  : 'Someone is'
              } already helping with this request.`}
            />
          ): (data
          && data.request_completed
          && <Message
            message={<p className='font-bold'>This request has been completed.
              <Link href="/">
                <span className='text-blue-500 pl-2 font-medium'>go back to main</span>
              </Link>
              </p>}
            />)}
          {data && (
            <div className='flex flex-col p-2 space-between gap-10'>
              <div className='flex items-center gap-2'>
                <h1 className='font-medium text-2xl'>{`${data.requester.first_name} ${data.requester.last_name}`}</h1>
                <Link href={`/profile/${data.requester.id}`}>
                  <button className='btn btn-xs btn-primary'>
                    <File className='h-4 w-4 mr-1' />
                    View Profile
                  </button>
                </Link>
              </div>

              <div className="div flex flex-col sm:flex sm:flex-row gap-4">
                <RequestMap lat={data.lat} long={data.long}/>
                <div className='my-6 flex flex-col gap-6'>
                  <div>
                    <h2 className='font-semibold text-lg text-black'>Kind of help</h2>
                    <h2 className=''>{data.category.name}</h2>
                  </div>

                  <div>
                    <h2 className='text-lg font-bold text-gray-900 dark:text-gray-100'>
                      Details
                    </h2>
                    <p className='text-sm break-words'>{data.request_details}</p>
                  </div>
                </div>
              </div>

                {data.requested_resources &&
                  data.requested_resources.length > 0 && (
                    <div id="resources" className=''>
                      <h2 className='text-lg font-bold text-gray-900 dark:text-gray-100'>
                        Resources needed
                      </h2>
                      <div className='flex flex-col gap-1 sm:w-96'>
                        {data.requested_resources.map((resource) => (
                          <div
                            key={resource.id}
                            className='alert-sm alert-info rounded'>
                            <div className='flex-1'>
                              <label className='text-sm font-semibold uppercase'>
                                {resource.resource.name}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {data.time_sensitive && (
                  <div className=''>
                    <h2 className='text-lg font-bold text-gray-900 dark:text-gray-100'>
                      Time specified
                    </h2>
                    <div className='flex flex-col gap-1 sm:w-96'>
                      <div className='alert-sm alert-success rounded'>
                        <div className='flex-1'>
                          <label className='text-sm font-semibold'>
                            {new Date(data.start_time).toLocaleString()}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}


              {!data.request_completed &&
                currentUser &&
                data.request_claimed === false &&
                currentUser.id !== data.requester_id && (
                  <button onClick={offerHelp} className='btn btn-primary mt-10'>
                    <Send className='mr-2' /> Offer my help
                  </button>
                )}

              {data.request_completed === false &&
                currentUser &&
                data.request_claimed === true &&
                currentUser.id === data.requester_id && (
                  <button
                    onClick={markComplete}
                    className='btn btn-success mt-10'>
                    <Check className='mr-2' />
                    Mark completed
                  </button>
                )}

              {currentUser &&
                data.conversations.length > 0 &&
                (currentUser.id === data.requester_id ||
                  currentUser.id === data.helper_id) && (
                  <button
                    onClick={findConversation}
                    className='btn btn-primary mt-10'>
                    <MessageSquare className='mr-2' />
                    Conversation
                  </button>
                )}
            </div>
          )}
          {
            data && (
              <Comments id={data.id}/>
            )
          }
        </Container>
      </NavBar>
    </>
  );
}

export default RequestId;
