import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import MoreStories from 'components/MoreStories'
import PostBody from 'components/PostBody'
import PostHeader from 'components/PostHeader'
import PostPageHead from 'components/PostPageHead'
import PostTitle from 'components/PostTitle'
import SectionSeparator from 'components/SectionSeparator'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import Error from 'next/error'
import NavBar from './NavBar'
import React from 'react'
import { RiFacebookFill } from 'react-icons/ri'
import { RiTwitterXFill } from 'react-icons/ri'
import { ImLink } from 'react-icons/im'
import { TbMailFilled } from 'react-icons/tb'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import Image from 'next/image'

const garamond = Cormorant_Garamond({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
})
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'
import { Button } from './ui/button'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props
  const { title = demo.title } = settings || {}

  const slug = post?.slug

  if (!slug && !preview) {
    return <Error statusCode={404} />
  }

  return (
    <>
      <NavBar state="black" />
      {/* <PostPageHead settings={settings} post={post} /> */}

      <Layout preview={preview} loading={loading}>
        <Container>
          {/* <BlogHeader title={title} level={2} /> */}
          {preview && !post ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  )
}
