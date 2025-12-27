'use client';

import React, { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
}

export default function PrivacyPolicyPage() {
  const [content, setContent] = useState<string>('');
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>(''); // Track current section
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        const response = await fetch('https://studio.nexoristech.com/api/privacy-policy');
        if (!response.ok) throw new Error('Failed to fetch privacy policy');

        const json = await response.json();
        const richText: string = json.data?.richText || '';

        if (!richText) throw new Error('No content found');

        // Parse the HTML string
        const parser = new DOMParser();
        const doc = parser.parseFromString(richText, 'text/html');

        // Extract all <h2> elements
        const h2Elements = doc.querySelectorAll('h2');
        const extractedHeadings: Heading[] = [];

        h2Elements.forEach((h2, index) => {
          let id = h2.getAttribute('id');
          if (!id) {
            // Generate a reliable slug
            const rawText = h2.textContent?.trim() || `section-${index}`;
            id = rawText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || `section-${index}`;
            h2.setAttribute('id', id);
          }
          extractedHeadings.push({ id, text: h2.textContent?.trim() || 'Untitled' });
        });

        // Use doc.body.innerHTML (cleaner than full document)
        const modifiedHtml = doc.body.innerHTML;

        setHeadings(extractedHeadings);
        setContent(modifiedHtml);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchPrivacyPolicy();
  }, []);








  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Adjust for fixed header if any
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      // This is the key: manually set the active link on click
      setActiveId(id);
    }
  };



  //if (loading) {  return <div className="flex justify-center items-center h-screen text-lg">Loading Privacy Policy...</div>;   }

  if (error) {
    return <div className="text-red-500 text-center p-8">Error: {error}</div>;
  }

  return (<>
 <div className="flex min-h-screen w-full content-padding">
      {/* Sidebar: 20% width on medium screens and up, hidden on small screens */}
      <aside className="hidden md:block md:w-2/10 py-8 flex-shrink-0">
<ol className="list-decimal list-outside not-prose pl-6 space-y-4 marker:content-none">
 
          {headings.map((heading) => {
            const isActive = activeId === heading.id;

            return (
              <li key={heading.id}>
                <button
                  onClick={() => scrollToSection(heading.id)}
                  className={`text-left w-full rounded-md transition-all duration-200 text-base pointer ${
                    isActive
                      ? 'text-blue-600 font-bold'  // Highlighted when clicked
                      : 'hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  {heading.text}
                </button>
              </li>
            );
          })}
        </ol>

      </aside>

      {/* Main Content: Takes remaining space */}
      <main className="flex-1 pt-8 sm:pl-20">
        {/* Render the modified HTML content */}
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </div>
    
</>
  );
}