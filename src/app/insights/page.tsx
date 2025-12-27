// app/insights/page.tsx

import { Metadata } from 'next';
import { Suspense } from 'react';
import InsightContent from '@/components/InsightContent'; // Adjust path if needed (e.g., '../../components/InsightContent')

interface InsightData {
  id: number;
  documentId: string;
  pageTitle: string;
  introText: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ApiResponse {
  data: InsightData;
  meta: {};
}

// Server-side metadata generation for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const response = await fetch('https://studio.nexoristech.com/api/insight', {
      next: { revalidate: 3600 }, // Revalidate every hour for freshness
    });
    if (!response.ok) {
      throw new Error('Failed to fetch insight for metadata');
    }
    const data: ApiResponse = await response.json();
    const { pageTitle, introText } = data.data;

    // Strip HTML tags from introText for description
    const plainText = introText.replace(/<[^>]*>/g, '').trim();
    const description = plainText.length > 160 ? plainText.substring(0, 160) + '...' : plainText;

    return {
      title: pageTitle,
      description,
      openGraph: {
        title: pageTitle,
        description,
        type: 'website',
        siteName: 'Nexoris Insights', // Customize as needed
      },
      twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description,
      },
    };
  } catch (error) {
    console.error('Metadata fetch error:', error);
    return {
      title: 'Insights | Nexoris Technologies',
      description: 'Explore technical insights on software development, cloud infrastructure, and SEO from Nexoris Technologies.',
    };
  }
}

export default function InsightsPage() {
  return (
    <div>
      <Suspense fallback={<div className="text-center"></div>}>
        <InsightContent />
      </Suspense>
    </div>
  );
}