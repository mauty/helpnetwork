import { useState } from "react";
import Link from "next/link";
import { Marker } from "react-map-gl";

export default function Mark() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Marker
      latitude={37.8}
      longitude={-122.41}
      offsetLeft={-20}
      offsetTop={-10}
    >
      <div className="flex gap-1">
        <button
          className="h-10 w-10 p-1 mask mask-hexagon font-bold rounded-full  text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          +
        </button>
        {isOpen && (
          <div
            onMouseLeave={() => setIsOpen(false)}
            className="flex flex-col items-center w-40 h-48 bg-white rounded p-1 justify-between"
          >
            <div>
              <p className="text-sm border-b border-gray-300 text-center text-gray-800">
                Need help!
              </p>
              <p className="text-xs py-1 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ornare lacus at ex euismod fringilla. Aliquam ultrices fermentum
                ullamcorper...
              </p>
            </div>
            <Link href="#">
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
