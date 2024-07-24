'use client'
import React, { useEffect, useRef } from 'react'

import { useInfiniteQuery } from '@tanstack/react-query'
import { useIntersection } from '@mantine/hooks'
import { Post } from 'lib/sanity.queries'
import BodyLayoutPost from 'components/BodyLayoutPost'
import PostPage from 'components/PostPage'

interface ScrollPageProps {
  moreposts: Post[] // Example prop for initial posts
  typeLoader: string
}
// for example: if page =

const ScrollPage: React.FC<ScrollPageProps> = ({ moreposts, typeLoader }) => {
  const postsWithId = moreposts.map((post, index) => ({
    id: index + 1, // id starts from 1
    ...post,
  }))

  const fetchPost = async (page: number) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const currentPage = page - 1
    return postsWithId.slice(currentPage, currentPage + 1)
  }
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['query'],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetchPost(pageParam)
      return response
    },
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1
    },
    initialPageParam: 1, // This is the missing property
    initialData: {
      pages: [postsWithId.slice(0, 1)],
      pageParams: [1],
    },
  })

  const lastPostRef = useRef<HTMLElement>(null)
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  })

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage()
  }, [entry])

  const _posts = [...(data?.pages.flatMap((page) => page) ?? [])]

  if (typeLoader === 'body-post') {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-10 sm:gap-8 sm:gap-y-16 xl:gap-[136px] my-10">
          {_posts?.map((post, i) => {
            if (i === _posts.length - 1) {
              return (
                <>
                  <div
                    className="w-full  text-white flex items-center justify-center text-4xl uppercase  border"
                    key={post.id}
                    ref={ref}
                  />
                </>
              )
            }

            return <BodyLayoutPost key={post.id} id={i} post={post} />
          })}
        </div>
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {/* {isFetchingNextPage ? 'Loading more...' : 'Load more'} */}
        </button>
      </>
    )
  }

  if (typeLoader === 'article') {
    return (
      <>
        <div>
          {_posts?.map((post, i) => {
            if (i === _posts.length - 1) {
              return (
                <>
                  <div
                    className="w-full text-white flex items-center justify-center text-4xl uppercase"
                    key={post.id}
                    ref={ref}
                  />
                </>
              )
            }

            return (
              <article key={i}>
                <PostPage
                  post={post}
                  morePosts={null}
                  settings={{}} // Pass your settings here
                  loadedStatus={true}
                  setLoadedStatus={() => {}} // Update loadedStatus to false
                  order={0}
                />
              </article>
            )
          })}
        </div>
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {/* {isFetchingNextPage ? 'Loading more...' : 'Load more'} */}
        </button>
      </>
    )
  }
}

export default ScrollPage
