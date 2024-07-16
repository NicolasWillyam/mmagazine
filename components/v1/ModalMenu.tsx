import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { RiSearchLine, RiCloseFill } from 'react-icons/ri'
import { IoLogoInstagram } from 'react-icons/io5'
import { RiFacebookFill } from 'react-icons/ri'

const ModalMenu = (props) => {
  const { onClose } = props

  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearch, setIsSearch] = useState(false)

  const onSearch = () => {
    setIsSearch(true)
    document?.getElementById('search-input')?.click()
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (searchQuery.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="animate-slideIn w-full h-fit items-center flex flex-col fixed top-0 z-[999px]">
      {!isSearch ? (
        <div
          className={`sm:h-40 h-40 min-w-[1232px] mx-auto justify-between flex flex-row items-center relative transition-opacity duration-300}`}
        >
          <Link href={'/'}>
            <Image
              src={`/logo-black.svg`}
              alt="logo"
              width={40}
              height={40}
              className="absolute top-0 left-0 sm:mt-5 mt-3 cursor-pointer sm:w-[104px] sm:h-[140px]"
            />
          </Link>
          <div className="flex flex-row space-x-8">
            <div
              onClick={onSearch}
              className={`uppercase font-semibold text-base sm:text-xl cursor-pointer text-black`}
            >
              SEARCH
            </div>
            <div
              onClick={onClose}
              className={`uppercase font-semibold text-base sm:text-xl cursor-pointer text-black`}
            >
              CLOSE
            </div>
          </div>
        </div>
      ) : (
        <div className="sm:h-40 h-40 min-w-[1232px] justify-between mx-auto flex items-center relative transition-opacity duration-300">
          <div className="flex flex-row w-full items-center justify-between border-b-[1px] border-black">
            <div className='flex flex-row space-x-2 items-center'>
            <RiSearchLine size={18} />
            <form onSubmit={handleSearchSubmit}>
              <input
                id="search-input"
                type="text"
                placeholder="Search Magazine..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-[980px] uppercase text-lg outline-none text-black placeholder-black"
              />
            </form>
            </div>
            <button onClick={() => setIsSearch(false)} className="text-3xl">
            <RiCloseFill />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col min-w-[1232px]">
        {MENU.map((item, index) => (
          <Link href={item.slug} key={index} className="w-fit">
            <h3 className="text-[38px] leading-[48px] hover:underline hover:italic">{item.name}</h3>
          </Link>
        ))}
      </div>
      <div className='flex flex-row justify-between mt-6 min-w-[1232px]'>
        <ul className="text-sm flex flex-row uppercase space-x-8">
              <li className="py-1 hover:underline hover:underline-offset-4">
                <Link href={`/about`}>about</Link>
              </li>
              <li className="py-1 hover:underline hover:underline-offset-4">
                <Link href={`/contacts`}>contact</Link>
              </li>
              <li className="py-1 hover:underline hover:underline-offset-4">
                <Link href={`/`}>follow us</Link>
              </li>
            </ul>
        <div className="flex flex-row space-x-2">
                <Link href={'https://www.facebook.com/mmagazinevietnam/'}>
                  <RiFacebookFill size={24} />
                </Link>
                <Link href={'https://www.instagram.com/mmagvietnam/'}>
                  <IoLogoInstagram size={24} />
                </Link>
              </div>
        </div>

    </div>
  )
}

export default ModalMenu

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
    name: 'M Make It',
    slug: '/m-make-it',
  },
  {
    name: 'Art & Design',
    slug: '/art-design',
  },
  {
    name: 'M For Career',
    slug: '/m-for-career',
  },
  {
    name: 'M For Men',
    slug: '/m-for-men',
  },
]
