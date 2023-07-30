import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MdSettings } from "react-icons/md"

export default function Settings() {
  return (
    <Popover>
      <PopoverTrigger><MdSettings className="text-2xl hover:animate-spin" /></PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  )
}
