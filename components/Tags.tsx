import Tag from "@/components/Tag"

export default function Tags({ tags }: { tags: string[] }) {
  return (
    <div>
      {tags.map((tag, index) => <Tag key={tag + index} tag={tag} />)}
    </div>
  )
}

