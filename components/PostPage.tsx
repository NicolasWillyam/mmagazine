'use client'

import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
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
import Head from 'next/head'
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'

import BlogContainer from './BlogContainer'
import { Button } from './ui/button'
import PortraitPost from './PortraitPostHead'
import AdsBlock from './AdsBlock'

export interface PostPageProps {
  order: number
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
  loadedStatus?: Boolean
  setLoadedStatus?: Dispatch<SetStateAction<Boolean>>
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const {
    order,
    preview,
    loading,
    morePosts = NO_POSTS,
    post,
    settings,
    loadedStatus,
    setLoadedStatus,
  } = props

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        // console.log('End')
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
        <NavBar state="black" category={post.category.slug} />
        <PostPageHead post={post} />
        <Layout preview={preview} loading={loading}>
          <BlogContainer>
            {preview && !post ? (
              <PostTitle>
                <div className="w-full h-screen flex items-center justify-center text-2xl">
                  Loading…
                </div>
              </PostTitle>
            ) : (
              <>
                <article className="grid grid-cols-1 gap-6">
                  <PostHeader
                    title={post.title}
                    description={post.description}
                    category={post.category}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                  />
                  <div className="px-4">
                    <AdsBlock />
                  </div>

                  <PostBody
                    order={order}
                    content={post.content}
                    posts={morePosts}
                  />
                </article>
                <SectionSeparator />
              </>
            )}
          </BlogContainer>
        </Layout>
      </>
    )
  }
}
