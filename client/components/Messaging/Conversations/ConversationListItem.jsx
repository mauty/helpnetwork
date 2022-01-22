import timeAgo from "../../../utils/timeAgo";
const ConversationListItem = (props) => {
  const { name, body, timestamp } = props;

  const ago = timeAgo(new Date(timestamp));
  return (
    <div className="flex w-full justify-between border-b-3 border-slate-500/2 shadow-md">
      <div className="avatar placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-14 h-14 m-2">
          <span>AA</span>
        </div>
      </div> 
      <div className="flex flex-col mx-4">
        <div className="font-bold text-left">{name}</div>
        <div className="text-sm opacity-50">{body}</div>
      </div>
      <div className="text-xs text-gray-400 text-right mx-2">
        {ago} ago
      </div>
    </div>

  );
}

export default ConversationListItem;