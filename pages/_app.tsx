import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FC } from 'react'
import NProgress from 'nprogress'
import { Router } from 'next/router';
import '../styles/globals.css'
import '../styles/globalStyle.scss'

NProgress.configure({ showSpinner: true });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const EL = ({ children }: any) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {

  const Layout = (Component as any).Layout || EL;

  return (
    <React.Fragment>
      <Head>
        <title>FunctionalCode</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </div>
    </React.Fragment>
  )
}
export default MyApp
