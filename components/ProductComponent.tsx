import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { getSanityImageConfig } from 'lib/sanity.client'
import Image from 'next/image'
import Link from 'next/link'
import { useNextSanityImage } from 'next-sanity-image'
import { HiArrowLongRight } from 'react-icons/hi2'

import ProductCard from './ProductCard'
import { Button } from './ui/button'

export interface ProductProps {
  _key?: string
  _type?: string
  type?: string
  name: string
  brand: string
  price: number
  product_link?: string
  order_link?: string
  image: {
    _type: string
    asset: {
      /* asset details */
    }
  }
  // Add other fields as needed
}

interface Props {
  caption: string
  product: ProductProps[]
}

export const ProductComponent = (props: Props) => {
  const { caption, product } = props
  // const imageProps = useNextSanityImage(getSanityImageConfig(), asset)

  // if (!imageProps) return null

  console.log(product)

  return (
    <>
      <div className="w-full py-3s sm:py-6 grid grid-cols-1 gap-6">
        <div className="border-y-[1px] border-black py-3 sm:py-6 mt-6">
          <p className="text-xl sm:text-[40px] sm:leading-[54px] font-normal">
            {caption}
          </p>
        </div>
        {product.length === 1 ? (
          <div className="w-full sm:w-1/2 mx-auto grid grid-cols-1 gap-6">
            {product.map((product) => (
              <div key={product._key}>
                <ProductCard
                  name={product.name}
                  brand={product.brand}
                  price={product.price}
                  product_link={product.product_link}
                  order_link={product.order_link}
                  image={product.image}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full grid sm:grid-cols-2 gap-6">
            {product.map((product) => (
              <div key={product._key}>
                <ProductCard
                  name={product.name}
                  brand={product.brand}
                  price={product.price}
                  product_link={product.product_link}
                  order_link={product.order_link}
                  image={product.image}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* <div className={inter.className}>
            <div className="w-full py-6 grid grid-cols-1 gap-6">
              <div className="border-y-[1px] border-black py-6 mt-6">
                <p className="text-[40px] leading-[54px]">Sleek Dresses</p>
              </div>

              <div className="w-full grid grid-cols-2">
                <div className="w-full pr-6 border-r-[1px] border-black/50">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="w-full h-[384px] bg-cover bg-no-repeat bg-center bg-[url('https://images.lvrcdn.com/Big/c/2024/06/12/b0097633-0594-4fae-bd05-672c43eb9ba0/a4f4f185-dbc3-43c3-9c4d-68b88587278b20240613090642.JPG')]"></div>
                    <div>
                      <p className="text-base">Strapless Maxi Dress, $600</p>
                      <p className="mt-1 text-xs font-bold underline underline-offset-2">
                        Matteau
                      </p>
                    </div>
                    <div className="w-full mt-6">
                      <Button
                        variant={'outline'}
                        className="flex items-center justify-between"
                      >
                        <p className="text-[12.8px] underline underline-offset-4 ">
                          Shop On Net-a-Porter
                        </p>
                        <HiArrowLongRight size={20} />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="w-full pl-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="w-full h-[384px] bg-cover bg-no-repeat bg-center bg-[url('https://images.lvrcdn.com/Big/c/2024/06/12/b0097633-0594-4fae-bd05-672c43eb9ba0/a4f4f185-dbc3-43c3-9c4d-68b88587278b20240613090642.JPG')]"></div>
                    <div>
                      <p className="text-base">Strapless Maxi Dress, $600</p>
                      <p className="mt-1 text-xs font-bold underline underline-offset-2">
                        Matteau
                      </p>
                    </div>
                    <div className="w-full mt-6">
                      <Button
                        variant={'outline'}
                        className="flex items-center justify-between"
                      >
                        <p className="text-[12.8px] underline underline-offset-4 ">
                          Shop On Net-a-Porter
                        </p>
                        <HiArrowLongRight size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
    </>
  )
}
