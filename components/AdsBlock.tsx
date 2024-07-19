import Image from 'next/image'
import React from 'react'

const AdsBlock = () => {
  return (
    <div className="w-full h-auto  text-center py-2 md:px-6 xl:px-0">
      {/* <p className="text-gray-400 text-[8px] sm:text-[10px] tracking-tight mb-2">
        ADVERTISEMENT
      </p> */}
      <Image
        src={'/ads.png'}
        alt="ads-block"
        width={1000}
        height={100}
        className="mx-auto border"
      />
    </div>
  )
}

export default AdsBlock
