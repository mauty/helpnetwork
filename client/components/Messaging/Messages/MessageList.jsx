import MessageListItem from "./MessageListItem";

const MessageList = ({messages = []}) => {

  //call db for list of conversations for current user
  //map conversationListItem
  //sort by timestamp, prepend
  //link a conversation to a specific message
  
  //at intervals of 5 seconds refresh component state to update conversation
  //

  //sender or receiver state check

  //render conditional class depending on user_id

  // const renderMyMessage = () => {
    
  // }

  // const receiveMessage = () => {
    
  // }

  // const updateMessages = () => {
    
  // }
  const listOfMessages = messages.map((message) => {
		return (
			<MessageListItem
				key={message.id}
				id={message.id}
				body={message.body}
				timestamp={message.timestamp}
			/>
		);
	});

  return (
    /*
    <div className={`${userID === receiver_userID ? "text-right" : "text-left"}`}>
          {messages}
    </div>
    */
    //list of messages
    <section>
      <ul className='message_list'>{listOfMessages}</ul>
    </section>

  );
}

export default MessageList;