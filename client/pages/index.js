import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Header from  '../components/Header';
import NavBar from  '../components/NavBar';
import Map from '../components/Map';
import Container from '../components/ui/Container';

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <Map />
      </Container>
    </>

  )
}
