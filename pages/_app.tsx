import '../styles/vendor/nprogress';
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FC } from 'react'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'
// import Layout from '../components/Layout/Layout'
import { theme } from '../styles/theme';
import { Router } from 'next/router';
import GlobalStyle from '../styles/globalStyle';


NProgress.configure({ showSpinner: true });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const NOOP: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {

  const Layout = (Component as any).Layout || NOOP;

  return (
    <React.Fragment>
      <Head>
        <title>FunctionalCode</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout pageProps={pageProps}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  )
}
export default MyApp
