import MessageListItem from "./MessageListItem";
import { useContext } from "react";
import { UserContext } from "../../../pages/_app";
const MessageList = ({ messages = [] }) => {

  const { currentUser } = useContext(UserContext);

  const listOfMessages = messages.map((message) => {

    return (
      <div className={`${currentUser === message.sender_id ? "justify-right" : "justify-left"}`}>
          <MessageListItem
            key={message.id}
            id={message.id}
            body={message.body}
            timestamp={message.timestamp}
            sender_id={message.sender_id}
          />
      </div>
    );
  });

  return (
    <div className="">
      <div className="h-96 flex flex-col-reverse  items-end divider overflow-y-scroll">
        {listOfMessages}
      </div>
    </div>
  );
};

export default MessageList;
