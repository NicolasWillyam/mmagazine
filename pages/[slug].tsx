// pages/[slug].tsx

import Layout from 'app/layout'
import Footer from 'components/Footer'
import HeroPost from 'components/HeroPost'
import MoreBlogInCategory from 'components/MoreBlogInCategory'
import NavBar from 'components/NavBar'
import { SuggestPost } from 'components/SuggestPost'
import { fetchCategories, getPostsByCategory } from 'lib/sanity.client' // Adjust import path as per your project structure
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

export default function CategoryPosts({
  category,
  posts,
}: {
  category: string
  posts: any[]
}) {
  const router = useRouter()

  // Show loading message while fetching data
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  const [heroPost, ...morePosts] = posts || []

  return (
    <>
      <NavBar state="black" />

      <div className="min-h-screen w-full mx-auto">
        {/* <BlogHeader title={title} description={description} level={1} /> */}
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            category={heroPost.category}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}

        <div className="max-w-[1440px] mx-auto">
          <SuggestPost posts={morePosts} />
          {morePosts.length > 3 && <MoreBlogInCategory posts={morePosts} />}
        </div>
      </div>
      <Footer />
    </>
  )
}
// Assuming you have a function to fetch all categories for dynamic paths
export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await fetchCategories() // Fetch all categories
  const paths = categories.map((category) => ({
    params: { slug: category.name.toLowerCase().replace(/\s+/g, '-') }, // Adjust as per your category slug format
  }))

  return {
    paths,
    fallback: true, // Set fallback to true to render on-demand (incremental static regeneration)
  }
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.slug as string

  try {
    // Fetch posts by category using the function you defined
    const { posts } = await getPostsByCategory({ params: category })

    // Return props containing category and posts
    return {
      props: {
        category,
        posts,
      },
      revalidate: 60, // Optional: regenerate page every 60 seconds (for incremental static regeneration)
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
    // Handle error state if needed
    return {
      notFound: true, // Set notFound to true to render 404 page
    }
  }
}
