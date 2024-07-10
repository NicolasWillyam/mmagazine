import {
  apiVersion,
  dataset,
  projectId,
  studioUrl,
  useCdn,
} from 'lib/sanity.api'
import {
  categoriesQuery,
  Category,
  indexQuery,
  type Post,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { createClient, type SanityClient } from 'next-sanity'

import { client } from './sanity'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
    stega: {
      enabled: preview?.token ? true : false,
      studioUrl,
    },
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export const getSanityImageConfig = () => getClient()

export async function getSettings(client: SanityClient): Promise<Settings> {
  return (await client.fetch(settingsQuery)) || {}
}

export async function getAllPosts(client: SanityClient): Promise<Post[]> {
  return (await client.fetch(indexQuery)) || []
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  const client = getClient()
  const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
  return slugs.map((slug) => ({ slug }))
}

export async function getPostBySlug(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
}

export async function getPostAndMoreStories(
  client: SanityClient,
  slug: string,
): Promise<{ post: Post; morePosts: Post[] }> {
  return await client.fetch(postAndMoreStoriesQuery, { slug })
}

export async function fetchCategories() {
  const query = `*[_type == "category"] | order(_updatedAt desc) {
    name,
    "slug": slug.current,
  }`
  const data: Category[] = await client.fetch(query)
  return data
}

export async function getPostsByCategoryName(cate: string) {
  try {
    const result = await getPostsByCategory({ params: cate })
    return result.posts.length > 0 ? result.posts : null
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getAllOfPosts() {
  try {
    const data = await client.fetch(
      `*[_type == "post"] | order(date desc, _updatedAt desc) {
        _id,
        title,
        description,
        date,
        _updatedAt,
        excerpt,
        coverImage,
        "slug": slug.current,
        "author": author->{name, picture},
        "category": category->{name, "slug": slug.current},
      }
    `,
    )

    if (data) {
      return {
        posts: data,
      }
    } else {
      throw new Error('No data found')
    }
  } catch (error) {
    console.error('Error fetching posts by category:', error)
    return {
      status: 500,
      body: new Error('Internal Server Error'),
    }
  }
}

export async function getPostsByCategory({ params }: { params: string }) {
  try {
    const data = await client.fetch(
      `*[_type == "post" && category->slug.current == '${params}'] | order(date desc) {
        _id,
        title,
        description,
        content,
        date,
        _updatedAt,
        excerpt,
        coverImage,
        "slug": slug.current,
        "author": author->{name},
        "category": category->{name},
        }`,
    )

    if (data) {
      return {
        posts: data,
      }
    } else {
      throw new Error('No data found')
    }
  } catch (error) {
    console.error('Error fetching posts by category:', error)
    return {
      status: 500,
      body: new Error('Internal Server Error'),
    }
  }
}

export async function getCategoryBySlug(slug: string) {
  const query = `
    *[_type == "category" && slug.current == $slug] {
      name
    }`
  const params = { slug }
  try {
    const category = await client.fetch(query, params)
    return category
  } catch (error) {
    console.error('Failed to fetch category:', error)
    return []
  }
}

export async function addUserToList(email: string) {
  try {
    const data = await client.create({
      _type: 'user',
      email: email,
    })
    return data
  } catch (error) {
    console.error('Failed to add user to list:', error)
    return []
  }
}

// export async function fetchCategories(): Promise<Category[]> {
//   const categories = await client.fetch(categoriesQuery)
//   return categories
// }
