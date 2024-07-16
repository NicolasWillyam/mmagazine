import { fetchCategories } from 'lib/sanity.client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoLogoInstagram } from 'react-icons/io5'
import { RiSearchLine } from 'react-icons/ri'
import { RiFacebookFill } from 'react-icons/ri'

import styles from '../styles.module.css'
import ModalMenu from './ModalMenu'

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
    <div className="w-full max-w-[1920px] fixed top-0 z-[999px]">
      <div
        className={`sm:h-16 h-16 w-3/4 mx-auto justify-between flex items-center relative transition-opacity duration-300 ${
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
        // onClick={toggleMenu}
        className={`${menuOpen ? 'bg-white w-full h-screen absolute items-center top-0 left-0 ' : 'hidden'} `}
      >
        <ModalMenu onClose={toggleMenu} />
      </div>
    </div>
  )
}

export default NavBar
