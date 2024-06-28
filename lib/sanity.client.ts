import {
  apiVersion,
  dataset,
  projectId,
  studioUrl,
  useCdn,
} from 'lib/sanity.api'
import {
  indexQuery,
  type Post,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  type Settings,
  settingsQuery,
  postsByCategoryQuery,
  categoriesQuery,
  Category,
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

// Update function signature and return type
// export async function getPostsByCategory(
//   client: SanityClient,
//   categoryName: string,
// ): Promise<Post[]> {
//   const posts = await client.fetch(postsByCategoryQuery, { categoryName })
//   return posts
// }

export async function getPostsByCategory({ params }: { params: string }) {
  try {
    const data = await client.fetch(
      `*[_type == "post" && category->name == '${params}'] | order(date desc) {
        _id,
        title,
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

export async function fetchCategories() {
  const categories = await client.fetch(
    `*[_type == "category"] {
    name
  }`,
  )
  return categories
}

// export async function fetchCategories(): Promise<Category[]> {
//   const categories = await client.fetch(categoriesQuery)
//   return categories
// }
