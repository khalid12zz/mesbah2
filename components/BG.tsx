export default function BG() {
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
      />
    </svg>
  )
}
