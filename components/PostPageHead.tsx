import BlogMeta from 'components/BlogMeta'
import * as demo from 'lib/demo.data'
import { urlForImage } from 'lib/sanity.image'
import { Post, Settings } from 'lib/sanity.queries'
import Head from 'next/head'

export interface PostPageHeadProps {
  post: Post
}

export default function PostPageHead({ post }: PostPageHeadProps) {
  const postImage = urlForImage(post.coverImage).height(1000).width(1500).url()
  const logoImg = '/logo-black.png'

  return (
    <Head>
      <title>{post.title}</title>
      <meta
        name="google-adsense-account"
        content="ca-pub-6460957180122693"
      ></meta>
      <meta
        name="description"
        content={post?.description || 'M MAGAZINE Vietnam'}
      />
      <link rel="icon" href={logoImg} />
      <link rel="shortcut icon" href={logoImg} />
      <link rel="apple-touch-icon" href={logoImg} />

      <meta charSet="UTF-8" />
      <meta
        property="og:url"
        content={`https://www.mmagazinevietnam.com/posts/${post.slug}`}
      />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post?.description || ''} />
      <meta property="og:image" content={postImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="mmagazinevietnam.com" />
      <meta
        property="twitter:url"
        content={`https://www.mmagazinevietnam.com/posts/${post.slug}`}
      />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post?.description || ''} />
      <meta name="twitter:image" content={postImage} />
      <BlogMeta />

      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6460957180122693"
        crossOrigin="anonymous"
      ></script>
    </Head>
  )
}
