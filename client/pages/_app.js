import Head from "next/head";
import '../styles/globals.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { createContext, useState } from "react";
import { useCookies } from 'react-cookie';

const queryClient = new QueryClient()

export const UserContext = createContext();

const MyApp = ({ Component, pageProps }) => {
  const [cookies, setCookie, removeCookie] = useCookies('user');
  const [currentUser, setCurrentUser] = useState(cookies.user || null);

  function setNewUser(user) {
    if(user === null) {
      removeCookie('user');
    } else {
      setCookie('user', user);
      setCurrentUser(user);
    }
  }

  return (
    <>
      <Head>
        <title>Help Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{ currentUser, setCurrentUser: setNewUser }}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
