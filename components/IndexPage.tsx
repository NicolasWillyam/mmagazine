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
import MenuBar from './MenuBar'
import CategoryPostsLayout from './CategoryPostsLayout'
import CategoryContainer from './CategoryContainer'
import Link from 'next/link'
import { urlForImage } from 'lib/sanity.image'
import { cn } from '@/lib/utils'
import HoverCard from './HoverCard'

export interface IndexPageProps {
  preview?: boolean
  loading?: any
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(true) // Loading state
  const { settings } = props
  const { title = demo.title, description = demo.description } = settings || {}
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { posts } = await getAllOfPosts()

        setTimeout(() => {
          setAllPosts(posts)
          setPosts(posts.slice(0, 3))
          setLoading(false) // Set loading to false after data is fetched
        }, 1000)
      } catch (error) {
        console.error('Error fetching posts:', error)
        // Handle error state if needed
        setLoading(false) // Ensure loading state is updated on error
      }
    }

    fetchPosts()
  }, [])

  const [heroPost, ...suggestPosts] = allPosts || []

  if (loading) {
    // Show loading spinner while waiting for data
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  console.log(posts)

  return (
    <>
      <NavBar state="black" category={null} />
      <IndexPageHead settings={settings} />

      <div className="w-full mx-auto pt-24 px-5 sm:px-0">
        <BlogContainer>
          {/* Render HeroPost if exists */}
          {/* {heroPost && <HeroPost posts={heroPost} />} */}

          <HeroPost posts={posts} />
          {/* Render SuggestPost with suggestPosts */}
          {/* <SuggestPost posts={suggestPosts} /> */}

          {/* <div className="xl:max-w-[1440px] 2xl:max-w-[1920px] mx-auto">
            {suggestPosts.length > 0 && <MoreBlogs posts={suggestPosts} />}
          </div> */}
        </BlogContainer>
        <div className="w-full h-[330px] bg-gray-200 text-center p-4">
          <p className="text-gray-400 text-[10px] tracking-tight">
            ADVERTISEMENT
          </p>
        </div>

        <BlogContainer>
          <CategoryContainer />
        </BlogContainer>
      </div>
    </>
  )
}
