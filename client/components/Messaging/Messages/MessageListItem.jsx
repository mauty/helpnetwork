import timeAgo from "../../../utils/timeAgo";

const MessageListItem = ({ body, timestamp }) => {
  const ago = timeAgo(new Date(timestamp));
  //function to detect which user

  return (
    <div className="flex flex-col my-2 mx-1">
      <div className="rounded-full bg-blue-600 shadow-sm text-white py-1 px-4 border border-indigo-600 text-md">
        {body}
        <p className="text-2xs text-gray-400 text-right">{ago} ago</p>
      </div>
    </div>
  );
};

export default MessageListItem;
