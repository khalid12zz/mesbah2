"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronUpIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { usePathname, useSearchParams } from 'next/navigation'

// use usecallback
export default function ScrollToBtns() {
  const toTopBtn = useRef<HTMLButtonElement>(null)
  const toButtonBtn = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isTopBtnDisabled, setIsTopBtnDisabled] = useState(false)
  const [isBottomBtnDisabled, setIsBottomBtnDisabled] = useState(true)

  const scrollHandler = () => {
    setIsTopBtnDisabled(window.scrollY === 0)
    setIsBottomBtnDisabled(window.innerHeight + window.scrollY === window.document.documentElement.scrollHeight)
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [pathname, searchParams])

  return (
    <div className="flex flex-col gap-1 fixed bottom-2 right-2">
      <Button onClick={() => {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: "smooth"
        });
      }} disabled={isTopBtnDisabled} className="" ref={toTopBtn}><ChevronUpIcon /></Button>
      <Button onClick={() => {
        window.scrollTo({
          left: 0,
          top: window.document.documentElement.scrollHeight,
          behavior: "smooth"
        });
      }} disabled={isBottomBtnDisabled} className="" ref={toButtonBtn}><ChevronDownIcon /></Button>
    </div>
  )
}
