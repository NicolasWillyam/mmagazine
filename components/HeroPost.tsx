import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import { client } from 'lib/sanity'
import { urlForImage } from 'lib/sanity.image'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { CategoryNameComponent } from './PostDetailComponents'
import MenuBar from './MenuBar'
import HoverCard from './HoverCard'

export default function HeroPost({ posts }: { posts: Post[] }) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  // useEffect(() => {
  //   const fetchVideoUrl = async () => {
  //     if (posts.coverVideo?._ref) {
  //       try {
  //         const document = await client.getDocument(posts.coverVideo._ref)
  //         console.log(document) // For debugging
  //         if (document && document.url) {
  //           setVideoUrl(document.url)
  //         }
  //       } catch (error) {
  //         console.error('Error fetching video URL:', error)
  //       }
  //     }
  //   }

  //   fetchVideoUrl()
  // }, [posts.coverVideo?._ref])

  // useEffect(() => {
  //   console.log(videoUrl) // For debugging
  // }, [videoUrl])

  // const img = urlForImage(posts?.coverImage).height(1000).width(2000).url()

  return (
    <section>
      {/* <div className="video-container">
        <video autoPlay loop>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
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
const BigHeroPostLayout = ({ post, id }: { post: Post; id: number }) => {
  if (!post && !post?.coverImage) {
    return null // Or render a placeholder or loading state
  }
  const img = urlForImage(post.coverImage).url()

  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="w-full h-auto">
        <div
          style={{
            backgroundImage: `url('${img}')`,
          }}
          className="h-[506px] lg:h-[860px] xl:h-[580px] w-full bg-cover bg-no-repeat bg-center"
        >
          <HoverCard />
        </div>
        <div className="mt-8">
          <CategoryNameComponent category={post.category} />
        </div>
        <div className="mt-4">
          <p className="text-[32px] leading-none sfu-font">{post.title}</p>
        </div>
      </div>
    </Link>
  )
}

const SmallHeroPostLayout = ({ post, id }: { post: Post; id: number }) => {
  if (!post && !post?.coverImage) {
    return null // Or render a placeholder or loading state
  }
  const img = urlForImage(post.coverImage).url()
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="w-full sm:flex lg:block xl:flex ">
        <div className="w-full px-12 sm:px-0 sm:w-3/5 lg:w-full xl:w-3/5">
          <div
            style={{
              backgroundImage: `url('${img}')`,
            }}
            className="w-full mx-auto h-[380px] bg-cover bg-no-repeat bg-center"
          >
            <HoverCard />
          </div>
        </div>

        <div className="w-full sm:w-2/5 lg:w-full xl:w-2/5 sm:pl-6 lg:pl-0 xl:pl-6 lg:mt-6 xl:mt-0">
          <CategoryNameComponent category={post.category} />
          <div className="mt-4">
            <p className="text-2xl leading-none sfu-font">{post.title}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
