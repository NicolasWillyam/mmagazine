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
    <>
      <div className="w-full space-y-16">
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
    </>
  )
}

export default Home

const LIST_CATEGORY = ['Style', 'Beauty', 'Culture', 'Lifestyle']
