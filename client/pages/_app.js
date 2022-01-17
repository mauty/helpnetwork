import Head from "next/head";
import '../styles/globals.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <title>Help Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
