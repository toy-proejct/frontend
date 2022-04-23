import type { AppProps } from "next/app";
import Head from "next/head";
import { useRef } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "../styles/GlobalStyle";
import { ReactQueryDevtools } from 'react-query/devtools';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  if(!queryClientRef.current){
    queryClientRef.current = new QueryClient();
  }

  return (
  <>
  <QueryClientProvider client={queryClientRef.current}>
    <Hydrate state={pageProps.dehydratedState}>
      <Head>
            <meta charSet="utf-8" />
            <title>ValueBoard</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </Hydrate>
  </QueryClientProvider>
  </>
  )
}

export default MyApp;
