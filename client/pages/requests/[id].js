import Link from 'next/link';
import { useContext, useState, useRef } from 'react';
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
import CommentList from '../../components/Messaging/Comments';
import Map from '../../components/Map';
import useViewport from '../../hooks/useViewport';
import Mark from '../../components/Map/Mark';

export const getServerSideProps = async (ctx) => {
  // TODO: Get the data from the server here using ctx.params.id
  // TODO: Then return the component Profile with the data
  return { props: { id: ctx.params.id } };
};

function RequestId({ id }) {
  const router = useRouter();
  const { currentUser } = useContext(UserContext);
  const { viewport, setViewport} = useViewport();

  const mutation = useMutation((newHelp) =>
    useAxios({ url: `/request/help/${id}`, method: 'post', params: newHelp }),
  );

  const mutationComplete = useMutation(() =>
    useAxios({ url: `/request/complete/${id}`, method: 'post' }),
  );

  const { isLoading, isError, data } = useQuery('request', () =>
    useAxios({ url: `/request/${id}`, method: 'get' }), {
      onSuccess: (data) => {
        setViewport({ longitude: data.long, latitude: data.lat, zoom: 16 });
      }
    }
  );

  /*Comments query */
  const {
    isLoading: commentLoading,
    isError: commentError,
    data: commentData,
    refetch,
  } = useQuery('comments', () =>
    useAxios({ url: `/comments/${id}`, method: 'get' }),
  );

  const refreshButton = useRef(null);

  const [commentText, setText] = useState('');

  const commentMutation = useMutation((newComment) =>
    useAxios({
      url: `/comments/${id}`,
      method: 'post',
      params: newComment,
    }),
  );

  function postComment() {
    commentMutation.mutate({
      // avatar:
      commentBody: commentText,
      sender_id: currentUser.id,
      request_id: id,
    });
    setText('');
    setTimeout(() => {
      refreshButton.current.click();
      console.log('Refresh comments ', refreshButton.current);
    }, 1500);
  }

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
          router.push(`/`);
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
          {data && data.request_claimed && (
            <Message
              message={`${
                currentUser && data.helper.id === currentUser.id
                  ? 'You are'
                  : 'Someone is'
              } already helping with this request.`}
            />
          )}
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
                <Map viewport={viewport} setViewport={setViewport} isGeoLocate={false}>
                  <Mark longitude={data.long} latitude={data.lat}/>
                </Map>
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
          <div id="comments-container" className='flex mx-auto items-center border rounded-lg sm:px-6 sm:py-4 leading-relaxed'>
            <form className='w-full max-w-xl bg-white rounded-lg px-4 pt-2'>
              <div className='flex flex-col -mx-3 mb-6'>
                <strong className='px-4 pt-3 pb-2 text-gray-800 text-lg'>
                  Add a new comment
                </strong>
                <div className='flex flex-col'>
                  <div className='w-full md:w-full px-3 mb-2 mt-2'>
                    <textarea
                      className='bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'
                      name='body'
                      placeholder='Write something...'
                      onChange={(event) => setText(event.target.value)}
                      value={commentText}
                      required></textarea>
                  </div>
                  {/* <!-- comment form --> */}
                  <button
                    type='submit'
                    className='btn btn-secondary'
                    value='Post Comment'
                    disabled={commentText === ''}
                    onClick={postComment}>
                    Post Comment
                  </button>
                  <button
                    className='-z-2'
                    ref={refreshButton}
                    onClick={refetch}></button>
                </div>
              </div>
            </form>{' '}
          </div>
          <CommentList commentsData={commentData} />
        </Container>
      </NavBar>
    </>
  );
}

export default RequestId;
