import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import "./globals.css"
import Providers from "./providers"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

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
        className={`${inter.className} relative min-h-screen flex flex-col bg-clr400`}
      >
        <svg className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light w-full h-full">
          <filter id="pedroduarteisalegend">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"
            ></feTurbulence>
          </filter>
          <rect
            className="w-full h-full"
            filter="url(#pedroduarteisalegend)"
          ></rect>
        </svg>
        <div className="container mx-auto px-4">
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  )
}
