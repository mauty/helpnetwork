import Link from "next/link";

const NavBar = (props) => {
  const {} = props;

  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box inset-x-0 bottom-0 h-16 ...">
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch lg:flex">
          <Link href="/">
            <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
          </Link>
          <Link href="/points">
            <a className="btn btn-ghost btn-sm rounded-btn">Points</a>
          </Link>
          <Link href="/requests/new">
            <a className="btn btn-ghost btn-sm rounded-btn">New Request</a>
          </Link>
          <Link href="/messages">
            <a className="btn btn-ghost btn-sm rounded-btn">Messages</a>
          </Link>
          <Link href="/profile">
            <a className="btn btn-ghost btn-sm rounded-btn">Profile</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
