import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { set } from 'sanity'

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
    <div className="w-full fixed top-0 z-[999px]">
      {!isSearch ? (
        <div
          className={`sm:h-16 h-16 max-w-[1232px] mx-auto justify-between flex items-center relative transition-opacity duration-300}`}
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
        <div className="sm:h-16 h-16 max-w-[1232px] border-b-[1px] border-black justify-between mx-auto flex items-center relative transition-opacity duration-300">
          <div className="flex flex-row items-center space-x-2">
            <RiSearchLine size={18} />
            <form onSubmit={handleSearchSubmit}>
              <input
                id="search-input"
                type="text"
                placeholder="Search Magazine..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-[980px] uppercase text-lg outline-none text-black"
              />
            </form>
          </div>
          <button onClick={() => setIsSearch(false)} className="text-3xl">
            X
          </button>
        </div>
      )}

      <div className="flex flex-col mt-60">
        {MENU.map((item, index) => (
          <Link href={item.slug} key={index} className="w-fit">
            <h3 className="text-[36px] hover:underline">{item.name}</h3>
          </Link>
        ))}
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
