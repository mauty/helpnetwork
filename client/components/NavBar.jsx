import Link from 'next/link';

const NavBar = (props) => {
  const { } = props;
  
  return (
    <ul>
      <li class="mt-8">
        <Link href="/">
          <a><button class="btn btn-primary btn-active">Home</button></a>
        </Link>
      </li>
      <li class="mt-8">
        <Link href="/points">
          <a><button class="btn btn-md">Points</button></a>
        </Link>
      </li>
      <li class="mt-8">
        <Link href="/requests/new">
          <a><button class="btn btn-primary">New Request</button></a>
        </Link>
      </li>
      <li class="mt-8">
        <Link href="/messages">
          <a><button class="btn btn-md">Messages</button></a>
        </Link>
      </li>
      <li class="mt-8">
        <Link href="/profile">
          <a><button class="btn btn-md">Profile</button></a>
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;