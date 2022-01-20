import timeAgo from "../../../utils/timeAgo";
const ConversationListItem = (props) => {
  const { name, body, timestamp } = props;

  const ago = timeAgo(new Date(timestamp));
  return (



<tr>
      <td>
        <div className="flex items-center space-x-3">
        <div className="avatar placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-14 h-14">
          <span>AA</span>
        </div>
      </div> 
          <div>
            <div className="font-bold text-left">{name}</div>
            <div className="text-sm opacity-50">{body}</div>
          </div>
        </div>
      </td>
      <td className="text-2xs text-gray-400 text-right">{ago} ago</td>
    </tr>
  );
}

export default ConversationListItem;