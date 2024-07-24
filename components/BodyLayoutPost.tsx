import Link from 'next/link'
import React from 'react'
import { Post } from 'lib/sanity.queries'
import { cn } from '@/lib/utils'
import { CategoryNameComponent } from './PostDetailComponents'
import ImagePost from './ImagePost'

const BodyLayoutPost = ({ id, post }: { id: number; post: Post }) => {
  return (
    <div key={id}>
      <Link href={`/posts/${post.slug}`}>
        <div
          className={cn(
            id % 2 == 0 ? '' : 'flex-row-reverse',
            'xl:flex gap-8 h-full',
          )}
        >
          <div className="w-1/2">
            <ImagePost coverImage={post.coverImage} />
          </div>

          <div className="w-full xl:w-1/2 xl:h-full flex flex-col justify-center items-center xl:text-center xl:px-8 ">
            <div className="mt-8 sm:mt-10 xl:mt-0 w-full">
              <CategoryNameComponent category={post.category} />
            </div>
            <div className="mt-4">
              <p className="text-[32px] xl:text-[40px] xl:text-5xl leading-none sfu-font">
                {post.title}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BodyLayoutPost
