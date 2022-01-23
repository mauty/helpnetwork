import React from 'react';
import timeAgo from '../../utils/timeAgo';

export default function ProfileReviewItem({ data }) {
  return (
    <div className="flex shadow-md py-4 px-1">
      <div className="avatar">
      <div className="bg-neutral-focus text-neutral-content rounded-lg w-14 h-14 m-2">
        <img src={data.reviewer.imgURL}></img>
      </div>
      </div>
      <div className="flex flex-col justify-center w-full">
          <div className="flex justify-between">
            <label className='text-md font-semibold'>{data.reviewer.first_name}</label>
            <p className="font-medium text-xs text-gray-600">{timeAgo(new Date(data.createdAt))} ago</p>
          </div>
          <div className="rating rating-xs">
            {
              [1, 2, 3, 4, 5].map(num => (
                <input key={`UIOnly${num}`} type="radio" checked={data.rating === num} className="mask mask-heart bg-error" disabled/>
              ))
            }
          </div>
          <p className='text-xs break-all pt-2 w-5/6'>{data.body}</p>
      </div>
    </div>
  );
}
