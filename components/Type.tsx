import { Badge } from "@/components/ui/badge";

type variantType = "default" | "secondary" | "destructive" | "outline" | null | undefined

export default function Type({ type, variant, className, onclick }: { type: string, variant?: variantType, className?: string, onclick?: () => void }) {
  return <Badge variant={variant} className={className} onClickCapture={onclick}>{type}</Badge>
}
