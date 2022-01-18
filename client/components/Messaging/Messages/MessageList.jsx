import MessageListItem from "./MessageListItem";

const MessageList = (props) => {

  //call db for list of conversations for current user
  //map conversationListItem
  //sort by timestamp, prepend
  //link a conversation to a specific message
  
  //at intervals of 5 seconds refresh component state to update conversation
  //

  //sender or receiver state check

  //render conditional class depending on user_id

  const renderMyMessage = () => {
    
  }

  const receiveMessage = () => {
    
  }

  const updateMessages = () => {
    
  }

  return (
    <div className={`${userID === receiver_userID ? "text-right" : "text-left"}`}>
          {messages}
    </div>
  );
}

export default MessageList;