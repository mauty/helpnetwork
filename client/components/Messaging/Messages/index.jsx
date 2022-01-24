import MessageListItem from "./MessageListItem";
import { useContext } from "react";
import { UserContext } from "../../../pages/_app";
import Link from "next/link";
import clsx from "clsx";

const MessageList = ({ messages = [], request, request_id }) => {
  const { currentUser } = useContext(UserContext);

  const listOfMessages = messages.map((message) => {
    return (
      <MessageListItem
        key={message.id}
        id={message.id}
        body={message.body}
        timestamp={message.timestamp}
        sender_id={message.sender_id}
        currentUser={currentUser}
      />
    );
  });

  return (
    <>
      {request && (
        <header className="flex items-center justify-between px-2">
          <div className="flex-col">
            <p className="text-md font-bold">🗒 {request.category.name}</p>
            <p className="break-words text-sm">{request.request_details}</p>
          </div>
          {/* link to unique request page */}
          <Link href={`/requests/${request_id}`}>
            <button className="btn btn-outline btn-sm">Details</button>
          </Link>
        </header>
      )}
      <div className="h-96 flex flex-col-reverse divider overflow-y-scroll">
        {listOfMessages}
      </div>
    </>
  );
};

export default MessageList;
