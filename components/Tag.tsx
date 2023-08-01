import { Badge } from "@/components/ui/badge";

type variantType = "default" | "secondary" | "destructive" | "outline" | null | undefined

export default function Tag({ tag, variant, className, onclick }: { tag: string, variant?: variantType, className?: string, onclick?: () => void }) {
  return <Badge variant={variant} className={className} onClickCapture={onclick}>{tag}</Badge>
}

