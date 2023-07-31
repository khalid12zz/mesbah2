import React from "react"
import { GiMagicLamp } from "react-icons/gi"
import Name from "@/components/Name"

export default function Footer() {
  return (
    <footer className="bg-slate-300">
      <div className="container font-medium flex gap-2 justify-center py-4 flex-wrap text-center">
        <GiMagicLamp className="text-2xl" />
        <p>Copyright © 2023 - All right reserved by <Name/></p>
        <p>(1 28√e 980)</p>
      </div>
    </footer>
  )
}
