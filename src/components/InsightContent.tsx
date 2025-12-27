'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from "next/image";
import DynamicContent, { Title, useDarkMode } from "@/components/cards";
import Header from "@/components/header";
import SearchBlog from "@/components/searchBlog";
import { formatDate } from "@/utils/formatDate";
import Articles from "@/components/articleList1";
import FetchArticles from "@/components/fetchArticlesC";
import Link from 'next/link';
import type { Article } from "@/types";

interface InsightData {
id: number;
documentId: string;
pageTitle: string;
introText: string;
createdAt: string;
updatedAt: string;
publishedAt: string;
}

interface Category {
id: number;
documentId: string;
name: string;
slug?: string;
description?: string;
createdAt?: string;
updatedAt?: string;
publishedAt?: string;
}

interface ApiResponse {
data: InsightData;
meta: {};
}

interface ApiResponseCat {
data: Category[];
meta: {
pagination: {
page: number;
pageSize: number;
pageCount: number;
total: number;
};
};
}

const ITEMS_PER_LOAD = 12;

const InsightContent: React.FC = () => {
  const { articles, loading: loadingArticles } = FetchArticles();
  const { isDark } = useDarkMode();

  const [insight, setInsight] = useState<InsightData | null>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const [pageTitle, setTitle] = useState<string | null>(null);
const [pageIntro, setTag] = useState<string | null>(null);const [getArticle, setGetArticle] = useState<Article | null>(null);

  const [filters, setFilters] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [categories, setCategories] = useState<Category[]>([]);

  const firstArticle = articles?.[0] ?? null;

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_LOAD);
  }, [filters]);


  
useEffect(() => {
const fetchInsight = async () => {
try {
setLoading(true);
const response = await fetch('https://studio.nexoristech.com/api/insight?populate=seoMeta');
if (!response.ok) {
throw new Error('Failed to fetch insight');
}
const data: ApiResponse = await response.json();

// Print the returned data to console        
setInsight(data.data);
} catch (err) {
const errorMessage = err instanceof Error ? err.message : 'An error occurred';
setError(errorMessage);
console.error('Fetch Error:', errorMessage);
} finally {
setLoading(false);
}
};

fetchInsight();
}, []);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://studio.nexoristech.com/api/categories');
        const data = await res.json();
        setCategories(data.data || []);
      } catch (err) {
        console.error('Category fetch error', err);
      }
    };
    fetchCategories();
  }, []);

  // ✅ Correct filtering logic
  const filteredArticles = useMemo(() => {
  if (!filters.length) return articles;

  return articles.filter((article: Article) => {
    const category =
      typeof article.category === "string"
        ? article.category
        : article.category?.name;

    return category ? filters.includes(category) : false;
  });
}, [articles, filters]);


 

  // Pagination
  const visibleArticles = filteredArticles.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  const toggleFilter = (category: string) => {
    setFilters((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => setFilters([]);

  

if(insight){
if(pageTitle != insight.pageTitle && pageIntro != insight.introText){
setTitle(insight.pageTitle);
setTag(insight.introText);
} 
}

return (
<>
<div className="relative z-10">
<div className="card-surface">
<Header />

<div className='mt-8'>
<>
<div className="relative z-10">
<div className="flex items-center justify-center mt-3 mb-5 sm:mb-8 sm:mt-12">
<Title title={'Trusted by '} counter='100' title2='+ Teams' />
</div>

<div className="text-center my-8 sub-title">
<DynamicContent type="h2" title={pageTitle || ''} />
<div className="mb-14" dangerouslySetInnerHTML={{ __html: pageIntro || '' }} />
</div>


<div className="mt-4 mb-8">
<div className="w-full flex flex-col sm:flex-row justify-center gap-4">
{/* RIGHT BUTTON — Explore Nexoris Cloud */}
<SearchBlog />
</div>
</div>
</div>
</>   
</div>

      {/* FEATURED ARTICLE */}
      {firstArticle && (
        <div className="grid grid-cols-1 sm:grid-cols-[48%_48%] gap-12 my-16 content-padding">
          <Link href={`/insights/${firstArticle.slug}`}>
            <DynamicContent
              type="img"
              src={`https://studio.nexoristech.com${firstArticle.coverImage?.url}`}
              title={firstArticle.headline}
teaser={firstArticle.headline}
              css=" rounded-3xl "
            />
          </Link>

          <div>
            <span className="px-4 font-medium py-2 rounded-full bg-[#BBB1F033] border border-[#7663E1] text-[#7663E1]">
           {typeof firstArticle.category === "string"
  ? firstArticle.category
  : firstArticle.category?.name}

            </span>

            <div>
             <Link
href={`/insights/${firstArticle?.slug}`}
aria-label={firstArticle.headline}
className="inline-block focus:outline-none" 
> <DynamicContent type="h2" css='my-6' title={firstArticle.headline} /></Link>
<DynamicContent type="p" title={firstArticle.excerpt}  /> 
</div>        
<div className="flex justify-between mt-6">
<div>
<div className="flex items-center gap-3">
<Image
src={`https://studio.nexoristech.com${firstArticle?.author?.authorSchema?.profileImage?.url}`}
alt={firstArticle.headline}
width={50}
height={50}
className="w-12 h-12 rounded-full object-cover"
priority   // ← IMPORTANT FOR LCP
placeholder="empty"
/>

<div className="flex items-center justify-center text-start h-full">
<span className="text-base pr-3">
<b>{firstArticle?.author?.name}</b>
<br />{formatDate(firstArticle?.updatedAt)} • 4 min read
</span>
</div>
</div>
</div> 
<div className="flex items-center gap-3"><DynamicContent isLink={true} iconname='ArrowUpRight' css='bg-[#543CDA] text-white' type="btn1" url={`/insights/${firstArticle?.slug}`} title='Read More' teaser={firstArticle?.headline} icon='bg-[#4D3BAD] text-[##DDD8F873]' /> </div>
</div>
          </div>
        </div>
      )}

  
  
  
  
  
  
  
  

<div className="my-8 content-padding">
<hr className="text-gray-300 mb-10" />
<DynamicContent type="h2" title='Blog and Insights' />
<DynamicContent type="p" title='Explore our blogs and insight publications.'  />



{/* Scrollable Filter Items */}
<div className="flex gap-3 overflow-x-auto scrollbar-hide py-2 my-6">
{/* VIEW ALL / CLEAR FILTERS */}
<button
onClick={clearFilters}
aria-label="CLEAR FILTERS" 
className={`px-4 py-2 rounded-full text-sm font-medium transition pointer border border-gray-300
`}
>
All
</button>

{/* FILTER BUTTONS */}
{categories.map((label) => {
const isActive = filters.includes(label.documentId);


return (
<div
key={label.documentId}
onClick={() => toggleFilter(label.name)}
className={`px-4 py-2 flex items-center justify-center
rounded-full text-sm font-medium cursor-pointer shrink-0 whitespace-nowrap
transition hover:bg-gray-300 ${
                filters.includes(label.name)
                  ? "bg-[#543CDA] text-white"
                  : " border border-gray-300 " }`}


>
{label.name}
</div>
);
})}
</div>




 {/* ARTICLES */}
      <div>
        <Articles articles={visibleArticles} />

        {visibleArticles.length < filteredArticles.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-[#543CDA] text-white rounded-full pointer"
            >
              Load More
            </button>
          </div>
        )}
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default InsightContent;
