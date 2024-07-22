import React, { useEffect, useState } from 'react'
import { Menu } from './NavBar'
import { getAllPostsByCategory, getPostsByCategory } from 'lib/sanity.client'
import { Post } from 'lib/sanity.queries'
import { urlForImage } from 'lib/sanity.image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import HoverCard from './HoverCard'
import { CategoryNameComponent, TitleComponent } from './PostDetailComponents'
import ImagePost from './ImagePost'

const CategoryPostsLayout = ({
  category,
  posts,
}: {
  category: Menu
  posts: Post[]
}) => {
  return (
    <>
      {posts.length > 5 && (
        <div className="py-10">
          <p className="text-[40px] sm:text-[64px] sm:mb-10 mb-4 tracking-tight sfu-font">
            {category.name}
          </p>
          <div className="grid grid-cols-1 xl:gap-16 gap-10">
            <div className="w-full xl:flex flex-row">
              <BigPostLayout id={0} post={posts[0]} />
              <div className="w-full xl:w-1/2 md:grid-cols-2 grid xl:grid-cols-1 md:gap-8 xl:gap-16 gap-10 mt-10 xl:mt-0">
                <SmallPostLayout id={1} post={posts[1]} />
                <SmallPostLayout id={2} post={posts[2]} />
              </div>
            </div>
            <div className="w-full sm:flex flex-col-reverse xl:flex-row-reverse">
              <BigPostLayout id={5} post={posts[5]} />
              <div className="w-full xl:w-1/2 md:grid-cols-2 grid xl:grid-cols-1 md:gap-8 xl:gap-16 gap-10 mt-10 md:mb-10 xl:mb-0 sm:mt-0">
                <SmallPostLayout id={3} post={posts[3]} />
                <SmallPostLayout id={4} post={posts[4]} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CategoryPostsLayout
function setCategoriesWithPosts(posts: any) {
  throw new Error('Function not implemented.')
}

const BigPostLayout = ({ post, id }: { post: Post; id: number }) => {
  return (
    <div className={cn(id == 5 ? 'xl:pl-16' : 'xl:pr-16', `xl:w-1/2 h-auto `)}>
      <Link href={`/posts/${post.slug}`}>
        <ImagePost coverImage={post.coverImage} />

        <div className="mt-8">
          <CategoryNameComponent category={post.category} />
        </div>
        <TitleComponent title={post.title} fontSize={32} />
      </Link>
    </div>
  )
}

const SmallPostLayout = ({ post, id }: { post: Post; id: number }) => {
  return (
    <Link href={`/posts/${post?.slug}`}>
      <div className="w-full xl:flex ">
        <div className="w-full px-12 sm:px-0 xl:w-3/5">
          <ImagePost coverImage={post.coverImage} />
        </div>

        <div className="w-full xl:w-2/5 xl:pl-6 mt-6 xl:mt-0">
          <CategoryNameComponent category={post.category} />
          <TitleComponent title={post.title} fontSize={25} />
        </div>
      </div>
    </Link>
  )
}
