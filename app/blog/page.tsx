import { getSortedPostsData } from "@/lib/posts"
import Posts from "@/components/Posts"

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <Posts posts={posts}/>
  )
}
