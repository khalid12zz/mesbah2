import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import Navbar from "@/components/Navbar"
import "./globals.css"
import Providers from "@/components/providers"
import Footer from "@/components/Footer"

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-inter", display: 'swap', adjustFontFallback: false })

export const metadata: Metadata = {
  title: "sebaq Blog",
  description: "Khalid's Blog",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetBrainsMono.variable} font-sans`}
      >
        <Providers>
          <Navbar />
          <div className="container min-h-screen flex flex-col">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
