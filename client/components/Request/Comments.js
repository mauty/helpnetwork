import React, {useState, useRef, useContext} from 'react';
import CommentList from '../Messaging/Comments';
import ErrorMessage from '../ui/ErrorMessage';
import Shimmer from '../ui/Shimmer';
import useAxios from '../../hooks/useAxios';
import { useQuery, useMutation } from 'react-query';
import { UserContext } from '../../pages/_app';

export default function Comments({ id }) {
  const { currentUser } = useContext(UserContext);

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
      commentBody: commentText,
      sender_id: currentUser.id,
      request_id: id,
    });
    setText('');
    setTimeout(() => {
      refreshButton.current.click();
    }, 1500);
  }


  return(
    <>
      {
        currentUser && (
          <div id="comments-container" className='flex mx-auto items-center border rounded-lg sm:px-6 sm:py-4 leading-relaxed'>
            <div className='w-full max-w-xl bg-white rounded-lg px-4 pt-2'>
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
            </div>
          </div>
        )
      }
      {
        commentLoading && (
          <div className="p-2">
            <Shimmer/>
          </div>
        )
      }
      {
        commentError && (
          <div className="p-2">
            <ErrorMessage/>
          </div>
        )
      }
      {
        commentData && (
          <CommentList commentsData={commentData} />
        )
      }
    </>
  )
}
