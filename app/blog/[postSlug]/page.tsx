import getFormattedDate from "@/lib/getFormattedDate"
import { getPostData, getSortedPostsData } from "@/lib/posts"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function Post({
  params: { postSlug },
}: {
  params: { postSlug: string }
}) {
  const posts = getSortedPostsData()
  let previousPost: BlogPost | undefined
  let nextPost: BlogPost | undefined

  if (
    !posts.find((post, index) => {
      if (post.slug === postSlug) {
        previousPost = posts[index - 1]
        nextPost = posts[index + 1]
      }
      return post.slug === postSlug
    })
  )
    notFound()

  const { type, title, lastmod, description, tags, contentHtml } =
    await getPostData(postSlug)
  const date = getFormattedDate(lastmod).toString()
  const estimatedTime = (contentHtml.split(" ").length / 200 + 1).toFixed()

  return (
    <main className="py-5 prose prose-2xl mx-auto prose-code:font-sans">
      <header>
        <p className="text-base flex gap-2 items-center text-clr800">
          <span className="badge bg-clr900 text-clr100  badge-lg font-bold uppercase text-base">
            {type}
          </span>
          <span>—</span>
          {estimatedTime} min read
        </p>
        <h1 className="text-7xl m-0 font-extrabold capitalize">{title}</h1>
        <p className="text-slate-900 text-2xl font-semibold">{description}</p>
        <hr className="h-px my-2 bg-clr600 border-0" />
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {tags?.map((tag) => (
              <span
                className="badge badge-outline bg-clr300 hover:bg-clr100 hover:text-clr50 cursor-pointer font-semibold"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-slate-800 text-base font-semibold">{date}</div>
        </div>
      </header>
      <article>
        <section
          className="break-words"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
      <div className="alert shadow-lg mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 className="font-bold">New message!</h3>
          <div className="text-xs">You have 1 unread message</div>
        </div>
        <button className="btn btn-sm">See</button>
      </div>
      <footer className="flex justify-between">
        {previousPost ? (
          <Link href={previousPost.slug}>
            <div className="tooltip" data-tip={previousPost.title}>
              <button className="btn btn-neutral capitalize">
                previous article
              </button>
            </div>
          </Link>
        ) : (
          <Link href="/">
            <div className="tooltip" data-tip="Home">
              <button className="btn btn-neutral capitalize">home</button>
            </div>
          </Link>
        )}
        {nextPost ? (
          <Link href={nextPost.slug}>
            <div className="tooltip" data-tip={nextPost.title}>
              <button className="btn btn-neutral capitalize">
                next article
              </button>
            </div>
          </Link>
        ) : (
          <Link href="/">
            <div className="tooltip" data-tip="Home">
              <button className="btn btn-neutral capitalize">home</button>
            </div>
          </Link>
        )}
      </footer>
    </main>
  )
}
