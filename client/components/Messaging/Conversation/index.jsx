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

  
  const renderConversations = (conversations) {
    
  }
function Conversation(props) {
	//const conversations = props.days;
	//const listConversations = conversations.map((conversation) => {
    
		return (
			<ConversationListItem
				//key={conversation.id}
				name= "Amir"
        avatar={props.id}
        time={}
        body={props.message}
			/>
		);
	//});
//	return <ul>{listConversations}</ul>;
}

export default Conversation;