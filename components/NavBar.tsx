import { fetchCategories } from 'lib/sanity.client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoLogoInstagram } from 'react-icons/io5'
import { RiSearchLine } from 'react-icons/ri'
import { RiFacebookFill } from 'react-icons/ri'

import styles from './styles.module.css'
import BlogContainer from './BlogContainer'
import { menuList } from './MenuBar'
import Footer from './Footer'

export interface Menu {
  name: string
  slug: string
}

type Slug = {
  current: string
  _type: 'slug'
}

const NavBar = ({ state, category }: { state: string; category: string }) => {
  const [menuState, setMenuState] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  // const [menuList, setMenuList] = useState<Menu[]>([])
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
    // setMenuList(categories)
  }

  const MenuBar = ({ inActive }: { inActive: String }) => {
    return (
      <div className="block min-h-[70vh]">
        <ul className="text-[32px]  leading-[42px]  lg:text-[38px] w-full  xl:w-[365px] lg:leading-[48px] mt-20 xl:mt-28 pr-10 sfu-font tracking-tighter">
          {menuList.map((_, id) => {
            if (_.slug == category) {
              return (
                <Link key={id} href={`/${_.slug}`}>
                  <li
                    className="italic tracking w-fit cursor-pointer flex gap-1 sm:gap-3 items-end hover:text-[#EE0000] transition duration-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="w-14 h-[1px] bg-black/50 -ml-14 sm:-ml-16 mb-2 xl:mb-2.5 "></div>
                    <p className="-ml-1">{_.name}</p>
                  </li>
                </Link>
              )
            } else {
              return (
                <Link key={id} href={`/${_.slug}`}>
                  <li
                    className="hover:italic hover:text-[#EE0000] decoration-1 tracking w-fit cursor-pointer transition duration-100"
                    onClick={() => setMenuOpen(false)}
                  >
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

  return (
    <div className="w-full fixed top-0 sm:px-0 px-5 z-10">
      <BlogContainer>
        <div
          className={`sm:h-24 h-16 mx-auto flex items-center justify-end relative transition-opacity duration-300 ${
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
            className={`uppercase text-lg sm:text-2xl cursor-pointer arial-font`}
          >
            menu
          </div>
        </div>
        {/* Sidebar menu */}
        <div
          onClick={toggleMenu}
          className={`${menuOpen ? 'bg-white/70 w-full h-screen absolute backdrop-blur-sm top-0 left-0 ' : 'hidden'} `}
        ></div>
        <div className={`${styles.sidebar} ${menuOpen ? styles.open : ''}`}>
          <div className="absolute z-[999px] h-full w-full  top-0 right-0 overflow-y-auto bg-white shadow-xl px-5 sm:px-10 xl:px-[60px]">
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
              <div className="flex items-center gap-6">
                <div
                  onClick={toggleMenu}
                  className={`uppercase text-lg sm:text-2xl cursor-pointer arial-font text-${state}`}
                >
                  <Link href={'/search'}>Search</Link>
                </div>{' '}
                <div
                  onClick={toggleMenu}
                  className={`uppercase text-lg sm:text-2xl cursor-pointer arial-font text-${state}`}
                >
                  Close
                </div>
              </div>
            </div>

            <div className="max-w-[1440px] mx-auto mt-14 sm:mt-24">
              <MenuBar inActive={null} />
              <div className="w-full md:flex justify-between items-start mt-24 md:mt-16 mb-10">
                <ul className="mt-6 flex flex-col md:flex-row md:justify-center md:items-center gap-4 sm:gap-16 uppercase font-light">
                  {footerList.map((item, idx) => (
                    <Link key={idx} href={item.link}>
                      <li
                        className=" font-semibold text-sm md:text-base"
                        key={idx}
                      >
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
                <div className="mt-24 mb-4 md:my-0">
                  <div className="flex items-start justify-start md:justify-end gap-4">
                    <Link
                      target="_blank"
                      href={'https://www.facebook.com/mmagazinevietnam/'}
                    >
                      <RiFacebookFill size={24} />
                    </Link>
                    <Link
                      target="_blank"
                      href={'https://www.instagram.com/mmagvietnam/'}
                    >
                      <IoLogoInstagram size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlogContainer>
    </div>
  )
}

export default NavBar

const footerList: Footer[] = [
  { name: 'advertise', link: '/' },
  {
    name: 'about us',
    link: '/about-us',
  },

  {
    name: 'TERMS & Privacy',
    link: '/term-and-privacy',
  },
  {
    name: 'Contacts',
    link: '/contacts',
  },
]

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
