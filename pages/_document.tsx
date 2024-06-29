import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo-black.svg" />
        <meta name="description" content="MMAGAZINE Vietnam" />
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
