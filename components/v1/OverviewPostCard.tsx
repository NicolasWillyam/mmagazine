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

const OverviewPostCard = (props: PostProps) => {
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
      <div className="flex flex-col space-y-4 w-full">
        <Image
          src={url}
          alt="thumbnail"
          width={492}
          height={640}
          className="cursor-pointer"
          onClick={onGoPost}
        />
        <h6 className="text-xl cursor-pointer" onClick={onGoCategory}>
          {category.name}
        </h6>
        <h2 className="text-2xl font-medium cursor-pointer" onClick={onGoPost}>
          {title}
        </h2>
      </div>
    )
  return (
    <div className="flex flex-row space-x-4 w-full">
      <Image
        src={url}
        alt="thumbnail"
        width={295}
        height={368}
        className="cursor-pointer"
        onClick={onGoPost}
      />
      <div className="flex flex-col space-y-4">
        <h6 className="text-xl cursor-pointer" onClick={onGoCategory}>
          {category.name}
        </h6>
        <h2 className="text-2xl font-medium cursor-pointer" onClick={onGoPost}>
          {title}
        </h2>
      </div>
    </div>
  )
}

export default OverviewPostCard
