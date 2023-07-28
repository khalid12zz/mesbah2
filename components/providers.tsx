"use client"
import { themes } from "@/lib/themes"
import { ThemeProvider } from "next-themes"
import React from "react"
import BG from "@/components/BG"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" themes={themes}>
      <BG/>
      {children}
    </ThemeProvider>
  )
}

export default Providers
