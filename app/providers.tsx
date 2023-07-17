"use client"
import { themes } from "@/lib/themes"
import { ThemeProvider } from "next-themes"
import React from "react"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" themes={themes}>
      {children}
    </ThemeProvider>
  )
}

export default Providers
