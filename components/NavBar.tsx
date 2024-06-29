import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { RiSearchLine } from 'react-icons/ri'

interface Menu {
  category: string
}

const menuList: Menu[] = [
  {
    category: 'Style',
  },
  {
    category: 'Beauty',
  },
  {
    category: 'Lifestyle',
  },
  {
    category: 'Culture',
  },
  {
    category: 'Celebrity',
  },
  {
    category: 'Watches & Jewelry',
  },
  {
    category: 'Business',
  },
  {
    category: 'Runway',
  },
  {
    category: 'Art & Design',
  },
  {
    category: 'Voyages & Gourmet',
  },
  {
    category: 'Technology',
  },
  {
    category: 'M for Career',
  },
  {
    category: 'M for MEN',
  },
  {
    category: 'Money & Finance',
  },
  {
    category: 'Add to Cart',
  },
]

const NavBar = ({ state }: { state: string }) => {
  const [menuState, setMenuState] = useState(false)
  const handleMenuState = () => {
    setMenuState(!menuState)
  }

  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = useCallback(() => {
    if (window.scrollY > 50) {
      if (window.scrollY > lastScrollY) {
        setShow(false)
      } else if (window.scrollY < lastScrollY - 50) {
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

  return (
    <div className="w-full fixed top-0 sm:px-10 px-6">
      <div
        className={`sm:h-20 h-16 xl:max-w-[1440px] 2xl:max-w-[1920px] mx-auto flex items-center justify-end relative transition-opacity duration-300 ${
          show ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Link href={'/'}>
          <Image
            src={`/logo-${state}.svg`}
            alt="logo"
            width={28}
            height={40}
            className="absolute top-0 left-0 sm:mt-5 mt-3 cursor-pointer sm:w-[104px] sm:h-[140px]"
          />
        </Link>
        <div
          onClick={handleMenuState}
          className={`uppercase font-semibold text-base sm:text-xl mr-4 sm:mr-8 cursor-pointer text-${state}`}
        >
          MENU
        </div>
      </div>
      <div
        onClick={handleMenuState}
        className={`${menuState ? 'block' : 'hidden'} w-full h-screen `}
      >
        <div className="absolute w-[300px] h-screen top-0 right-0 overflow-y-auto bg-white shadow-xl">
          <div className="w-full p-9">
            <IoMdClose
              size={24}
              onClick={handleMenuState}
              className="ml-auto cursor-pointer"
            />
            <div className="mt-6 w-full flex justify-between items-center py-4 ">
              <input
                type="text"
                placeholder="Search"
                // value={"SEARCH"}
                className="w-44 uppercase text-lg outline-none text-black"
              />
              <RiSearchLine size={20} />
            </div>
            <div className="mt-4 w-full">
              <p className="text-sm text-gray-500 uppercase">Categories</p>
              <ul className="w-full text-lg uppercase py-2 ">
                {menuList.map((item, idx) => (
                  <li
                    key={idx}
                    className="py-1 hover:underline hover:underline-offset-4"
                  >
                    <Link href={`/${item.category}`}>{item.category}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full bg-black text-white p-9 mb-0">
            <Image
              src={'/logo-white.svg'}
              alt="logo"
              width={60}
              height={80}
              className="text-black"
            />
            <ul className="text-sm uppercase mt-6 mb-12">
              <li className="py-1 hover:underline hover:underline-offset-4">
                <Link href={`/`}>about</Link>
              </li>
              <li className="py-1 hover:underline hover:underline-offset-4">
                <Link href={`/`}>contact</Link>
              </li>
              <li className="py-1 hover:underline hover:underline-offset-4">
                <Link href={`/`}>follow us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
