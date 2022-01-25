import ConversationListItem from "./ConversationListItem";

//state management to go back and nav bar

//render conversations based on length of db query return, if empty

//render conversations based on length of db query return, if empty

function ConversationList({ convos, currentUser }) {
  return (
    <div className="overflow-x-auto flex flex-col mb-40">
      {convos &&
        convos.map((conversation) => {
          const user =
            conversation.sender.id === currentUser.id
              ? conversation.receiver
              : conversation.sender;

          return (
            <ConversationListItem
              key={conversation.id}
              id={conversation.id}
              body={conversation.messages[0]?.body}
              timestamp={conversation.messages[0]?.timestamp}
              sender_id={conversation.messages[0]?.sender_id}
              name={`${user.first_name} ${user.last_name}`}
              avatar={user.imgURL}
            />
          );
        })}
    </div>
  );
}

export default ConversationList;
