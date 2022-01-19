import ConversationListItem from "./ConversationListItem";
import Link from "next/link";

  //call db for list of conversations for current user
  //map conversationListItem
  //sort by timestamp, prepend
  //link a conversation to a specific message
  
  //flow: 
    //Press button to except request
    //create conversation with default first message
    //transition from conversation to mesage page

  //state management to go back and nav bar

  //functions
    //start a new conversation, prepend new conversation to top of stack
    //render conversations
    //transition from conversation page dynamic message page


  //loading state for whenthe data is coming in


  //render conversations based on length of db query return, if empty 

  
  // const renderConversations = (conversations) {
    
  // }


  //call db for list of conversations for current user
  //map conversationListItem
  //sort by timestamp, prepend
  //link a conversation to a specific message


function ConversationList({conversations = []}) {
    
    const listOfConversations = conversations.map((conversation) => {
      return (
        <ConversationListItem
          key={conversation.id}
          id={conversation.id}
          body={conversation.messages[0].body}
          timestamp={conversation.messages[0].timestamp}
          sender_id={conversation.messages[0].sender_id}
          //  name={conversation["person"].first_name}
          // avatar={conversation["person"].imgURL}
        />
      );
    });
    //requester Name
    //requester img
    //message body 
    //message.time
    
  
  return (
    <div className="">
      <div className="h-96 flex flex-col overflow-y-scroll">
        {listOfConversations}
      </div>
    </div>
  );
}

export default ConversationList;
