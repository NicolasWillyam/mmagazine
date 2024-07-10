/* eslint-disable @next/next/no-img-element */
import Date from 'components/PostDate'
import { urlForImage } from 'lib/sanity.image'
import { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import React from 'react'

export function ArticleSuggestCard({
  title,
  category,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="w-full flex md:flex-col lg:flex-row sm:gap-5 gap-4">
        <div
          style={{
            backgroundImage: `url('${urlForImage(coverImage).url()}')`,
          }}
          className="md:w-full md:h-[170px] w-[100px] h-[80px] lg:w-[100px] lg:h-[80px] xl:w-[150px] xl:h-[100px] lg:mt-4 xl:mt-0 bg-cover bg-no-repeat bg-center"
        />

        <div className="md:w-full lg:w-2/3 w-4/5 grid grid-cols-1 gap-2 md:px-4 lg:p-0">
          <p className="sm:block hidden uppercase md:text-base lg:text-sm underline underline-offset-2">
            {category.name}
          </p>
          <p className="text-base leading-[20px] md:text-xl lg:text-lg xl:text-xl">
            {title}
          </p>
          <p className=" text-xs md:text-sm">
            <span>
              {' '}
              <Date dateString={date} />
            </span>{' '}
            by <span>{author.name}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

type ArticleLayoutProps = {
  children: React.ReactNode
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ children }) => {
  return <div className="grid grid-cols-3 gap-5">{children}</div>
}

export default ArticleLayout
