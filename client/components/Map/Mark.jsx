import { useState, useMemo } from "react";
import Link from "next/link";
import { Marker } from "react-map-gl";
import clsx from "clsx";

export default function Mark({
  longitude,
  latitude,
  index,
  description = "",
  id,
  isHovered = false,
  setHover,
  setLeave,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const desc = useMemo(() => description.slice(0, 90), [description]);

  return (
    <Marker
      latitude={latitude || -77.4}
      longitude={longitude || -77.4}
      offsetLeft={-20}
      offsetTop={-10}
    >
      <div
        className="flex gap-1"
        onMouseEnter={setHover}
        onMouseLeave={setLeave}
      >
        <button
          className={clsx(
            "z-10 h-10 w-10 p-1 mask mask-hexagon font-bold rounded-full  text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300",
            isHovered && "mask-hexagon-2  bg-yellow-400"
          )}
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {index}
        </button>
        {isOpen && (
          <div
            onMouseLeave={() => setIsOpen(false)}
            className="z-20 flex flex-col items-center w-40 h-48 bg-white rounded p-1 justify-between"
          >
            <div>
              <p className="text-sm border-b border-gray-300 text-center text-gray-800">
                Need help!
              </p>
              <p className="text-xs py-1 text-gray-800">{desc}...</p>
            </div>
            <Link href={`/requests/${id}`}>
              <span className="cursor-pointer text-xs underline text-blue-500">
                Learn more...
              </span>
            </Link>
          </div>
        )}
      </div>
    </Marker>
  );
}
