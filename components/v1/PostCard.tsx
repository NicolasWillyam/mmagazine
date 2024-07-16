import { IMG_SIZE } from 'constant'
import { urlForImage } from 'lib/sanity.image'
import { Category } from 'lib/sanity.queries'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type PostProps = {
  title?: string
  slug?: string
  category?: Category
  coverImage?: any
  isMain?: boolean
}

const PostCard = (props: PostProps) => {
  const { title, slug, category, coverImage, isMain } = props

  const { push } = useRouter()

  const onGoPost = () => {
    push(`/posts/${slug}`)
  }
  const onGoCategory = () => {
    push(`/${category.slug}`)
  }

  if (!category) return null

  const url = urlForImage(coverImage ?? '')
    .height(1000)
    .width(770)
    .url()

  if (isMain)
    return (
      <div className="flex flex-col space-y-4 sm:items-center max-w-[600]">
        <Image
          src={url}
          alt="thumbnail"
          width={600}
          height={780}
          className="cursor-pointer justify-self-center"
          onClick={onGoPost}
        />
        <h6 className="sm:text-md md:text-xl cursor-pointer leading-[18px] font-arial" onClick={onGoCategory}>
          {category.name}
        </h6>
        <h2 className="sm:text-xl md:text-2xl cursor-pointer font-[550] font-narrow" onClick={onGoPost}>
          {title}
        </h2>
      </div>
    )
  return (
    <div className="sm:flex flex-col md:flex-row md:space-x-4 w-full sm:justify-around">
      <Image
        src={url}
        alt="thumbnail"
        width={440}
        height={370}
        className="cursor-pointer"
        onClick={onGoPost}
      />
      <div className="flex flex-col space-y-4">
        <h6 className="sm:text-md md:text-xl cursor-pointer font-arial" onClick={onGoCategory}>
          {category.name}
        </h6>
        <h2 className="sm:text-xl md:text-2xl font-[550] cursor-pointer font-narrow" onClick={onGoPost}>
          {title}
        </h2>
      </div>
    </div>
  )
}

export default PostCard
