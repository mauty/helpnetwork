import Link from 'next/link';

const NavBar = (props) => {
  const { } = props;
  
  return (
    <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box inset-x-0 bottom-0 h-16 ...">
      <div class="flex-1 px-2 mx-2">
        <div class="items-stretch lg:flex">
          <Link href="/">
            <a class="btn btn-ghost btn-sm rounded-btn">Home</a>
          </Link>
          <Link href="/points">
            <a class="btn btn-ghost btn-sm rounded-btn">Points</a>
          </Link>
          <Link href="/requests/new">
            <a class="btn btn-ghost btn-sm rounded-btn">New Request</a>
          </Link>
          <Link href="/messages">
            <a class="btn btn-ghost btn-sm rounded-btn">Messages</a>
          </Link>
          <Link href="/profile">
            <a class="btn btn-ghost btn-sm rounded-btn">Profile</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;