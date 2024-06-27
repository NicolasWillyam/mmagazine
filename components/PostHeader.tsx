/* eslint-disable @next/next/no-img-element */
import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import { urlForImage } from 'lib/sanity.image'
import type { Post } from 'lib/sanity.queries'
import { ImLink } from 'react-icons/im'
import { RiFacebookFill } from 'react-icons/ri'
import { RiTwitterXFill } from 'react-icons/ri'
import { TbMailFilled } from 'react-icons/tb'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>,
) {
  const { title, coverImage, date, author, slug } = props
  const postImage = urlForImage(coverImage).height(1500).width(1000).url()
  return (
    <>
      <div className="max-w-[1560px] mx-auto flex">
        <div className="w-[42%] h-auto mt-48 flex items-center">
          <div className="text-center py-auto px-16">
            <p className="font-medium text-sm">FASHION</p>
            <p className="mt-8 mb-12 text-[52px] leading-[54px] font-regular">
              {title}
            </p>
            <p>
              <span className="text-sm italic mr-2">by</span>
              <span className="text-base font-bold">{author.name}</span>
            </p>
            <p className="text-base font-light italic">
              <Date dateString={date} />
            </p>
            <div className="mx-auto flex w-fit mt-8 gap-4">
              <div className="h-8 w-8 rounded-full border border-black flex items-center justify-center">
                <RiFacebookFill size={24} />
              </div>
              <div className="h-8 w-8 rounded-full border border-black flex items-center justify-center">
                <RiTwitterXFill size={20} />
              </div>
              <div className="h-8 w-8 rounded-full border border-black flex items-center justify-center">
                <ImLink size={18} />
              </div>
              <div className="h-8 w-8 rounded-full border border-black flex items-center justify-center">
                <TbMailFilled size={22} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[58%]">
          <img src={postImage} alt="image" className="w-full h-auto" />
          {/* <div
            style={{
              backgroundImage: `url('${postImage}')`,
            }}
            className="w-full h-full bg-cover bg-no-repeat bg-center"
          ></div> */}
        </div>
      </div>
    </>
  )
}
