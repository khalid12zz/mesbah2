export default async function Home() {
  const delay = (s: number) => new Promise(resolve => setTimeout(resolve, s))
  await delay(5000)

  return (
    <main className="flex-1">
      hi my name is khalid
    </main>
  )
}
