"use client";

import { useEffect, useState } from "react";
import type { Article, Category } from "@/types";

const API_URL = "https://studio.nexoristech.com/api/articles";

export default function useFetchAllArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
        const url = `${API_URL}
?sort=updatedAt:desc
&populate[category]=true
&populate[coverImage]=true
&populate[author][populate][authorSchema][populate][profileImage]=true`;


// const url = `${API_URL}?populate[category]=true&populate[coverImage]=true&populate[author][populate][authorSchema][populate][profileImage]=true&pagination[pageSize]=1000`;

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const json = await res.json();
        if (!Array.isArray(json.data)) {
          throw new Error("Unexpected response shape");
        }

        const mapped: Article[] = json.data.map((item: any) => {
          const category: Category | null = item.category
            ? {
                id: item.category.id,
                name: item.category.name,
                slug: item.category.slug,
                description: item.category.description,
              }
            : null;

          return {
            id: item.id,
            headline: item.headline,
            slug: item.slug,
            short_title: item.short_title,
            tldr_summary: item.tldr_summary,
            excerpt: item.excerpt,
            richText: item.richText,
            documentId: item.documentId,
            category: item.category.name,
            author: item.author,
            updatedAt: item.updatedAt,
            coverImage: item.coverImage,
          };
        });

        setArticles(mapped);
      } catch (err: any) {
        console.error("[Strapi] Client fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return { articles, loading, error };
}
