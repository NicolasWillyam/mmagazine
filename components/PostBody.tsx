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
import { SanityImage } from './SanityImage'
import { SuggestPostInPostBody } from './SuggestPost'
import { Button } from './ui/button'

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-xl font-medium">{children}</h3>,
    normal: ({ children }) => (
      <p className="text-base my-4 sm:text-lg sm:my-6">{children}</p>
    ),
  },
}

export default function PostBody({
  posts,
  content,
}: {
  posts: Post[]
  content: any
}) {
  return (
    // <div className={`mx-auto max-w-2xl ${styles.portableText}`}>
    //   <PortableText value={content} components={myPortableTextComponents} />
    // </div>
    <div className="max-w-[1280px] mx-auto flex mt-6 sm:mt-20">
      <div className="hidden sm:block sm:w-2/5 h-auto mt-48">
        <div className="text-left py-auto max-w-[350px] mx-auto">
          <EmailForm />
          <SuggestPostInPostBody posts={posts} />
        </div>
      </div>

      <div className="sm:w-3/5 px-4 sm:px-0">
        <div className="text-lg font-light grid grid-cols-1 gap-6 sm:pr-14">
          <div className={inter.className}>
            <PortableText
              value={content}
              components={myPortableTextComponents}
            />
          </div>

          {/* <div className={inter.className}>
            <div className="w-full py-6 grid grid-cols-1 gap-6">
              <div className="border-y-[1px] border-black py-6 mt-6">
                <p className="text-[40px] leading-[54px]">Sleek Dresses</p>
              </div>

              <div className="w-full grid grid-cols-2">
                <div className="w-full pr-6 border-r-[1px] border-black/50">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="w-full h-[384px] bg-cover bg-no-repeat bg-center bg-[url('https://images.lvrcdn.com/Big/c/2024/06/12/b0097633-0594-4fae-bd05-672c43eb9ba0/a4f4f185-dbc3-43c3-9c4d-68b88587278b20240613090642.JPG')]"></div>
                    <div>
                      <p className="text-base">Strapless Maxi Dress, $600</p>
                      <p className="mt-1 text-xs font-bold underline underline-offset-2">
                        Matteau
                      </p>
                    </div>
                    <div className="w-full mt-6">
                      <Button
                        variant={'outline'}
                        className="flex items-center justify-between"
                      >
                        <p className="text-[12.8px] underline underline-offset-4 ">
                          Shop On Net-a-Porter
                        </p>
                        <HiArrowLongRight size={20} />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="w-full pl-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="w-full h-[384px] bg-cover bg-no-repeat bg-center bg-[url('https://images.lvrcdn.com/Big/c/2024/06/12/b0097633-0594-4fae-bd05-672c43eb9ba0/a4f4f185-dbc3-43c3-9c4d-68b88587278b20240613090642.JPG')]"></div>
                    <div>
                      <p className="text-base">Strapless Maxi Dress, $600</p>
                      <p className="mt-1 text-xs font-bold underline underline-offset-2">
                        Matteau
                      </p>
                    </div>
                    <div className="w-full mt-6">
                      <Button
                        variant={'outline'}
                        className="flex items-center justify-between"
                      >
                        <p className="text-[12.8px] underline underline-offset-4 ">
                          Shop On Net-a-Porter
                        </p>
                        <HiArrowLongRight size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
