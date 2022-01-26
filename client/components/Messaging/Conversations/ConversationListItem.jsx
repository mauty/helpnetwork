import Link from "next/link";
import timeAgo from "../../../utils/timeAgo";

const ConversationListItem = (props) => {
  const { name, body, avatar, timestamp, id } = props;

  const ago = timeAgo(new Date(timestamp));
  return (
    <Link href={`/messages/${id}`}>
      <div key={id} className="mb-2 p-2 shadow rounded-lg">
        <button className="flex w-full border-b-3 border-slate-500/2 hover:bg-stone-100">
          <div className="avatar w-1/6">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-14 h-14 m-2">
              <img src={avatar}></img>
            </div>
          </div>
          <div className="flex flex-col self-center mx-4 w-2/4">
            <div className="font-bold text-left">{name}</div>
            <p className="text-sm opacity-50 text-left break-words">{body}</p>
          </div>
          <div className="text-xs text-gray-400 text-right mx-2 w-1/5">
            {ago + ' ago'}
          </div>
        </button>
      </div>
    </Link>
  );
};

export default ConversationListItem;
