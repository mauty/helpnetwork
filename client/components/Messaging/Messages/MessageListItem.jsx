import timeAgo from "../../../utils/timeAgo";
import clsx from "clsx";

const MessageListItem = ({ body, timestamp, id, sender_id, currentUser }) => {
  const ago = timeAgo(new Date(timestamp));
  return (
    <div
      key={id}
      className={clsx(
        "max-w-sm sm:max-w-xl mx-1 rounded-3xl shadow-sm px-2 text-md mb-2",
        {
          "self-end bg-gradient-to-bl from-blue-600 to-blue-500 text-gray-100 border ml-2":
            currentUser.id === sender_id,
          "self-start bg-slate-200 text-black border border-grey-600 mr-2":
            currentUser.id !== sender_id,
        }
      )}
    >
      <div className="flex flex-col my-2 mx-1">
        <div className="break-words">
          {body}
          <p
            className={clsx(
              "text-2xs text-gray-400",
              sender_id !== currentUser.id ? "text-left" : "text-right"
            )}
          >
            {ago} ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageListItem;
