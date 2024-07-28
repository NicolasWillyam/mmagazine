/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import Error from 'next/error'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import Image from 'next/image'
import { PortableText, type PortableTextReactComponents } from 'next-sanity'
import React from 'react'
import { ImLink } from 'react-icons/im'
import { RiFacebookFill } from 'react-icons/ri'
import { RiTwitterXFill } from 'react-icons/ri'
import { TbMailFilled } from 'react-icons/tb'

import NavBar from './NavBar'

const garamond = Cormorant_Garamond({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
})
const inter = Inter({ subsets: ['latin'] })
import { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'

import EmailForm from './EmailForm'
import styles from './PostBody.module.css'
import { ProductComponent } from './ProductComponent'
import { SanityImage } from './SanityImage'
import SanityVideo from './SanityVideo'
import { SuggestPostInPostBody } from './SuggestPost'
import { Button } from './ui/button'
import InstagramEmbed from './InstagramEmbed'
import FacebookEmbed from './FaceBookEmbed'
import TikTokEmbed from './TikTokEmbed'
import TwitterEmbed from './TwitterEmbed'
import EmbedComponent from './EmbedComponent'

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />
    },
    video: ({ value }) => {
      return <SanityVideo {...value} />
    },
    product: ({ value }) => {
      return <ProductComponent {...value} />
    },
    'embed-post': ({ value }) => {
      return <EmbedComponent {...value} />
    },

    // product: ProductComponent,
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-normal">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-normal">{children}</h3>,
    normal: ({ children }) => (
      <p className="text-xl my-4 xl:text-2xl sm:my-6 custom-selection">
        {children}
      </p>
    ),
  },
}

export default function PostBody({
  order,
  posts,
  content,
}: {
  order: number
  posts: Post[]
  content: any
}) {
  return (
    <div className="w-full flex">
      <div className="hidden sm:block sm:w-2/5 h-auto mt-48 mr-[60px]">
        {order == 0 && (
          <div className="text-left py-auto max-w-[350px] mx-auto">
            <EmailForm />
            <SuggestPostInPostBody posts={posts} />
          </div>
        )}
      </div>

      <div className="sm:w-3/5  px-4 sm:px-0">
        <div className="text-lg font-light grid grid-cols-1 gap-6 sfu-font text-justify">
          <div>
            {/* <InstagramEmbed link="https://www.instagram.com/p/C9wLCE9tIwF/?igsh=MWozdmdvdnJiYmlxbQ%3D%3D&fbclid=IwZXh0bgNhZW0CMTAAAR1QODAAOJ-3BwpsE_g9-z3SNyPZVKR1nUPxPiQ30wQGpC4sn0wfboaobso_aem_X9Hli3zteWqVDvdEYHm9yQ" />
            <FacebookEmbed href="https://www.facebook.com/mmagazinevietnam/posts/pfbid0AH381fUkR2XtfyJ1A42TaZugQCVKtJEEZU3GnyDZgmzCFBzisNyfddkh5QkQkUmAl" />
            <TikTokEmbed href="https://www.tiktok.com/@louisvuitton/video/7394726134627175713?lang=vi-VN" />
            <TwitterEmbed href="https://twitter.com/chainlink/status/1810710624395268315" /> */}

            <PortableText
              value={content}
              components={myPortableTextComponents}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
