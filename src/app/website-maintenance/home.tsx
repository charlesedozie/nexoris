'use client'

import type { Metadata } from 'next'
import DynamicContent, {Counter, DynamicIcon, useDarkMode, Accordion} from "@/components/cards"


const faqItems = [
  {
    question: `Can you maintain a site you didn’t build?
`,
    answer:
      `Yes. We run a quick health check, set up access, and take over care.
`,
  },
  {
    question: `What counts as a “small fix” vs a new feature?
`,
    answer:
      `Small fixes: text edits, image swaps, layout tweaks, menu/form updates.
New features: new templates, integrations, custom components, or anything needing design/dev time.`,
  },
  {
    question: `How fast do you respond and resolve issues?
`,
    answer:
     `Support is Mon–Fri, 09:00–18:00 WAT. Urgent issues are worked the same day. Most standard issues are closed in 1–2 business days.
`,
  },
   {
    question: `Can you work with our current host and vendors?
`,
    answer:
      `Yes. We coordinate with your host, IT team, and other agencies. If hosting limits are causing problems, we share options and proceed only with your approval.
`,
  },
   {
    question: "Can you improve speed without a rebuild?",
    answer:
      `Yes. Performance work covers Core Web Vitals, images, code, database, and caching. We measure before and after so you can see the gain.
`,
  },

     {
    question: `Do you handle basic search fixes (SEO)?
`,
    answer:
      `Yes. We fix blockers like broken links, wrong redirects, messy titles/descriptions, and sitemap/indexing issues. Strategy and new content sit under SEO & Content Marketing.
`,
  },

     {
    question: `What if we later need bigger changes?
`,
    answer:
      `We’ll scope it as a project via Web Development or Custom Software Solutions with defined deliverables, timeline, and cost.

`,
  },
];

const engineered = [
{src:"/speed.webp", title:'NVMe speed', teaser:'NVMe-powered servers keep pages quick on any device.'},
{src:"/access.webp", title:'Reliable uptime', teaser:'99.9% target with clear status updates.'},
{src:"/secure.webp", title:'Straight pricing', teaser:'Simple plans and domain fees. No hidden charges'},
{src:"/search.webp", title:'Free migration', teaser:'We move your site carefully and test before go-live.'},
// add more if needed
];

const features = [
"NVMe storage and tuned servers for quick load times",
"Managed VPS and shared hosting for sites, apps, and APIs",
"24/7 monitoring, regular updates, and reliable backups",
"SSL setup, domain guidance, and basic email configuration",
"One support channel for product and infrastructure",
];

export const metadata: Metadata = {
metadataBase: new URL("https://mygleen.com/about"),

title: "About GLEEN – Smarter Exam Prep for WAEC, NECO & JAMB",
description:
"Learn about GLEEN’s mission to simplify exam preparation for WAEC, NECO, JAMB and Post-UTME. Discover how we combine technology, instant answers and smart practice to help students study more effectively.",
keywords:
"about GLEEN, GLEEN mission, exam prep platform, WAEC study tool, JAMB CBT practice, NECO preparation, education technology Nigeria",
manifest: "/manifest.json",
icons: {
icon: ["/favicon.ico", "/icons/icon-192x192.webp"],
apple: "/icons/icon-192x192.webp",
},
other: {
"mobile-web-app-capable": "yes",
},
openGraph: {
title: "About GLEEN – Exam Prep Made Better",
description:
"Discover the story behind GLEEN and how we’re helping students prepare smarter for WAEC, NECO, JAMB and Post-UTME with modern, easy-to-use study tools.",
url: "https://mygleen.com/about",
siteName: "GLEEN",
images: [
{
url: "/apple-icon-114x114.webp",
width: 114,
height: 114,
alt: "GLEEN Logo",
},
],
locale: "en_EN",
type: "website",
},
twitter: {
card: "summary_large_image",
site: "@mygleen",
title: "About GLEEN",
description:
"Learn how GLEEN helps students prepare effectively for WAEC, NECO, JAMB and Post-UTME.",
images: ["/logo.webp"],
},


robots: { index: true, follow: true },
alternates: { canonical: "https://mygleen.com/about" },
authors: [{ name: "GLEEN Team" }],
publisher: "GLEEN Education",
};

