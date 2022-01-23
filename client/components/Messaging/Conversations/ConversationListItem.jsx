import timeAgo from "../../../utils/timeAgo";
const ConversationListItem = (props) => {
  const { name, body, avatar, timestamp } = props;

  const ago = timeAgo(new Date(timestamp));
  return (
    <>
      <div className="avatar w-1/6">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-14 h-14 m-2">
          <img src={avatar}></img>
        </div>
      </div>
      <div className="flex flex-col self-center mx-4 w-2/3">
        <div className="font-bold text-left">{name}</div>
        <div className="text-sm opacity-50 text-left">{body}</div>
      </div>
      <div className="text-xs text-gray-400 text-right mx-2 w-1/6">
        {ago} ago
      </div>
    </>
  );
};

export default ConversationListItem;
