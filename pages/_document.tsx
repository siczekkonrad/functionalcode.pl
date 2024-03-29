import { DocumentContext } from 'next/dist/shared/lib/utils'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GoogleFonts } from "next-google-fonts";

class MyDocument extends Document<any> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      // wraps the collectStyles provider around our <App />.
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/display-name
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      // extract the initial props that may be present.
      const initialProps = await Document.getInitialProps(ctx)

      // returning the original props together with our styled components.
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=family=Montserrat:wght@200;300;400;500;600;700&display=swap" />
        <Head>
          {this.props.styleTags /*rendering the actually stylesheet*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument