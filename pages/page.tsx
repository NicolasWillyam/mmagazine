'use client'
import React, { useEffect, useRef } from 'react'

import { useInfiniteQuery } from '@tanstack/react-query'
import { useIntersection } from '@mantine/hooks'
import { root } from 'postcss'

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
  return posts.slice((page - 1) * 2, page * 2)
}

const Page = () => {
  //   const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
  //     'query',
  //     async ({ pageParam = 1 }) => {
  //       const response = await fetchPost(pageParam)
  //       return response
  //     },
  //     {
  //       getNextPageParam: (_, pages) => {
  //         return pages.length + 1
  //       },
  //       initialData: {
  //         pages: [posts.slice(0, 2)],
  //         pageParams: [1],
  //       },
  //     },
  //   )
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
      pages: [posts.slice(0, 2)],
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

  const _posts = data?.pages.flatMap((page) => page)

  return (
    <div>
      Page:
      {_posts?.map((post, i) => {
        if (i === _posts.length - 1)
          return (
            <div
              className="w-full h-[90vh] text-white flex items-center justify-center text-4xl uppercase  bg-black border"
              key={post.id}
              ref={ref}
            ></div>
          )
        return (
          <div
            className="w-full h-[90vh] text-white flex items-center justify-center text-4xl uppercase  bg-black border"
            key={post.id}
          >
            {post.title}
          </div>
        )
      })}
      <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage
          ? 'Loading more...'
          : (data?.pages.map.length ?? 0) < 3
            ? 'Load more'
            : 'Nothing more to load'}
      </button>
    </div>
  )
}

export default Page
