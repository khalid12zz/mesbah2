import Uses2020_2021 from "@/components/Uses2020_2021";

export default async function UsesPage() {

  const delay = (s: number) => new Promise(resolve => setTimeout(resolve, s))
  await delay(5000)
  return (
    <Uses2020_2021 />
  )
}
