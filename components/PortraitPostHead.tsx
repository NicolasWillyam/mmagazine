/* eslint-disable @next/next/no-img-element */
import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import { client } from 'lib/sanity'
import { urlForImage } from 'lib/sanity.image'
import type { Category, Post } from 'lib/sanity.queries'
import { usePathname } from 'next/navigation'
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from 'next-share'
import { useEffect, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa6'
import { ImLink } from 'react-icons/im'
import { LiaTelegram } from 'react-icons/lia'
import { RiFacebookFill, RiInstagramFill } from 'react-icons/ri'
import { RiTwitterXFill } from 'react-icons/ri'
import { TbMailFilled } from 'react-icons/tb'
import category from 'schemas/category'

import { CategoryNameComponent } from './PostDetailComponents'

const PortraitPostHead = (props: Post) => {
  const { title, description, category, coverImage, date, author, slug } = props
  const postImage = urlForImage(coverImage).url()
  const pathname = usePathname()
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`
  return (
    <div className="w-full mx-auto sm:flex">
      <div className="w-full sm:w-2/5 h-full sm:mt-24 mr-10 sm:border-t-[1px] sm:px-0 px-4 pb-8 sm:pb-0">
        <div className="sm:py-5 flex justify-center sm:justify-between items-center">
          <CategoryNameComponent category={category} />
          <p className="text-2xl font-light italic hidden sm:block shelley-font">
            <Date dateString={date} />
          </p>
        </div>
        <p className="mt-5 mb-8 text-4xl leading-[36px] sm:text-[52px] sm:leading-none text-center sm:text-left sfu-font">
          {title}
        </p>
        <div className="w-full grid grid-cols-1 gap-5">
          <p className="text-lg sm:text-xl font-normal leading-[22px] text-center sm:text-left sfu-font">
            {description}
          </p>
          <p className="text-center sm:text-left">
            <span className="text-xl sm:text-2xl italic mr-1 sm:mr-2 shelley-font">
              by
            </span>
            <span className="text-base font-bold">{author.name}</span>
          </p>
          <p className="text-xl text-center font-light italic sm:hidden shelley-font -mt-5 sm:mt-0">
            <Date dateString={date} />
          </p>
          <div className="w-full flex items-center justify-center sm:mb-0 gap-4 sm:justify-start">
            <FacebookShareButton url={url}>
              <RiFacebookFill size={24} />
            </FacebookShareButton>
            <PinterestShareButton url={url} media="">
              <FaPinterest size={20} />
            </PinterestShareButton>
            <LinkedinShareButton url={url}>
              <FaLinkedinIn size={20} />
            </LinkedinShareButton>
            <WhatsappShareButton url={url}>
              <FaWhatsapp size={20} />
            </WhatsappShareButton>
            <TelegramShareButton url={url}>
              <LiaTelegram size={20} />
            </TelegramShareButton>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-3/5">
        <img src={postImage} alt="image" className="w-full" />
      </div>
    </div>
  )
}

export default PortraitPostHead
