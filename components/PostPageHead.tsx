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
  return (
    <Head>
      <title>{post.title}</title>
      {/* <meta name="description" content="M MAGAZINE Vietnam" /> */}
      <meta charSet="UTF-8" />
      <meta
        property="og:url"
        content={`https://www.mmagazinevietnam.com/posts/${post.slug}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post?.description || ''} />
      <meta property="og:image" content={postImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="mmagazinevietnam.com" />
      <meta property="twitter:url" content={post.slug} />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post?.description || ''} />
      <meta name="twitter:image" content={postImage} />
    </Head>
  )
}
