import MessageListItem from "./MessageListItem";

const MessageList = ({ messages = [] }) => {
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
    <div className="">
      <div className="h-96 flex flex-col-reverse jutify-end items-end divider overflow-y-scroll">
        {listOfMessages}
      </div>
    </div>
  );
};

export default MessageList;
