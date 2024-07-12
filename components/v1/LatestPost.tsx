import { getAllOfPosts } from 'lib/sanity.client'
import { urlForImage } from 'lib/sanity.image'
import { Category, Post } from 'lib/sanity.queries'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type PostProps = {
  title?: string
  category?: Category
  coverImage?: any
  direct?: number
}

const ListLatestPost = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const { posts } = await getAllOfPosts()
      if (!posts) return
      setPosts(posts)
    }
    fetchPosts()
  }, [])

  return (
    <section>
      <h2 className="text-4xl">Latest</h2>
      <div className="flex flex-col space-y-16">
        {posts.slice(0, 6).map((post, index) => (
          <LatestPost {...post} direct={index % 2} key={index} />
        ))}
      </div>
    </section>
  )
}

const LatestPost = (props: PostProps) => {
  const { title, category, coverImage, direct } = props

  if (!category) return null

  const url = urlForImage(coverImage ?? '')
    .height(1000)
    .width(2000)
    .url()

  if (direct)
    return (
      <div className="flex flex-row space-x-8">
        <Image src={url} alt="thumbnail" width={600} height={300} />
        <div className="flex flex-col w-[600px] items-center justify-center px-16">
          <h4>{category.name}</h4>
          <h2 className="text-3xl font-medium text-center">{title}</h2>
        </div>
      </div>
    )

  return (
    <div className="flex flex-row space-x-8">
      <div className="flex flex-col w-[600px] items-center justify-center px-16">
        <h4>{category.name}</h4>
        <h2 className="text-3xl font-medium text-center">{title}</h2>
      </div>
      <Image src={url} alt="thumbnail" width={600} height={300} />
    </div>
  )
}

export default ListLatestPost
