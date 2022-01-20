import timeAgo from "../../../utils/timeAgo";
const ConversationListItem = (props) => {
  const { name, body, timestamp } = props;

  const ago = timeAgo(new Date(timestamp));
  return (
    <div className="conversation-item" className="flex justify-center items-center px-3  mx-2 margin-top: 20px bg-grey border border-indigo-600 " >
      <div className="avatar placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-16 h-16">
          <span>AA</span>
        </div>
      </div> 
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h3 className="text-center sm:text-left">{name}</h3>
          <p className="text-center sm:text-left">{ago} ago</p>
        </div>
        <div className="text-center sm:text-left">
          {/*Add max characters amount to show in a message bubble.*/}
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}

export default ConversationListItem;