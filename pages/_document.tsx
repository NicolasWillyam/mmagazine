/* eslint-disable @next/next/no-title-in-document-head */
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo-black.svg" />
        {/* Add your favicon link here */}
        <link rel="shortcut icon" href="/logo-black.svg" />
        {/* Add your mobile favicon link here */}
        <link rel="apple-touch-icon" href="/logo-black.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>M MAGAZINE Vietnam</title>
        <meta name="description" content="M MAGAZINE Vietnam" />
        <meta property="og:image" content="/logo-black.svg" />
        <meta name="twitter:image" content="/logo-black.svg" />
      </Head>
      <body className="bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
