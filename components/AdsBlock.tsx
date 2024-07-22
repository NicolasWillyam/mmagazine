import Image from 'next/image'
import React from 'react'

const AdsBlock = () => {
  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url('/ads.jpg')` }}
        className="max-w-[1000px] h-32 sm:h-[200px] mx-auto bg-red-500 bg-center bg-no-repeat bg-cover"
      ></div>
    </div>
  )
}

export default AdsBlock
