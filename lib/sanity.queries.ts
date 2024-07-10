import { groq } from 'next-sanity'

export const postFields = groq`
  _id,
  title,
  description,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
  "category": category->{name, slug},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

// export const indexQuery = groq`
// *[_type == "post"] | order(date desc, _updatedAt desc) {
//   ${postFields}
// }`

// Config by William
export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
   _id,
  title,
  description,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
  "category": category->{name, slug},
}
  `

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export const categoriesQuery = groq`
  *[_type == "category"] {
    _id,
    name,
    slug,
  }
`

export interface Author {
  name?: string
  picture?: any
}

export interface Category {
  name: string
  slug: string
}

export interface Post {
  _id?: string
  title?: string
  description?: string
  coverImage?: any
  date?: string
  _updatedAt?: string
  excerpt?: string
  author?: Author
  category?: Category
  slug?: string
  content?: any
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
