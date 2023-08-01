"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"
import { HiOutlineMenuAlt2 } from "react-icons/hi"
import Settings from "@/components/Settings"
import { BsTerminalFill } from "react-icons/bs"
import Logo from "@/components/Logo"
import { usePathname } from 'next/navigation'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[1] bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 firefox:bg-opacity-90">
      <nav className="container gap-2 flex justify-between items-center py-4">
        <div className="sm:hidden">
          <Popover>
            <PopoverTrigger><HiOutlineMenuAlt2 className="text-2xl" /></PopoverTrigger>
            <PopoverContent className="w-fit">
              <Menu className="flex flex-col items-stretch justify-stretch" />
            </PopoverContent>
          </Popover>
        </div>
        <Logo />
        <Menu className="hidden sm:flex" />
        <Settings />
      </nav>
    </header>
  )
}

const Li = ({ href, name }: { href: string, name: string }) => {
  const pathname = usePathname()
  const isActive = (href === "/" && href === pathname) || (href !== "/" && pathname.startsWith(href))

  return (
    <li className="active">
      <Link href={href} className={`flex gap-1 items-center capitalize py-2 px-4 rounded-md font-bold ${isActive ? "text-black-950" : "text-gray-500"} hover:text-gray-900 transition-colors duration-500`}>
        <BsTerminalFill />
        {name}
      </Link>
    </li>
  )
}

const Menu = ({ className }: { className?: string }) => {
  return (
    <menu className={`${className} font-md gap-1`}>
      <Li href={"/"} name={"home"} />
      <Li href={"/blog"} name={"blog"} />
      <Li href={"/projects"} name={"projects"} />
      <Li href={"/uses"} name={"uses"} />
    </menu>
  )
}
