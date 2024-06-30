import Image from 'next/image'
import React from 'react'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { RiFacebookFill } from 'react-icons/ri'
import { IoLogoInstagram } from 'react-icons/io5'
import { RiTwitterXFill } from 'react-icons/ri'
import Link from 'next/link'

interface Footer {
  name: string
  link: string
}
const footerList: Footer[] = [
  {
    name: 'about',
    link: '/about',
  },
  {
    name: 'Contacts',
    link: '/contacts',
  },
  {
    name: 'Privacy Policy',
    link: '/privacy-policy',
  },
]

const Footer = () => {
  return (
    <div className="w-full p-12 pb-8 bg-black">
      <div className="w-fit mx-auto">
        <Image src="./logo-white.svg" width={104} height={140} alt="logo" />
      </div>
      <div className="mt-16 text-white">
        <div className="flex items-center justify-center gap-4 ">
          <Link
            target="_blank"
            href={'https://www.facebook.com/mmagazinevietnam/'}
          >
            <RiFacebookFill size={24} />
          </Link>
          <Link target="_blank" href={'https://www.instagram.com/mmagvietnam/'}>
            <IoLogoInstagram size={24} />
          </Link>
        </div>
        <ul className="mt-6 flex justify-center items-center gap-4 sm:gap-6 capitalize font-light">
          {footerList.map((item, idx) => (
            <Link key={idx} href={item.link}>
              <li className="underline underline-offset-[12px]" key={idx}>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
