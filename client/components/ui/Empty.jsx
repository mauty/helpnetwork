import { Flag } from "react-feather";

export default function Empty() {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 text-gray-500 my-12">
      <Flag />
      <div className="font-bold">There&rsquo;s nothing here yet.</div>
    </div>
  );
}
