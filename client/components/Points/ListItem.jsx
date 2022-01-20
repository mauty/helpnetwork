import React from "react";

export default function ListItem({ data }) {
  return (
    <tr>
      <th>1</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-12 h-12 mask mask-squircle">
              <img
                src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td className="text-orange-600">200</td>
    </tr>
  );
}
