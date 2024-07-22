import React from 'react'
import CategoryPostsLayout from './CategoryPostsLayout'
import { menuList } from './MenuBar'
import { Post } from 'lib/sanity.queries'
import AdsBlock from './AdsBlock'

const CategoryContainer = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      {menuList.map((category, id) => {
        // Filter posts by category.slug
        const filteredPosts = posts.filter(
          (post) => post.category.name === category.name,
        )
        return (
          <div key={id}>
            <CategoryPostsLayout posts={filteredPosts} category={category} />
          </div>
        )
      })}
    </>
  )
}

export default CategoryContainer
