'use client'
import { createClient } from '@sanity/client'
import { PostPreview, PostPreviewLarge } from 'components/PostPreview'
import { client } from 'lib/sanity'
import { getPostsByCategory } from 'lib/sanity.client'
import { Category, type Post, postFields } from 'lib/sanity.queries'
import { groq } from 'next-sanity'
import React, { useEffect, useState } from 'react'
import post from 'schemas/post'

export async function fetchCategories() {
  const query = `*[_type == "category"] { name }`
  const data = await client.fetch(query)
  return data
}

export const categoryList: Category[] = [
  { name: 'M for Men' },
  { name: 'Style' },
  { name: 'Beauty' },
  { name: 'Lifestyle' },
  { name: 'Add to cart' },
  { name: 'Money & Finance' },
  { name: 'Celebrity' },
  { name: 'M for Career' },
  { name: 'Watches & Jewelry' },
  { name: 'Runway' },
  { name: 'Opinion' },
  { name: 'Technology' },
  { name: 'Art & Design' },
  { name: 'M Make It' },
  { name: 'Business' },
  { name: 'Culture' },
  { name: 'Voyage & Gourmet' },
]

async function getPostsByCategoryName(cate: string) {
  try {
    const result = await getPostsByCategory({ params: cate })
    return result.posts.length > 0 ? result.posts : null
  } catch (error) {
    console.error(error)
    return null
  }
}

export default function MoreBlogInCategory({ posts }: { posts: Post[] }) {
  console.log("first", posts)
  const [categoriesWithPosts, setCategoriesWithPosts] = useState<
    { category: Category; posts: Post[] }[]
  >([])

  useEffect(() => {
    const fetchCategoriesWithPosts = async () => {
      try {
        const results = await Promise.all(
          categoryList.map(async (category) => {
            const posts = await getPostsByCategoryName(category.name)
            console.log('posts', posts)
            return posts ? { category, posts } : null
          }),
        )

        const filteredResults = results.filter((result) => result !== null) as {
          category: Category
          posts: Post[]
        }[]

        setCategoriesWithPosts(filteredResults)
      } catch (error) {
        console.error('Error fetching posts:', error)
        // Handle error state if needed
      }
    }

    fetchCategoriesWithPosts()
  }, [])

  console.log(posts[0])

  return (
    <section className="max-w-[1920px] mx-auto sm:px-9 my-20 grid grid-cols-1 gap-y-20">
      {/* {categoriesWithPosts.map(({ category, posts }, index) => {
        if (index % 2 == 0) {
          return (
            <div key={index}>
              <h2 className="text-xl ml-4 sm:ml-0 leading-tight mb-6 uppercase">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 gap-y-20 sm:grid-cols-3 gap-4">
                {posts.map((post, index) => {
                  if (index < 3) {
                    return (
                      <PostPreview
                        key={post._id}
                        title={post.title}
                        category={post.category}
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
              <h2 className="text-xl ml-4 leading-tight mb-6 uppercase">
                {category.name}
              </h2>

              <div className="max-w-[1200px] mx-auto mt-6 grid sm:grid-cols-2 gap-[72px]">
                {posts.map((post, index) => {
                  if (index < 2) {
                    return (
                      <PostPreviewLarge
                        key={post._id}
                        title={post.title}
                        category={post.category}
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
      })} */}
      <div className="grid grid-cols-1 gap-y-20">
        {posts.map((post, index) => {
          // Determine the appropriate grid class based on the index
          let gridClass = ''
          let PostComponent = PostPreview
          if (index % 5 < 3) {
            gridClass = 'grid grid-cols-1 gap-y-20 sm:grid-cols-3 gap-4'
          } else {
            gridClass =
              'max-w-[1200px] mx-auto mt-6 grid sm:grid-cols-2 gap-[72px]'
            PostComponent = PostPreviewLarge
          }

          // Determine if a new grid should start
          const isStartOfNewGrid = index % 5 === 0 || index % 5 === 3

          return isStartOfNewGrid ? (
            <div key={post._id} className={gridClass}>
              {posts
                .slice(index, index + (index % 5 < 3 ? 3 : 2))
                .map((subPost) => (
                  <PostComponent
                    key={subPost._id}
                    title={subPost.title}
                    category={subPost.category}
                    coverImage={subPost.coverImage}
                    date={subPost.date}
                    author={subPost.author}
                    slug={subPost.slug}
                    excerpt={subPost.excerpt}
                  />
                ))}
            </div>
          ) : null
        })}
      </div>
    </section>
  )
}
