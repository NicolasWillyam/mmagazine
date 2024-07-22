import { cn } from '@/lib/utils'
import { urlForImage } from 'lib/sanity.image'
import { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import React from 'react'
import HoverCard from './HoverCard'
import { CategoryNameComponent } from './PostDetailComponents'
import AdsBlock from './AdsBlock'
import { ADS_PER_POSTS } from 'utils/constant'

const LatestPost = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="py-10">
      <p className="text-[40px] sm:text-[64px] sm:mb-10 mb-4 tracking-tight sfu-font">
        Latest
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-10 sm:gap-8 sm:gap-y-16 xl:gap-[136px] my-10">
        {posts.map((_, id) => {
          return (
            <>
              <div key={id}>
                <Link href={`/posts/${_.slug}`}>
                  <div
                    className={cn(
                      id % 2 == 0 ? '' : 'flex-row-reverse',
                      'xl:flex gap-8 h-full',
                    )}
                  >
                    <div
                      style={{
                        backgroundImage: `url('${urlForImage(_.coverImage).url()}')`,
                      }}
                      className="w-full xl:w-1/2 sm:h-[420px] lg:h-[600px] xl:h-[860px] h-[506px] bg-cover bg-no-repeat bg-top max-w-[120vh]"
                    >
                      <HoverCard />
                    </div>

                    <div className="w-full xl:w-1/2 xl:h-full flex flex-col justify-center items-center xl:text-center xl:px-8 ">
                      <div className="mt-8 sm:mt-10 xl:mt-0 w-full">
                        <CategoryNameComponent category={_.category} />
                      </div>
                      <div className="mt-4">
                        <p className="text-[32px] xl:text-[40px] xl:text-5xl leading-none sfu-font">
                          {_.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {(id + 1) % ADS_PER_POSTS == 0 && id + 1 >= ADS_PER_POSTS && (
                <AdsBlock />
              )}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default LatestPost
