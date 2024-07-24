'use client'

import React, { useEffect, useRef } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useIntersection } from '@mantine/hooks'

const posts = [
  { id: 1, title: 'post 1' },
  { id: 2, title: 'post 2' },
  { id: 3, title: 'post 3' },
  { id: 4, title: 'post 4' },
  { id: 5, title: 'post 5' },
  { id: 6, title: 'post 6' },
  { id: 7, title: 'post 7' },
  { id: 8, title: 'post 8' },
  { id: 9, title: 'post 9' },
  { id: 10, title: 'post 10' },
]

const fetchPost = async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const currentPage = page - 1
  console.log('slice: ', currentPage)
  console.log(posts.slice(currentPage, currentPage + 1))
  return posts.slice(currentPage, currentPage + 1)
}

const Page = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['query'],
    queryFn: async ({ pageParam = 1 }) => fetchPost(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined
      return allPages.length + 1
    },
    initialPageParam: 1,
    initialData: {
      pages: [posts.slice(0, 1)],
      pageParams: [1],
    },
  })

  const lastPostRef = useRef<HTMLDivElement | null>(null)
  const { ref: lastPostObserverRef, entry } = useIntersection({
    root: null,
    threshold: 1,
  })

  useEffect(() => {
    console.log(entry?.isIntersecting)
    if (entry?.isIntersecting && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [entry, isFetchingNextPage, fetchNextPage])

  const _posts = data?.pages.flatMap((page) => page) ?? []

  return (
    <div>
      Page:
      {_posts.map((post, i) => {
        const isLast = i === _posts.length - 1
        return (
          <div
            className="w-full h-[120vh] bg-black text-white flex items-center justify-center text-4xl uppercase border"
            key={post.id}
            ref={isLast ? lastPostObserverRef : undefined}
          >
            {post.title}
          </div>
        )
      })}
      <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage ? 'Loading more...' : 'Load more'}
      </button>
    </div>
  )
}

export default Page
