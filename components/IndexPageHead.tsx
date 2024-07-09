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

  return (
    <Head>
      <title>{title}</title>
      <BlogMeta />
      <link rel="icon" href="/logo-black.svg" />
      <link rel="shortcut icon" href="/logo-black.svg" />
      <link rel="apple-touch-icon" href="/logo-black.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="description" content={title} />
    </Head>
  )
}
