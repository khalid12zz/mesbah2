import { getSortedPostsData } from "@/lib/posts"
import Post from "@/components/ListItem"

export default function Posts() {
  const posts = getSortedPostsData()
  return (
    <section className="mx-auto max-w-2xl">
      <h2 className="text-7xl font-bold text-content p-3 text-clr900">
        The Blog
      </h2>
      <div className="alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>Warning: Invalid email address!</span>
      </div>
      <h1>filter by</h1>
      <div className="flex gap-2">
      </div>
      <div className="flex flex-col gap-3 p-4">
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
