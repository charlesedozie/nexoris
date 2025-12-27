import type { Article, Category } from "@/types"

const API_URL = "https://studio.nexoristech.com/api/articles"


export async function fetchAllArticles(): Promise<Article[]> {
const url = `${API_URL}?populate[category]=true&populate[coverImage]=true&populate[author][populate][authorSchema][populate][profileImage]=true&pagination[pageSize]=1000`;




  try {
    console.log("[Strapi] Fetching:", url)

    const res = await fetch(url, { next: { revalidate: 60 } })

    if (!res.ok) {
      console.error("[Strapi] HTTP Error:", res.status, await res.text())
      return []
    }

    const json = await res.json()

    if (!Array.isArray(json.data)) {
      console.error("[Strapi] Unexpected response shape:", json)
      return []
    }
console.log('json', json)
    return json.data.map((item: any): Article => {
      if (!item.headline) {
        console.warn("[Strapi] Missing headline:", item)
      }

      const category: Category | null = item.category
        ? {
            id: item.category.id,
            name: item.category.name,
            slug: item.category.slug,
            description: item.category.description,
          }
        : null

      return {
        id: item.id,
        headline: item.headline,
        slug: item.slug,
        short_title: item.short_title,
        tldr_summary: item.tldr_summary,
        excerpt: item.excerpt,
        richText: item.richText,
        documentId: item.documentId,
        category: item.category,
        author: item.author,
        updatedAt: item.updatedAt,
        coverImage: item.coverImage,
      }
    })
  } catch (error) {
    console.error("[Strapi] Fatal fetch error:", error)
    return []
  }
}
