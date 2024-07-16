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
      <section className="space-y-4 w-3/4">
        <h2 className="text-4xl">{category}</h2>
        <div className="sm:flex sm:flex-col md:grid md:grid-cols-2 gap-8">
          {listPost.map((item, index) => (
            <PostCard {...item} key={index} />
          ))}
        </div>
      </section>
    )

  return (
    <section className="space-y-8 w-3/4">
      <h2 className="text-4xl">{category}</h2>
      <div className="grid grid-cols-12 w-full space-x-16">
        <div className="flex flex-col col-span-5">
        <PostCard {...listPost[0]} isMain={true} />
        </div>
        <div className="flex flex-col col-span-7 space-y-16">
          <PostCard {...listPost[1]} />
          <PostCard {...listPost[2]} />
        </div>
      </div>
      <div className="grid grid-cols-12 w-full space-x-16">
        <div className="flex flex-col col-span-7 space-y-16">
          <PostCard {...listPost[3]} />
          <PostCard {...listPost[4]} />
        </div>
        <div className="flex flex-col col-span-5 space-y-16">
        <PostCard {...listPost[5]} isMain={true} />

        </div>
      </div>
    </section>
  )
}

export default PostByCategory
