import timeAgo from "../../../utils/timeAgo";
const ConversationListItem = (props) => {
  const { messages } = props;

  const ago = timeAgo(new Date(messages.timestamp));
  return (



        <div className="flex">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-14 h-14">
              <span>AA</span>
            </div>
          </div> 
          <div className="flex flex-col">
            <div className="font-bold text-left">{messages.name}</div>
            <div className="text-sm opacity-50">{messages.body}</div>
          </div>
          <div className="text-2xs text-gray-400 text-right">
            {ago} ago
          </div>
        </div>

  );
}

export default ConversationListItem;