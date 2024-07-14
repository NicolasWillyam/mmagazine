// pages/[slug].tsx

import Layout from 'app/layout'
import { Container } from 'components/BlogContainer'
import Footer from 'components/Footer'
import HeroPost from 'components/HeroPost'
import LoadingSpinner from 'components/LoadingSpinner'
import NavBar from 'components/v1/NavBar'
import { SuggestPost } from 'components/SuggestPost'
import Overview from 'components/v1/Overview'
import useEventListener from 'hooks/userEventListener'
import { fetchCategories, getPostsByCategory } from 'lib/sanity.client' // Adjust import path as per your project structure
import { Post } from 'lib/sanity.queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { slugToCategory } from 'utils/function'
import { List } from 'lucide-react'
import ListLatestPost from 'components/v1/LatestPost'

const MoreBlogInCategory = dynamic(
  () => import('components/MoreBlogInCategory'),
  { ssr: false },
)

export default function CategoryPosts({
  category,
  posts,
}: {
  category: string
  posts: Post[]
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(true) // Loading state
  const [isShow, setIsShow] = useState(false)
  const onScroll = useCallback((event) => {
    if (typeof window === 'undefined') return
    if (Math.round(window.scrollY) > 100) {
      setIsShow(true)
    }
  }, [])

  useEventListener('scroll', onScroll)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false) // Hide loading after 2 seconds
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Show loading message while fetching data
  if (router.isFallback || loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner />
        </div>
      </div>
    )
  }
  const [heroPost, ...morePosts] = posts || []

  return (
    <div className='flex flex-col justify-center'>
      <Head>
        <title>{slugToCategory(category)}</title>
        <meta
          property="og:image"
          content={heroPost?.coverImage?.url || '/logo-black.svg'}
        />
        <meta name="description" content={'M MAGAZINE Vietnam'} />
      </Head>
      {/* <NavBar state="black" /> */}
      <div className="w-full max-w-[1920px] justify-self-center space-y-16">
        <NavBar state="black"/>
        <div className="w-full flex justify-center">
          <Overview category={slugToCategory(category)} isOverview/>
        </div>
      </div>
      

      {posts.length > 0 ? (
        <div className="w-full flex flex-col items-center my-8">
          {/* <BlogHeader title={title} description={description} level={1} /> */}
          {/* {heroPost && <HeroPost posts={posts[0]} />}

          <Container>
            <SuggestPost posts={morePosts} />
            {morePosts.length > 3 && isShow && (
              <MoreBlogInCategory posts={morePosts} />
            )}
          </Container> */}
          <ListLatestPost posts={posts}/>
        </div>
      ) : (
        <div className="min-h-screen w-full flex items-center justify-center">
          <div className="text-center">
            <div className=" flex items-center gap-3">
              <LoadingSpinner />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
// Assuming you have a function to fetch all categories for dynamic paths
export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await fetchCategories() // Fetch all categories
  const paths = categories.map((category) => ({
    params: { slug: category.slug }, // Adjust as per your category slug format
  }))

  return {
    paths,
    fallback: true, // Set fallback to true to render on-demand (incremental static regeneration)
  }
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.slug as string

  try {
    // Fetch posts by category using the function you defined
    const { posts } = await getPostsByCategory({ params: category })

    // Return props containing category and posts
    return {
      props: {
        category,
        posts,
      },
      revalidate: 60, // Optional: regenerate page every 60 seconds (for incremental static regeneration)
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
    // Handle error state if needed
    return {
      notFound: true, // Set notFound to true to render 404 page
    }
  }
}
