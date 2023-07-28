import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"
import { HiOutlineMenuAlt2 } from "react-icons/hi"
import Settings from "@/components/Settings"
import { BsTerminalFill } from "react-icons/bs"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-1 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 firefox:bg-opacity-90">
      <nav className="container gap-2 flex justify-between items-center py-4">
        <div className="sm:hidden">
          <Popover>
            <PopoverTrigger><HiOutlineMenuAlt2 className="text-2xl" /></PopoverTrigger>
            <PopoverContent className="w-fit">
              <Menu className="flex flex-col items-stretch justify-stretch" />
            </PopoverContent>
          </Popover>
        </div>
        <Button className="text-2xl">K.Mesbah</Button>
        <Menu className="hidden sm:flex" />
        <Settings />
      </nav>
    </header>
  )
}

const Li = ({ page }: { page: string }) => {
  return (
    <Button variant={"link"} className="justify-start">
      <Link href={`/${page === "home" ? "" : page}`} className="flex gap-1 items-center capitalize font-bold">
        <BsTerminalFill />
        {page}
      </Link>
    </Button>
  )
}

const Menu = ({ className }: { className?: string }) => {
  return (
    <menu className={`${className} font-md`}>
      <Li page={"home"} />
      <Li page={"blog"} />
      <Li page={"project"} />
      <Li page={"uses"} />
    </menu>
  )
}
