import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../_app';
import { LogOut } from 'react-feather';

import Container from "../../components/ui/Container";
import Head from 'next/head';

/*****************************************
 * We are aware that this is not a proper implementation of Auth
 * This is for demo purposes only
 *****************************************/

export default function Logout() {
  const router = useRouter();
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setCurrentUser(null);
      router.push('/auth/login');
    }, 1000);
  }, [])

  return (
    <>
      <Head>
        <title>helpnetwork | logout...</title>
      </Head>
      <Container>
        <div className='flex flex-col justify-center items-center p-2 h-screen'>
          <LogOut/>
          <p className='font-semibold text-2xl'>
            Logging out...
          </p>
        </div>
      </Container>
    </>
  )
}