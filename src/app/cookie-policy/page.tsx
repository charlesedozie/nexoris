import type { Metadata } from 'next'
import Home from "./home"
import Header from "@/components/header"


export interface SeoMeta {
  title?: string
  description?: string
  keywords?: string
  canonicalURL?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: {
    url: string
  }
}

export interface PrivacyPolicyData {
  id: number
  documentId: string
  pageTitle: string
  slug: string
  lastUpdated: string
  richText: string
  seoMeta?: SeoMeta
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface PrivacyPolicyResponse {
  data: PrivacyPolicyData
}



const API_URL = "https://studio.nexoristech.com/api/cookie-policy?populate=seoMeta"

async function getPrivacyPolicy(): Promise<PrivacyPolicyResponse> {
  const res = await fetch(API_URL, {
    cache: "no-store", // always fresh
  })

  if (!res.ok) {
    throw new Error("Failed to fetch privacy policy")
  }

  return res.json()
}

/* -------------------- SEO METADATA -------------------- */
export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPrivacyPolicy()
  const seo = data.seoMeta

  return {
    title: seo?.title || data.pageTitle,
    description: seo?.description,
    keywords: seo?.keywords,
    alternates: {
      canonical: seo?.canonicalURL,
    },
    openGraph: {
      title: seo?.ogTitle || seo?.title || data.pageTitle,
      description: seo?.ogDescription || seo?.description,
      images: seo?.ogImage?.url ? [seo.ogImage.url] : [],
      type: "article",
    },
  }
}

export default function About() {  
return (
<div>
<div className="card-surface">
<Header />
</div>
<Home />
</div>
);
}
