import React from 'react'

import { ArticleSuggestCard } from './ArticleCard'
import { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import { urlForImage } from 'lib/sanity.image'

export const SuggestPost = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="mx-10 h-auto -mt-32">
      <div className="w-full h-full px-9 py-6 bg-white grid grid-cols-3 gap-5 z-10">
        {posts.map((post, idx) => {
          if (idx < 3) {
            return (
              <ArticleSuggestCard
                key={post._id}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            )
          }
        })}
      </div>
    </div>
  )
}
export const SuggestPostInPostBody = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <p className="text-[28px] font-semibold">Có thể bạn sẽ thích</p>
      <div className="mt-6 w-full grid grid-cols-2 gap-6">
        {posts.map((post) => (
          <PostSuggested
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  )
}

function PostSuggested({
  title,
  coverImage,
  date,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="w-full">
        <div
          style={{
            backgroundImage: `url('${urlForImage(coverImage).url()}')`,
          }}
          className="w-full h-[165px] bg-cover bg-no-repeat bg-center"
        />
        <p className="mt-4 text-sm font-light">{title}</p>
      </div>
    </Link>
  )
}
