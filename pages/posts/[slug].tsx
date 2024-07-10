'use client'
import LoadingSpinner from 'components/LoadingSpinner'
import PostPage from 'components/PostPage'
import PostPageHead from 'components/PostPageHead'
import PreviewPostPage from 'components/PreviewPostPage'
import { readToken } from 'lib/sanity.api'
import {
  getAllPostsByCategory,
  getAllPostsSlugs,
  getClient,
  getPostAndMoreStories,
  getPostsByCategory,
  getPostsByCategoryName,
  getSettings,
} from 'lib/sanity.client'
import { urlForImage } from 'lib/sanity.image'
import { Category, Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import type { SharedPageProps } from 'pages/_app'
import { useEffect, useState } from 'react'

interface PageProps extends SharedPageProps {
  post: Post
  morePosts: Post[]
  settings?: Settings
}

interface Query {
  [key: string]: string
}

const fetchPostsByCategory = async (
  categoryName: string,
  title: string,
  setCategoriesWithPosts: Function,
) => {
  try {
    console.log(categoryName, title)
    const result = await getAllPostsByCategory({ categoryName, title })
    if (result?.posts?.length > 0) {
      setCategoriesWithPosts(result.posts)
    } else {
      setCategoriesWithPosts([])
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
    // Handle error state if needed
  }
}

export default function ProjectSlugRoute(props: PageProps) {
  const { settings, post, morePosts, draftMode } = props

  const [loadedStatus, setLoadedStatus] = useState<Boolean>(true)
  const [pageCount, setPageCount] = useState<number>(1)
  const [filterPosts, setFilterPosts] = useState<Post[]>([])

  const [categoriesWithPosts, setCategoriesWithPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      setTimeout(() => {
        fetchPostsByCategory(
          post.category.name,
          post.title,
          setCategoriesWithPosts,
        )
        // setLoading(false)
      }, 10)
    } catch (error) {
      console.error('Error fetching posts:', error)
      // Handle error state if needed
      // setLoading(false)
    }
  }, [post.category.name, post.title])

  // Loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false) // Hide loading after 2 seconds
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Show loading message while fetching data
  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner />
        </div>
      </div>
    )
  }

  console.log(categoriesWithPosts)

  return (
    <>
      <PostPageHead post={post} />
      <PostPage
        post={post}
        morePosts={morePosts}
        settings={{}} // Pass your settings here
        loadedStatus={loadedStatus}
        setLoadedStatus={setLoadedStatus} // Update loadedStatus to false
      />
      {categoriesWithPosts?.slice(0, 5)?.map((post, index) => (
        <div key={index}>
          <PostPage
            post={post}
            morePosts={morePosts}
            settings={{}} // Pass your settings here
            loadedStatus={loadedStatus}
            setLoadedStatus={setLoadedStatus} // Update loadedStatus to false
          />
        </div>
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, { post, morePosts }] = await Promise.all([
    getSettings(client),
    getPostAndMoreStories(client, params.slug),
  ])

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      morePosts,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: 'blocking',
  }
}
