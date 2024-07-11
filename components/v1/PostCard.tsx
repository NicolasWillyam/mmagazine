import { urlForImage } from 'lib/sanity.image'
import { Category } from 'lib/sanity.queries'
import Image from 'next/image'

type PostProps = {
  title?: string
  category?: Category
  coverImage?: any
  isMain?: boolean
}

const PostCard = (props: PostProps) => {
  const { title, category, coverImage, isMain } = props

  const url = urlForImage(coverImage).height(1000).width(2000).url()

  if (isMain)
    return (
      <div className="flex flex-col space-y-4">
        {/* <Image src={url} alt="thumbnail"/> */}
        <h6>{category.name}</h6>
        <h2>{title}</h2>
      </div>
    )
  return (
    <div className="flex flex-row space-x-4 w-full">
      {/* <Image src={url} alt="thumbnail" width={300} height={800}/> */}
      <div className=""></div>
      <div className="flex flex-col space-y-4">
        <h6>{category.name}</h6>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default PostCard
