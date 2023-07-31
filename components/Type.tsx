import { Badge } from "@/components/ui/badge";

type variantType = "default" | "secondary" | "destructive" | "outline" | null | undefined

export default function Type({ type, variant, className }: { type: string, variant?: variantType, className?: string }) {
  return <Badge variant={variant} className={className}>{type}</Badge>
}
