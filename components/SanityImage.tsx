import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { getSanityImageConfig } from 'lib/sanity.client'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

interface Props {
  asset: SanityImageSource
  alt: string
  caption?: string
}

export const SanityImage = (props: Props) => {
  const { asset, alt, caption } = props
  const imageProps = useNextSanityImage(getSanityImageConfig(), asset)

  if (!imageProps) return null

  return (
    <figure>
      <div className="w-fit mx-auto">
        <Image
          {...imageProps}
          alt={alt}
          sizes="(max-width: 800px) 100vw, 800px"
          className="mb-4 mt-4 xl:mt-8 mx-auto"
          loading="lazy"
        />
        {caption && (
          <figcaption className="mb-8 mx-auto text-sm font-normal text-[#86868b] text-pretty text-left epilogue tracking-tight">
            {caption}
          </figcaption>
        )}
      </div>
    </figure>
  )
}
