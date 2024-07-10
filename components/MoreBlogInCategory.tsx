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
  return (
    <section className="max-w-[1920px] mx-auto sm:px-4 xl:px-9 my-20 grid grid-cols-1 sm:gap-y-20">
      <div className="grid grid-cols-1 sm:gap-y-20">
        {posts.map((post, index) => {
          // Determine the appropriate grid class based on the index
          let gridClass = ''
          let PostComponent = PostPreview
          if (index % 5 < 3) {
            gridClass = 'grid grid-cols-1 sm:gap-y-20 sm:grid-cols-3 gap-4'
          } else {
            gridClass =
              'max-w-[1200px] mx-auto grid sm:grid-cols-2 sm:gap-[72px] md:px-[72px] xl:px-0'
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
                    description={subPost.description}
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
