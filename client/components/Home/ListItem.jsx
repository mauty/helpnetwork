import clsx from "clsx";
import Link from "next/link";
import { useMemo } from "react";
import timeAgo from "../../utils/timeAgo";

export default function ListItem({
  id,
  index,
  data: {
    createdAt,
    category,
    start_time,
    time_sensitive,
    requester,
    requested_resources,
  },
  setHover,
  setLeave,
  isHovered,
}) {
  const ago = useMemo(() => timeAgo(new Date(createdAt)), [createdAt]);

  return (
    <Link href={`/requests/${id}`}>
      <li
        onMouseEnter={setHover}
        onMouseLeave={setLeave}
        className={clsx(
          "py-4 flex first:pt-0 last:pb-0 items-center hover:bg-yellow-50 p-2 rounded cursor-pointer",
          isHovered && "bg-indigo-100"
        )}
      >
        <div className="basis-7 flex justify-center mask mask-hexagon p-1 bg-blue-500">
          <p className="text-white">{index + 1}</p>
        </div>
        <div className="ml-3 w-full">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">{category.name}</p>
            <p className="text-xs">{ago} ago</p>
          </div>
          <p className="text-xs">{`${requester.first_name} ${requester.last_name}`}</p>
          {requested_resources &&
            requested_resources.map((resource) => (
              <div
                key={resource.id}
                className="text-2xs badge badge-primary badge-outline my-2"
              >
                {resource.resource.name}
              </div>
            ))}
          {time_sensitive && (
            <p className="text-xs">
              Time specified:{" "}
              {new Date(start_time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          )}
        </div>
      </li>
    </Link>
  );
}
