"use client"

import { useEffect, useRef } from "react"

export default function BG() {
  const BGRef = useRef<SVGRectElement>(null)
  const onResizeHandler = (e: UIEvent) => {
    const BG = BGRef.current;
    BG?.style.setProperty("width", "100vw")
    BG?.style.setProperty("height", "100vh")
  }

  useEffect(() => {
    window.addEventListener("resize", onResizeHandler)
    return () => window.removeEventListener("resize", onResizeHandler)
  }, [])

  return (
    <svg className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light w-full h-full">
      <title>background</title>
      <filter id="pedroduarteisalegend">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.80"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect
        className="w-full h-full"
        filter="url(#pedroduarteisalegend)"
        ref={BGRef}
      />
    </svg>
  )
}
