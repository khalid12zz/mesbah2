"use client"

import React, { useRef, useEffect, useState, Suspense } from 'react'
import { useTheme } from 'next-themes'

const Comment = () => {
  const commentBox = useRef<HTMLDivElement>(null)
  const { theme } = useTheme();
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    setIsloading(true)
    const commentScript = document.createElement('script')
    const commentsTheme = theme && theme === 'dark'
      ? 'github-dark'
      : 'github-light'

    commentScript.async = true
    commentScript.src = 'https://utteranc.es/client.js'
    commentScript.setAttribute('repo', "khalidmesbah/mesbah")
    commentScript.setAttribute('issue-term', 'pathname')
    commentScript.setAttribute('label', 'blog-comment')
    commentScript.setAttribute('theme', commentsTheme || 'preferred-color-scheme')
    commentScript.setAttribute('crossorigin', 'anonymous')

    if (commentBox?.current) {
      commentBox.current.appendChild(commentScript)
      setIsloading(false)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }

    const removeScript = () => {
      commentScript.remove();
      document.querySelectorAll(".utterances").forEach(el => el.remove());
    };

    return () => {
      removeScript();
    }
  }, [theme])

  // return isLoading ? <p>loading...</p> : <div ref={commentBox} />
  return <div ref={commentBox} />
}

export default Comment;

