import { getAllOfPosts } from 'lib/sanity.client'
import { Category, Post } from 'lib/sanity.queries'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import OverviewPostCard from './OverviewPostCard'

type PostProps = {
  title?: string
  category?: Category
  coverImage?: any
  direct?: number
}
const Overview = (props) => {
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
    <div className="w-[1232px] min-h-screen flex flex-col">
      <div className="flex flex-row space-x-8">
        <div className="flex flex-col mt-60">
          {LIST_CATEGORY.map((item, index) => (
            <Link href={item.href} key={index} className="w-fit">
              <h3 className="text-[36px] hover:underline">{item.label}</h3>
            </Link>
          ))}
        </div>
        <div>
          <div className="flex flex-row space-x-8">
            <OverviewPostCard {...posts[0]} isMain />
            <div className="flex flex-col space-y-8">
              <OverviewPostCard {...posts[1]} />
              <OverviewPostCard {...posts[2]} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20vh] bg-neutral-400 mt-16">gan ads</div>
    </div>
  )
}

export default Overview

export const getStaticProps = async () => {}

const LIST_CATEGORY = [
  {
    label: 'Style',
    href: '/style',
  },
  {
    label: 'Beauty',
    href: '/beauty',
  },
  {
    label: 'Culture',
    href: '/culture',
  },
  {
    label: 'Lifestyle',
    href: '/lifestyle',
  },
  {
    label: 'Voyages & Gourmet',
    href: '/voyages-gourmet',
  },
  {
    label: 'Art & Design',
    href: '/art-design',
  },
  {
    label: 'Business',
    href: '/business',
  },
  {
    label: 'Add to Cart',
    href: '/add-to-cart',
  },
]
