import React from 'react';

export default function MapCollapseTab({ children, name }) {
  return (
    <li>
      <div className="collapse w-full rounded-box collapse-arrow">
        <input type="checkbox"/>
        <div className="collapse-title text-sm">
          {name}
        </div>
        <div className="collapse-content">
          {children}
        </div>
      </div>
    </li>
  );
}
