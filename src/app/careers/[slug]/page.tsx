// app/careers/[slug]/page.tsx   ← Folder must be exactly [slug]

import { notFound } from 'next/navigation';
import DynamicContent, {DynamicIcon  } from "@/components/cards"
import Header from "@/components/header"
import ShareButton from "@/components/shareButton";
import JoinTalentForm from "@/components/joinTalentForm";


interface Department {
  id: number;
  documentId: string;
  name: string;          // ← This is the field (required when populated)
  slug?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Job {
  id: number;
  documentId: string;
  jobTitle: string;
  job_description: string;
  employment_type: string;
  work_type: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seoMeta: any;
  department?: Department | null;  // ← Direct object or null
}



async function getJobBySlug(slug: string): Promise<Job | null> {
if (!slug) {
console.warn('Slug missing in fetch function');
return null;
}

try {
console.log(`Fetching job with slug: ${slug}`);

const res = await fetch(
`https://studio.nexoristech.com/api/job-postings?filters[slug][$eq]=${slug}&populate=*`,
{ next: { revalidate: 60 } }
);

if (!res.ok) {
console.error(`API error: ${res.status} ${res.statusText}`);
return null;
}

const json = await res.json();
console.log('API response:', json);

if (!json.data || json.data.length === 0) {
console.warn(`No job found for slug: ${slug}`);
return null;
}

console.log(`Success: Loaded "${json.data[0].jobTitle}"`);
return json.data[0] as Job;
} catch (error) {
console.error('Fetch failed:', error);
return null;
}
}

// IMPORTANT: Await params because it's now a Promise in Next.js 15+
export default async function JobDetailPage({
params,
}: {
params: Promise<{ slug: string }>;
}) {
const { slug } = await params;  // ← This fixes the error

if (!slug) {
console.error('Slug is undefined after await – check folder name is exactly [slug]');
notFound();
}

const job = await getJobBySlug(slug);

if (!job) {
console.warn(`Job not found → 404 for slug: ${slug}`);
notFound();
}

const realDept = job.department?.name;
const departmentName = realDept ||
(job.jobTitle.toLowerCase().includes('devops') || job.jobTitle.toLowerCase().includes('intern')
? 'Cloud & Infrastructure'
: 'Engineering');

return (
<>
<div className="card-surface">
<Header />
<div className='content-padding mt-8'>
<div className='my-10'> 
                  <DynamicContent
                    isLink
                    type="btn1"
                    url="/careers"
                    title="Return to Careers"
                    bicon="y"
                    biconname="ArrowLeft"
                    teaser="Return to Careers"
                  />
</div>
</div>
</div>
<div className='content-padding mt-12'>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4">
<div className="">
<DynamicContent type="h2" title={job.jobTitle} />
<div className='flex justify-between mb-15'>
    <div>
        <div className="flex items-center gap-2 ">
        <span className="text-amber-600"><DynamicIcon name={`MapPin`} className="w-4 h-4 transition-transform roup-hover:translate-x-0.5" aria-hidden="true" /></span>
        <span className="text-sm font-medium  text-amber-600">{job.work_type}</span>
        
        <span className=" text-amber-600"><DynamicIcon name={`Figma`} className="w-4 h-4 transition-transform roup-hover:translate-x-0.5" aria-hidden="true" /></span>
        <span className="text-sm font-medium text-purple-600">{job?.employment_type}</span>

        
        <span className=" text-amber-600"><DynamicIcon name={`Building2`} className="w-4 h-4 transition-transform roup-hover:translate-x-0.5" aria-hidden="true" /></span>
        <span className="text-sm font-medium text-blue-600">{job?.department?.name}</span>
        </div>
    </div>
    <div><ShareButton url={''} title={job.jobTitle} hashtag={"#GLEENLearning"} /></div>
</div>
<DynamicContent type="p3" css='font-bold' title='Job Description' />

<div
className="my-6"
dangerouslySetInnerHTML={{ __html: job.job_description }}
/>
</div>
<div>
<JoinTalentForm />
</div>
</div>



</div>
</>
);
}