import { Badge } from "@/components/ui/badge";

type variantType = "default" | "secondary" | "destructive" | "outline" | null | undefined

export default function Tag({ tag, variant, className }: { tag: string, variant?: variantType, className?: string }) {
  return <Badge variant={variant} className={className}>{tag}</Badge>
}

