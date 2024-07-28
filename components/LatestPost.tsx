import { Post } from 'lib/sanity.queries'
import React from 'react'
import ScrollPage from './ScroolPage'

const LatestPost = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="py-10">
      <p className="text-[40px] sm:text-[64px] sm:mb-10 mb-4 tracking-tight sfu-font">
        Latest
      </p>
      <ScrollPage moreposts={posts} typeLoader="body-post" />
    </div>
  )
}

export default LatestPost
