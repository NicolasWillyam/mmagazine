import Image from 'next/image'
import React from 'react'

const AdsBlock = () => {
  return (
    <div className="w-full text-center py-2 md:px-6 xl:px-0">
      {/* <p className="text-gray-400 text-[8px] sm:text-[10px] tracking-tight mb-2">
        ADVERTISEMENT
      </p> */}
      {/* <img
        src={'/ads.jpg'}
        alt="ads-block"
        width={1000}
        height={100}
        className="mx-auto border h-[330px] "
      /> */}
      <div
        style={{ backgroundImage: `url('/ads.jpg')` }}
        className="max-w-[1000px] h-[200px] mx-auto bg-red-500 bg-center bg-no-repeat"
      ></div>
    </div>
  )
}

export default AdsBlock
