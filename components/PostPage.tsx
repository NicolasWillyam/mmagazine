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
import { Cormorant_Garamond, Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { ImLink } from 'react-icons/im'
import { RiFacebookFill } from 'react-icons/ri'
import { RiTwitterXFill } from 'react-icons/ri'
import { TbMailFilled } from 'react-icons/tb'

import NavBar from './NavBar'

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
      <Layout preview={preview} loading={loading}>
        <Container>
          {preview && !post ? (
            <PostTitle>
              <div className="w-full h-screen flex items-center justify-center text-2xl">
                Loading…
              </div>
            </PostTitle>
          ) : (
            <>
              <article>
                <PostHeader
                  title={post.title}
                  category={post.category}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />

                <PostBody content={post.content} posts={morePosts} />
              </article>
              <SectionSeparator />
              {/* {morePosts?.length > 0 && <MoreStories posts={morePosts} />} */}
            </>
          )}
        </Container>
      </Layout>
    </>
  )
}
