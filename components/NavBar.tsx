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
    <div className="w-full fixed top-0 sm:px-[60px] px-5 z-10">
      <div
        className={`sm:h-24 h-16 xl:max-w-[1440px] mx-auto flex items-center justify-end relative transition-opacity duration-300 ${
          show ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Link href={'/'}>
          <Image
            src={`/logo-${state}.svg`}
            alt="logo"
            width={40}
            height={40}
            className="absolute top-0 left-0 sm:mt-8 mt-3 cursor-pointer sm:w-[104px] sm:h-[140px]"
          />
        </Link>
        <div
          onClick={toggleMenu}
          className={`uppercase text-base sm:text-2xl cursor-pointer arial-font text-${state}`}
        >
          MENU
        </div>
      </div>
      {/* Sidebar menu */}
      <div
        onClick={toggleMenu}
        className={`${menuOpen ? 'bg-white/70 w-full h-screen absolute  top-0 left-0 ' : 'hidden'} `}
      ></div>
      <div className={`${styles.sidebar} ${menuOpen ? styles.open : ''}`}>
        <div className="absolute z-[999px] h-full w-full  top-0 right-0 overflow-y-auto bg-white shadow-xl sm:px-[60px] px-5">
          <div
            className={`sm:h-24 h-16 xl:max-w-[1440px] mx-auto flex items-center justify-end relative transition-opacity duration-300 `}
          >
            <Link href={'/'}>
              <Image
                src={`/logo-${state}.svg`}
                alt="logo"
                width={40}
                height={40}
                className="absolute top-0 left-0 sm:mt-8 mt-3 cursor-pointer sm:w-[104px] sm:h-[140px]"
              />
            </Link>
            <div className="flex items-center gap-10">
              <div
                onClick={toggleMenu}
                className={`uppercase text-base sm:text-2xl cursor-pointer arial-font text-${state}`}
              >
                <Link href={'/search'}>Search</Link>
              </div>{' '}
              <div
                onClick={toggleMenu}
                className={`uppercase text-base sm:text-2xl cursor-pointer arial-font text-${state}`}
              >
                Close
              </div>
            </div>
          </div>

          <div className="w-full mt-20 sm:mt-24">
            <div className="w-full mb-12">
              <ul className="text-[32px] sm:text-[38px] leading-[38px] sm:leading-[48px] sm:mt-28 sfu-font tracking-tighter">
                {menuList?.map((_, id) => (
                  <Link key={id} href={`/${_.slug}`}>
                    <li
                      onClick={toggleMenu}
                      className="hover:italic decoration-1 tracking w-fit cursor-pointer"
                    >
                      {_.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar

{
  /* <div className="mt-6 w-full flex justify-between items-center py-4 ">
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
            </div> */
}
