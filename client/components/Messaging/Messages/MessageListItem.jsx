import timeAgo from "../../../utils/timeAgo";

const MessageListItem = ({ body, timestamp }) => {
  const ago = timeAgo(new Date(timestamp));
  return (
    <div className="flex flex-col my-2 mx-1">
      <div className="">
        {body}
        <p className="text-2xs text-gray-400 text-right">{ago} ago</p>
      </div>
    </div>
  );
};

export default MessageListItem;
