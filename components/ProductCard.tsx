import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { getSanityImageConfig } from 'lib/sanity.client'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'
import { useNextSanityImage } from 'next-sanity-image'
import { HiArrowLongRight } from 'react-icons/hi2'

import { ProductProps } from './ProductComponent'
import { Button } from './ui/button'

const ProductCard: React.FC<ProductProps> = (props) => {
  const { name, brand, price, product_link, order_link, image } = props
  //   const imageProps = useNextSanityImage(getSanityImageConfig(), image.asset)
  const img = urlForImage(image).height(1000).width(1000).url()

  console.log(order_link)

  if (!image) return null
  return (
    <>
      <div className="w-full border-black/50 mb-6">
        <div className="grid grid-cols-1 gap-6">
          <Link href={product_link} target="blank">
            <Image src={img} alt={'alt'} width={500} height={500} />
          </Link>
          <div>
            <p className="text-base mb-3">{name}</p>
            <p className="font-medium">${price}</p>
            <p className="text-sm font-semibold uppercase underline underline-offset-2">
              {brand}
            </p>
          </div>
          <Link href={order_link} target="blank">
            <Button
              variant={'outline'}
              className="w-full flex items-center justify-between"
            >
              <p className="text-sm underline underline-offset-4 ">Order Now</p>
              <HiArrowLongRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProductCard
