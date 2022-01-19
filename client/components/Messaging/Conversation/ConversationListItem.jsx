const ConversationListItem = (props) => {
  const { name, avatar, time, body } = props;
  
  //add props
  //add css

  return (
    <div className="conversation-item" className="flex  justify-center items-center px-3  mx-2 margin-top: 20px bg-grey border border-indigo-600 " >
      {/* <div className="avatar placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-16 h-16">
          <span>{avatar}</span>
        </div>
      </div>  */}
      <div className="conversation-info" className="flex flex-col">
        <div className="consversation-header" className="flex justify-between">
          <h3 className="requester-name" className="text-center sm:text-left">{name}</h3>
          <p className="conversation-time" className="text-center sm:text-left">{time}</p>
        </div>
        <div className="conversation-message" className="text-center sm:text-left">
          {/*Display latest message from requester*/}
          {/*Add max characters amount to show in a message bubble.*/}
          <p>{body} </p>
        </div>
      </div>
    </div>
  );
}


export default ConversationListItem;