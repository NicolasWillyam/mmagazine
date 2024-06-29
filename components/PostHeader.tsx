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
import category from 'schemas/category'
import { AiOutlineMail } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa6'
import { LiaTelegram } from 'react-icons/lia'

export default function PostHeader(
  props: Pick<
    Post,
    'title' | 'category' | 'coverImage' | 'date' | 'author' | 'slug'
  >,
) {
  const { title, coverImage, date, author, slug } = props
  const postImage = urlForImage(coverImage).height(1500).width(1000).url()
  return (
    <>
      <div className="max-w-[1560px] mx-auto sm:flex">
        <div className="w-full sm:w-[42%] h-auto sm:mt-48 mt-24 flex items-center">
          <div className="sm:text-center py-auto sm:px-16 px-4">
            <p className="sm:font-medium sm:text-sm text-lg uppercase">
              {category.name}
            </p>
            <p className=" mt-4 sm:mt-8 mb-24 sm:mb-12 mr-8 sm:mr-0 text-2xl leading-[30px] sm:text-[52px] sm:leading-[54px]">
              {title}
            </p>
            <div className="flex flex-row-reverse gap-1 justify-end sm:block">
              <p>
                <span className="text-sm italic sm:mr-2 mr-1">by</span>
                <span className="text-base font-bold">{author.name}</span>
              </p>
              <p className="text-base font-light italic">
                <Date dateString={date} />
              </p>
            </div>
            <div className="sm:mx-auto flex items-center w-fit sm:mt-8 sm:mb-0 my-4 gap-4">
              <AiOutlineMail size={20} />
              <RiFacebookFill size={24} />
              <FaPinterest size={20} />
              <FaLinkedinIn size={20} />
              <FaWhatsapp size={20} />
              <LiaTelegram size={20} />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[58%]">
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
