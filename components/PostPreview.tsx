/* eslint-disable @next/next/no-img-element */
import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import { urlForImage } from 'lib/sanity.image'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export function PostPreview({
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
      <div className="w-full">
        <div
          style={{
            backgroundImage: `url('${urlForImage(coverImage).url()}')`,
          }}
          className="w-full h-[230px] bg-cover bg-no-repeat bg-center"
        />

        <div className="grid grid-cols-1 gap-3  py-6 px-4">
          <p className="uppercase text-lg">{category.name}</p>
          <p className="text-2xl leading-[30px]">{title}</p>
          <p className="text-sm">
            <span>
              <Date dateString={date} />
            </span>{' '}
            by <span>{author.name}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export function PostPreviewLarge({
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
      <div className="w-full">
        <div
          style={{
            backgroundImage: `url('${urlForImage(coverImage).url()}')`,
          }}
          className="w-full h-[550px] bg-cover bg-no-repeat bg-center"
        />

        <div className="grid grid-cols-1 gap-3  py-6 px-4">
          <p className="uppercase text-lg">{category.name}</p>
          <p className="text-2xl leading-[30px]">{title}</p>
          <p className="text-sm">
            <span>
              <Date dateString={date} />
            </span>{' '}
            by <span>{author.name}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
