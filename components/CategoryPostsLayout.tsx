import React, { useEffect, useState } from 'react'
import { Menu } from './NavBar'
import { getAllPostsByCategory, getPostsByCategory } from 'lib/sanity.client'
import { Post } from 'lib/sanity.queries'
import { urlForImage } from 'lib/sanity.image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import HoverCard from './HoverCard'
import { CategoryNameComponent } from './PostDetailComponents'

interface Prop {
  category: Menu
}

const fetchPostsByCategory = async (
  categoryName: string,
  title: string,
  setCategoriesWithPosts: Function,
) => {
  try {
    const result = await getAllPostsByCategory({ categoryName, title })
    if (result?.posts?.length > 0) {
      setCategoriesWithPosts(result.posts)
    } else {
      setCategoriesWithPosts([])
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
    // Handle error state if needed
  }
}

const CategoryPostsLayout = ({ category }: { category: Menu }) => {
  const [categoriesWithPosts, setCategoriesWithPosts] = useState<Post[]>([])
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      setTimeout(() => {
        fetchPostsByCategory(category.name, '', setCategoriesWithPosts)
        // setLoading(false)
      }, 10)
    } catch (error) {
      console.error('Error fetching posts:', error)
      // Handle error state if needed
      // setLoading(false)
    }

    if (categoriesWithPosts.length > 6) {
      setPosts(categoriesWithPosts.slice(0, 6))
    }
  }, [category.name, categoriesWithPosts])

  return (
    <>
      {posts.length > 0 && (
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
  if (!post && !post?.coverImage) {
    return null // Or render a placeholder or loading state
  }
  const img = urlForImage(post.coverImage).url()

  return (
    <div className={cn(id == 5 ? 'xl:pl-16' : 'xl:pr-16', `xl:w-1/2 h-auto `)}>
      <Link href={`/posts/${post.slug}`}>
        <div
          style={{
            backgroundImage: `url('${img}')`,
          }}
          className="h-[506px] md:h-[900px] lg:h-[1226px] xl:h-[772px]  w-full bg-cover bg-no-repeat bg-center"
        >
          <HoverCard />
        </div>

        <div className="mt-8">
          <CategoryNameComponent category={post.category} />
        </div>
        <div className="mt-4">
          <p className="text-2xl sm:text-[32px] leading-none tracking-tight sfu-font">
            {post.title}
          </p>
        </div>
      </Link>
    </div>
  )
}

const SmallPostLayout = ({ post, id }: { post: Post; id: number }) => {
  if (!post && !post?.coverImage) {
    return null // Or render a placeholder or loading state
  }
  const img = urlForImage(post.coverImage).url()
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="w-full xl:flex ">
        <div className="w-full px-12 sm:px-0 xl:w-3/5">
          <div
            style={{
              backgroundImage: `url('${img}')`,
            }}
            className="w-full mx-auto h-[380px] md:h-[420px] lg:h-[600px] xl:h-[520px] bg-cover bg-no-repeat bg-center"
          >
            <HoverCard />
          </div>
        </div>

        <div className="w-full xl:w-2/5 xl:pl-6 mt-6 xl:mt-0">
          <CategoryNameComponent category={post.category} />
          <div className="mt-4">
            <p className="text-2xl leading-none sfu-font">{post.title}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
