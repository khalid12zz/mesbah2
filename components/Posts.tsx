"use client"

import Post from "@/components/Post"
import Tag from "@/components/Tag"
import Type from "@/components/Type"
import { useEffect, useState } from "react"

interface FilterType {
  selectedType: string
  possibleTypes: string[]
  selectedTags: string[]
  possibleTags: string[]
}

const getPossibleTags = (posts: BlogPost[], except?: string[]) => {
  return posts.map(post => {
    return post.tags
  }).reduce((a, c) => {
    const newTags = c.filter((tag) => !a.includes(tag) && !except?.includes(tag))
    return a.concat(newTags);
  }).filter(tag => !except?.includes(tag))
}

const getPossibleTypes = (posts: BlogPost[]) => {
  return posts.map(post => post.type).filter((type, index, array) => array.indexOf(type) === index)
}

export default function Posts({ posts }: { posts: BlogPost[] }) {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts)

  const allTypes = getPossibleTypes(posts)
  const allTags = getPossibleTags(posts)

  const initialFilter: FilterType = {
    selectedType: "",
    possibleTypes: allTypes,
    selectedTags: [],
    possibleTags: allTags
  }

  const [filter, setFilter] = useState(initialFilter)

  useEffect(() => {
    console.log("selectedType", filter.selectedType)
    console.log("possibleTypes", filter.possibleTypes)
    console.log("selectedTags", filter.selectedTags)
    console.log("possibleTypes", filter.possibleTypes)


    // new possible tags 
    const postsFilteredByType = filter.selectedType ? posts.filter(post => post.type === filter.selectedType) : posts
    const postsFilteredByTags = postsFilteredByType.filter(post => {
      return filter.selectedTags.every(tag => post.tags.includes(tag))
    })
    const possibleTypes = filter.selectedType ? [] : getPossibleTypes(postsFilteredByTags)
    const possibleTags = getPossibleTags(postsFilteredByTags, filter.selectedTags)
    setFilter({ ...filter, possibleTags, possibleTypes })

    setFilteredPosts(postsFilteredByTags)
  }, [filter.selectedType, JSON.stringify(filter.selectedTags)])

  return (
    <section className="flex gap-4 items-start p-4 flex-wrap">
      <div className="md:sticky md:top-[72px] border-2 border-border md:max-w-[400px] p-2 rounded-md">
        <h1 className="text-xl">filter by type</h1>
        <div className="flex flex-wrap gap-2">
          {allTypes.map((type, index) =>
            <Type key={type + index} type={type} className={`cursor-pointer uppercase ${filter.selectedType === type ? "opacity-100" : filter.possibleTypes.includes(type) ? "opacity-75" : "opacity-20 pointer-events-none"}`} onclick={() => {
              setFilter({ ...filter, selectedType: filter.selectedType === type ? "" : type, possibleTypes: [] })
            }} />
          )}
        </div>
        <h1 className="text-xl mt-4">filter by tags</h1>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag, index) => <Tag key={tag + index} tag={tag} className={`cursor-pointer uppercase ${filter.selectedTags.includes(tag) ? "opacity-100" : filter.possibleTags.includes(tag) ? "opacity-75" : "opacity-20 pointer-events-none"}`}
            onclick={() => {
              const selectedTags = filter.selectedTags
              selectedTags.includes(tag) ? selectedTags.splice(selectedTags.indexOf(tag), 1) : selectedTags.push(tag)
              setFilter({ ...filter, selectedTags })
            }}
          />)}
        </div>
      </div>
      <div className="flex flex-col gap-3 flex-1">
        {filteredPosts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
