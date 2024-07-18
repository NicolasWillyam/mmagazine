// SanityVideo.tsx
import sanityClient from '@sanity/client'
import { client } from 'lib/sanity'
import React, { useEffect, useRef, useState } from 'react'

interface VideoProps {
  _type: string
  asset: {
    _ref: string // reference to the video asset in Sanity
  }
  caption?: string
  alt?: string
  // Add other fields as needed
}

export const SanityVideo = (props: VideoProps) => {
  const { asset, caption, alt } = props
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  useEffect(() => {
    if (asset._ref) {
      client.getDocument(asset._ref).then((document) => {
        if (document.url) {
          setVideoUrl(document.url)
        }
      })
    }
  }, [asset._ref])

  if (!videoUrl) {
    return <p>Loading video...</p>
  }

  return (
    <div className="py-6">
      <video autoPlay={true} loop>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {caption && (
        <p className="mt-6 text-sm font-normal text-[#86868b] text-pretty">
          {caption}
        </p>
      )}
    </div>
  )
}

export default SanityVideo
