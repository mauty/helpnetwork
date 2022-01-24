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
        className={clsx(
          "max-w-sm sm:max-w-xl mx-1 rounded-3xl shadow-sm px-2 text-md mb-2",
          {
            "self-end bg-blue-600 text-white border border-indigo-600 ml-2":
              currentUser.id === message.sender_id,
            "self-start bg-slate-200 text-black border border-grey-600 mr-2":
              currentUser.id !== message.sender_id,
          }
        )}
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
        <header className="flex items-start justify-between px-2 bg-stone-200 p-4">
          <div className="flex-col">
            <h3 className="text-lg">Regarding Request:</h3>
            <p className="text-md font-bold">🗒 {request.category.name}</p>
            <p className="break-words text-sm">{request.request_details}</p>
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
