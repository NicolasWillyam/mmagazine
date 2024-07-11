import Link from 'next/link'

const Overview = (props) => {
  return (
    <div className="w-3/4 max-h-screen">
      <div className="flex flex-col mt-60">
        {LIST_CATEGORY.map((item, index) => (
          <Link href={item.href} key={index} className="w-fit">
            <h3 className="text-[36px]">{item.label}</h3>
          </Link>
        ))}
      </div>
      <div></div>
    </div>
  )
}

export default Overview

export const getStaticProps = async () => {}

const LIST_CATEGORY = [
  {
    label: 'Style',
    href: '/style',
  },
  {
    label: 'Beauty',
    href: '/beauty',
  },
  {
    label: 'Culture',
    href: '/culture',
  },
  {
    label: 'Lifestyle',
    href: '/lifestyle',
  },
  {
    label: 'Voyages & Gourmet',
    href: '/voyages-gourmet',
  },
  {
    label: 'Art & Design',
    href: '/art-design',
  },
  {
    label: 'Business',
    href: '/business',
  },
  {
    label: 'Add to Cart',
    href: '/add-to-cart',
  },
]
