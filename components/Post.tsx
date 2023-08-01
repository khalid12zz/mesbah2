"use client"

import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"
import Tags from "@/components/Tags"
import Type from "@/components/Type"
import { useState } from "react"
import { RoughNotation } from "react-rough-notation"

type Props = {
  post: BlogPost
}

export default function Post({ post }: Props) {
  const { slug, title, lastmod, type, description, tags } = post
  const formattedDate = getFormattedDate(lastmod)
  const [isShow, setIsShow] = useState(false)

  return (
    <div className="border-2 rounded-md p-2 cursor-pointer"
      onMouseOverCapture={() => {
        setIsShow(true)
      }}
      onMouseOutCapture={() => {
        setIsShow(false)
      }}
    >
      <div className="flex justify-between items-center">
        <RoughNotation type="highlight" animationDelay={100} color="#8cff32" show={isShow}>
          <Link
            className="underline capitalize text-2xl"
            href={`/blog/${slug}`}
          >
            {title}
          </Link>
        </RoughNotation>
        <Type type={type} className="uppercase" />
      </div>
      <p className="mb-2">{description}</p>
      <div className="flex gap-2 flex-wrap justify-between items-center">
        <Tags tags={tags} className="flex gap-1 flex-wrap" childrenClassName="uppercase" variant={"destructive"} />
        <p className="text-sm mt-1">{formattedDate}</p>
      </div>
    </div>
  )
}
