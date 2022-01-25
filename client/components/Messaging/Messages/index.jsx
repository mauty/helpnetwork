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
        <header className="flex items-start justify-between px-2 bg-stone-200 rounded-md p-4">
          <div className="flex-col">
            <h3 className="text-lg">Regarding Request:</h3>
            <div className="flex gap-2">
              <img src={request.category.image} />
              <p className="text-md font-bold">{request.category.name}</p>
            </div>
            <p className="break-words text-sm">{request.request_details}</p>
          </div>
          {/* link to unique request page */}
          <Link href={`/requests/${request_id}`}>
            <button className="btn btn-outline btn-sm">Details</button>
          </Link>
        </header>
      )}
      <div className="h-96 flex flex-col-reverse divider overflow-y-scroll justify-items-end">
        {listOfMessages}
      </div>
    </>
  );
};

export default MessageList;
