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
import { Container } from './BlogContainer'

const LandscapePostHead = (props: Post) => {
  const { title, description, category, coverImage, date, author, slug } = props
  const postImage = urlForImage(coverImage).url()
  const pathname = usePathname()
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`
  return (
    <Container>
      <div className="w-full">
        <div className="w-full h-full sm:mt-24 mr-10 sm:border-y-[1px] sm:px-0 px-4 pb-8 mb-14">
          <div className="grid grid-cols-2 pt-8 pb-14">
            <CategoryNameComponent category={category} />
            <p className="text-2xl font-light italic hidden sm:block text-right shelley-font">
              <Date dateString={date} />
            </p>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <p className="mb-4 text-4xl leading-[36px] sm:text-[52px] sm:leading-none text-center sm:text-left sfu-font">
                {title}
              </p>
            </div>
            <div className="text-right">
              <div className="w-3/4 ml-auto grid grid-cols-1 gap-5">
                <p className="text-center sm:text-right">
                  <span className="text-2xl italic mr-2 shelley-font">by</span>
                  <span className="text-base font-bold">{author.name}</span>
                </p>
                <p className="text-lg sm:text-xl font-normal leading-[22px] text-center sm:text-right">
                  {description}
                </p>

                <p className="text-sm text-center font-light italic sm:hidden">
                  <Date dateString={date} />
                </p>
                <div className="w-full flex items-center justify-center sm:mb-0 gap-4 sm:justify-end">
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
          </div>
        </div>

        <div className="w-full">
          <img src={postImage} alt="image" className="w-full" />
        </div>
      </div>
    </Container>
  )
}

export default LandscapePostHead
