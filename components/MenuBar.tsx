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
    name: 'Celebrity',
    slug: 'celebrity',
  },
  {
    name: 'Lifestyle',
    slug: 'lifestyle',
  },
  {
    name: 'Voyages & Gourmet',
    slug: 'voyages-gourmet',
  },
  {
    name: 'Art & Design',
    slug: 'art-design',
  },
  {
    name: 'Business',
    slug: 'business',
  },
  {
    name: 'Add to Cart',
    slug: 'add-to-cart',
  },
]

const MenuBar = ({ inActive }: { inActive: String }) => {
  //   const [menuList, setMenuList] = useState<Menu[]>([])

  //   useEffect(() => {
  //     handleGetCategories()
  //   }, [])

  //   const handleGetCategories = async () => {
  //     const categories = await fetchCategories()
  //     if (!categories) return
  //     setMenuList(categories)
  //   }
  //   console.log('categories', menuList)
  console.log(inActive)

  const [acvtive, setActive] = useState<Boolean>(false)

  return (
    <div className="max-w-[365px]">
      <ul className="text-[38px] w-[365px] leading-[48px] mt-28">
        {menuList.slice(0, 9).map((_, id) => {
          if (_.slug == inActive) {
            return (
              <Link key={id} href={`/${_.slug}`}>
                <li className="italic tracking w-fit cursor-pointer flex items-end gap-2">
                  <div className="w-14 h-[1px] bg-black/50 -ml-16 mb-2.5"></div>
                  {_.name}
                </li>
              </Link>
            )
          } else {
            return (
              <Link key={id} href={`/${_.slug}`}>
                <li className="hover:italic hover:underline decoration-1 hover:underline-offset-2 tracking w-fit cursor-pointer">
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
