import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
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

  )
}
