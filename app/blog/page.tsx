import { getSortedPostsData } from "@/lib/posts"
import Post from "@/components/ListItem"
import Tags from "@/components/Tags"

export default function Posts() {
  console.log('start')
  const posts = getSortedPostsData()
  console.log('end')
  let tags: string[] = [];

  tags = posts.reduce((a, c) => {
    const newTags = c.tags.filter((tag) => !a.includes(tag))
    console.log(a, c.tags, newTags)
    return a.concat(newTags);
  }, tags)

  console.log(tags)
  console.log('finish')

  return (
    <section className="mx-auto max-w-2xl">
      <h1>filter by tags</h1>
      <div className="flex gap-2">
        <Tags tags={tags} />
      </div>
      <div className="flex flex-col gap-3 p-4">
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
