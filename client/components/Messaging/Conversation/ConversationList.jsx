import ConversationListItem from "./ConversationListItem";
const ConversationList = (props) => {
  const { } = props;
  

  //call db for list of conversations for current user
  //map conversationListItem
  //sort by timestamp, prepend
  //link a conversation to a specific message
  

  const conversations = [<div className="flex justify-center items-center mx-2 margin-top: 20px w-4/5 md:w-4/5 lg:w-4/5">    
    <ConversationListItem></ConversationListItem>
    </div>, <div className="flex justify-center items-center mx-2 margin-top: 20px w-4/5 md:w-4/5 lg:w-4/5">    
      <ConversationListItem></ConversationListItem>
    </div>, <div className="flex justify-center items-center mx-2 margin-top: 20px w-4/5 md:w-4/5 lg:w-4/5">    
      <ConversationListItem></ConversationListItem>
    </div>];

const newArray = conversations.map(
  (arrayItem, arrayItemIndex, wholeArray) => arrayItem
);
  
  return (
    <div>{newArray}</div>
    
  );
}

export default ConversationList;