import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
  post: BlogPost
}

export default function ListItem({ post }: Props) {
  const { slug, title, lastmod, type, description, tags } = post
  const formattedDate = getFormattedDate(lastmod)

  return (
    <div className="border-2 border-clr50 rounded-md bg-clr200 p-2">
      <div className="flex justify-between items-center">
        <Link
          className="underline hover:text-clr50 capitalize text-2xl"
          href={`/blog/${slug}`}
        >
          {title}
        </Link>
        <span className="badge bg-clr900 text-clr100  badge-lg font-bold uppercase text-base">
          {type}
        </span>
      </div>
      <p className="mb-2">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {tags?.map((tag) => (
            <span
              className="badge badge-outline bg-clr300 font-semibold"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm mt-1">{formattedDate}</p>
      </div>
    </div>
  )
}
