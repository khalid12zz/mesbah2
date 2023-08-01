import Tag from "@/components/Tag"

type variantType = "default" | "secondary" | "destructive" | "outline" | null | undefined

export default function Tags({ tags, className, childrenClassName, onclick, variant }: { tags: string[], className?: string, childrenClassName?: string, onclick?: () => void, variant?: variantType }) {
  return (
    <div className={className}>
      {tags.map((tag, index) => <Tag key={tag + index} variant={variant} tag={tag} className={childrenClassName} onclick={onclick} />)}
    </div>
  )
}

