import { getPostsByCategory } from 'lib/sanity.client'
import { Category, Post } from 'lib/sanity.queries'
import { useEffect,useState } from 'react'

import PostCard from './PostCard'

const PostByCategory = ({
  category,
  quantity,
}: {
  category: string
  quantity: number
}) => {
  const [listPost, setListPost] = useState<Post[]>([])

  useEffect(() => {
    async function fetchPost() {
      const { posts } = await getPostsByCategory({ params: category })
      setListPost(posts)
    }
    fetchPost()
  }, [category])

  if (quantity == 4)
    return (
      <div>
        {listPost.map((item, index) => (
          <PostCard {...item} key={index} />
        ))}
      </div>
    )

  // return (
  //     <div>
  //         <div className="grid grid-cols-2">
  //             <PostCard {...listPost[0]} isMain={true} />
  //             <div>
  //                 <PostCard {...listPost[1]} />
  //                 <PostCard {...listPost[2]} />
  //             </div>
  //         </div>
  //         <div className="grid grid-cols-2">
  //             <div>
  //                 <PostCard {...listPost[3]} />
  //                 <PostCard {...listPost[4]} />
  //             </div>
  //             <PostCard {...listPost[5]} isMain={true} />
  //         </div>
  //     </div>
  // )
}

export default PostByCategory
