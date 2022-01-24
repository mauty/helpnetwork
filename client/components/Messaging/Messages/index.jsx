import MessageListItem from "./MessageListItem";
import { useContext } from "react";
import { UserContext } from "../../../pages/_app";
import Link from "next/link";
import clsx from "clsx";

const MessageList = ({ messages = [], request, request_id }) => {
  const { currentUser } = useContext(UserContext);

  console.log("THE CURRENT USER >>>>>", currentUser);
  const listOfMessages = messages.map((message) => {
    return (
      <div
        key={message.id}
        className={clsx({
          "self-end bg-blue-600 text-white border border-indigo-600 rounded-full shadow-sm py-1 px-4 text-md break-all ml-2 mb-1":
            currentUser.id === message.sender_id,
          "self-start bg-slate-200 text-black border border-grey-600 rounded-full shadow-sm py-1 px-4 text-md break-all mr-2 mb-1":
            currentUser.id !== message.sender_id,
        })}
      >
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
    <>
      {request && (
        <header className="flex items-start justify-between px-2">
          <div className="flex-col">
            <p className="text-md font-bold">🗒 {request.category.name}</p>
            <p className="break-all text-sm">{request.request_details}</p>
          </div>
          {/* link to unique request page */}
          <Link href={`/requests/${request_id}`}>
            <button className="btn btn-primary btn-sm">Details</button>
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
