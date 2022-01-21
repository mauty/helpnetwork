import Link from "next/link";
import clsx from "clsx";
import { Marker } from "react-map-gl";

export default function MarkFace({
  longitude,
  latitude,
  imgUrl,
  id,
  points,
  isHovered,
}) {
  return (
    <Marker
      latitude={latitude || -77.4}
      longitude={longitude || -77.4}
      offsetLeft={-20}
      offsetTop={-10}
    >
      <div className="flex flex-col items-center">
        <Link href={`/profile/${id}`}>
          <div
            className={clsx(
              "z-10 border-4 border-indigo-500 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
              isHovered && "border-yellow-500 border-8"
            )}
          >
            <img
              className="h-12 w-12 rounded-full"
              src={
                imgUrl ||
                "https://daisyui.com/tailwind-css-component-profile-2@56w.png"
              }
              alt="Profile image"
            />
          </div>
        </Link>
        <p
          className={clsx(
            "font-medium text-indigo-600",
            isHovered && "text-yellow-500 font-semibold text-xl"
          )}
        >
          {points}
        </p>
      </div>
    </Marker>
  );
}
