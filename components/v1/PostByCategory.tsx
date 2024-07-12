import { getPostsByCategory } from 'lib/sanity.client'
import { Category, Post } from 'lib/sanity.queries'
import { useEffect, useState } from 'react'
import { slugify } from 'utils/function'

import PostCard from './PostCard'

const PostByCategory = ({
  category,
  quantity,
}: {
  category: string
  quantity: number
}) => {
  const [listPost, setListPost] = useState<Post[]>([])

  useEffect(() => {
    async function fetchPost() {
      const { posts } = await getPostsByCategory({ params: slugify(category) })
      if (!posts) return
      setListPost(posts.slice(0, quantity))
    }
    fetchPost()
  }, [category, quantity])

  if (quantity == 4)
    return (
      <section className="space-y-4">
        <h2 className="text-4xl">{category}</h2>
        <div className="grid grid-cols-2 gap-8">
          {listPost.map((item, index) => (
            <PostCard {...item} key={index} />
          ))}
        </div>
      </section>
    )

  return (
    <section className="space-y-8">
      <h2 className="text-4xl">{category}</h2>
      <div className="flex flex-row space-x-8">
        <PostCard {...listPost[0]} isMain={true} />
        <div className="flex flex-col space-y-8">
          <PostCard {...listPost[1]} />
          <PostCard {...listPost[2]} />
        </div>
      </div>
      <div className="flex flex-row space-x-8">
        <div className="flex flex-col space-y-8">
          <PostCard {...listPost[3]} />
          <PostCard {...listPost[4]} />
        </div>
        <PostCard {...listPost[5]} isMain={true} />
      </div>
    </section>
  )
}

export default PostByCategory
