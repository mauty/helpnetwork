import formatAMPM from "../../../utils/formatAMPM";
import Link from "next/link";

const CommentListItem = ({
  avatar,
  first_name,
  last_name,
  timestamp,
  body,
  personId,
}) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-3">
        <img
          className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
          src={avatar}
          alt=""
        />
      </div>
      <div className="flex-1 items-center border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed w-7/12">
        <div className="flex items-center gap-2">
          <Link href={`/profile/${personId}`}>
            <p className="font-semibold hover:link">
              {first_name} {last_name}
            </p>
          </Link>
          <span className="text-xs text-gray-400">
            {formatAMPM(new Date(timestamp))}
          </span>
        </div>
        <p className="text-sm break-words">{body}</p>
      </div>
    </div>
  );
};

export default CommentListItem;
