import { getAllOfPosts } from 'lib/sanity.client'
import { urlForImage } from 'lib/sanity.image'
import { Category, Post } from 'lib/sanity.queries'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type PostProps = {
  title?: string
  slug?: string;
  category?: Category
  coverImage?: any
  direct?: number
}

const ListLatestPost = ({posts, isLatest}: {posts: Post[], isLatest?: boolean}) => {
  return (
    <section>
      {
        !!isLatest && <h2 className="text-4xl">Latest</h2>
      }
      <div className="flex flex-col space-y-16">
        {posts?.map((post, index) => (
          <LatestPost {...post} direct={index % 2} key={index} />
        ))}
      </div>
    </section>
  )
}

const LatestPost = (props: PostProps) => {
  const { title, slug, category, coverImage, direct } = props

  const { push } = useRouter()

  const onGoPost = () => {
    push(`/posts/${slug}`)
  }
  const onGoCategory = () => {
    push(`/${category.slug}`)
  }

  if (!category) return null

  const url = urlForImage(coverImage ?? '')
    .height(1000)
    .width(2000)
    .url()

  if (direct)
    return (
      <div className="flex flex-row space-x-8 cursor-pointer">
        <Image src={url} alt="thumbnail" width={600} height={300} onClick={onGoPost}/>
        <div className="flex flex-col w-[600px] items-center justify-center px-16">
          <h4 onClick={onGoCategory}>{category.name}</h4>
          <h2 className="text-3xl font-medium text-center" onClick={onGoPost}>{title}</h2>
        </div>
      </div>
    )

  return (
    <div className="flex flex-row space-x-8 cursor-pointer">
      <div className="flex flex-col w-[600px] items-center justify-center px-16">
        <h4 onClick={onGoCategory}>{category.name}</h4>
        <h2 className="text-3xl font-medium text-center" onClick={onGoPost}>{title}</h2>
      </div>
      <Image src={url} alt="thumbnail" width={600} height={300} onClick={onGoPost}/>
    </div>
  )
}

export default ListLatestPost
