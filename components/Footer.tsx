import Image from 'next/image'
import React from 'react'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { RiFacebookFill } from 'react-icons/ri'
import { IoLogoInstagram } from 'react-icons/io5'
import { RiTwitterXFill } from 'react-icons/ri'

interface Footer {
  name: string
}
const footerList: Footer[] = [
  {
    name: 'about',
  },
  {
    name: 'Contacts',
  },
  {
    name: 'Privacy Policy',
  },
  {
    name: 'Cookie Policy',
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
          <RiFacebookFill size={24} />
        </div>
        <ul className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 capitalize font-light">
          {footerList.map((item, idx) => (
            <li className="underline underline-offset-[12px]" key={idx}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
