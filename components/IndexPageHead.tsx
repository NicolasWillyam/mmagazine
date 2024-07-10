import BlogMeta from 'components/BlogMeta'
import * as demo from 'lib/demo.data'
import { Settings } from 'lib/sanity.queries'
import Head from 'next/head'
import { toPlainText } from 'next-sanity'

export interface IndexPageHeadProps {
  settings: Settings
}

export default function IndexPageHead({ settings }: IndexPageHeadProps) {
  const {
    title = demo.title,
    description = demo.description,
    ogImage = {},
  } = settings
  const ogImageTitle = ogImage?.title || demo.ogImageTitle

  const logoImg = '/logo-black.svg'
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={ogImageTitle} />
      <link rel="icon" href={logoImg} />
      <link rel="shortcut icon" href={logoImg} />
      <link rel="apple-touch-icon" href={logoImg} />
      {/* Add Open Graph tags for social media and search engines */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={ogImageTitle} />
      <meta property="og:image" content={logoImg} />
      {/* URL of your logo */}
      <meta property="og:url" content="https://www.mmagazinevietnam.com/" />
      <meta property="og:type" content="website" />
      {/* Add Twitter card tags for Twitter */}
      <meta name="twitter:card" content={logoImg} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={title} />
      <meta name="twitter:image" content={logoImg} /> {/* URL of your logo */}
      <BlogMeta />
    </Head>
  )
}