export default function CloudHome() {
const { isDark } = useDarkMode();
return (
<div className='mt-6'>
  
<div className="relative w-full py-16">
{/* Gradient line */}
<div
  className="absolute left-1/2 top-0 bottom-0 w-5 -translate-x-1/2
             sm:left-0 sm:right-0 sm:top-1/2 sm:h-5 sm:w-auto sm:-translate-y-1/2 sm:translate-x-0
             bg-gradient-to-b sm:bg-gradient-to-r
             from-[#543CDA] to-[#000000]"
/>

{/* Transparent overlay container */}
<div className="relative z-3 px-[10%] grid grid-cols-1 sm:grid-cols-4 gap-10">
{/* Child 1 */}
<div className={`${isDark ? "darkModeBg " : "bg-white "} rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg></div>
<div><DynamicContent type="p" css='semibold' title='Updates & security patches'  /></div>
</div>

{/* Child 2 */}
<div className={`${isDark ? "darkModeBg " : "bg-white "} rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='semibold' title='Uptime and error monitoring'  /></div>
</div>

{/* Child 3 */}
<div className={`${isDark ? "darkModeBg " : "bg-white "} rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='semibold' title='Backups and quick restores'  /></div>
</div>


{/* Child 3 */}
<div className={`${isDark ? "darkModeBg " : "bg-white "} rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg></div>
<div><DynamicContent type="p" css='semibold' title='Fast help for small issues'  /></div>
</div>
</div>
</div>



<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2 px-[1%] md:px-[6%]">
{/* Child 1 */}
<div className='sm:hidden'>
<div className="flex-1 flex flex-col items-center justify-center">
<DynamicContent type="img" src='/what-we-need.webp' css="h-auto w-auto" teaser={`Cloud Solutions`} /></div>
</div>

<div className="flex-1 flex-col flex justify-center rounded-lg p-6">
<div><DynamicContent type="h2" title='Who This Is For' /></div>  
<div>
  

<p>
If your website drives sales, bookings, or leads, it needs steady care. This service keeps it fast, secure, and reliable.
<br />
 <br />This is a good fit if you: 
</p></div>  


{/* Content */}
<div className="px-3 flex flex-col gap-0 mt-10">
<DynamicContent type="p" title='Don’t have an in-house web team' css='py-3 border-l-4 border-[#543CDA] text-[#543CDA] pl-4' />
<DynamicContent type="p" title='Inherited a site and need order' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
<DynamicContent type="p" title='Rely on uptime for revenue or lead flow' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
<DynamicContent type="p" title='Want updates tested on staging first' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
<DynamicContent type="p" title='Need regular checks on speed, security, and backups' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
</div>
</div>

{/* Child 2 */}
<div className="flex-1 flex flex-col items-center justify-center">
<div className='hidden sm:block'>
<DynamicContent type="img" src='/what-we-need.webp' css="h-auto w-auto" teaser={`Cloud Solutions`} /></div>
</div>
</div>



<div className="text-center my-12 sub-title">
<DynamicContent type="h2" title='What You Get Each Month' />
<DynamicContent type="p4" title='Your site gets the routine work that prevents downtime and errors. We test changes on staging before they go live, watch alerts, and fix issues quickly.'  />
</div>





<div className="grid grid-cols-1 sm:grid-cols-4 gap-10 content-padding">
    <div className="flex h-full">
  <div className="w-full flex flex-col h-full">
    {/* Top dark strip (fixed height) */}
    <div className="h-16 rounded-t-3xl bg-gradient-to-r from-black to-zinc-900" />

    {/* Overlapping content (fills remaining height) */}
    <div className={`${isDark ? "darkModeBg -mt-6 relative z-3 flex-1 border border-gray-700 rounded-t-3xl border-t border-t-purple-700 p-6 flex flex-col" : "-mt-6 relative z-4 flex-1 border border-gray-200 rounded-t-3xl bg-white border-t border-t-purple-200 p-6 flex flex-col"}`}>
      {/* Icon */}
      <div className="mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.1813 5.82622C28.0275 4.25702 24.1682 3.33398 20 3.33398C15.8318 3.33398 11.9725 4.25702 8.8186 5.82622C7.27197 6.59575 6.49865 6.98052 5.74933 8.19028C5 9.40007 5 10.5715 5 12.9142V18.7292C5 28.2015 12.5706 33.468 16.955 35.7236C18.1778 36.3528 18.7892 36.6673 20 36.6673C21.2108 36.6673 21.8222 36.3528 23.0448 35.7236C27.4293 33.468 35 28.2015 35 18.7292V12.9142C35 10.5715 35 9.40008 34.2507 8.19028C33.5013 6.9805 32.728 6.59575 31.1813 5.82622Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 18.334V18.3507" stroke="#543CDA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.666 18.334V18.3507" stroke="#543CDA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.334 18.334V18.3507" stroke="#543CDA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


        </div>
      </div>

      {/* Title */}
      <DynamicContent
        type="p4"
        title="Updates & Security"
        css="mb-4 text-lg font-semibold"
      />

      {/* Content grows naturally but cards stay equal height */}
      <ul className="list-disc pl-6 space-y-2 p-base-res">
        <li>CMS, plugin, and library updates</li>
        <li>
Security patches and basic hardening</li>
        <li>
Quick checks of key flows (login, forms, checkout, dashboards)
</li>
      </ul>
    </div>
  </div>
</div>



<div className="flex h-full">
  <div className="w-full flex flex-col h-full">
<div className="h-16 rounded-t-3xl bg-gradient-to-b from-[#543CDA] to-[#880286]" />



    {/* Overlapping content (fills remaining height) */}
    <div className={`${isDark ? "darkModeBg -mt-6 relative z-3 flex-1 border border-gray-700 rounded-t-3xl border-t border-t-purple-700 p-6 flex flex-col" : "-mt-6 relative z-4 flex-1 border border-gray-200 rounded-t-3xl bg-white border-t border-t-purple-200 p-6 flex flex-col"}`}>
      {/* Icon */}
      <div className="mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.13 15.0184C29.1423 15.0184 29.1548 15.0184 29.1673 15.0184C33.3095 15.0184 36.6673 18.3823 36.6673 22.5322C36.6673 26.3997 33.7507 29.5847 30.0007 30M29.13 15.0184C29.1547 14.7434 29.1673 14.4649 29.1673 14.1835C29.1673 9.11158 25.0633 5 20.0007 5C15.2061 5 11.2712 8.68778 10.868 13.3865M29.13 15.0184C28.9595 16.9127 28.215 18.641 27.072 20.0275M10.868 13.3865C6.64062 13.7896 3.33398 17.3565 3.33398 21.6972C3.33398 25.7362 6.19692 29.1053 10.0007 29.8788M10.868 13.3865C11.1311 13.3615 11.3977 13.3486 11.6673 13.3486C13.5437 13.3486 15.2752 13.9699 16.6682 15.0184" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0007 21.666V34.9993M20.0007 21.666C18.8337 21.666 16.6532 24.9898 15.834 25.8327M20.0007 21.666C21.1677 21.666 23.3482 24.9898 24.1673 25.8327" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


        </div>
      </div>

      {/* Title */}
<DynamicContent
type="p4"
title="Monitoring & Backups"
css="mb-4 text-lg font-semibold"
/>

{/* Content grows naturally but cards stay equal height */}
<ul className="list-disc pl-6 space-y-2 p-base-res">
<li>Uptime and error monitoring with clear alerts</li>
<li>
Automated daily backups and regular test restores</li>
<li>
Short incident notes after any fix (what happened, what we did, prevention)
</li>
</ul>
</div>
</div>
</div>




<div className="flex h-full">
  <div className="w-full flex flex-col h-full">
    {/* Top dark strip (fixed height) */}
    <div className="h-16 rounded-t-3xl bg-gradient-to-r from-black to-zinc-900" />

    {/* Overlapping content (fills remaining height) */}
    <div className={`${isDark ? "darkModeBg -mt-6 relative z-3 flex-1 border border-gray-700 rounded-t-3xl border-t border-t-purple-700 p-6 flex flex-col" : "-mt-6 relative z-4 flex-1 border border-gray-200 rounded-t-3xl bg-white border-t border-t-purple-200 p-6 flex flex-col"}`}>
      {/* Icon */}
      <div className="mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66602 16.6673V24.241C6.66602 29.6493 6.66602 32.3535 8.1428 34.1852C8.44115 34.5552 8.7782 34.8921 9.14823 35.1905C10.9799 36.6673 13.684 36.6673 19.0923 36.6673C20.2683 36.6673 20.8562 36.6673 21.3947 36.4773C21.5067 36.4378 21.6163 36.3923 21.7235 36.3412C22.2387 36.0947 22.6543 35.679 23.4858 34.8475L31.38 26.9533C32.3435 25.9898 32.8252 25.5082 33.079 24.8955C33.3327 24.283 33.3327 23.6016 33.3327 22.2391V16.6673C33.3327 10.3819 33.3327 7.23923 31.38 5.2866C29.4275 3.33398 26.2847 3.33398 19.9993 3.33398M21.666 35.834V35.0007C21.666 30.2867 21.666 27.9297 23.1305 26.4652C24.595 25.0007 26.952 25.0007 31.666 25.0007H32.4993" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.4529 17.268C16.8742 18.6893 19.1787 18.6893 20.6 17.268C22.0214 15.8465 22.0214 13.5421 20.6 12.1207L17.383 8.90373C16.0264 7.54708 13.8652 7.48533 12.4353 8.7185M12.8792 4.4C11.4579 2.97865 9.15345 2.97865 7.732 4.4C6.31069 5.82135 6.31069 8.12583 7.732 9.54718L10.9491 12.7642C12.3056 14.1209 14.4669 14.1826 15.8968 12.9494" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


        </div>
      </div>

{/* Title */}
<DynamicContent
type="p4"
title="Light SEO Fixes"
css="mb-4 text-lg font-semibold"
/>

{/* Content grows naturally but cards stay equal height */}
<ul className="list-disc pl-6 space-y-2 p-base-res">
<li>Wrong redirects, broken links</li>
<li>
Missing/messy titles and descriptions</li>
<li>
Sitemap and indexing issues.
</li>
</ul>
</div>
</div>
</div>






<div className="flex h-full">
  <div className="w-full flex flex-col h-full">
<div className="h-16 rounded-t-3xl bg-gradient-to-b from-[#543CDA] to-[#880286]" />



    {/* Overlapping content (fills remaining height) */}
    <div className={`${isDark ? "darkModeBg -mt-6 relative z-3 flex-1 border border-gray-700 rounded-t-3xl border-t border-t-purple-700 p-6 flex flex-col" : "-mt-6 relative z-4 flex-1 border border-gray-200 rounded-t-3xl bg-white border-t border-t-purple-200 p-6 flex flex-col"}`}>
      {/* Icon */}
      <div className="mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.666 20C31.666 18.6193 32.7853 17.5 34.166 17.5C35.5467 17.5 36.666 18.6193 36.666 20C36.666 21.3807 35.5467 22.5 34.166 22.5C32.7853 22.5 31.666 21.3807 31.666 20Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M3.33398 20C3.33398 18.6193 4.45327 17.5 5.83398 17.5C7.2147 17.5 8.33398 18.6193 8.33398 20C8.33398 21.3807 7.2147 22.5 5.83398 22.5C4.45327 22.5 3.33398 21.3807 3.33398 20Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M22.8445 17.1542C22.3563 16.666 21.5707 16.666 19.9993 16.666C18.428 16.666 17.6423 16.666 17.1542 17.1542M22.8445 17.1542C23.3327 17.6423 23.3327 18.428 23.3327 19.9993C23.3327 21.5707 23.3327 22.3563 22.8445 22.8445M17.1542 17.1542C16.666 17.6423 16.666 18.428 16.666 19.9993C16.666 21.5707 16.666 22.3563 17.1542 22.8445M17.1542 22.8445C17.6423 23.3327 18.428 23.3327 19.9993 23.3327C21.5707 23.3327 22.3563 23.3327 22.8445 22.8445" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34.5125 3.82213C34.0243 3.33398 33.2387 3.33398 31.6673 3.33398C30.096 3.33398 29.3103 3.33398 28.8222 3.82213M34.5125 3.82213C35.0007 4.3103 35.0007 5.09597 35.0007 6.66732C35.0007 8.23867 35.0007 9.02433 34.5125 9.5125M28.8222 3.82213C28.334 4.3103 28.334 5.09597 28.334 6.66732C28.334 8.23867 28.334 9.02433 28.8222 9.5125M28.8222 9.5125C29.3103 10.0007 30.096 10.0007 31.6673 10.0007C33.2387 10.0007 34.0243 10.0007 34.5125 9.5125" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.1785 30.4882C10.6903 30 9.90468 30 8.33333 30C6.76198 30 5.97632 30 5.48815 30.4882M11.1785 30.4882C11.6667 30.9763 11.6667 31.762 11.6667 33.3333C11.6667 34.9047 11.6667 35.6903 11.1785 36.1785M5.48815 30.4882C5 30.9763 5 31.762 5 33.3333C5 34.9047 5 35.6903 5.48815 36.1785M5.48815 36.1785C5.97632 36.6667 6.76198 36.6667 8.33333 36.6667C9.90468 36.6667 10.6903 36.6667 11.1785 36.1785" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.33398 20H16.6673" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.334 20H31.6673" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 16.666C20 13.3327 21.3888 6.66602 28.3333 6.66602" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.9993 23.334C19.9993 26.6673 18.6105 33.334 11.666 33.334" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </div>
      </div>

      {/* Title */}
<DynamicContent
type="p4"
title="Small Fixes & Content Changes"
css="mb-4 text-lg font-semibold"
/>

{/* Content grows naturally but cards stay equal height */}
<ul className="list-disc pl-6 space-y-2 p-base-res">
<li>Text edits and clarity fixes</li>
<li>
Image/banner swaps, new sections in current style</li>
<li>
Minor layout tweaks (spacing, alignment)
</li>
</ul>
</div>
</div>
</div>
</div> 











<div className="content-padding my-12 pb-16 card-surface">
<div className="my-20 px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h2" title='Optional Enhancement' css='text-center' />
<DynamicContent type="p4"  css='text-center' title='Your monthly care covers the essentials. Use an Optional Enhancement for deeper work in performance, security, or hosting. Changes are made on staging, reviewed by you, then released with a brief before/after summary.'  />
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-10 p-2 mt-10">
<div className={`${isDark ? "darkModeBg " : "bg-white "}  p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 9.16667C10 7.60897 10 6.83013 10.3349 6.25C10.5544 5.86995 10.8699 5.55435 11.25 5.33493C11.8301 5 12.609 5 14.1667 5H19.1667C20.7243 5 21.5032 5 22.0833 5.33493C22.4633 5.55435 22.779 5.86995 22.9983 6.25C23.3333 6.83013 23.3333 7.60897 23.3333 9.16667C23.3333 10.7244 23.3333 11.5032 22.9983 12.0833C22.779 12.4634 22.4633 12.779 22.0833 12.9984C21.5032 13.3333 20.7243 13.3333 19.1667 13.3333H14.1667C12.609 13.3333 11.8301 13.3333 11.25 12.9984C10.8699 12.779 10.5544 12.4634 10.3349 12.0833C10 11.5032 10 10.7244 10 9.16667Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M10 25.8327C10 24.275 10 23.4962 10.3349 22.916C10.5544 22.536 10.8699 22.2203 11.25 22.001C11.8301 21.666 12.609 21.666 14.1667 21.666H19.1667C20.7243 21.666 21.5032 21.666 22.0833 22.001C22.4633 22.2203 22.779 22.536 22.9983 22.916C23.3333 23.4962 23.3333 24.275 23.3333 25.8327C23.3333 27.3903 23.3333 28.1692 22.9983 28.7493C22.779 29.1293 22.4633 29.445 22.0833 29.6643C21.5032 29.9993 20.7243 29.9993 19.1667 29.9993H14.1667C12.609 29.9993 11.8301 29.9993 11.25 29.6643C10.8699 29.445 10.5544 29.1293 10.3349 28.7493C10 28.1692 10 27.3903 10 25.8327Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M34.7323 28.5687C36.0215 27.2795 36.666 26.635 36.666 25.834C36.666 25.033 36.0215 24.3885 34.7323 23.0993L34.4007 22.7677C33.1115 21.4785 32.467 20.834 31.666 20.834C30.865 20.834 30.2205 21.4785 28.9313 22.7677L28.5997 23.0993C27.3105 24.3885 26.666 25.033 26.666 25.834C26.666 26.635 27.3105 27.2795 28.5997 28.5687L28.9313 28.9003C30.2205 30.1895 30.865 30.834 31.666 30.834C32.467 30.834 33.1115 30.1895 34.4007 28.9003L34.7323 28.5687Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M10.0104 9.16732H3.3468M3.3468 9.16732V3.33398M3.3468 9.16732V20.0007C3.3468 21.8402 3.09463 24.1138 4.82757 25.2722C5.66793 25.834 6.83778 25.834 9.1775 25.834M23.3378 25.834H26.6696M31.6673 20.834V15.834C31.6673 12.6913 31.6673 11.1199 30.6914 10.1436C29.7156 9.16732 28.1449 9.16732 25.0036 9.16732H23.3378" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M36.666 36.666C35.1128 36.666 34.3364 36.666 33.7239 36.4485C32.907 36.1585 32.2582 35.6023 31.9198 34.9022C31.666 34.3772 31.666 33.7115 31.666 32.3803V31.666" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
<div className='mt-6'><DynamicContent type="p4" title='Performance Optimization' css='font-semibold my-4' /></div>
<div><DynamicContent type="p" title='We find and fix what slows pages down, then validate gains with Core Web Vitals (LCP, INP, CLS) and recent visitor data. Work may include image sizing and formats, code cleanup, script deferral, database tuning, and caching aligned with your CDN.' css='my-2' /></div>
</div>
<div className="bg-[#543CDA] p-5 rounded-3xl">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.1813 5.82622C28.0275 4.25702 24.1682 3.33398 20 3.33398C15.8318 3.33398 11.9725 4.25702 8.8186 5.82622C7.27197 6.59575 6.49865 6.98052 5.74933 8.19028C5 9.40007 5 10.5715 5 12.9142V18.7292C5 28.2015 12.5706 33.468 16.955 35.7236C18.1778 36.3528 18.7892 36.6673 20 36.6673C21.2108 36.6673 21.8222 36.3528 23.0448 35.7236C27.4293 33.468 35 28.2015 35 18.7292V12.9142C35 10.5715 35 9.40008 34.2507 8.19028C33.5013 6.9805 32.728 6.59575 31.1813 5.82622Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 19.1673C15 19.1673 17.3465 19.5872 18.3333 22.5007C18.3333 22.5007 20.8333 17.5007 25 15.834" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
<div className='mt-6'><DynamicContent type="p4" title='Security Response & Hardening' css=' font-semibold my-4 text-white ' /></div>
<div><DynamicContent type="p" css=' text-white '  title='Extra protection for admin/login areas, WAF rules, bot limits, SSL tracking, malware scans, file-change watch, and fast clean-up if anything happens.' /></div>
</div>
<div className={`${isDark ? "darkModeBg " : "bg-white "}  p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.9668 11.6934C24.9668 11.6934 25.8001 12.5267 26.6335 14.1934C26.6335 14.1934 29.2805 10.0267 31.6335 9.19336" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.6587 3.36901C12.4946 3.19271 9.27752 3.67241 9.27752 3.67241C7.2461 3.81766 3.35308 4.95652 3.35312 11.6077C3.35315 18.2023 3.31005 26.3323 3.35312 29.5733C3.35312 31.5534 4.57915 36.1723 8.82275 36.4198C13.9808 36.7208 23.2719 36.7848 27.5347 36.4198C28.6759 36.3554 32.4751 35.4596 32.9559 31.3261C33.4541 27.0439 33.3549 24.0679 33.3549 23.3596" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M36.667 11.6927C36.667 16.2951 32.9325 20.0261 28.3257 20.0261C23.7189 20.0261 19.9844 16.2951 19.9844 11.6927C19.9844 7.09034 23.7189 3.35938 28.3257 3.35938C32.9325 3.35938 36.667 7.09034 36.667 11.6927Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M11.6348 21.6934H18.3014" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M11.6348 28.3594H24.9681" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
</svg>
</div>
<div className='mt-6'><DynamicContent type="p4" title='Migrations & Hosting Advice' css='font-semibold my-4' /></div>
<div><DynamicContent type="p" title='If hosting causes outages or poor speed, we explain the issue, suggest options, and handle the move with minimal downtime - only with your approval.' css='my-2' /></div>
</div>
</div>
</div>









<div className="content-padding my-12">
<div className="my-20 px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h2" title='Plans & Pricing' css='text-center' />
<DynamicContent type="p4"  css='text-center' title='Pick a monthly care plan that matches your site’s needs. Each plan lists what’s included, response times, and a small monthly allowance for updates.'  />
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-10 p-2 mt-10">
<div className={`${isDark ? "darkModeBg" : "bg-white"}  p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.19 13.291C11.0099 13.291 6.81055 17.0505 6.81055 21.6882H16.19V13.291Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M4.22487 26.545C6.2893 30.615 10.8691 33.4453 16.1873 33.4453V21.6895H8.12094C5.68122 21.6895 4.46137 21.6895 3.71967 22.8881C2.97797 24.0868 3.3936 24.9061 4.22487 26.545Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M21.1915 36.1293C28.0725 34.2201 33.0705 28.4773 33.0705 21.6895H16.1875V31.766C16.1875 34.222 16.1875 35.45 17.1885 36.206C18.1897 36.9621 19.1902 36.6845 21.1915 36.1293Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M36.0688 16.7245C34.0897 10.358 28.3975 5.37611 21.2125 3.76661C19.13 3.30011 18.0887 3.06686 17.1382 3.82321C16.1875 4.57956 16.1875 5.80411 16.1875 8.25323V21.6885H31.7573C34.2238 21.6885 35.457 21.6885 36.2162 20.6646C36.9753 19.6406 36.6732 18.6686 36.0688 16.7245Z" stroke="#543CDA" strokeWidth="2.5"/>
</svg>
</div>
<div className='mt-6'><DynamicContent type="p4" title='Monthly Care Plans' css='font-bold my-4' /></div>
<div><DynamicContent type="p" title='Monitoring, updates, security checks, backups, and small changes within your allowance.' css='my-2' /></div>
</div>
<div className="bg-[#110C2C] p-5 rounded-3xl">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21.6673V13.334H35V21.6673C35 27.9527 35 31.0955 33.0473 33.048C31.0948 35.0006 27.952 35.0007 21.6667 35.0007H18.3333C12.0479 35.0007 8.90525 35.0006 6.95262 33.048C5 31.0955 5 27.9527 5 21.6673Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 13.3333L6.4423 10.1282C7.5609 7.64245 8.12018 6.39958 9.25385 5.69978C10.3875 5 11.8417 5 14.75 5H25.25C28.1583 5 29.6125 5 30.7462 5.69978C31.8798 6.39958 32.4392 7.64245 33.5577 10.1282L35 13.3333" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M20 13.3333V5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M14.1673 22.4993H23.334C25.175 22.4993 26.6673 23.9917 26.6673 25.8327C26.6673 27.6737 25.175 29.166 23.334 29.166H21.6673M16.6673 19.166L13.334 22.4993L16.6673 25.8327" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
<div className='mt-6'><DynamicContent type="p4" title='Extra Requests' css=' font-semibold my-4 text-white ' /></div>
<div><DynamicContent css=' text-white ' type="p" title='If a task exceeds your allowance, we confirm time and price first, then schedule it.' /></div>
</div>
<div className={`${isDark ? "darkModeBg" : "bg-white"}  p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 15C15 17.7615 12.7614 20 10 20C7.23858 20 5 17.7615 5 15C5 12.2386 7.23858 10 10 10C12.7614 10 15 12.2386 15 15Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M35 30C35 32.7615 32.7615 35 30 35C27.2385 35 25 32.7615 25 30C25 27.2385 27.2385 25 30 25C32.7615 25 35 27.2385 35 30Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M15 15H23.3333C26.476 15 28.0473 15 29.0237 15.9763C30 16.9527 30 18.524 30 21.6667V25" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 20.0007V36.6673M10 10.0007V3.33398" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
<div className='mt-6'><DynamicContent type="p4" title='Project Work' css='font-semibold my-4' /></div>
<div><DynamicContent type="p" title='Larger features or improvements are handled as a one-off project with a clear timeline and cost.' css='my-2' /></div>
</div>
</div>
</div>






<div className='mt-24 mb-12'>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2 content-padding">  
{/* Child 2 */}
<div className="flex-1 flex flex-col items-center justify-center">
<DynamicContent type="img" src='/what-we-need-from-you.webp' css="h-auto w-auto" teaser={`Cloud Solutions`} />
</div>

{/* Child 1 */}
<div className="flex-1 flex-col flex justify-center">
<div className='mb-2'><DynamicContent type="h2" title='What We Need From You' /></div> 
<div className='mb-8'><DynamicContent type="p" title='A few basics keep delivery smooth and avoid rework.' /></div> 
<div className="px-3 flex flex-col gap-0">
<DynamicContent type="p" title='One decision-maker and a small review group' css='py-3 border-l-4 border-[#543CDA] text-[#543CDA] pl-4' />
<DynamicContent type="p" title='A technical contact for hosting, APIs, and releases' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
<DynamicContent type="p" title='Access to analytics (if available)' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
<DynamicContent type="p" title='Brand assets and any legal or compliance notes' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
</div>
</div>
</div></div>


<div className="text-center mt-24 mb-5 sub-title">
<DynamicContent type="h2" title='Got questions? We’ve got answers' />
<DynamicContent type="p3" title='Straight answers to common questions.'  />
</div>
<div>
<Accordion items={faqItems} defaultOpenIndex={0} />
</div>
</div>
);
}
