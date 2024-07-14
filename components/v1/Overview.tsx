import { getAllOfPosts } from 'lib/sanity.client'
import { Category, Post } from 'lib/sanity.queries'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import OverviewPostCard from './OverviewPostCard'

type OverviewProps = {
  isOverview?: boolean
  category?: string
}

const Overview = (props: OverviewProps) => {
  
  const { isOverview, category } = props

  const [posts, setPosts] = useState<Post[]>([])

  const checkPath = (path: string) => {
    if (!category) return false
    return path === category
  }

  useEffect(() => {
    async function fetchPosts() {
      const { posts } = await getAllOfPosts()
      if (!posts) return
      setPosts(posts)
    }
    fetchPosts()
  }, [])

  return (
    <div className="w-3/4 h-fit flex flex-col">
      <div className="flex flex-row space-x-8 w-full">
        <div className="flex flex-col mt-40">
          {LIST_CATEGORY.map((item, index) => (
            <Link href={item.href} key={index} className="w-fit">
              <h3 className={`${checkPath(item.label) ? "text-[56px]" : "text-[36px]"} hover:underline`}>{item.label}</h3>
            </Link>
          ))}
        </div>
        <div className='w-full'>
          {
            !isOverview ? (
            <div className="grid grid-cols-12 space-x-8">
              <div className='col-span-6'>
            <OverviewPostCard {...posts[0]} isMain />

                </div>
            <div className="flex flex-col col-span-6 space-y-8">
              <OverviewPostCard {...posts[1]} />
              <OverviewPostCard {...posts[2]} />
            </div>
          </div>
            ) : (
              <div className='flex flex-col space-y-4'>
              <h2 className='text-5xl font-semibold text-end'>{category}</h2>
              <div className="flex flex-row space-x-8">
                  <OverviewPostCard {...posts[0]} isMain />
                  <OverviewPostCard {...posts[1]} isMain />
              </div>
              </div>
            )
          }
          
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
