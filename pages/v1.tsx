import NavBar from 'components/v1/NavBar'
import Overview from 'components/v1/Overview'
import PostByCategory from 'components/v1/PostByCategory'

const Home = () => {
  return (
    <>
      <div className="w-full">
        <NavBar state="black" />
        <div className="w-full flex justify-center">
          <Overview />
        </div>
        <div>
          <PostByCategory category="style" quantity={4} />
        </div>
      </div>
    </>
  )
}

export default Home
