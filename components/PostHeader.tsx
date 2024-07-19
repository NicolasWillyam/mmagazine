/* eslint-disable @next/next/no-img-element */
import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
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
import { useEffect, useState } from 'react'
import { client } from 'lib/sanity'
import PortraitPostHead from './PortraitPostHead'
import LandscapePostHead from './LandscapePostHead'

export default function PostHeader(props: Post) {
  const { title, description, category, coverImage, date, author, slug } = props
  const postImage = urlForImage(coverImage).url()

  const pathname = usePathname()
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`

  const [postLayout, setPostLayout] = useState<String>('')

  useEffect(() => {
    // Fetch image asset metadata
    client
      .getDocument(coverImage.asset._ref)
      .then((asset) => {
        if (asset && asset.metadata && asset.metadata.dimensions) {
          console.log('Dimensions:', asset.metadata.dimensions.height)
          console.log('Dimensions:', asset.metadata.dimensions.width)
          const imgWidth = asset.metadata.dimensions.width
          const imgHeigh = asset.metadata.dimensions.height
          if (imgWidth > imgHeigh) {
            setPostLayout('landscape')
          } else {
            setPostLayout('portrait')
          }
        }
      })
      .catch((error) => console.error('Error fetching asset metadata:', error))
  }, [coverImage])

  return (
    <div className="mb-6">
      {postLayout == 'portrait' && (
        <PortraitPostHead
          title={title}
          description={description}
          category={category}
          coverImage={coverImage}
          date={date}
          author={author}
        />
      )}
      {postLayout == 'landscape' && (
        <LandscapePostHead
          title={title}
          description={description}
          category={category}
          coverImage={coverImage}
          date={date}
          author={author}
        />
      )}
    </div>
  )
}
