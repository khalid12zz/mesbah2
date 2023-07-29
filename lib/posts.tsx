import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "blogPosts")

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "")

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const {
      data: { type, title, description, lastmod, draft, tags },
    } = matter(fileContents)
    const blogPost: BlogPost = {
      type,
      title,
      slug,
      description,
      lastmod,
      draft,
      tags,
    }

    return blogPost
  })
  return allPostsData.sort((a, b) => (a.lastmod < b.lastmod ? 1 : -1))
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const {
    data: { type, title, description, lastmod, draft, tags },
    content,
  } = matter(fileContents)
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  const blogPostWithHTML: BlogPost & { contentHtml: string } = {
    type,
    title,
    slug,
    description,
    lastmod,
    draft,
    tags,
    contentHtml,
  }

  return blogPostWithHTML
}
