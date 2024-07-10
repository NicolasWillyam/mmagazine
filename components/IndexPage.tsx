import BlogContainer, { Container } from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import { getAllOfPosts } from 'lib/sanity.client'
import type { Post, Settings } from 'lib/sanity.queries'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { ArticleSuggestCard } from './ArticleCard'
import Footer from './Footer'
import LoadingSpinner from './LoadingSpinner'
import MoreBlogs from './MoreBlogs'
import NavBar from './NavBar'
import { SuggestPost } from './SuggestPost'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const router = useRouter()
  const { settings } = props
  const { title = demo.title, description = demo.description } = settings || {}
  const [allPosts, setAllPosts] = useState<Post[]>([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { posts } = await getAllOfPosts()
        setAllPosts(posts)
      } catch (error) {
        console.error('Error fetching posts:', error)
        // Handle error state if needed
      }
    }
    fetchPosts()
  }, [])

  const [heroPost, ...suggestPosts] = allPosts || []

  if (router.isFallback) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className=" flex items-center gap-3">
          <LoadingSpinner />
          <p className="text-2xl font-light">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <NavBar state="black" />
      <IndexPageHead settings={settings} />

      {/* <Layout preview={preview} loading={loading}> */}
      <div className="h-auto sm:min-h-screen w-full mx-auto">
        <BlogContainer>
          {/* <BlogHeader title={title} description={description} level={1} /> */}
          {heroPost && <HeroPost posts={heroPost} />}

          <SuggestPost posts={suggestPosts} />

          <div className="xl:max-w-[1440px] 2xl:max-w-[1920px] mx-auto">
            {suggestPosts.length > 0 && <MoreBlogs posts={suggestPosts} />}
          </div>
        </BlogContainer>
      </div>

      {/* <IntroTemplate /> */}

      <Footer />
    </>
  )
}
