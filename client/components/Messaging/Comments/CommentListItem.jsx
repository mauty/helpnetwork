import timeAgo from "../../../utils/timeAgo";

const CommentListItem = ({ key, avatar, first_name, last_name, timestamp, body }) => {

  const ago = timeAgo(new Date(timestamp));
  return (
    <div key={key} className='flex'>
    <div className='flex-shrink-0 mr-3'>
      <img
        className='mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10'
        src={avatar}
        alt=''
      />
    </div>
    <div className='flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed'>
      <strong>
        {first_name} {last_name}
      </strong>{' '}
      <span className='text-xs text-gray-400'>
        {timeAgo(new Date(timestamp)) + ' ago'}
      </span>
      <p className='text-sm'>{body}</p>
    </div>
  </div>
  );
};

export default CommentListItem;



