import React from 'react'
import CategoryPostsLayout from './CategoryPostsLayout'
import { menuList } from './MenuBar'
import { Post } from 'lib/sanity.queries'
import AdsBlock from './AdsBlock'
import LatestPost from './LatestPost'

const CategoryContainer = ({ posts }: { posts: Post[] }) => {
  const remainingPosts = [...posts] // Make a copy of the posts array

  const filteredCategoryPosts = menuList.map((category, id) => {
    const filteredPosts = remainingPosts
      .filter((post) => post.category.name === category.name)
      .slice(0, 6)
    filteredPosts.forEach((filteredPost) => {
      const index = remainingPosts.findIndex(
        (post) => post._id === filteredPost._id,
      )
      if (index !== -1) {
        remainingPosts.splice(index, 1)
      }
    })
    return { category, filteredPosts }
  })

  return (
    <>
      {filteredCategoryPosts.map(({ category, filteredPosts }, id) => (
        <div key={id}>
          <CategoryPostsLayout posts={filteredPosts} category={category} />
        </div>
      ))}
      <LatestPost posts={remainingPosts} />
    </>
  )
}

export default CategoryContainer
