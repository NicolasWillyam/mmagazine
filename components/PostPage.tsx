'use client'
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
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
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
import Head from 'next/head'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
  loadedStatus: Boolean
  setLoadedStatus: Dispatch<SetStateAction<Boolean>>
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const {
    preview,
    loading,
    morePosts = NO_POSTS,
    post,
    settings,
    loadedStatus,
    setLoadedStatus,
  } = props

  console.log(loadedStatus)

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        console.log('End')
        setLoadedStatus((prev) => true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setLoadedStatus])

  const slug = post?.slug

  if (!slug && !preview) {
    return <Error statusCode={404} />
  }

  if (loadedStatus == true) {
    return (
      <>
        <Head>
          <title>{post.title}</title>
          <meta
            name="description"
            content={post.excerpt || 'M MAGAZINE Vietnam'}
          />
          <meta property="og:title" content={post.title} />
          <meta property="og:image" content={post?.coverImage?.url} />
          <meta
            property="og:url"
            content={`https://www.mmagazinevietnam.com/posts/${post.slug}`}
          />
          <meta property="og:type" content="article" />
          <meta name="twitter:title" content={post.title} />
          <meta
            name="twitter:description"
            content={post.excerpt || 'M MAGAZINE Vietnam'}
          />
          <meta name="twitter:image" content={post.coverImage?.url} />
        </Head>
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
}
