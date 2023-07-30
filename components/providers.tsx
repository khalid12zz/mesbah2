"use client"
import { themes } from "@/lib/themes"
import { ThemeProvider } from "next-themes"
import React from "react"
import BG from "@/components/BG"
import ProgressBar from "@/components/ProgressBar"
import ScrollToBtns from "@/components/ScrollToBtns"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" themes={themes}>
      <ScrollToBtns />
      <BG />
      {children}
    </ThemeProvider>
  )
}

export default Providers
