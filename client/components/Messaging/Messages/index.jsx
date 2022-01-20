import MessageListItem from "./MessageListItem";
import { useContext } from "react";
import { UserContext } from "../../../pages/_app";
import Link from "next/link";
const MessageList = ({ messages = [], request, request_id }) => {

  const { currentUser } = useContext(UserContext);

  console.log('THE CURRENT USER >>>>>', currentUser)
  const listOfMessages = messages.map((message) => {

    return (

      <div className={`${currentUser !== message.sender_id ? "justify-right" : "justify-left"}`}>
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
      		<header className='bg-blue-500 bg-opacity-25 flex flex-row justify-between'>
					<p>{request.category.name}</p>
					<p>{request.request_details}</p>
					{/* link to unique request page */}
					<Link href={`/requests/${request_id}`}>
					<button className='btn btn-primary'>See Details</button>
					</Link>
				</header>
      <div className="h-96 flex flex-col-reverse  items-end divider overflow-y-scroll">
        {listOfMessages}
      </div>
    </div>
  );
};

export default MessageList;
