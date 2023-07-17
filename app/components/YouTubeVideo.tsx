import notFound from "../blog/[postSlug]/not-found"

export default function YouTubeVideo({
  params: { id },
}: {
  params: { id: string }
}) {
  if (!id) notFound()

  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  )
}
