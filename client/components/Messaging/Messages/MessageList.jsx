import MessageListItem from "./MessageListItem";
const MessageList = (props) => {

  //call db for list of conversations for current user
  //map conversationListItem
  //sort by timestamp, prepend
  //link a conversation to a specific message
  
  //at intervals of 5 seconds refresh component state to update conversation
  //


  const postMessage = () => {
  
  }

  const renderMyMessage = () => {
    
  }

  const receiveMessage = () => {
    
  }


  const messages = [<div className="flex justify-center items-center mx-2 margin-top: 20px w-4/5 md:w-4/5 lg:w-4/5">    
      <MessageListItem></MessageListItem>
    </div>, <div className="flex justify-center items-center mx-2 margin-top: 20px w-4/5 md:w-4/5 lg:w-4/5">    
      <MessageListItem></MessageListItem>
    </div>, <div className="flex justify-center items-center mx-2 margin-top: 20px w-4/5 md:w-4/5 lg:w-4/5">    
      <MessageListItem></MessageListItem>
    </div>];

const newArray = messages.map(
  (arrayItem) => arrayItem
);
    
  return (
    <div>
          {messages}
    </div>
  );
}

export default MessageList;