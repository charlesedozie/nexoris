import { Author } from "@/types"

const API_URL = "https://studio.nexoristech.com/api/authors"

export async function getAuthorByDocumentId(
  documentId: string
): Promise<Author | null> {
  console.info(`[AuthorFetch] 🔍 Fetching authors`, { documentId })

  const res = await fetch(API_URL, {
    next: { revalidate: 60 },
  })

  console.log("[DEBUG] documentId param:", documentId, typeof documentId)


  if (!res.ok) {
    console.error(`[AuthorFetch] ❌ HTTP Error`, res.status)
    throw new Error(`Failed to fetch authors`)
  }

  const json = await res.json()

  // ✅ NORMALISE RESPONSE
  const authors: Author[] = Array.isArray(json)
    ? json
    : Array.isArray(json?.data)
    ? json.data
    : []

  console.info(`[AuthorFetch] 📦 Authors received`, {
    count: authors.length,
    responseShape: Array.isArray(json) ? "array" : "object",
  })

    console.log('AUTHOR DETAL', json)

    console.log("[DEBUG] available documentIds:", authors.map(a => a.documentId))


  const author = authors.find(
    (item) => item.documentId === documentId
  )

  if (!author) {
    console.warn(`[AuthorFetch] ⚠️ Author not found`, {
      documentId,
      availableIds: authors.map(a => a.documentId),
    })
    return null
  }


  console.info(`[AuthorFetch] ✅ Author matched`, {
    name: author.name,
    documentId: author.documentId,
  })

  return author
}
