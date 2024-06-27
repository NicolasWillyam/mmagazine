import React from 'react'

import { ArticleSuggestCard } from './ArticleCard'
import { Post } from 'lib/sanity.queries'

const SuggestPost = ({ posts }: { posts: Post[] }) => {
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

export default SuggestPost
