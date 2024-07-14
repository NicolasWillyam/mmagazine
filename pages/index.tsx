// import IndexPage from 'components/IndexPage'
// import PreviewIndexPage from 'components/PreviewIndexPage'
// import { readToken } from 'lib/sanity.api'
// import { getAllPosts, getClient, getSettings } from 'lib/sanity.client'
// import { Post, Settings } from 'lib/sanity.queries'
// import { GetStaticProps } from 'next'
// import type { SharedPageProps } from 'pages/_app'

// interface PageProps extends SharedPageProps {
//   posts: Post[]
//   settings: Settings
// }

// interface Query {
//   [key: string]: string
// }

// export default function Page(props: PageProps) {
//   const { posts, settings } = props

//   return <IndexPage posts={posts} settings={settings} />
// }

// export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
//   const { draftMode = false } = ctx
//   const client = getClient(draftMode ? { token: readToken } : undefined)

//   const [settings, posts = []] = await Promise.all([
//     getSettings(client),
//     getAllPosts(client),
//   ])

//   return {
//     props: {
//       posts,
//       settings,
//       draftMode,
//       token: draftMode ? readToken : '',
//     },
//   }
// }

import ListLatestPost from 'components/v1/LatestPost'
import NavBar from 'components/v1/NavBar'
import Overview from 'components/v1/Overview'
import PostByCategory from 'components/v1/PostByCategory'
import { useState, useEffect } from 'react'
import { getAllOfPosts } from 'lib/sanity.client'
import { Post } from 'lib/sanity.queries'

const Home = () => {

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const { posts } = await getAllOfPosts()
      if (!posts) return
      setPosts(posts.slice(0, 6))
    }
    fetchPosts()
  }, [])

  return (
    <div className='flex justify-center'>
      <div className="w-full max-w-[1920px] justify-center space-y-16">
        <NavBar state="black" />
        <div className="w-full flex justify-center">
          <Overview />
        </div>
        <div className="w-full flex flex-col items-center space-y-16">
          {LIST_CATEGORY.map((item, index) =>
            index % 2 == 0 ? (
              <PostByCategory key={index} category={item} quantity={6} />
            ) : (
              <PostByCategory key={index} category={item} quantity={4} />
            ),
          )}
        </div>
        <div className="w-full flex flex-col items-center">
          <ListLatestPost posts={posts} isLatest/>
        </div>
      </div>
    </div>
  )
}

export default Home

const LIST_CATEGORY = ['Style', 'Beauty', 'Culture', 'Lifestyle']