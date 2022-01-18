import Link from "next/link";
import { useMemo } from "react";
import timeAgo from "../../utils/timeAgo";

export default function ListItem({ id, index, category, name, time, createdAt }) {
  const ago = useMemo(() => timeAgo(new Date(createdAt)), [createdAt]);

  return (
    <Link href={`/requests/${id}`}>
      <li className="py-4 flex first:pt-0 last:pb-0 items-center hover:bg-gray-100 p-2 rounded cursor-pointer">
        <span>{index}</span>
        <div className="ml-3 w-full">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">{category}</p>
            <p className="text-xs">{ago} ago</p>
          </div>
          <p className="text-xs">{name}</p>
          {
            time && time.isSensitive && <p className="text-xs">{useMemo(new Date(time.start_time).toLocaleDateString(), [time.start_time])}</p>
          }
        </div>
      </li>
    </Link>
  );
}