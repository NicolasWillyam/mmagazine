import { fetchCategories } from 'lib/sanity.client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoLogoInstagram } from 'react-icons/io5'
import { RiSearchLine } from 'react-icons/ri'
import { RiFacebookFill } from 'react-icons/ri'

import styles from './styles.module.css'

export interface Menu {
  name: string
  slug: string
}

type Slug = {
  current: string
  _type: 'slug'
}

const NavBar = ({ state }: { state: string }) => {
  const [menuState, setMenuState] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [menuList, setMenuList] = useState<Menu[]>([])
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuState = () => {
    setMenuState(!menuState)
  }

  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = useCallback(() => {
    if (window.scrollY > 50) {
      if (window.scrollY > lastScrollY) {
        setShow(false)
      } else if (window.scrollY < lastScrollY - 20) {
        setShow(true)
      }
    } else {
      setShow(true)
    }
    setLastScrollY(window.scrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [controlNavbar])

  useEffect(() => {
    handleGetCategories()
  }, [])

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (searchQuery.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleGetCategories = async () => {
    const categories = await fetchCategories()
    if (!categories) return
    setMenuList(categories)
  }

  return (
    <div className="w-full fixed top-0 xl:px-10 px-6 z-[999px]">
      <div
        className={`sm:h-16 h-16 xl:max-w-[1440px] 2xl:max-w-[1920px] mx-auto flex items-center justify-end relative transition-opacity duration-300 ${
          show ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Link href={'/'}>
          <Image
            src={`/logo-${state}.svg`}
            alt="logo"
            width={40}
            height={40}
            className="absolute top-0 left-0 sm:mt-5 mt-3 cursor-pointer sm:w-[104px] sm:h-[140px]"
          />
        </Link>
        <div
          onClick={toggleMenu}
          className={`uppercase font-semibold text-base sm:text-xl cursor-pointer text-${state}`}
        >
          MENU
        </div>
      </div>
      {/* Sidebar menu */}
      <div
        onClick={toggleMenu}
        className={`${menuOpen ? 'bg-black/70 w-full h-screen absolute  top-0 left-0 ' : 'hidden'} `}
      ></div>
      <div className={`${styles.sidebar} ${menuOpen ? styles.open : ''}`}>
        <div className="absolute w-[300px] h-screen top-0 right-0 overflow-y-auto bg-white shadow-xl">
          <div className="fixed p-9 w-[300px] bg-white flex items-center justify-end">
            <IoMdClose
              size={32}
              onClick={toggleMenu}
              className="cursor-pointer fixed"
            />
          </div>
          <div className="w-full p-9">
            <div className="mt-6 w-full flex justify-between items-center py-4 ">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-44 uppercase text-lg outline-none text-black"
                />
              </form>
              <RiSearchLine size={18} />
            </div>
            <div className="mt-4 w-full">
              <p className="text-sm text-gray-500 uppercase">Categories</p>
              <ul className="w-full text-lg uppercase py-2 ">
                {MENU?.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={toggleMenu}
                    className="py-1 hover:underline hover:underline-offset-4"
                  >
                    <Link href={`${item.slug}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full bg-black text-white p-9 mb-0">
            <Link href={'/'}>
              <Image
                src={'/logo-white.svg'}
                alt="logo"
                width={60}
                height={80}
                className="text-black"
              />
            </Link>
            <ul className="text-sm uppercase mt-6 mb-12">
              <li className="py-1 hover:underline hover:underline-offset-4">
                <Link href={`/about`}>about</Link>
              </li>
              <li className="py-1 hover:underline hover:underline-offset-4">
                <Link href={`/contacts`}>contact</Link>
              </li>
              <li className="py-1 hover:underline hover:underline-offset-4 mt-4">
                <Link href={`/`}>follow us</Link>
              </li>
              <div className="flex gap-4 mt-2">
                <Link href={'https://www.facebook.com/mmagazinevietnam/'}>
                  <RiFacebookFill size={24} />
                </Link>
                <Link href={'https://www.instagram.com/mmagvietnam/'}>
                  <IoLogoInstagram size={24} />
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar

const MENU = [
  {
    name: 'Style',
    slug: '/style',
  },
  {
    name: 'Beauty',
    slug: '/beauty',
  },
  {
    name: 'Lifestyle',
    slug: '/lifestyle',
  },
  {
    name: 'Culture',
    slug: '/culture',
  },
  {
    name: 'Celebrity',
    slug: '/celebrity',
  },
  {
    name: 'Watches & Jewellery',
    slug: '/watches-jewellery',
  },
  {
    name: 'Business',
    slug: '/business',
  },
  {
    name: 'M Make It',
    slug: '/m-make-it',
  },
  {
    name: 'Runway',
    slug: '/runway',
  },
  {
    name: 'Art & Design',
    slug: '/art-design',
  },
  {
    name: 'Voyages & Gourmet',
    slug: '/voyages-gourmet',
  },
  {
    name: 'Tech',
    slug: '/tech',
  },
  {
    name: 'M For Career',
    slug: '/m-for-career',
  },
  {
    name: 'M For Men',
    slug: '/m-for-men',
  },
  {
    name: 'Money & Finance',
    slug: '/money-finance',
  },
  {
    name: 'Shopping',
    slug: '/shopping',
  },
]
