'use client'
import { categoryList } from 'components/MoreBlogInCategory'
import PostPage from 'components/PostPage'
import PreviewPostPage from 'components/PreviewPostPage'
import { readToken } from 'lib/sanity.api'
import {
  getAllPostsSlugs,
  getClient,
  getPostAndMoreStories,
  getPostsByCategory,
  getPostsByCategoryName,
  getSettings,
} from 'lib/sanity.client'
import { Category, Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
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
  setCategoriesWithPosts: Function,
) => {
  try {
    const result = await getPostsByCategory({ params: categoryName })
    if (result.posts.length > 0) {
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

  useEffect(() => {
    fetchPostsByCategory(post.category.name, setCategoriesWithPosts)
  }, [post.category.name])

  console.log(loadedStatus)

  return (
    <div>
      <PostPage
        post={post}
        morePosts={morePosts}
        settings={{}} // Pass your settings here
        loadedStatus={loadedStatus}
        setLoadedStatus={setLoadedStatus} // Update loadedStatus to false
      />
    </div>
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
