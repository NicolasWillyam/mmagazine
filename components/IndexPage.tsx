import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

import { ArticleSuggestCard } from './ArticleCard'
import Footer from './Footer'
import NavBar from './NavBar'
import { SuggestPost } from './SuggestPost'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <NavBar state="black" />
      {/* <IndexPageHead settings={settings} /> */}

      {/* <Layout preview={preview} loading={loading}> */}
      <div className="h-auto sm:min-h-screen w-full mx-auto">
        <Container>
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

          <div className="max-w-[1920px] mx-auto">
            <SuggestPost posts={morePosts} />
          </div>
          <div className="xl:max-w-[1440px] 2xl:max-w-[1920px] mx-auto">
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
        </Container>
      </div>

      {/* <IntroTemplate /> */}

      <Footer />
    </>
  )
}
