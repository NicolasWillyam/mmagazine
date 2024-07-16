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
    // product: ProductComponent,
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-normal">{children}</h2>,
    h3: ({ children }) => <h3 className="text-1xl font-normal">{children}</h3>,
    normal: ({ children }) => (
      <p className="text-base my-4 sm:text-xl sm:my-6">{children}</p>
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
    <div className="w-full flex mt-6 sm:mt-12">
      <div className="hidden sm:block sm:w-2/5 h-auto mt-48 mr-[60px]">
        {order == 0 && (
          <div className="text-left py-auto max-w-[350px] mx-auto">
            <EmailForm />
            <SuggestPostInPostBody posts={posts} />
          </div>
        )}
      </div>

      <div className="sm:w-3/5 px-4 sm:px-0">
        <div className="text-lg font-light grid grid-cols-1 gap-6">
          <div>
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
