import type { AppProps } from "next/app"
import Head from "next/head"
import { ReactElement, ReactNode, useRef } from "react"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import theme from "src/styles/theme"
import { wrapper } from "src/redux/store"
import { NextPage } from "next"
import Layout from "src/components/layout/app/Layout"

declare global {
  interface Window {
    naver: any
  }
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const queryClientRef = useRef<QueryClient>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <meta charSet="utf-8" />
          <title>ValueBoard</title>
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <div id="root-modal"></div>
          {Component.getLayout ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default wrapper.withRedux(MyApp)
