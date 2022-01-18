import Head from "next/head";
import '../styles/globals.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { createContext, useState } from "react";

const queryClient = new QueryClient()

export const UserContext = createContext();

const MyApp = ({ Component, pageProps }) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
      <Head>
        <title>Help Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
