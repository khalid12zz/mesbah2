import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import Navbar from "@/components/Navbar"
import "./globals.css"
import Providers from "@/components/providers"
import Footer from "@/components/Footer"

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetBrainsMono", display: 'swap', adjustFontFallback: false })

export const metadata: Metadata = {
  title: "Khalid Mesbah",
  description: "Khalid Mesbah's Personal Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetBrainsMono.variable} font-jetBrainsMono`}
      >
        <Providers>
          <Navbar />
          <div className="container min-h-screen">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
