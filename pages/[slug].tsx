// pages/[slug].tsx

import Layout from 'app/layout'
import { Container } from 'components/BlogContainer'
import Footer from 'components/Footer'
import HeroPost from 'components/HeroPost'
import MoreBlogInCategory from 'components/MoreBlogInCategory'
import NavBar from 'components/NavBar'
import { SuggestPost } from 'components/SuggestPost'
import { fetchCategories, getPostsByCategory } from 'lib/sanity.client' // Adjust import path as per your project structure
import { Post } from 'lib/sanity.queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function CategoryPosts({
  category,
  posts,
}: {
  category: string
  posts: Post[]
}) {
  const router = useRouter()

  // Show loading message while fetching data
  if (router.isFallback) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl">Loading...</p>
        </div>
      </div>
    )
  }
  const [heroPost, ...morePosts] = posts || []

  return (
    <>
      <Head>
        <title>{category}</title>
        <meta
          property="og:image"
          content={heroPost?.coverImage?.url || '/logo-black.svg'}
        />
        <meta name="description" content={'M MAGAZINE Vietnam'} />
      </Head>
      <NavBar state="black" />

      {posts.length > 0 ? (
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

          <Container>
            <SuggestPost posts={morePosts} />
            {morePosts.length > 3 && <MoreBlogInCategory posts={morePosts} />}
          </Container>
        </div>
      ) : (
        <div className="min-h-screen w-full flex items-center justify-center">
          <div className="text-center">
            <p className="uppercase text-4xl font-semibold mb-2">
              comming soon
            </p>
            <p>
              Hãy chờ đợi những bài viết chất lượng về {category} đến từ chúng
              tôi.
            </p>
          </div>
        </div>
      )}

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
