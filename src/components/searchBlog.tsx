"use client";

import { useState } from "react";
import DynamicContent, {DynamicIcon, useDarkMode} from "@/components/cards"

type SearchResult = {
  id: string;
  title: string;
  description: string;
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("Any Location");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
const { isDark } = useDarkMode();

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(
        `/api/search?q=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`
      );
      const data = await res.json();
      console.log('data', data);
      setResults(data);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">   <div className={`flex w-full border ${isDark ? " border-gray-800 " : " border-gray-500 "} rounded-full px-2 flex-row items-stretch sm:items-center ${isDark ? " darkModeBg " : " bg-white "}`}>

        {/* Left Search Icon */}
        <button
          onClick={handleSearch}
          aria-label="Search jobs" 
          className="w-10 h-10 bg-[#4D3BAD] text-white flex items-center justify-center rounded-full shrink-0"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for blog..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1 px-3 py-3 outline-none text-base"
        />
      </div>

      {/* Results */}
      <div className="mt-6 space-y-4">
        {results.length > 0 &&
          results.map((item) => (
            <div
              key={item.id}
              className="p-4 border rounded-lg bg-gray-50 shadow-sm"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="">{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}