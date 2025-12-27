'use client';

import React, { useState, useEffect } from 'react';

interface Author {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  shortBio: string;
  richText: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ApiResponse {
  data: Author[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface AuthorProfileProps {
  documentId: string; // Required now
}

const AuthorProfile: React.FC<AuthorProfileProps> = ({ documentId }) => {
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!documentId) {
      setError('No documentId provided');
      setLoading(false);
      return;
    }

    const fetchAuthor = async () => {
      try {
        setLoading(true);
        const url = `https://studio.nexoristech.com/api/authors`;
        console.log(`[AuthorProfile] Fetching author with documentId: ${documentId}`);
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch authors, status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();
        console.log('[AuthorProfile] Full API response:', data);

        // Find the author by documentId
        const foundAuthor = data.data.find(a => a.documentId === documentId);
        if (!foundAuthor) {
          console.warn(`[AuthorProfile] Author not found for documentId: ${documentId}`);
          setError('Author not found');
        } else {
          console.log('[AuthorProfile] Author found:', foundAuthor);
          setAuthor(foundAuthor);
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(message);
        console.error('[AuthorProfile] Fetch error:', message);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthor();
  }, [documentId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (!author) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 text-lg">No author data available</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8 bg-white shadow-lg rounded-lg p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{author.name}</h1>
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            {author.role}
          </span>
        </div>

        <div className="mb-6 prose prose-sm max-w-none">
          <div dangerouslySetInnerHTML={{ __html: author.shortBio }} />
        </div>

        <div className="mb-6 prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: author.richText }} />
        </div>

        <div className="text-sm text-gray-500 mt-8 pt-6 border-t">
          <p>Published on: {new Date(author.publishedAt).toLocaleDateString()}</p>
          <p>Last updated: {new Date(author.updatedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;





















