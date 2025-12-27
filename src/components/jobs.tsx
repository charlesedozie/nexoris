"use client";

import React, { useEffect, useState } from "react";
import DynamicContent, { DynamicIcon } from "@/components/cards";
import ShareButton from "@/components/shareButton";
import { useDarkMode } from "@/components/cards";
import Filterwhite from "@/components/filterwhite";
import Filterblack from "@/components/filterblack";
import Link from 'next/link';

import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  User,
  Mail,
  MapPin,
  Phone as PhoneIcon,
  Target,
  Link2,
  NotebookPen
} from "lucide-react";

type FormValues = {
  fullName: string;
  email: string;
  location: string;
  phone: string;
  interest: string;
  links: string;
  resume: File | null;
  note: string;
  consent: boolean;
};

export interface Department {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface JobPosting {
  id: number;
  documentId: string;
  jobTitle: string;
  job_description: string; // HTML string
  employment_type: string;
  work_type: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  department: Department | null;
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

export default function BlogList() {
  const { isDark } = useDarkMode();
  const [filters, setFilters] = useState<string[]>([]);

  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loading1, setLoading1] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const toggleFilter = (filter: string) => {
    setFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const FILTER_BUTTONS = [
    "Remote",
    "Full-time",
    "Part-time",
    "Internship",
    "Contract",
    "On-site",
    "Hybrid",
  ];

  const clearFilters = () => {
    setFilters([]);
  };

  const HIRE_PROCESS = [
    { title: 'Application Process', teaser: 'We review your CV and links for a strong match.' },
    { title: '', teaser: '' },
    { title: 'Short Call', teaser: 'A quick chat about your experience and interests.' },
    { title: '', teaser: '' },
    { title: 'Small Task', teaser: 'A practical exercise relevant to the role.' },
    { title: '', teaser: '' },
    { title: 'Team Chat', teaser: 'A chance to meet the people you’ll be working with.' },
    { title: '', teaser: '' },
    { title: 'Offer', teaser: 'If it’s the right fit, we’ll send an offer quickly.' },
  ];

  function getContentByIndex(i: number) {
    const stepValues = [1, 0, 2, 0, 3, 0, 4, 0, 5];
    const stepIcon = [
      `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M23.0625 11.4637H19.8113C17.145 11.4637 14.9738 9.2925 14.9738 6.62625V3.375C14.9738 2.75625 14.4675 2.25 13.8488 2.25H9.07875C5.61375 2.25 2.8125 4.5 2.8125 8.51625V18.4837C2.8125 22.5 5.61375 24.75 9.07875 24.75H17.9213C21.3862 24.75 24.1875 22.5 24.1875 18.4837V12.5887C24.1875 11.97 23.6812 11.4637 23.0625 11.4637Z" fill="#543CDA"/>
<path d="M17.7756 2.48679C17.3144 2.02554 16.5156 2.34054 16.5156 2.98179V6.90804C16.5156 8.55054 17.9106 9.91179 19.6094 9.91179C20.6781 9.92304 22.1631 9.92304 23.4344 9.92304C24.0756 9.92304 24.4131 9.16929 23.9631 8.71929C22.3431 7.08804 19.4406 4.15179 17.7756 2.48679Z" fill="#543CDA"/>
<path d="M15.1875 15.4688H8.4375C7.97625 15.4688 7.59375 15.0862 7.59375 14.625C7.59375 14.1637 7.97625 13.7812 8.4375 13.7812H15.1875C15.6488 13.7812 16.0312 14.1637 16.0312 14.625C16.0312 15.0862 15.6488 15.4688 15.1875 15.4688Z" fill="#543CDA"/>
<path d="M12.9375 19.9688H8.4375C7.97625 19.9688 7.59375 19.5862 7.59375 19.125C7.59375 18.6637 7.97625 18.2812 8.4375 18.2812H12.9375C13.3987 18.2812 13.7812 18.6637 13.7812 19.125C13.7812 19.5862 13.3987 19.9688 12.9375 19.9688Z" fill="#543CDA"/>
</svg>`,
      0,
      `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M13.2638 15.9862L9.585 19.665C9.18 19.305 8.78625 18.9338 8.40375 18.5513C7.245 17.3812 6.19875 16.155 5.265 14.8725C4.3425 13.59 3.6 12.3075 3.06 11.0363C2.52 9.75375 2.25 8.5275 2.25 7.3575C2.25 6.5925 2.385 5.86125 2.655 5.18625C2.925 4.5 3.3525 3.87 3.94875 3.3075C4.66875 2.59875 5.45625 2.25 6.28875 2.25C6.60375 2.25 6.91875 2.3175 7.2 2.4525C7.4925 2.5875 7.75125 2.79 7.95375 3.0825L10.5638 6.76125C10.7663 7.0425 10.9125 7.30125 11.0138 7.54875C11.115 7.785 11.1713 8.02125 11.1713 8.235C11.1713 8.505 11.0925 8.775 10.935 9.03375C10.7888 9.2925 10.575 9.5625 10.305 9.8325L9.45 10.7212C9.32625 10.845 9.27 10.9913 9.27 11.1713C9.27 11.2613 9.28125 11.34 9.30375 11.43C9.3375 11.52 9.37125 11.5875 9.39375 11.655C9.59625 12.0262 9.945 12.51 10.44 13.095C10.9462 13.68 11.4862 14.2762 12.0712 14.8725C12.4762 15.2663 12.87 15.6488 13.2638 15.9862Z" fill="#543CDA"/>
<path d="M24.717 20.6212C24.717 20.9362 24.6608 21.2624 24.5483 21.5774C24.5145 21.6674 24.4808 21.7574 24.4358 21.8474C24.2445 22.2524 23.997 22.6349 23.6708 22.9949C23.1195 23.6024 22.512 24.0412 21.8258 24.3224C21.8145 24.3224 21.8033 24.3337 21.792 24.3337C21.1283 24.6037 20.4083 24.7499 19.632 24.7499C18.4845 24.7499 17.2583 24.4799 15.9645 23.9287C14.6708 23.3774 13.377 22.6349 12.0945 21.7012C11.6558 21.3749 11.217 21.0487 10.8008 20.6999L14.4795 17.0212C14.7945 17.2574 15.0758 17.4374 15.312 17.5612C15.3683 17.5837 15.4358 17.6174 15.5145 17.6512C15.6045 17.6849 15.6945 17.6962 15.7958 17.6962C15.987 17.6962 16.1333 17.6287 16.257 17.5049L17.112 16.6612C17.3933 16.3799 17.6633 16.1662 17.922 16.0312C18.1808 15.8737 18.4395 15.7949 18.7208 15.7949C18.9345 15.7949 19.1595 15.8399 19.407 15.9412C19.6545 16.0424 19.9133 16.1887 20.1945 16.3799L23.9183 19.0237C24.2108 19.2262 24.4133 19.4624 24.537 19.7437C24.6495 20.0249 24.717 20.3062 24.717 20.6212Z" fill="#543CDA"/>
</svg>`,
      0,
      `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M19.1565 0H7.8435C2.9295 0 0 2.9295 0 7.8435V19.1565C0 24.0705 2.9295 27 7.8435 27H19.1565C24.0705 27 27 24.0705 27 19.1565V7.8435C27 2.9295 24.0705 0 19.1565 0Z" fill="#543CDA"/>
<path d="M22.0187 9.27422C22.0187 9.82772 21.5732 10.2867 21.0062 10.2867H13.9187C13.3652 10.2867 12.9062 9.82772 12.9062 9.27422C12.9062 8.72072 13.3652 8.26172 13.9187 8.26172H21.0062C21.5732 8.26172 22.0187 8.72072 22.0187 9.27422Z" fill="#543CDA"/>
<path d="M10.7594 7.96486L7.72186 11.0024C7.51936 11.2049 7.26286 11.2994 7.00636 11.2994C6.74986 11.2994 6.47986 11.2049 6.29086 11.0024L5.27836 9.98986C4.87336 9.59836 4.87336 8.95036 5.27836 8.55886C5.66986 8.16736 6.30436 8.16736 6.70936 8.55886L7.00636 8.85586L9.32836 6.53386C9.71986 6.14236 10.3544 6.14236 10.7594 6.53386C11.1509 6.92536 11.1509 7.57336 10.7594 7.96486Z" fill="#543CDA"/>
<path d="M22.0187 18.7254C22.0187 19.2789 21.5732 19.7379 21.0062 19.7379H13.9187C13.3652 19.7379 12.9062 19.2789 12.9062 18.7254C12.9062 18.1719 13.3652 17.7129 13.9187 17.7129H21.0062C21.5732 17.7129 22.0187 18.1719 22.0187 18.7254Z" fill="#543CDA"/>
<path d="M10.7594 17.4141L7.72186 20.4516C7.51936 20.6541 7.26286 20.7486 7.00636 20.7486C6.74986 20.7486 6.47986 20.6541 6.29086 20.4516L5.27836 19.4391C4.87336 19.0476 4.87336 18.3996 5.27836 18.0081C5.66986 17.6166 6.30436 17.6166 6.70936 18.0081L7.00636 18.3051L9.32836 15.9831C9.71986 15.5916 10.3544 15.5916 10.7594 15.9831C11.1509 16.3746 11.1509 17.0226 10.7594 17.4141Z" fill="#543CDA"/>
</svg>`,
      0,
      `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M20.7791 18.9338L21.2178 22.4887C21.3303 23.4225 20.3291 24.075 19.5303 23.5912L14.8166 20.79C14.2991 20.79 13.7928 20.7563 13.2978 20.6888C14.1303 19.71 14.6253 18.4725 14.6253 17.1337C14.6253 13.9387 11.8578 11.3513 8.43782 11.3513C7.13282 11.3513 5.92907 11.7225 4.92782 12.375C4.89407 12.0938 4.88281 11.8125 4.88281 11.52C4.88281 6.40124 9.32656 2.25 14.8166 2.25C20.3066 2.25 24.7503 6.40124 24.7503 11.52C24.7503 14.5575 23.1866 17.2463 20.7791 18.9338Z" fill="#543CDA"/>
<path d="M14.625 17.134C14.625 18.4728 14.13 19.7103 13.2975 20.689C12.1838 22.039 10.4175 22.9053 8.4375 22.9053L5.50125 24.649C5.00625 24.9528 4.37625 24.5365 4.44375 23.9628L4.725 21.7466C3.2175 20.7003 2.25 19.024 2.25 17.134C2.25 15.154 3.30751 13.4103 4.92751 12.3753C5.92876 11.7228 7.1325 11.3516 8.4375 11.3516C11.8575 11.3516 14.625 13.939 14.625 17.134Z" fill="#543CDA"/>
</svg>`,
      0,
      `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7269 7.85344C22.7707 6.79594 21.1732 6.26719 18.8557 6.26719H18.5857V6.22219C18.5857 4.33219 18.5857 1.99219 14.3557 1.99219H12.6457C8.41565 1.99219 8.41565 4.34344 8.41565 6.22219V6.27844H8.14565C5.8169 6.27844 4.23065 6.80719 3.2744 7.86469C2.16065 9.10219 2.1944 10.7672 2.3069 11.9034L2.31815 11.9822L2.43065 13.1634C2.4419 13.1747 2.4644 13.1972 2.4869 13.2084C2.85815 13.4559 3.24065 13.7034 3.64565 13.9284C3.80315 14.0297 3.9719 14.1197 4.14065 14.2097C6.0644 15.2672 8.1794 15.9759 10.3282 16.3247C10.4294 17.3822 10.8907 18.6197 13.3544 18.6197C15.8182 18.6197 16.3019 17.3934 16.3807 16.3022C18.6757 15.9309 20.8919 15.1322 22.8944 13.9622C22.9619 13.9284 23.0069 13.8947 23.0632 13.8609C23.5807 13.5684 24.0644 13.2534 24.5369 12.9047C24.5594 12.8934 24.5819 12.8709 24.5932 12.8484L24.6382 12.4434L24.6944 11.9147C24.7057 11.8472 24.7057 11.7909 24.7169 11.7122C24.8069 10.5759 24.7844 9.02344 23.7269 7.85344ZM14.7269 15.5597C14.7269 16.7522 14.7269 16.9322 13.3432 16.9322C11.9594 16.9322 11.9594 16.7184 11.9594 15.5709V14.1534H14.7269V15.5597ZM10.0244 6.26719V6.22219C10.0244 4.30969 10.0244 3.60094 12.6457 3.60094H14.3557C16.9769 3.60094 16.9769 4.32094 16.9769 6.22219V6.27844H10.0244V6.26719Z" fill="#543CDA"/>
<path opacity="0.4" d="M23.0622 13.8367C23.0059 13.8705 22.9497 13.9042 22.8934 13.938C20.8909 15.108 18.6747 15.8955 16.3797 16.278C16.2897 17.358 15.8172 18.5955 13.3534 18.5955C10.8897 18.5955 10.4172 17.3692 10.3272 16.3005C8.17844 15.963 6.06344 15.2542 4.13969 14.1855C3.97094 14.0955 3.80219 14.0055 3.64469 13.9042C3.23969 13.6792 2.85719 13.4317 2.48594 13.1842C2.46344 13.173 2.44094 13.1505 2.42969 13.1392L3.11594 20.463C3.35219 22.7017 4.27469 25.008 9.22469 25.008H17.7972C22.7472 25.008 23.6697 22.7017 23.9059 20.4517L24.6147 12.8242C24.6034 12.8467 24.5809 12.8692 24.5584 12.8805C24.0747 13.2292 23.5797 13.5555 23.0622 13.8367Z" fill="#543CDA"/>
</svg>`
    ];

    const stepNumber = stepValues[i] ?? "N/A";
    const stepIconS = stepIcon[i] ?? "N/A";

    return (
      <div className="w-full p-2">
        <div className="flex justify-between w-full">
          <div>
            <span className="text-sm bg-[#080616] text-white rounded-3xl py-1.5 px-3">
              STEP {stepNumber}
            </span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: stepIconS }} />
        </div>

        <div className="font-bold mt-4 mb-2">
          {HIRE_PROCESS[i]?.title || "no data"}
        </div>

        <div className="text-sm">{HIRE_PROCESS[i]?.teaser || "no data"}</div>
      </div>
    );
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const resumeFile = watch("resume");

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setValue("resume", acceptedFiles[0]);
    },
    [setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: { "application/pdf": [], "application/msword": [] },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const formData = new FormData();
      formData.append("_subject", "Join Our Team at Nexoris Form Submission");
      formData.append("_captcha", "false");
      formData.append("_template", "table");

      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, String(value));
        }
      });

      const res = await fetch("https://formsubmit.co/charlesedozie@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Form submission failed");
      }

      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  const InputWrapper = ({
    icon,
    children,
  }: {
    icon: React.ReactNode;
    children: React.ReactNode;
  }) => (
    <div className={`flex items-center ${isDark ? " border-gray-800 " : " border-gray-300 "} border rounded-lg p-3 gap-3 focus-within:ring focus-within:border-gray-200`}>
      <span className="text-gray-500">{icon}</span>
      <div className="flex-1">{children}</div>
    </div>
  );

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://studio.nexoristech.com/api/job-postings?populate=department');

        if (!response.ok) {
          throw new Error('Failed to fetch job postings');
        }

        const result: ApiResponse = await response.json();
        setJobs(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading1(false);
      }
    };

    fetchJobs();
  }, []);

  // Filtered jobs based on selected filters
  const filteredJobs = jobs.filter(job => {
    if (filters.length === 0) return true;
    return filters.includes(job.work_type) || filters.includes(job.employment_type);
  });

  if (loading1) {
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
    <>
      {/* Filter Section */}
      <div className="flex items-center gap-3 w-full my-8">
        <div className={`shrink-0 flex items-center text-[#543CDA] font-semibold justify-center border rounded-full ${isDark ? " darkModeBg " : " bg-white border-gray-200 "} hidden sm:block`}>
          {/* SVG icons remain unchanged */}
          {isDark ? <Filterblack /> : <Filterwhite />}
        </div>

        <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2">
          <button
            onClick={clearFilters}
            className={`px-4 py-2 rounded-md text-sm font-medium transition pointer ${isDark ? " border border-gray-800 " : " border border-gray-300 "}`}
          >
            View All
          </button>

          {FILTER_BUTTONS.map((label) => {
            const isActive = filters.includes(label);
            return (
              <div
                key={label}
                onClick={() => toggleFilter(label)}
                className={`
                  px-4 py-2 flex items-center justify-center rounded-full text-sm font-medium cursor-pointer shrink-0 whitespace-nowrap transition hover:bg-gray-300
                  ${isActive
                    ? "bg-[#543CDA] text-white"
                    : isDark ? " darkModeBg border border-gray-800" : " border border-gray-300 "
                  }
                `}
              >
                {label}
              </div>
            );
          })}
        </div>
      </div>

      <hr className={`${isDark ? " border-t-gray-900 " : " border-t-gray-400 "} border-t my-12`} />

      {/* Job Listings */}
      {filteredJobs.length === 0 ? (
        <div className="text-center py-12 rounded-lg">
          <p>No job postings match the selected filters.</p>
        </div>
      ) : (
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <div
              key={job.documentId}
              className="rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden my-5"
            >
              <div className="flex justify-between items-start">
                <div className="pr-6 sm:pr-12">
                  <Link href={`/careers/${job.slug}`} aria-label={job.jobTitle} className="inline-block focus:outline-none">
                    <DynamicContent type="p3" css='font-semibold' title={job.jobTitle} />
                  </Link>
                  <DynamicContent type="p" title={job.employment_type} />
                </div>
                <div>
                  <Link href={`/careers/${job.slug}`} aria-label={job.jobTitle} className="inline-block focus:outline-none">
                    <DynamicIcon name='ArrowUpRight' className="w-12 h-12 text-white bg-gray-900 rounded-full p-2 flex-shrink-0" />
                  </Link>
                </div>
              </div>

              <hr className={`${isDark ? " border-t-gray-900 " : " border-t-[#E9EAEB] "} my-5`} />
              <div className="my-4">
                <p dangerouslySetInnerHTML={{ __html: job.job_description }} />
              </div>

              <div className="flex items-center justify-between w-full pb-6 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-amber-600">
                    <span><DynamicIcon name="MapPin" className="w-4 h-4" /></span>
                    <span className="text-sm font-medium">{job.work_type}</span>
                  </div>
                  <div className="h-5 border-l border-gray-300" />
                  <div className="flex items-center gap-2 text-indigo-600">
                    <span><DynamicIcon name="Figma" className="w-4 h-4" /></span>
                    <span className="text-sm font-medium">{job?.department?.name || "Engineering"}</span>
                  </div>
                </div>
                <ShareButton url={''} title={job.jobTitle} hashtag={"#NexorisCareers"} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Rest of the component (Hiring Process, Form, etc.) remains unchanged */}
      {/* ... Hiring Process section ... */}
      {/* ... Talent Network form ... */}
    </>
  );
}