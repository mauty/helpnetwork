import React from "react";
import Link from "next/link";

export default function ListItem({ data }) {
  return (
    <tr>
      <th></th>
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
          <div>
            <div className="font-bold">{data.first_name}</div>
            <Link href={`/profile/${data.id}`}>
              <div className="text-sm opacity-50 link">View Profile</div>
            </Link>
          </div>
        </div>
      </td>
      {
        <td className="text-orange-600">
          {data.points_value ? data.points_value : "0"}
        </td>
      }
    </tr>
  );
}
