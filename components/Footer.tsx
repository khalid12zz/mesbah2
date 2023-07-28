import React from "react"
import { GiMagicLamp } from "react-icons/gi"
export default function Footer() {
  return (
    <footer className="bg-slate-300">
      <div className="container font-medium flex gap-2 justify-center py-4">
        <GiMagicLamp className="text-2xl" />
        <p>Copyright © 2023 - All right reserved by Khalid Mesbah</p>
      </div>
    </footer>
  )
}
