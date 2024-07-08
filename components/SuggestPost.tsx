import { urlForImage } from 'lib/sanity.image'
import { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import React from 'react'
import category from 'schemas/category'

import { ArticleSuggestCard } from './ArticleCard'

export const SuggestPost = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="sm:mx-10 h-auto lg:-mt-32">
      <div className="w-full h-full sm:px-9 px-4 sm:py-6 bg-white grid sm:grid-cols-3 gap-5 z-10">
        {posts.map((post, idx) => {
          if (idx < 3) {
            return (
              <ArticleSuggestCard
                key={post._id}
                title={post.title}
                category={post.category}
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
