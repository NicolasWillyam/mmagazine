import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { CategoryNameComponent, TitleComponent } from './PostDetailComponents'
import MenuBar from './MenuBar'
import HoverCard from './HoverCard'
import { IMAGE_RATIO } from 'utils/constant'
import ImagePost from './ImagePost'

export default function HeroPost({ posts }: { posts: Post[] }) {
  return (
    <section>
      <div className="w-full sm:flex items-start mb-12">
        <MenuBar inActive={null} />
        <div className="w-full grid xl:grid-cols-2 xl:gap-16 gap-10">
          <BigHeroPostLayout id={0} post={posts[0]} />
          <div className="grid lg:grid-cols-2 xl:grid-cols-1 sm:gap-16 gap-10 lg:gap-8 xl:gap-10">
            <SmallHeroPostLayout id={1} post={posts[1]} />
            <SmallHeroPostLayout id={2} post={posts[2]} />
          </div>
        </div>
      </div>
    </section>
  )
}
export const BigHeroPostLayout = ({ post, id }: { post: Post; id: number }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="w-full h-auto">
        <ImagePost coverImage={post.coverImage} />
        <div className="mt-8">
          <CategoryNameComponent category={post.category} />
        </div>
        <TitleComponent title={post.title} fontSize={32} />
      </div>
    </Link>
  )
}

const SmallHeroPostLayout = ({ post, id }: { post: Post; id: number }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="w-full sm:flex lg:block xl:flex ">
        <div className="w-full px-12 sm:px-0 sm:w-3/5 lg:w-full xl:w-3/5">
          <ImagePost coverImage={post.coverImage} />
        </div>
        <div className="w-full sm:w-2/5 lg:w-full xl:w-2/5 mt-8 sm:pl-6 lg:pl-0 xl:pl-6 lg:mt-6 xl:mt-0">
          <CategoryNameComponent category={post.category} />
          <TitleComponent title={post.title} fontSize={24} />
        </div>
      </div>
    </Link>
  )
}
