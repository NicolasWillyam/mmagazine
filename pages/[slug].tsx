// pages/[slug].tsx

import { cn } from '@/lib/utils'
import Layout from 'app/layout'
import AdsBlock from 'components/AdsBlock'
import BlogContainer, { Container } from 'components/BlogContainer'
import Footer from 'components/Footer'
import HeroPost from 'components/HeroPost'
import HoverCard from 'components/HoverCard'
import ImagePost from 'components/ImagePost'
import LoadingSpinner from 'components/LoadingSpinner'
import MenuBar from 'components/MenuBar'
import MoreBlogInCategory from 'components/MoreBlogInCategory'
import NavBar from 'components/NavBar'
import { CategoryNameComponent } from 'components/PostDetailComponents'
import { SuggestPost } from 'components/SuggestPost'
import { fetchCategories, getPostsByCategory } from 'lib/sanity.client' // Adjust import path as per your project structure
import { urlForImage } from 'lib/sanity.image'
import { Post } from 'lib/sanity.queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ADS_PER_POSTS } from 'utils/constant'
import { slugToCategory } from 'utils/function'

export default function CategoryPosts({
  category,
  posts,
}: {
  category: string
  posts: Post[]
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(true) // Loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false) // Hide loading after 2 seconds
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Show loading message while fetching data
  if (router.isFallback || loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner />
        </div>
      </div>
    )
  }
  const [heroPost, ...morePosts] = posts || []

  const headerPosts = posts.slice(0, 2) || []
  const bodyPosts = posts || []

  return (
    <>
      <Head>
        <title>{slugToCategory(category)}</title>
        <meta
          property="og:image"
          content={heroPost?.coverImage?.url || '/logo-black.svg'}
        />
        <meta name="description" content={'M MAGAZINE Vietnam'} />
      </Head>
      <NavBar state="black" category={category} />

      {posts.length > 0 ? (
        <div className="w-full mx-auto pt-24 sm:px-0 px-5">
          <BlogContainer>
            {/* <HeroPost posts={posts} /> */}

            <div className="w-full flex items-start mb-12">
              <MenuBar inActive={category} />
              <div className="w-full">
                <div className="w-fit ml-auto text-right capitalize leading-none tracking-tighter text-[50px] sm:text-[86px] xl:text-[116px]  sm:-mt-4 sfu-font hover:text-[#EE0000] hover:italic  cursor-pointer transition duration-100">
                  {slugToCategory(category)}
                </div>
                <div className="w-full grid xl:grid-cols-2 gap-12 mt-6 lg:mt-10 xl:mt-16">
                  {headerPosts.map((_, id) => (
                    <div key={id}>
                      <Link href={`/posts/${_.slug}`}>
                        <div
                          style={{
                            backgroundImage: `url('${urlForImage(_.coverImage).url()}')`,
                          }}
                          className="w-full h-[506px] sm:h-[590px] lg:h-[860px] xl:h-[590px] bg-cover bg-no-repeat bg-center"
                        >
                          <HoverCard />
                        </div>

                        <div className="mt-8">
                          <CategoryNameComponent category={_.category} />
                        </div>
                        <div className="mt-4">
                          <p className="text-[32px] leading-none sfu-font">
                            {_.title}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BlogContainer>
          <AdsBlock />

          <BlogContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-10 sm:gap-8 sm:gap-y-16 xl:gap-[136px] my-10">
              {bodyPosts.map((_, id) => {
                if (id > 1) {
                  return (
                    <>
                      <div key={id}>
                        <Link href={`/posts/${_.slug}`}>
                          <div
                            className={cn(
                              id % 2 == 0 ? '' : 'flex-row-reverse',
                              'xl:flex gap-8 h-full',
                            )}
                          >
                            <div className="w-1/2">
                              <ImagePost coverImage={_.coverImage} />
                            </div>

                            <div className="w-full xl:w-1/2 xl:h-full flex flex-col justify-center items-center xl:text-center xl:px-8 ">
                              <div className="mt-8 sm:mt-10 xl:mt-0 w-full">
                                <CategoryNameComponent category={_.category} />
                              </div>
                              <div className="mt-4">
                                <p className="text-[32px] xl:text-[40px] xl:text-5xl leading-none sfu-font">
                                  {_.title}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      {(id - 1) % ADS_PER_POSTS == 0 &&
                        id - 1 >= ADS_PER_POSTS && <AdsBlock />}
                    </>
                  )
                }
              })}
            </div>
          </BlogContainer>
        </div>
      ) : (
        <div className="min-h-screen w-full flex items-center justify-center">
          <div className="text-center">
            <div className=" flex items-center gap-3">
              <LoadingSpinner />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
// Assuming you have a function to fetch all categories for dynamic paths
export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await fetchCategories() // Fetch all categories
  const paths = categories.map((category) => ({
    params: { slug: category.slug }, // Adjust as per your category slug format
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
