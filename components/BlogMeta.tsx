/**
 * All the shared stuff that goes into <head> on `(blog)` routes, can be be imported by `head.tsx` files in the /app dir or wrapped in a <Head> component in the /pages dir.
 */

export default function BlogMeta() {
  const logo_href = '/logo-black.svg'
  return (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href={logo_href} />
      <link rel="icon" type="image/png" sizes="32x32" href={logo_href} />
      <link rel="icon" type="image/png" sizes="16x16" href={logo_href} />
      <link rel="manifest" href={logo_href} />
      <link rel="shortcut icon" href={logo_href} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <meta property="og:image" content={logo_href} />
      <meta name="twitter:image" content={logo_href} />
    </>
  )
}
