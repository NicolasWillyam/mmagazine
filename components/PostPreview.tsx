import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import { urlForImage } from 'lib/sanity.image'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import {
  CategoryNameComponent,
  PostDetails,
  PostedComponent,
  TitleComponent,
} from './PostDetailComponents'

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
    <div className="w-full">
      <Link href={`/posts/${slug}`}>
        <div
          style={{
            backgroundImage: `url('${urlForImage(coverImage).url()}')`,
          }}
          className="w-full h-[300px] xl:h-[230px] 2xl:h-[380px] bg-cover bg-no-repeat bg-center"
        />
      </Link>

      <div className="grid grid-cols-1 gap-3 py-6 px-4">
        <PostDetails
          category={category.name}
          title={title}
          slug={slug}
          date={date}
          author={author.name}
        />
      </div>
    </div>
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
      <div className="w-full">
        <Link href={`/posts/${slug}`}>
          <div
            style={{
              backgroundImage: `url('${urlForImage(coverImage).url()}')`,
            }}
            className="w-full h-[300px] sm:h-[550px] 2xl:h-[700px] bg-cover bg-no-repeat bg-center"
          />
        </Link>

        <div className="grid grid-cols-1 gap-3  py-6 px-4">
          <PostDetails
            category={category.name}
            title={title}
            slug={slug}
            date={date}
            author={author.name}
          />
        </div>
      </div>
  )
}
