import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section className="max-w-[1920px] mx-auto px-8 mt-20">
      <h2 className="text-xl leading-tight tracking-tighter mb-6 uppercase">
        STYLE
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
