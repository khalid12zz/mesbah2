"use client"

import Link from "next/link"
import Tags from "@/components/Tags"
import Type from "@/components/Type"
import { useEffect, useState, useRef } from "react"
import { RoughNotation } from "react-rough-notation"

type Props = {
  post: BlogPost
}

export default function Post({ post }: Props) {
  const { slug, title, lastmod, type, description, tags } = post
  const [isShow, setIsShow] = useState(false)
  const postRef = useRef<HTMLDivElement>(null)

  return (
    <div
      onMouseOverCapture={() => {
        const post = postRef.current
        post?.style.setProperty("transform", "translateY(-4px)")
        post?.classList.add("shadow-xl")
        setIsShow(true)
      }}
      onMouseOutCapture={() => {
        const post = postRef.current
        post?.style.removeProperty("transform")
        post?.classList.remove("shadow-xl")
        setIsShow(false)
      }}
    >
      <div className="border-2 rounded-md p-2 cursor-pointer border-border duration-500" ref={postRef}>
        <div className="flex justify-between items-center flex-wrap">
          <RoughNotation type="highlight" animationDelay={200} color="hsl(var(--border))" show={isShow}>
            <Link
              className="capitalize text-2xl"
              href={`/blog/${slug}`}
            >
              {title}
            </Link>
          </RoughNotation>
          <Type type={type} className="uppercase" />
        </div >
        <p className="mb-2">{description}</p>
        <div className="flex gap-2 flex-wrap justify-between items-center">
          <Tags tags={tags} className="flex gap-1 flex-wrap" childrenClassName="uppercase" variant={"destructive"} />
          <p className="text-sm mt-1">{lastmod}</p>
        </div>
      </div>
    </div >
  )
}
