import Link from 'next/link';

const NavBar = (props) => {
  const { } = props;
  
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/points">
          <a>Points</a>
        </Link>
      </li>
      <li>
        <Link href="/requests/new">
          <a>New Request</a>
        </Link>
      </li>
      <li>
        <Link href="/messages">
          <a>Messages</a>
        </Link>
      </li>
      <li>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;