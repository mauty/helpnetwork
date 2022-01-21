import ConversationListItem from "./ConversationListItem";
import Link from "next/link";


  //state management to go back and nav bar

  //render conversations based on length of db query return, if empty 

function ConversationList({data} ) {

  
    const listOfConversations = data.map((conversation) => {
     // console.log('Conversation List Item Body', conversation.messages);
      const id = conversation.id;
      console.log('Datakey conversation', conversation);
      return (
        <>
          <Link href={`/messages/${conversation.id}`} >
            <a class="btn btn-ghost btn-lg rounded-btn">
              <ConversationListItem
            key={conversation.id}
            body={conversation.messages[0]?.body}
            timestamp={conversation.messages[0]?.timestamp}
            sender_id={conversation.messages[0]?.sender_id}
            name={conversation.sender.first_name} 
            // avatar={conversation.sender.imgURL}
            /></a>
          </Link>
        </>
      );
    });
  
   //TODO: add state logic for if conversation is empty and if a new message is received
  
  return (
    // <div className="">
    //   <div className="h-96 flex flex-col overflow-y-scroll border border-indigo-600">
        
    //   </div>
    // </div>
    <div className="overflow-x-auto">
    <div className=" ">
      <div>
      {listOfConversations}
      </div>
    </div>
    </div>
  );
}

export default ConversationList;
