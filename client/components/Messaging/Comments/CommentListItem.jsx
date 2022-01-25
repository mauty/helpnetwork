import timeAgo from "../../../utils/timeAgo";

const CommentListItem = ({
  key,
  avatar,
  first_name,
  last_name,
  timestamp,
  body,
}) => {

  const formatAMPM = (date) => {
    let day = date.getDay();
    let month = date.getMonth();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    let strTime = monthNames[month] + ' ' + day + ', ' + hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
  return (
    <div key={key} className="flex">
      <div className="flex-shrink-0 mr-3">
        <img
          className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
          src={avatar}
          alt=""
        />
      </div>
      <div className="flex-1 items-center border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed w-7/12">
        <div className="flex items-center gap-2">
          <strong>
            {first_name} {last_name}
          </strong>{" "}
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
