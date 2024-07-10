'use client'
import { createClient } from '@sanity/client'
import { PostPreview, PostPreviewLarge } from 'components/PostPreview'
import { client } from 'lib/sanity'
import {
  fetchCategories,
  getPostsByCategory,
  getPostsByCategoryName,
} from 'lib/sanity.client'
import { Category, type Post, postFields } from 'lib/sanity.queries'
import { groq } from 'next-sanity'
import React, { useEffect, useState } from 'react'

export default function MoreBlogs({ posts }: { posts: Post[] }) {
  const [categoriesWithPosts, setCategoriesWithPosts] = useState<
    { category: Category; posts: Post[] }[]
  >([])
  const [loading, setLoading] = useState(true)

  const [categoryList, setCategoryList] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategoriesWithPosts = async () => {
      try {
        setLoading(false)
        const categories: Category[] = await fetchCategories() // Fetch categories
        setCategoryList(categories) // Update categoryList state with fetched categories

        // Fetch posts for each category in parallel
        const results = await Promise.all(
          categories.map(async (category) => {
            const posts = await getPostsByCategoryName(category.slug)
            return posts ? { category, posts } : null // Return category and associated posts if posts exist
          }),
        )

        const filteredResults = results.filter((result) => result !== null) as {
          category: Category
          posts: Post[]
        }[]

        setCategoriesWithPosts(filteredResults)
      } catch (error) {
        setLoading(false)
        console.error('Error fetching posts:', error)
        // Handle error state if needed
      }
    }

    fetchCategoriesWithPosts()
  }, [])

  return (
    <section className="max-w-[1920px] mx-auto sm:px-4 xl:px-9 my-20 grid grid-cols-1 sm:gap-y-20">
      {categoriesWithPosts.map(({ category, posts }, index) => {
        if (index % 2 == 0) {
          return (
            <div key={index}>
              <CategoryNameStyle categoryName={category.name} />
              <div className="grid grid-cols-1 sm:gap-y-20 sm:grid-cols-3 gap-4">
                {posts.map((post, index) => {
                  if (index < 3) {
                    return (
                      <PostPreview
                        key={post._id}
                        title={post.title}
                        description={post.description}
                        category={category}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                      />
                    )
                  }
                })}
              </div>
            </div>
          )
        } else {
          return (
            <div key={index}>
              <CategoryNameStyle categoryName={category.name} />
              <div className="max-w-[1200px] mx-auto grid sm:grid-cols-2 sm:gap-[72px] md:px-[72px] xl:px-0">
                {posts.map((post, index) => {
                  if (index < 2) {
                    return (
                      <PostPreviewLarge
                        key={post._id}
                        title={post.title}
                        description={post.description}
                        category={category}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                      />
                    )
                  }
                })}
              </div>
            </div>
          )
        }
      })}
    </section>
  )
}

const CategoryNameStyle = ({ categoryName }: { categoryName: String }) => {
  return (
    <div className="bg-gray-100 sm:bg-white">
      <p className="text-xl ml-4 sm:ml-0 leading-tight py-6 uppercase ">
        {categoryName}
      </p>
    </div>
  )
}
