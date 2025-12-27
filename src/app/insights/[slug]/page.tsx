"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import DynamicContent, { useDarkMode } from "@/components/cards";
import { formatDate } from "@/utils/formatDate";
import Share from "@/components/shareButton";
import Link from "next/link";

interface Article {
  id: number;
  documentId?: string;
  slug?: string;
  headline?: string;
  excerpt?: string;
  richText?: string;
  short_title?: string;
  tldr_summary?: string;
  publishedDate?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;

  category?: Category | null;

  author?: {
    name?: string;
    authorSchema?: {
      profileImage?: { url: string };
    };
  };

  coverImage?: {
    url: string;
  };

  [key: string]: any;
}

interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ApiResponseCat {
  data: Category[];
}

interface ArticleApiResponse {
  data: Article[];
}

export default function ArticlePageClient() {
  const params = useParams();
  const slug = params?.slug as string;
  const { isDark } = useDarkMode();

  const [article, setArticle] = useState<Article | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingCat, setLoadingCat] = useState(true);

  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_URL || "https://studio.nexoristech.com";

  /* ---------------------------------------------
     FETCH ARTICLE BY SLUG
  --------------------------------------------- */
  const fetchArticle = async () => {
    try {
      const res = await fetch(
        `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate[category]=true&populate[author][populate][authorSchema][populate][profileImage]=true&populate[coverImage]=true`
      );

      if (!res.ok) throw new Error("Failed to fetch article");

      const data: ArticleApiResponse = await res.json();
      setArticle(data.data?.[0] ?? null);
    } catch (err) {
      console.error("Article fetch error:", err);
      setArticle(null);
    } finally {
      setLoading(false);
    }
  };

  /* ---------------------------------------------
     FETCH CATEGORIES
  --------------------------------------------- */
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${STRAPI_URL}/api/categories`);
        const data: ApiResponseCat = await res.json();
        setCategories(data.data);
      } catch (err) {
        console.error("Category fetch error", err);
      } finally {
        setLoadingCat(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (!slug) return;
    fetchArticle();
  }, [slug]);

  //if (loading) return <div className="p-8" />;
  //if (!article) return <div className="p-8 text-red-600">Article not found</div>;

  return (
    <>
      <div className="relative z-10">
        <div className="card-surface">
          <Header />
  {article?.headline && ( <>
          <div className="mb-70 mt-8">
            <div className="content-padding">
              <div className="my-10">
                <DynamicContent
                  isLink
                  type="btn1"
                  url="/insights"
                  title="Return to Insights"
                  css={`${isDark ? "darkModeBg text-gray-200" : "bg-white text-gray-900"} rounded-full`}
                  bicon="y"
                  biconcss=' text-gray-700 bg-gray-200 '
                  biconname="ArrowLeft"
                  teaser="Return to Insights"
                />
              </div>

              {article?.headline && (<>
                <h1 className="text-2xl sm:text-4xl font-bold my-4">
                  {article?.headline || ''}
                </h1>
           

              
                <p className="sm:text-xl mb-4">{article?.excerpt}</p>
           

              <div className="flex items-center gap-3 my-6">
                <span>Last updated: {formatDate(article?.updatedAt)}</span>

                <DynamicContent
                  type="img"
                  src={`https://studio.nexoristech.com${
                    article?.author?.authorSchema?.profileImage?.url ?? "/plc.webp"
                  }`}
                  css="w-10 h-10 rounded-full"
                  teaser={article?.headline ?? ''}
                />

                <span className="text-sm font-bold">
                  Written By: {article?.author?.name ?? "Admin"}
                </span>
              </div> </>  )}
            </div>
            
          </div></> )}
        </div>

    {article?.headline && (
        <div className="relative z-20 -mt-60 px-[5%] flex justify-center mb-10">
          <div className="bg-white rounded-3xl p-6">
            <DynamicContent
              type="img"
              src={`https://studio.nexoristech.com${article?.coverImage?.url ?? ""}`}
              css="rounded-3xl"
              teaser={article?.headline ?? ''}
            />
          </div>
        </div> )}
      </div>

      {/* CONTENT */}
        {article?.headline && ( <>
      <div className="content-padding">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="hidden md:block md:w-2/10 py-8">
            <DynamicContent type="p3" css="font-bold mb-4" title="Categories" />

            {categories.map((cat) => {
              const isActive = cat.documentId === article?.category?.documentId;

              return (
                <Link
                  key={cat.documentId}
                  href={`/insights`}
                  className={`block px-4 py-3 mb-2 ${
                    isActive ? "text-[#543CDA] font-bold" : ""
                  }`}
                >
                  {cat.name}
                </Link>
              );
            })}

            <div className="mt-18 mb-8">
              <Share
                url=""
                hashtag="NexorisTech"
                title={article?.headline ?? ""}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 pt-8 sm:pl-20">
            {article?.richText && (
              <div dangerouslySetInnerHTML={{ __html: article.richText }} />
            )}
          </main>
        </div>
      </div></>)}
    </>
  );
}
