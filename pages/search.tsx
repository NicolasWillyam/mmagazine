import { Container } from 'components/BlogContainer'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import { PostPreview } from 'components/PostPreview'
import { client } from 'lib/sanity'
import { Post } from 'lib/sanity.queries'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

export async function filterPostsbyTitle(titleQuery: string): Promise<Post[]> {
  try {
    const query = `*[_type == 'post' && title match '${titleQuery}'] {
    _id,
    title,
    date,
    coverImage,
    "slug": slug.current,
    "author": author->{name},
    "category": category->{name},
    }`
    const results: Post[] = await client.fetch(query)
    return results
  } catch (error) {
    console.error('Error filtering posts:', error)
    throw new Error('Could not fetch posts from Sanity')
  }
}

const SearchPage = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('') // Initialize with empty string
  const [searchResults, setSearchResults] = useState<Post[]>([])

  useEffect(() => {
    const { q } = router.query // Retrieve the query parameter 'q' from router
    setSearchQuery(q as string) // Set searchQuery state with the retrieved value
    fetchSearchResults(q as string) // Fetch initial search results
  }, [router.query])

  // Function to fetch search results based on query
  const fetchSearchResults = async (query: string) => {
    try {
      // Simulating a delay of 500ms before fetching results
      await new Promise((resolve) => setTimeout(resolve, 100))

      const results: Post[] = await filterPostsbyTitle(query)
      setSearchResults(results)
    } catch (error) {
      console.error('Error filtering posts:', error)
      // Handle error state or notify the user
    }
  }

  // Function to handle changes in search input
  const handleSearchChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const query = event.target.value

    router.push(`/search?q=${query}`)
  }

  const handleSubmit = async () => {
    event.preventDefault() // Prevent default form submission behavior
    fetchSearchResults(searchQuery) // Fetch search results
    router.push(`/search?q=${searchQuery}`) // Update pathname based on search query
  }

  return (
    <>
      <NavBar state="black" category={null} />
      <Container>
        <div className="pt-20 sm:pt-48 w-full text-center">
          <form
            onSubmit={handleSubmit}
            className="max-w-[800px] mx-4 sm:mx-auto flex items-center border p-2 py-4 sm:p-4 sm:py-6 gap-4"
          >
            <input
              type="text"
              placeholder="Tìm kiếm nội dung"
              onChange={handleSearchChange}
              value={searchQuery}
              className="w-full text-lg uppercase outline-none"
            />
            <button type="submit">
              <IoSearchOutline size={24} />
            </button>
          </form>
          {searchQuery != '' && (
            <>
              <div className="text-xl uppercase mt-6 underline underline-offset-2 decoration-1">
                SEARCH RESULTS FOR
              </div>
              <p className="text-3xl sm:text-[55px] sm:leading-[66px] mt-3">
                {'"'}
                {searchQuery}
                {'"'}
              </p>

              <p className="text-lg sm:text-2xl mt-4 sm:mt-6">
                Found {searchResults.length} results
              </p>
            </>
          )}
        </div>

        <div className="max-w-[1920px] mx-auto sm:px-9 my-10 sm:my-20 grid grid-cols-1 gap-y-20">
          <div className="grid grid-cols-1 gap-y-20 sm:grid-cols-3 gap-4">
            {searchResults.map((post) => (
              <PostPreview
                key={post._id}
                title={post.title}
                category={post.category}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default SearchPage
