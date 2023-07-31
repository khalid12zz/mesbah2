import Type from "@/components/Type"

export default function Types({ types }: { types: string[] }) {
  return (
    <div>
      {types.map((type, index) => <Type key={type + index} type={type} />)}
    </div>
  )
}
