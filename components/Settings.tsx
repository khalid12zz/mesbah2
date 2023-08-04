import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MdSettings } from "react-icons/md"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTheme } from 'next-themes'
import { useEffect } from "react"


export default function Settings() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <Popover>
      <PopoverTrigger>
        <MdSettings className="text-2xl hover:animate-spin" />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2 p-2">
        <Label htmlFor="darkMode" className="flex items-center gap-2 justify-between hover:bg-input p-2 cursor-pointer rounded-md">
          <span>Dark Mode</span>
          <Switch id="darkMode" checked={theme === "dark"} onCheckedChange={(value) => setTheme(value ? "dark" : "light")} />
        </Label>
        <Label htmlFor="animatedCursor" className="flex items-center gap-2 justify-between hover:bg-input p-2 cursor-pointer rounded-md">
          <span>Animated Cursor</span>
          <Switch id="animatedCursor" />
        </Label>
      </PopoverContent>
    </Popover >
  )
}
