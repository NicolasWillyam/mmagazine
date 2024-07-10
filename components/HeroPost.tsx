import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import { urlForImage } from 'lib/sanity.image'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import { CategoryNameComponent } from './PostDetailComponents'

export default function HeroPost({ posts }: { posts: Post }) {
  const img = urlForImage(posts?.coverImage).height(1000).width(2000).url()

  return (
    <section>
      <div
        style={{
          backgroundImage: `url('${img}')`,
        }}
        className="w-full xl:h-[800px] md:h-[500px]  h-[300px] bg-cover bg-no-repeat bg-center"
      >
        <div className="hidden md:flex w-full h-full bg-black/30 items-end xl:items-center justify-center">
          <div className="w-[580px] text-center text-white py-6 grid grid-cols-1 gap-3">
            <CategoryNameComponent category={posts.category} />
            <Link href={`/posts/${posts.slug}`}>
              <p className="text-4xl xl:text-[45px] xl:leading-[54px]">
                {posts.title}
              </p>
              <p className="text-base mt-4">
                <span>
                  {' '}
                  <Date dateString={posts.date} />
                </span>{' '}
                by <span>{posts.author.name}</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full h-full flex items-center justify-center">
        <div className="w-full py-6 grid grid-cols-1 gap-3 px-4">
          <p className="uppercase text-base underline underline-offset-2">
            {posts.category.name}
          </p>
          <p className="text-[20px] leading-[24px]">{posts.title}</p>
          <p className="text-base">{posts.description}</p>
          <p className="text-sm font-light">
            <span>
              {' '}
              <Date dateString={posts.date} />
            </span>{' '}
            by <span>{posts.author.name}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
