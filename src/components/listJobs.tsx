// app/jobs/page.tsx (or components/JobListings.tsx)

import { useEffect, useState } from 'react';

interface JobPosting {
  id: number;
  jobTitle: string;
  job_description: string;
  employment_type: string;
  work_type: string;
  slug: string;
  createdAt: string;
}

interface ApiResponse {
  data: JobPosting[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export default function JobListings() {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://studio.nexoristech.com/api/job-postings');
        
        if (!response.ok) {
          throw new Error('Failed to fetch job postings');
        }

        const result: ApiResponse = await response.json();
        setJobs(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Job Openings</h1>
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Loading job postings...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Job Openings</h1>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-red-700">
            <p>Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Job Openings</h1>
        <p className="text-lg text-gray-600 mb-10">We are hiring! Join our growing team.</p>

     
      </div>
    </div>
  );
}