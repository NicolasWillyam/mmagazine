import React from 'react'
import HoverCard from './HoverCard'
import { IMAGE_RATIO } from 'utils/constant'
import { urlForImage } from 'lib/sanity.image'

const ImagePost = ({ coverImage }: { coverImage: string }) => {
  const img = urlForImage(coverImage).url()
  return (
    <div
      style={{
        backgroundImage: `url('${img}')`,
        paddingBottom: `${IMAGE_RATIO}%`,
      }}
      className="relative w-full bg-cover bg-no-repeat bg-center"
    >
      <div className="absolute inset-0">
        <HoverCard />
      </div>
    </div>
  )
}

export default ImagePost
