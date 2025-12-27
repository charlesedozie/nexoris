"use client"

import type { Article } from "@/types"
import Link from 'next/link';
import {DynamicIcon, useDarkMode} from "@/components/cards"

type Props = {
  articles: Article[]
  category?: string
  itemCount?: number
}

export default function ArticleList({
  articles,
  category,
  itemCount,
}: Props) {
  // 1️⃣ Filter by category if provided
  let result = category
    ? articles.filter(article => {
        if (!article.category) {
          console.warn(
            "[ArticleList] Article has no category:",
            article.id
          )
          return false
        }

        return (
          article.category.slug === category ||
          article.category.name === category
        )
      })
    : articles

  // 2️⃣ Limit number of items if itemCount provided
  if (typeof itemCount === "number") {
    if (itemCount <= 0) {
      console.warn(
        "[ArticleList] Invalid itemCount provided:",
        itemCount
      )
    } else {
      result = result.slice(0, itemCount)
    }
  }

  


const { isDark } = useDarkMode();

  if (!result.length) {
    console.warn(
      "[ArticleList] No articles returned",
      { category, itemCount }
    )
    return (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        No articles available.
      </p>
    )
  }

  console.log('article give ', result);
  return (<>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{result.map((article, index) => (
<div key={index} className={`${isDark ? "border-gray-800" : "border-gray-200"} rounded-lg p-4 border `}>
<div className="relative w-full max-w-xl rounded-2xl overflow-hidden">
{/* Floating tag */}
<span className="absolute top-4 left-4 bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md">{`${article?.category ?? '/plc.webp'
  }`}</span>

{/* Image */}
<Link
href={`/insights/${article.slug}`}
aria-label={article.headline}          // Screen readers
className={`focus:outline-none text-2xl font-bold`}>
<img src={`https://studio.nexoristech.com${article?.coverImage?.url ?? '/plc.webp'  }`}
  alt={article.headline ?? 'Admin'}
  className="
    w-full
    h-[250px]
    min-h-[249px]
    object-cover
    object-top
    rounded-3xl
    select-none
    cursor-pointer
  "
  aria-label={article.headline} 
/></Link>

</div>
<div className="mt-3">
<Link
href={`/insights/${article.slug}`}
aria-label={article.headline}          // Screen readers
className={`focus:outline-none text-2xl font-bold`}>{article.headline}</Link>
</div>    


<p className="text-sm my-2">{article.excerpt}</p>
<hr className={`border-t mt-4  ${isDark ? "border-gray-800" : "border-gray-200"}`} />
<div className="flex justify-between items-center">
<div>
<div className="flex items-center gap-3 my-6">
<img
src={`https://studio.nexoristech.com${article?.author?.authorSchema?.profileImage?.url ?? '/plc.webp'}`}
alt={article?.author?.authorSchema?.name ?? 'Admin'}
className="w-14 h-14 rounded-full object-cover flex-shrink-0"
/>
<span className="truncate text-sm"><span className="font-bold">
{article?.author?.authorSchema?.name ?? 'Admin'}</span><br />
{formatDate(article?.updatedAt)}  * 4 min read</span>
</div>
</div>
<div>
<Link
href={`/insights/${article.slug}`}
aria-label={article.headline}          // Screen readers
className={`focus:outline-none text-2xl font-bold`}>
<DynamicIcon name='ArrowUpRight' className="w-10 h-10 text-white bg-gray-900 rounded-full p-2 flex-shrink-0" /></Link>
</div>
</div>
</div>
))}
</div></>
  )
}


export function formatDate(date?: string) {
  if (!date) return "no date";

  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}