import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { getSanityImageConfig } from 'lib/sanity.client'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'
import { useNextSanityImage } from 'next-sanity-image'
import { HiArrowLongRight } from 'react-icons/hi2'

import { Button } from './ui/button'
interface Props {
  name: string
  brand: string
  currency: string
  price: number
  product_link?: string
  order_link?: string
  image: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
  type: string
  // Add other fields as needed
}
const ProductCard = (props: Props) => {
  const {
    name,
    brand,
    currency,
    price,
    product_link,
    order_link,
    image,
    type,
  } = props

  // Check if image is defined and has the asset property
  if (!image || !image.asset) {
    return null // or some fallback UI if image is not available
  }

  const img = urlForImage(image).height(1000).width(1000).url()
  if (!img) return null

  return (
    <>
      <div className="w-full border-black/50 my-3 sm:my-6 h-auto">
        <div
          className={
            type == 'group'
              ? `grid grid-cols-1 gap-6`
              : `grid xl:grid-cols-2 gap-6`
          }
        >
          <Link href={product_link || undefined} target="blank">
            <Image
              src={img}
              alt={'alt'}
              width={500}
              height={500}
              className="mx-auto"
            />
          </Link>
          <div
            className={
              type == 'group'
                ? ''
                : 'h-full flex flex-col items-center justify-center'
            }
          >
            <div className="w-4/5 mx-auto">
              <div>
                <div className="text-xl mb-3 text-left">
                  {name},
                  <span className="font-semibold arial-font ml-2">
                    <span className="mr-0.5">{currency}</span>
                    {price}
                  </span>
                </div>
              </div>
              <div className="mt-5">
                {product_link ? (
                  <Link href={product_link} target="_blank">
                    <Button
                      variant={'outline'}
                      className="w-full flex items-center justify-between"
                    >
                      <p className="text-sm arial-font tracking-normal">
                        See On {brand}
                      </p>
                      <HiArrowLongRight size={20} />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant={'outline'}
                    className="w-full flex items-center justify-between"
                  >
                    <p className="text-sm arial-font tracking-normal">
                      See On {brand}
                    </p>
                    <HiArrowLongRight size={20} />
                  </Button>
                )}
              </div>

              <div className="mt-2">
                {product_link ? (
                  <Link href={product_link} target="_blank">
                    <Button
                      variant={'outline'}
                      className="w-full flex items-center justify-between"
                    >
                      <p className="text-sm arial-font tracking-normal truncate">
                        Chat with a Personal Shopper
                      </p>
                      <HiArrowLongRight size={20} />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant={'outline'}
                    className="w-full flex items-center justify-between"
                  >
                    <p className="text-sm arial-font  tracking-normal truncate">
                      Chat with a Personal Shopper
                    </p>
                    <HiArrowLongRight size={20} />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
