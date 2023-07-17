"use client"
import React, {
  LegacyRef,
  MouseEventHandler,
  MutableRefObject,
  useRef,
} from "react"

export default function Resizer({ __html }: { __html: string | TrustedHTML }) {
  const element: = useRef<any>()
  const ele = document.getElementById("content")

  return (
    <article className="flex">
      <section
        className="break-words"
        dangerouslySetInnerHTML={{ __html }}
      />
      <div
    </article>
  )
}
