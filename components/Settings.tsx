import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MdSettings } from "react-icons/md"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function Settings() {
  return (
    <Popover>
      <PopoverTrigger><MdSettings className="text-2xl hover:animate-spin" /></PopoverTrigger>
      <PopoverContent>
        <div className="flex items-center space-x-2">
          <Switch id="darkMode" />
          <Label htmlFor="darkMode">Dark Mode</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="animatedCursor" />
          <Label htmlFor="animatedCursor">Animated Cursor</Label>
        </div>
      </PopoverContent>
    </Popover >
  )
}
