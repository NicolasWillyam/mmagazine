import React from 'react'
import CategoryPostsLayout from './CategoryPostsLayout'
import { menuList } from './MenuBar'

const CategoryContainer = () => {
  return (
    <>
      {menuList.map((_, id) => (
        <div key={id}>
          <CategoryPostsLayout category={_} />
        </div>
      ))}
    </>
  )
}

export default CategoryContainer
