import { Button } from "@/components/ui/button"
export default function Logo() {
  return (
    <Button className="text-2xl text-transparent font-extrabold uppercase shadow-black shadow-sm" style={{
      letterSpacing: "2px",
      backgroundImage: `linear-gradient(180deg,
      #c400ff 14.3%,
      #7c83fd 14.3% 28.6%,
      #28ffbf 28.6% 42.8%,
      #00ff00 42.8% 57.1%,
      #faff00 57.1% 71.5%,
      #ff7f00 71.5% 85.7%,
      #da0037 85.7% 100%)`,
      backgroundPosition: "0 0",
      animation: "animateLogo 30s linear infinite alternate",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextStroke: "0.04em #0008"
    }}>k.mesbah</Button >
  )
}
