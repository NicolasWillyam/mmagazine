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
  console.log(coverImage)

  return (
    <section>
      <Link href={`/posts/${slug}`}>
        <div
          style={{
            backgroundImage: `url('${img}')`,
          }}
          className="w-full lg:h-[800px] h-[300px] bg-cover bg-no-repeat bg-center"
        >
          <div className="hidden lg:flex w-full h-full bg-black/30 items-center justify-center">
            <div className="w-[540px] text-center text-white p-6 grid grid-cols-1 gap-3">
              <p className="uppercase text-base underline underline-offset-2">
                {category.name}
              </p>
              <p className="text-[45px] leading-[54px]">
                {title || 'Untitled'}
              </p>
              <p className="text-base">
                <span>
                  {' '}
                  <Date dateString={date} />
                </span>{' '}
                by <span>{author.name}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:hidden w-full h-full flex items-center justify-center">
          <div className="w-full py-6 px-4 grid grid-cols-1 gap-3">
            <p className="uppercase text-base underline underline-offset-2">
              {category.name}
            </p>
            <p className="text-[20px] leading-[24px]">{title}</p>
            <p className="text-sm font-light">
              <span>
                {' '}
                <Date dateString={date} />
              </span>{' '}
              by <span>{author.name}</span>
            </p>
          </div>
        </div>
      </Link>
    </section>
  )
}
