import React from "react";
import clsx from "clsx";
import Link from "next/link";

export default function ListItem({ data, setHover, setLeave, isHovered }) {
  return (
    <tr onMouseMoveCapture={setHover} onMouseLeave={setLeave}>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-12 h-12 mask mask-squircle">
              <img
                src={
                  data.imgURL ||
                  "https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                }
                alt="Avatar"
              />
            </div>
          </div>
          <div className={clsx(isHovered && "text-yellow-500 text-xl")}>
            <div className="font-bold">{data.first_name}</div>
            <Link href={`/profile/${data.id}`}>
              <div className="text-sm opacity-50 link">View Profile</div>
            </Link>
          </div>
        </div>
      </td>
      {<td className="text-orange-600">{data.points ? data.points : "0"}</td>}
    </tr>
  );
}
