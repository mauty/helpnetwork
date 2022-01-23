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
    <div className="">
      {request && (
        <header className="bg-blue-500 bg-opacity-25 flex flex-row justify-between">
          <p>{request.category.name}</p>
          <p>{request.request_details}</p>
          {/* link to unique request page */}
          <Link href={`/requests/${request_id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </header>
      )}
      <div className="h-96 flex flex-col-reverse divider overflow-y-scroll">
        {listOfMessages}
      </div>
    </div>
  );
};

export default MessageList;
