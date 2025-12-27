'use client';

import { useState } from "react";
import DynamicContent, { DynamicIcon } from "@/components/cards";

interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
}

interface Blog {
  title: string;
  teaser: string;
  body: string;
  image: string;
  author: string;
  publishDate: string;
  categoryId?: string;
}

interface BlogListProps {
  blogs?: Blog[]; // optional
  categories?: { data: Category[]; meta?: any }; // optional
}

export default function BlogList({ blogs = [], categories }: BlogListProps) {
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<string[]>([]);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 5, blogs.length));
      setLoading(false);
    }, 1000);
  };

  const toggleFilter = (filter: string) => {
    setFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => setFilters([]);

  // Safe category data
  const categoryList = categories?.data || [];

  return (
    <>
      {/* Filter buttons */}
      <div className="flex gap-3 overflow-x-auto py-2 mb-6">
        <button
          onClick={clearFilters}
          className="px-4 py-2 rounded-full font-medium border border-gray-300"
        >
          All
        </button>

        {categoryList.map(cat => {
          const isActive = filters.includes(cat.name);
          return (
            <div
              key={cat.id}
              onClick={() => toggleFilter(cat.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer flex-shrink-0 whitespace-nowrap transition
                ${isActive ? "bg-[#543CDA] text-white" : "border border-gray-300"}
              `}
            >
              {cat.name}
            </div>
          );
        })}
      </div>

      {/* Blog grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(blogs || []).slice(0, visibleCount).map((blog, index) => {
          // Safe find category
          const category = categoryList.find(c => c.documentId === blog.categoryId);
          const categoryName = category?.name || "Uncategorized";

          return (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              {/* Floating tag */}
              <span className="absolute top-4 left-4 z-10 bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md">
                {categoryName}
              </span>

              {/* Image */}
              <DynamicContent type="img" src={blog.image} css="h-auto w-full rounded-lg" teaser={blog.teaser} />

              {/* Title */}
              <div className="mt-3">
                <DynamicContent css="font-semibold" type="p4" title={blog.title} />
              </div>

              <p className="text-gray-700 text-sm my-2">{blog.teaser}</p>

              <hr className="border-t border-gray-200 mt-4" />

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 10}`}
                    alt={blog.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="truncate text-sm">
                    {blog.author} <br /> {blog.publishDate} * 4 min read
                  </span>
                </div>
                <DynamicIcon name="ArrowUpRight" className="w-10 h-10 text-white bg-gray-900 rounded-full p-2" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Load more */}
      {visibleCount < (blogs?.length || 0) && (
        <div className="flex justify-center my-12">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-6 py-2 rounded-full border text-[#543CDA] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading && <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>}
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </>
  );
}
