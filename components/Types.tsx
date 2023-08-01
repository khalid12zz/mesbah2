import Type from "@/components/Type"

type variantType = "default" | "secondary" | "destructive" | "outline" | null | undefined

export default function Types({ types, className, childrenClassName, onclick, variant }: { types: string[], className?: string, childrenClassName?: string, onclick?: () => void, variant?: variantType }) {
  return (
    <div className={className}>
      {types.map((type, index) => <Type key={type + index} variant={variant} type={type} className={childrenClassName} onclick={onclick} />)}
    </div>
  )
}
