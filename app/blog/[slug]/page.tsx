import { ChevronLeftIcon, ChevronRightIcon, DotsVerticalIcon, RocketIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { getPostData, getSortedPostsData } from "@/lib/posts"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import Type from "@/components/Type"
import Tags from "@/components/Tags"
import { FaCalendarDay } from "react-icons/fa"
import { BiSolidTimeFive } from "react-icons/bi"
import Comment from "@/components/Comment"
import HorizontalSeparator from "@/components/HorizontalSeparator"
import VerticalSeparator from "@/components/VerticalSeparator"
import emojis from "@/lib/emojis"
import { FaHandsHelping } from "react-icons/fa"
/*
 * make the page scroll to top if the next or prev buttons are pressed
 * add a share component
 * the comments section disappears on refresh
 *
 */
export default async function Post({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const posts = getSortedPostsData()
  let previousPost: BlogPost | undefined
  let nextPost: BlogPost | undefined

  if (
    !posts.find((post, index) => {
      if (post.slug === slug) {
        previousPost = posts[index - 1]
        nextPost = posts[index + 1]
      }
      return post.slug === slug
    })
  )
    notFound()

  const { type, title, lastmod, description, tags, contentHtml } =
    await getPostData(slug)
  const estimatedTime = (contentHtml.split(" ").length / 200 + 1).toFixed()
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]


  return (
    <main className="py-5 w-full prose prose-md md:prose-lg lg:prose-xl prose-code:font-jetBrainsMono mx-auto prose-h1:first-of-type:text-title prose-h1:first-of-type:my-2 prose-p:first-of-type:text-description prose-p:first-of-type:m-0 text-foreground dark:prose-invert prose-code:overflow-x-scroll">
      <header>
        <div className="flex gap-2 items-center flex-wrap">
          <Type type={type} className="font-bold uppercase text-base" />
          <VerticalSeparator />
          <span className="flex gap-1 items-center"><BiSolidTimeFive /><span>{estimatedTime} min read</span></span>
          <span className="flex gap-1 items-center ml-auto"><FaCalendarDay /><span>{lastmod}</span></span>
        </div>
        <h1 className="font-extrabold capitalize">{`${randomEmoji} ${title}`}</h1>
        <p className="font-semibold">{description}</p>
        <Tags tags={tags} variant={"destructive"} className="flex gap-2" childrenClassName="uppercase" />
        <HorizontalSeparator />
      </header>
      <article>
        <section
          className="break-words"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
      <Alert className="my-4 border-black">
        <FaHandsHelping className="h-4 w-4 mt-[2px] text-md" />
        <AlertTitle className="font-bold text-lg capitalize">somthing wrong, misleading, or could be written better!</AlertTitle>
        <AlertDescription>
          <p className="!text-base mb-12">
            I hope you found this blog post informative and helpful. If you have any feedback or suggestions for improvement, please don&apos;t hesitate to let me know in the comments below. I welcome constructive criticism and am always looking for ways to make my writing better.
          </p>
        </AlertDescription>
      </Alert>
      <h2 className="bg-foreground text-background text-center py-2 rounded-md">Comments</h2>
      <Comment />
      <HorizontalSeparator />
      <footer className="flex gap-2 justify-center smlr:justify-between flex-wrap">
        <TooltipProvider>
          {previousPost ? (
            <Link href={previousPost.slug}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="capitalize">
                    <ChevronLeftIcon className="h-4 w-4 mr-2" />
                    previous post
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="capitalize">
                  {previousPost.title}
                </TooltipContent>
              </Tooltip>
            </Link>
          ) : (
            <Link href="/blog">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="capitalize">
                    home
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="capitalize">
                  home
                </TooltipContent>
              </Tooltip>
            </Link>
          )}
          {nextPost ? (
            <Link href={nextPost.slug}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="capitalize">
                    next post
                    <ChevronRightIcon className="h-4 w-4 ml-2" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="capitalize">
                  {nextPost.title}
                </TooltipContent>
              </Tooltip>
            </Link>
          ) : (
            <Link href="/blog">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="capitalize">
                    home
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="capitalize">
                  home
                </TooltipContent>
              </Tooltip>
            </Link>
          )}
        </TooltipProvider>
      </footer>
    </main >
  )
}
