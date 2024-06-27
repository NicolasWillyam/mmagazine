/* eslint-disable @next/next/no-img-element */
import { urlForImage } from 'lib/sanity.image'
import { Post } from 'lib/sanity.queries'
import Date from 'components/PostDate'
import Link from 'next/link'
import React from 'react'

export function ArticleSuggestCard({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="w-full flex gap-5">
        <div
          style={{
            backgroundImage: `url('${urlForImage(coverImage).url()}')`,
          }}
          className="w-[150px] h-[100px] bg-cover bg-no-repeat bg-center"
        />

        <div className="w-4/5 grid grid-cols-1 gap-2">
          <p className="uppercase text-sm underline underline-offset-2">
            Style
          </p>
          <p className="text-xl leading-[24px]">{title}</p>
          <p className="text-sm">
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

export const ArticleCard = () => {
  return (
    <div className="w-full">
      <img
        src="https://static.lvrcdn.com/content/uploads/2024/05/diary/header-4.jpg"
        alt="image"
        className="w-full h-[380px]"
      />

      <div className="grid grid-cols-1 gap-3  py-6 px-4">
        <p className="uppercase text-lg">M FOR MEN</p>
        <p className="text-2xl leading-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiuagna aliqua
        </p>
        <p className="text-sm">
          <span>06.19.2024</span> by <span>Hằng Nga</span>
        </p>
      </div>
    </div>
  )
}

type ArticleLayoutProps = {
  children: React.ReactNode
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ children }) => {
  return <div className="grid grid-cols-3 gap-5">{children}</div>
}

export default ArticleLayout
