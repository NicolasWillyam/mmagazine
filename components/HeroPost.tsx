import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import { urlForImage } from 'lib/sanity.image'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function HeroPost(
  props: Pick<
    Post,
    'title' | 'category' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >,
) {
  const { title, category, coverImage, date, excerpt, author, slug } = props
  const img = urlForImage(coverImage).height(1000).width(2000).url()
  return (
    <section>
      <Link href={`/posts/${slug}`}>
        <div
          style={{
            backgroundImage: `url('${img}')`,
          }}
          className="w-full h-[800px] flex items-center justify-center bg-cover bg-no-repeat bg-center"
        >
          <div className="w-[540px] text-center text-white p-6 grid grid-cols-1 gap-3">
            <p className="uppercase text-base font-light">{category}</p>
            <p className="text-[45px] leading-[54px]">{title || 'Untitled'}</p>
            <p className="text-base font-light">
              <span>06.19.2024</span> by <span>{author.name}</span>
            </p>
          </div>
        </div>
      </Link>
    </section>
  )
}
