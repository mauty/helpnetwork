import timeAgo from '../../../utils/timeAgo';
import { useState, useRef } from 'react';
import { useMutation } from 'react-query';

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


const CommentPost = () => {
  const ago = timeAgo(new Date(timestamp));
  return (
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
          className='float-right bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg mr-2 hover:bg-gray-100'
          value='Post Comment'
          disabled={commentText === ''}
          onClick={postComment}>
          Post Comment
        </button>
        <button className='-z-2' ref={refreshButton} onClick={refetch}></button>
      </div>
    </div>
  </form>
  
  );
};

export default CommentPost;
