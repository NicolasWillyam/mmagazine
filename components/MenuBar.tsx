import { fetchCategories } from 'lib/sanity.client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { Menu } from './NavBar'

export const menuList: Menu[] = [
  {
    name: 'Style',
    slug: 'style',
  },
  {
    name: 'Beauty',
    slug: 'beauty',
  },
  {
    name: 'Culture',
    slug: 'culture',
  },
  {
    name: 'Lifestyle',
    slug: 'lifestyle',
  },
  {
    name: 'Celebrity',
    slug: 'celebrity',
  },
  {
    name: 'Watches & Jewelry',
    slug: 'watches-and-jewelry',
  },
  {
    name: 'Business',
    slug: 'business',
  },
  {
    name: 'M Make It',
    slug: 'm-make-it',
  },
  {
    name: 'Runway',
    slug: 'runway',
  },
  {
    name: 'Art & Design',
    slug: 'art-and-design',
  },
  {
    name: 'Voyages & Gourmet',
    slug: 'voyages-and-gourmet',
  },
  {
    name: 'Technology',
    slug: 'technology',
  },
  {
    name: 'M for Career',
    slug: 'm-for-career',
  },
  {
    name: 'M for Men',
    slug: 'm-for-men',
  },
  {
    name: 'Money & Finance',
    slug: 'money-and-finance',
  },
  {
    name: 'Add to Cart',
    slug: 'add-to-cart',
  },
]

const MenuBar = ({ inActive }: { inActive: String }) => {
  return (
    <div className="hidden sm:block">
      <ul className="text-[24px]  leading-[32px]  lg:text-[38px] w-[208px] xl:w-[365px] lg:leading-[48px] mt-28 pr-10 sfu-font tracking-tighter">
        {menuList.slice(0, 9).map((_, id) => {
          if (_.slug == inActive) {
            return (
              <Link key={id} href={`/${_.slug}`}>
                <li className="italic tracking w-fit cursor-pointer flex items-end gap-2 hover:text-red-600 transition duration-100">
                  <div className="w-14 h-[1px] bg-black/50 -ml-16 mb-2.5 "></div>
                  {_.name}
                </li>
              </Link>
            )
          } else {
            return (
              <Link key={id} href={`/${_.slug}`}>
                <li className="hover:italic hover:text-red-600 decoration-1 tracking w-fit cursor-pointer transition duration-100">
                  {_.name}
                </li>
              </Link>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default MenuBar
