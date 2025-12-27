'use client'

import type { Metadata } from 'next'
import DynamicContent, {Counter, DynamicIcon, useDarkMode, Accordion} from "@/components/cards"




const engineered = [
{src:"/speed.webp", title:'NVMe speed', teaser:'NVMe-powered servers keep pages quick on any device.'},
{src:"/access.webp", title:'Reliable uptime', teaser:'99.9% target with clear status updates.'},
{src:"/secure.webp", title:'Straight pricing', teaser:'Simple plans and domain fees. No hidden charges'},
{src:"/search.webp", title:'Free migration', teaser:'We move your site carefully and test before go-live.'},
// add more if needed
];

const what_you_get = [
{src:"/speed.webp", title:'Strong foundations', teaser:'Fast, indexable, structured site that search engines and people trust'},
{src:"/access.webp", title:'Content that answers', teaser:'Clear, scannable pages designed around real questions and intent'},
{src:"/secure.webp", title:'Credible authority', teaser:'Coverage and links you’ll be proud to show your legal and brand teams'},
{src:"/search.webp", title:'Conversion clarity', teaser:'Forms, CTAs, and navigation that remove friction and lift completion rates'},
// add more if needed
];

const services = [
{src:"/speed.webp", title:'Technical SEO', teaser:[`Foundation & performance: Crawl/index fixes, Core Web Vitals, sitemaps/canonicals, modern frameworks, international setup`, `On-page optimization: Intent mapping per page, titles/headings/meta`, `Migrations: Pre/post-launch checks, redirect maps, rollback plan`]},
{src:"/access.webp", title:'Content Writing', teaser:[`Clear & actionable: Research-backed articles, landing pages, and service pages that deliver direct answers`,`Trust signals: Named authors, expert review, citations, “Reviewed on” dates`,`Strategic briefs: Intent, outline, and measurement plan for every piece`]},
{src:"/secure.webp", title:'Digital PR', teaser:[`Link earning: Expert commentary, data-led stories, useful tools/resources`,`Brand mention reclaim: Turn unlinked mentions into quality backlinks`,`Policy: No link farms, no paid links, no PBNs`]},
{src:"/search.webp", title:'UX & Conversion', teaser:[`Frictionless pages: Fast, readable, mobile-first layouts; form and CTA improvements`,`Testing: Copy and navigation experiments to raise CTR and completion rates`]},
{src:"/search.webp", title:[`Local: Location hubs, service-area pages, Google Business Profile setup/tracking, NAP consistency, simple reviews ops`,`International: Clear URL structure, correct hreflang/canonicals, region-specific keywords and copy`]},
// add more if needed
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


const what_we_measure = [
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33383 14.166L3.33023 23.3277C3.32808 28.8292 3.32699 31.58 5.03563 33.2894C6.74428 34.9987 9.49506 34.9987 14.9966 34.9988L24.9984 34.999C30.4974 34.9992 33.2467 34.9993 34.9552 33.2912C36.6637 31.583 36.6644 28.8335 36.6654 23.3347L36.6672 14.166" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1641 10.8333C14.1641 8.49257 14.1641 7.32218 14.7258 6.48143C14.969 6.11747 15.2815 5.80497 15.6455 5.56177C16.4862 5 17.6566 5 19.9974 5C22.3381 5 23.5086 5 24.3493 5.56177C24.7133 5.80497 25.0258 6.11747 25.2689 6.48143C25.8308 7.32218 25.8308 8.49257 25.8308 10.8333" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.329 10.8343L6.66373 10.834C4.82298 10.8341 3.33024 12.3268 3.33008 14.1675C3.33024 17.8492 6.31573 20.8347 9.99733 20.835H29.9953C33.677 20.8348 36.6623 17.8495 36.6625 14.1678C36.6623 12.327 35.1696 10.8344 33.329 10.8343Z" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.6641 20.834V22.5007C16.6641 23.2757 16.6641 23.6632 16.7493 23.981C16.9804 24.8438 17.6543 25.5177 18.5169 25.7488C18.8349 25.834 19.2224 25.834 19.9974 25.834C20.7724 25.834 21.1598 25.834 21.4778 25.7488C22.3404 25.5177 23.0144 24.8438 23.2456 23.981C23.3308 23.6632 23.3308 23.2757 23.3308 22.5007V20.834" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Business results', teaser:[`Qualified leads from search: +20–40% in 3–6 months`,`Pipeline influenced by search: 25–50%`,`Organic CAC: 10–30% lower in 6–12 months
`]},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 19.9993C4.16602 12.5354 4.16602 8.8035 6.48475 6.48475C8.8035 4.16602 12.5354 4.16602 19.9993 4.16602C27.4632 4.16602 31.1952 4.16602 33.514 6.48475C35.8327 8.8035 35.8327 12.5354 35.8327 19.9993C35.8327 27.4632 35.8327 31.1952 33.514 33.514C31.1952 35.8327 27.4632 35.8327 19.9993 35.8327C12.5354 35.8327 8.8035 35.8327 6.48475 33.514C4.16602 31.1952 4.16602 27.4632 4.16602 19.9993Z" stroke="white" stroke-width="2.5"/>
<path d="M4.16602 15H35.8327" stroke="white" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M11.666 10H11.681" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.334 10H18.349" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`, title:'SEO performance', teaser:[`Non-brand clicks: +25–60% in 3–9 months`,`Share of voice on priority keywords: +5–15 points/quarter`,`Top-3 rankings on key pages: quarterly lift (from baseline)`]},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 19.9993C4.16602 12.5354 4.16602 8.8035 6.48475 6.48475C8.8035 4.16602 12.5354 4.16602 19.9993 4.16602C27.4632 4.16602 31.1952 4.16602 33.514 6.48475C35.8327 8.8035 35.8327 12.5354 35.8327 19.9993C35.8327 27.4632 35.8327 31.1952 33.514 33.514C31.1952 35.8327 27.4632 35.8327 19.9993 35.8327C12.5354 35.8327 8.8035 35.8327 6.48475 33.514C4.16602 31.1952 4.16602 27.4632 4.16602 19.9993Z" stroke="white" stroke-width="2.5"/>
<path d="M4.16602 15H35.8327" stroke="white" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M21.666 21.666H28.3327" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.666 28.334H24.9993" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.666 10H11.681" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.334 10H18.349" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15V35.8333" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Site health & quality', teaser:[`Core Web Vitals : ≥95% URLs passing — LCP ≤2.5s, INP <200ms, CLS ≤0.1`,`Index coverage: ≥95% priority pages indexed; zero critical errors`,`CTR: +1–3 points within 60 days of on-page updates`]},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66602 25V31.6667" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 15V31.6667" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.6673 36.666H3.33398" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.334 21.666V31.666" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33413 14.6672C8.726 13.8576 7.75782 13.334 6.66732 13.334C4.82637 13.334 3.33398 14.8264 3.33398 16.6673C3.33398 18.5083 4.82637 20.0007 6.66732 20.0007C8.50827 20.0007 10.0007 18.5083 10.0007 16.6673C10.0007 15.9169 9.75265 15.2243 9.33413 14.6672ZM9.33413 14.6672L17.3338 8.66743M17.3338 8.66743C17.942 9.477 18.9102 10.0007 20.0007 10.0007C21.3057 10.0007 22.4355 9.25075 22.9827 8.15835M17.3338 8.66743C16.9153 8.1103 16.6673 7.41777 16.6673 6.66732C16.6673 4.82637 18.1597 3.33398 20.0007 3.33398C21.8417 3.33398 23.334 4.82637 23.334 6.66732C23.334 7.20328 23.2075 7.7097 22.9827 8.15835M22.9827 8.15835L30.352 11.843M30.352 11.843C30.1272 12.2916 30.0007 12.798 30.0007 13.334C30.0007 15.1749 31.493 16.6673 33.334 16.6673C35.175 16.6673 36.6673 15.1749 36.6673 13.334C36.6673 11.493 35.175 10.0007 33.334 10.0007C32.029 10.0007 30.8992 10.7506 30.352 11.843Z" stroke="#543CDA" stroke-width="2.5"/>
</svg>
`, title:'Reporting', teaser:'Dashboard: daily updates • Weekly: quick wins & fixes • Monthly: results + next 30 days • Quarterly: next 90-day plan'},
];


export default function SEOHome() {
const { isDark } = useDarkMode();
return (<>


<div className="relative w-full py-16">
{/* Gradient line */}<div
  className="absolute left-1/2 top-0 bottom-0 w-5 -translate-x-1/2
             sm:left-0 sm:right-0 sm:top-1/2 sm:h-5 sm:w-auto sm:-translate-y-1/2 sm:translate-x-0
             bg-gradient-to-b sm:bg-gradient-to-r
             from-[#543CDA] to-[#000000]"
/>

{/* Transparent overlay container */}
<div className="relative z-10 px-[10%] grid grid-cols-1 sm:grid-cols-5 gap-10">
{/* Child 1 */}
<div className={`${isDark ? "darkModeBg" : "bg-white"} rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='font-semibold text-sm' title='99.9% uptime target'  /></div>
</div>

{/* Child 2 */}
<div className={`${isDark ? "darkModeBg" : "bg-white"} rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='font-semibold text-sm' title='Quick wins in 45–60 days'  /></div>
</div>

{/* Child 3 */}
<div className={`${isDark ? "darkModeBg" : "bg-white"} rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='font-semibold text-sm' title='3–12 month growth'  /></div>
</div>


{/* Child 3 */}
<div className={`${isDark ? "darkModeBg" : "bg-white"} rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='font-semibold text-sm' title='Ethical link earning'  /></div>
</div>

<div className={`${isDark ? "darkModeBg" : "bg-white"} rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='font-semibold text-sm' title='E-E-A-T policy with named experts'  /></div>
</div>
</div>
</div>

<div className='mt-6'>
<div className="text-center mt-12 mb-8 sub-title">
<DynamicContent type="h2" title='Services - SEO • Content • Digital PR • UX' />
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2 content-padding">
<div className={`${isDark ? "darkModeBg" : "bg-white"} rounded-2xl p-6`}>
<div className='mt-6'>
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M15.5 25C15.5 20.5217 15.5 18.2825 16.8912 16.8912C18.2825 15.5 20.5217 15.5 25 15.5C29.4783 15.5 31.7175 15.5 33.1088 16.8912C34.5 18.2825 34.5 20.5217 34.5 25C34.5 29.4783 34.5 31.7175 33.1088 33.1088C31.7175 34.5 29.4783 34.5 25 34.5C20.5217 34.5 18.2825 34.5 16.8912 33.1088C15.5 31.7175 15.5 29.4783 15.5 25Z" stroke="white" strokeWidth="1.5"/>
<path d="M15.5 22H34.5" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
<path d="M20 19H20.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24 19H24.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</div> 
<div className='mt-6'><DynamicContent type="p4" title='Technical SEO' css='font-semibold' /></div> 
<div className='mt-4'>
<ul className="list-disc pl-6 space-y-2">
<li>Foundation & performance: Crawl/index fixes, Core Web Vitals, sitemaps/canonicals, modern frameworks, international setup</li>
<li>On-page optimization: Intent mapping per page, titles/headings/meta, </li>
<li>Migrations: Pre/post-launch checks, redirect maps, rollback plan</li>
</ul></div> 
</div>


<div className={`${isDark ? "darkModeBg" : "bg-white"} rounded-2xl p-6`}>
<div className='mt-6'>
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M27 17H23C19.2288 17 17.3432 17 16.1716 18.1716C15 19.3431 15 21.2288 15 25C15 28.7712 15 30.6569 16.1716 31.8284C17.3432 33 19.2288 33 23 33H27C29.8089 33 31.2134 33 32.2223 32.3259C32.659 32.034 33.034 31.659 33.3259 31.2223C34 30.2134 34 28.8089 34 26" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 25.0168L17.5 22.6005C18.3284 21.7998 19.6716 21.7998 20.5 22.6005C21.3284 23.4012 21.3284 24.6993 20.5 25.5C19.6716 26.3007 19.6716 27.5988 20.5 28.3995C21.3284 29.2002 22.6716 29.2002 23.5 28.3995L24 27.9162" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.6716 26H26V24.3284C26 23.798 26.2107 23.2893 26.5858 22.9142L32.0616 17.4393C32.6474 16.8536 33.5972 16.8536 34.183 17.4393L34.5616 17.818C35.1474 18.4038 35.1474 19.3536 34.5616 19.9393L29.0858 25.4142C28.7107 25.7893 28.202 26 27.6716 26Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
</svg>

</div> 
<div className='mt-6'><DynamicContent type="p4" title='Content Writing' css='font-semibold' /></div> 
<div className='mt-4'>
<ul className="list-disc pl-6 space-y-2">
<li>Clear & actionable: Research-backed articles, landing pages, and service pages that deliver direct answers</li>
<li>Trust signals: Named authors, expert review, citations, “Reviewed on” dates </li>
<li>Strategic briefs: Intent, outline, and measurement plan for every piece</li>
</ul></div> 
</div>


<div className={`${isDark ? "darkModeBg" : "bg-white"} rounded-2xl p-6`}>
<div className='mt-6'>
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M27 34H29M27 34C26.1716 34 25.5 33.3284 25.5 32.5V30H25M27 34H23M25 30H24.5V32.5C24.5 33.3284 23.8284 34 23 34M25 30V34M23 34H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29 16H21C18.1716 16 16.7574 16 15.8787 16.8787C15 17.7574 15 19.1716 15 22V24C15 26.8284 15 28.2426 15.8787 29.1213C16.7574 30 18.1716 30 21 30H29C31.8284 30 33.2426 30 34.1213 29.1213C35 28.2426 35 26.8284 35 24V22C35 19.1716 35 17.7574 34.1213 16.8787C33.2426 16 31.8284 16 29 16Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.5 23.5C21.5 23.5 22.5 24 23.25 25.5C23.25 25.5 26.0294 21.3333 28.5 20.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</div> 
<div className='mt-6'><DynamicContent type="p4" title='Digital PR' css='font-semibold' /></div> 
<div className='mt-4'>
<ul className="list-disc pl-6 space-y-2">
<li>Link earning: Expert commentary, data-led stories, useful tools/resources</li>
<li>Brand mention reclaim: Turn unlinked mentions into quality backlinks</li>
<li>Policy: No link farms, no paid links, no PBNs</li>
</ul></div> 
</div>


<div className={`${isDark ? "darkModeBg" : "bg-white"} rounded-2xl p-6`}>
<div className='mt-6'>
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M15.5 25C15.5 20.5217 15.5 18.2825 16.8912 16.8912C18.2825 15.5 20.5217 15.5 25 15.5C29.4783 15.5 31.7175 15.5 33.1088 16.8912C34.5 18.2825 34.5 20.5217 34.5 25C34.5 29.4783 34.5 31.7175 33.1088 33.1088C31.7175 34.5 29.4783 34.5 25 34.5C20.5217 34.5 18.2825 34.5 16.8912 33.1088C15.5 31.7175 15.5 29.4783 15.5 25Z" stroke="white" strokeWidth="1.5"/>
<path d="M15.5 22H34.5" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
<path d="M26 26H30" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26 30H28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 19H20.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24 19H24.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22V34.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</div> 
<div className='mt-6'><DynamicContent type="p4" title='UX & Conversion' css='font-semibold' /></div> 
<div className='mt-4'>
<ul className="list-disc pl-6 space-y-2">
<li>Frictionless pages: Fast, readable, mobile-first layouts; form and CTA improvements</li>
<li>Testing: Copy and navigation experiments to raise CTR and completion rates</li>
</ul></div> 
</div>


<div className={`${isDark ? "darkModeBg" : "bg-white"} rounded-2xl p-6`}>
<div className='mt-6'>
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M15.2561 28.6322C15.2901 28.309 15.5243 28.0485 15.9927 27.5276L17.0238 26.3749C17.2758 26.0558 17.4547 25.5 17.4547 24.9998C17.4547 24.5 17.2758 23.944 17.0238 23.625L15.9927 22.4723C15.5243 21.9514 15.2901 21.6909 15.2561 21.3677C15.2222 21.0445 15.3971 20.7408 15.747 20.1336L16.2406 19.277C16.6139 18.6291 16.8005 18.3052 17.1181 18.1761C17.4357 18.0469 17.7949 18.1488 18.5132 18.3527L19.7334 18.6964C20.192 18.8021 20.6732 18.7421 21.0919 18.527L21.4288 18.3326C21.7879 18.1026 22.0641 17.7635 22.217 17.3649L22.5509 16.3675C22.7705 15.7075 22.8803 15.3775 23.1416 15.1888C23.403 15 23.7502 15 24.4445 15H25.5593C26.2537 15 26.6009 15 26.8622 15.1888C27.1236 15.3775 27.2334 15.7075 27.453 16.3675L27.7869 17.3649C27.9398 17.7635 28.216 18.1026 28.5751 18.3326L28.912 18.527C29.3307 18.7421 29.8119 18.8021 30.2705 18.6964L31.4907 18.3527C32.209 18.1488 32.5682 18.0469 32.8858 18.1761C33.2034 18.3052 33.39 18.6291 33.7633 19.277L34.2569 20.1336C34.6068 20.7408 34.7817 21.0445 34.7478 21.3677C34.7138 21.6909 34.4796 21.9514 34.0112 22.4723L32.9801 23.625C32.7282 23.944 32.5492 24.5 32.5492 24.9998C32.5492 25.5 32.7281 26.0558 32.9801 26.3749L34.0112 27.5276C34.4796 28.0485 34.7138 28.309 34.7478 28.6322C34.7817 28.9555 34.6068 29.2591 34.2569 29.8663L33.7633 30.7229C33.39 31.3707 33.2034 31.6947 32.8858 31.8238C32.5682 31.953 32.209 31.8511 31.4907 31.6472L30.2705 31.3035C29.8118 31.1977 29.3306 31.2578 28.9118 31.473L28.575 31.6674C28.2159 31.8974 27.9398 32.2364 27.787 32.635L27.453 33.6325C27.2334 34.2925 27.1236 34.6225 26.8622 34.8112C26.6009 35 26.2537 35 25.5593 35H24.4445C23.7502 35 23.403 35 23.1416 34.8112C22.8803 34.6225 22.7705 34.2925 22.5509 33.6325" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M15.737 31.7798C16.817 30.6998 20.489 27.0638 20.849 26.6438C21.2295 26.1998 20.921 25.5998 21.1046 23.7398C21.1934 22.8398 21.387 22.1656 21.941 21.6638C22.601 21.0398 23.141 21.0398 25.001 20.9978C26.621 21.0398 26.813 20.8598 26.981 21.2798C27.101 21.5798 26.741 21.7598 26.309 22.2398C25.349 23.1998 24.785 23.6798 24.731 23.9798C24.341 25.2998 25.877 26.0798 26.717 25.2398C27.0346 24.9221 28.505 23.4398 28.649 23.3198C28.757 23.2238 29.0155 23.2284 29.141 23.3798C29.249 23.4859 29.261 23.4998 29.249 23.9798C29.2379 24.4241 29.2428 25.062 29.2442 25.7198C29.2459 26.5721 29.201 27.5198 28.841 27.9998C28.121 29.0798 26.921 29.1398 25.841 29.1878C24.821 29.2478 23.981 29.1398 23.717 29.3318C23.501 29.4398 22.361 30.6398 20.981 32.0198L18.521 34.4798C16.481 36.0998 14.237 33.5798 15.737 31.7798Z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
</svg>

</div> 
<div className='mt-6'><DynamicContent type="p4" title='Local & International SEO' css='font-semibold' /></div> 
<div className='mt-4'>
<ul className="list-disc pl-6 space-y-2">
<li>Local: Location hubs, service-area pages, Google Business Profile setup/tracking, NAP consistency, simple reviews ops</li>
<li>International: Clear URL structure, correct hreflang/canonicals, region-specific keywords and copy
</li>
</ul></div> 
</div>

</div>



<div className="grid grid-cols-1 sm:grid-cols-[42%_56%] gap-10 p-2 content-padding my-18 py-18 card-surface">
  {/* Child 2 */}
<div className="flex-1 flex flex-col items-center justify-center">
<DynamicContent type="img" src='/show-up.webp' css="h-auto w-auto" teaser={`Show up in modern results - AI & answer engines`} />
</div>
{/* Child 1 */}
<div className="flex-1 flex-col flex justify-center rounded-lg p-6">
<div><DynamicContent type="h2" title='Show up in modern results - AI & answer engines' /></div>  
<ul className="list-disc pl-6 space-y-6 mt-10">
<li>Be summarizable: Clean sections, cited sources, and schema so assistants can quote you accurately </li>
<li>Consistent facts: Centralized “source of truth” content to keep brand details uniform across results</li>
<li>Lead with answers: Direct answers first, followed by steps and FAQs to win featured/zero-click spots </li>
<li>Search experience: Fast, scannable, action-oriented pages so attention turns into action
 </li>
</ul> 
</div>
</div>






<div className='py-[6%] px-[4%] footerBg rounded-3xl text-white my-[8%]'>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-center">
{/* Text */}
<div>
<div className="mb-8">
<DynamicContent type="h2" title="How we work" />
</div>
</div>
{/* Line */}
<div className="hidden sm:block w-full border-t border-t-gray-800"></div>
</div>



<div className="my-8">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-16">
<div className="bg-[#464067] p-3 sm:p-7 rounded-3xl">
<div className="max-w-80 mb-8"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M16.8506 6.66602C16.7173 7.16602 16.6673 7.71602 16.6673 8.33268V13.3327H8.33398V9.99935C8.33398 8.16602 9.83398 6.66602 11.6673 6.66602H16.8506Z" fill="white"/>
<path d="M16.6673 31.6673V13.334H8.33398C5.00065 13.334 3.33398 15.0007 3.33398 18.334V31.6673C3.33398 35.0007 5.00065 36.6673 8.33398 36.6673H21.6673C18.334 36.6673 16.6673 35.0007 16.6673 31.6673ZM11.2507 28.334C11.2507 29.0173 10.684 29.584 10.0007 29.584C9.31732 29.584 8.75065 29.0173 8.75065 28.334V21.6673C8.75065 20.984 9.31732 20.4173 10.0007 20.4173C10.684 20.4173 11.2507 20.984 11.2507 21.6673V28.334Z" fill="white"/>
<path opacity="0.4" d="M23.3327 36.6673H21.666C18.3327 36.6673 16.666 35.0007 16.666 31.6673V8.33398C16.666 5.00065 18.3327 3.33398 21.666 3.33398H31.666C34.9993 3.33398 36.666 5.00065 36.666 8.33398V31.6673C36.666 35.0007 34.9993 36.6673 31.666 36.6673H29.9993" fill="white"/>
<path d="M30.0007 30.0007V36.6673H23.334V30.0007C23.334 29.084 24.084 28.334 25.0007 28.334H28.334C29.2507 28.334 30.0007 29.084 30.0007 30.0007Z" fill="white"/>
<path d="M23.334 22.9173C22.6507 22.9173 22.084 22.3507 22.084 21.6673V13.334C22.084 12.6507 22.6507 12.084 23.334 12.084C24.0173 12.084 24.584 12.6507 24.584 13.334V21.6673C24.584 22.3507 24.0173 22.9173 23.334 22.9173Z" fill="white"/>
<path d="M30 22.9173C29.3167 22.9173 28.75 22.3507 28.75 21.6673V13.334C28.75 12.6507 29.3167 12.084 30 12.084C30.6833 12.084 31.25 12.6507 31.25 13.334V21.6673C31.25 22.3507 30.6833 22.9173 30 22.9173Z" fill="white"/>
</svg>
</div>
<div className="mb-4">
<DynamicContent css='font-bold' type="p4" title='Discover-Design-Build-Grow' /></div>
<ul className="list-disc pl-6 space-y-5 p-base-res">
<li>•Discover: Practical audit, market and competitor analysis, opportunity model, KPI targets
</li>
<li>Design: Content architecture, internal link plan, schema strategy, tracking setup</li>
<li>Build: Implement fixes, publish content, run digital PR, wire up dashboards; quality checks before go-live</li>
<li>Grow: Ongoing publishing and refresh schedule, experiments, monthly reporting with a 30-day action plan</li>
</ul>

<div className="mt-8 mb-5 flex items-center gap-2">
  <DynamicContent type="p">
    <>
      <DynamicContent
        type="link"
        title="Request a Technical Audit"
        url="/technical-audit"
        css="underline font-semibold"
      />
    </>
  </DynamicContent>

  <DynamicIcon name="ArrowUpRight" size={18} color="#ffffff" />
</div>
</div>


<div className="bg-[#464067] p-3 sm:p-7 rounded-3xl">
<div className="max-w-80 mb-8"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M32.25 9.43391L21.7667 3.78398C20.6667 3.18398 19.3333 3.18398 18.2167 3.78398L7.73337 9.43391C6.9667 9.85057 6.5 10.6673 6.5 11.5673C6.5 12.4673 6.9667 13.2839 7.73337 13.7006L18.2167 19.3506C18.7667 19.6506 19.3833 19.8006 19.9833 19.8006C20.5833 19.8006 21.2 19.6506 21.75 19.3506L32.2333 13.7006C33 13.2839 33.4667 12.4673 33.4667 11.5673C33.5 10.6673 33.0167 9.85057 32.25 9.43391Z" fill="white"/>
<path opacity="0.4" d="M16.4999 21.316L6.74985 16.4327C5.99985 16.0493 5.13319 16.0993 4.41652 16.5327C3.69986 16.966 3.2832 17.7327 3.2832 18.566V27.7827C3.2832 29.3827 4.16651 30.816 5.59984 31.5327L15.3499 36.3994C15.6832 36.5661 16.0499 36.6493 16.4165 36.6493C16.8499 36.6493 17.2832 36.5327 17.6665 36.2827C18.3832 35.8494 18.7999 35.0827 18.7999 34.2493V25.0327C18.8165 23.466 17.9332 22.0326 16.4999 21.316Z" fill="white"/>
<path opacity="0.4" d="M36.7169 18.5834V26.2334C36.7003 26.2167 36.6836 26.1834 36.6669 26.1667C36.6669 26.1501 36.6503 26.1334 36.6336 26.1167C36.567 26.0167 36.4836 25.9167 36.4003 25.8334C36.3836 25.8167 36.3669 25.7834 36.3503 25.7668C35.0003 24.2668 33.0169 23.3334 30.8336 23.3334C28.7336 23.3334 26.8169 24.2 25.4503 25.6C24.1336 26.95 23.3336 28.8001 23.3336 30.8334C23.3336 32.2334 23.7336 33.5667 24.4169 34.7001C24.7003 35.1834 25.0503 35.6167 25.4336 36.0167L24.6503 36.4167C24.317 36.5833 23.9503 36.6667 23.5836 36.6667C23.1503 36.6667 22.717 36.5501 22.317 36.3001C21.617 35.8668 21.1836 35.1001 21.1836 34.2667V25.0667C21.1836 23.4667 22.067 22.0334 23.5003 21.3167L33.2503 16.45C34.0003 16.0667 34.867 16.1 35.5836 16.55C36.2836 16.9834 36.7169 17.7501 36.7169 18.5834Z" fill="white"/>
<path d="M36.634 26.1171C35.2673 24.4338 33.184 23.3672 30.834 23.3672C29.0673 23.3672 27.434 23.9838 26.1507 25.0172C24.4173 26.3838 23.334 28.5005 23.334 30.8672C23.334 32.2672 23.734 33.6005 24.4173 34.7339C24.8673 35.4839 25.434 36.1338 26.1007 36.6672H26.1173C27.4007 37.7338 29.0507 38.3672 30.834 38.3672C32.734 38.3672 34.4506 37.6672 35.7673 36.5005C36.3506 36.0005 36.8507 35.4005 37.2507 34.7339C37.934 33.6005 38.334 32.2672 38.334 30.8672C38.334 29.0672 37.7007 27.4005 36.634 26.1171ZM34.6007 29.9339L30.6006 33.6338C30.3673 33.8505 30.0507 33.9672 29.7507 33.9672C29.434 33.9672 29.1173 33.8504 28.8673 33.6004L27.0173 31.7505C26.534 31.2671 26.534 30.4671 27.0173 29.9838C27.5006 29.5005 28.3006 29.5005 28.784 29.9838L29.784 30.9839L32.9006 28.1005C33.4006 27.6338 34.2006 27.6672 34.6673 28.1672C35.1506 28.6839 35.1173 29.4672 34.6007 29.9339Z" fill="white"/>
</svg>
</div>
<div className="mb-4"><DynamicContent css='font-bold' type="p" title='Content operations & refresh' /></div>
<ul className="list-disc pl-6 space-y-5 p-base-res">
<li>Before we write: Intent, success metric, outline, sources, internal links, schema notes</li>
<li>Editorial QA: Fact-check, expert review, named author bios, E-E-A-T standards</li>
<li>Decay & refresh: Rolling 30/60/90-day plan to update, consolidate, or expand</li>
<li>Scale: Programmatic templates with guardrails; international architecture</li>
</ul>
<div className="mt-8 mb-5 flex items-center gap-2">
  <DynamicContent type="p">
    <>
      <DynamicContent
        type="link"
        title="Request a Technical Audit"
        url="/technical-audit"
        css="underline font-semibold"
      />
    </>
  </DynamicContent>

  <DynamicIcon name="ArrowUpRight" size={18} color="#ffffff" />
</div>
</div>
</div>
</div>
</div>


<div className='content-padding'>
<div className='border border-[#543CDA] p-10 rounded-3xl'>
<div className='flex justify-between items-center mb-10'>
<div><DynamicContent type="h2" title='Deliverables you get' /></div>
<div><DynamicContent type="img" src='/deliverables-you-get.webp' css="w-50 h-50 rounded-md object-cover inline-block" teaser={`deliverables you get`} /></div>
</div>
<div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
<div>
<ul className="list-disc pl-6 space-y-6">
<li>Prioritized technical audit (clear fixes)</li>
<li>Topical map & cluster architecture</li>
<li>Content brief pack (intent, outline, sources, interlinks) </li>
<li>Internal link blueprint </li>
</ul>
</div>
<div>
<ul className="list-disc pl-6 space-y-6">
<li>Schema plan (by template)</li>
<li>Digital PR target list + outreach log</li>
<li>Live Looker Studio dashboard + tracking spec (GSC/GA4/ etc) </li>
<li>SEO runbook; Migration runbook (if needed)
 </li>
</ul>
</div>
</div>
</div>
<div className='text-[#543CDA] my-10'>Tools we use: GSC, GA4, BigQuery • Screaming Frog, Sitebulb • Ahrefs, SEMrush • Server logs • Looker Studio</div>
</div>
</div>



<div className="text-center mt-18 mb-14 sub-title">
<DynamicContent type="h2" title='What we measure' />
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 content-padding">
{what_we_measure.map((src, i) => {
    const indigoIndexes = [1, 2]; // 👈 manually choose
    return (
      <div
        key={`how_we_workkjj-${i}`}
        className={`p-[1%] sm:p-[2%] md:p-[3%] rounded-3xl ${
      indigoIndexes.includes(i)
        ? "bg-[#110C2C] text-white"
        : isDark ? "darkModeBg " : "bg-white "
    }`}
      >
<div className="p-5 h-full flex flex-col">
<div className="w-[58px] space-y-2 shrink-0 mb-8">
<div className="w-[58px] space-y-2 shrink-0 mb-4" dangerouslySetInnerHTML={{ __html: src.src }} />
</div>

          <div className="space-y-2 mb-3 font-bold">
            <DynamicContent
              css="font-semibold"
              type="p3"
              title={src.title || ""}
            />
          </div>

          <div className="space-y-2">
            {Array.isArray(src.teaser) ? (
  <ul className="list-disc pl-6 space-y-2">
    {src.teaser.map((item, index) => (
      <li key={index}>
        <DynamicContent type="p" title={item} />
      </li>
    ))}
  </ul>
) : (
  <DynamicContent type="p" title={src.teaser || ""} />
)}

          </div>
        </div>
      </div>
    );
  })}
</div>




<div className="py-15 my-22 card-surface">
<div className="my-10 sub-title">
<DynamicContent type="h2" title='Who we help & expected outcomes' css='text-center' />
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-10 p-2 mt-10">
<div className={`${isDark ? "darkModeBg" : "bg-white"} p-8 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M28.38 0H11.62C4.34 0 0 4.34 0 11.62V28.38C0 35.66 4.34 40 11.62 40H28.38C35.66 40 40 35.66 40 28.38V11.62C40 4.34 35.66 0 28.38 0Z" fill="#543CDA"/>
<path d="M32.6191 13.7402C32.6191 14.5602 31.9591 15.2402 31.1191 15.2402H20.6191C19.7991 15.2402 19.1191 14.5602 19.1191 13.7402C19.1191 12.9202 19.7991 12.2402 20.6191 12.2402H31.1191C31.9591 12.2402 32.6191 12.9202 32.6191 13.7402Z" fill="#543CDA"/>
<path d="M15.9391 11.7991L11.4391 16.2991C11.1391 16.5991 10.7591 16.7391 10.3791 16.7391C9.99914 16.7391 9.59914 16.5991 9.31914 16.2991L7.81914 14.7991C7.21914 14.2191 7.21914 13.2591 7.81914 12.6791C8.39914 12.0991 9.33914 12.0991 9.93914 12.6791L10.3791 13.1191L13.8191 9.67914C14.3991 9.09914 15.3391 9.09914 15.9391 9.67914C16.5191 10.2591 16.5191 11.2191 15.9391 11.7991Z" fill="#543CDA"/>
<path d="M32.6191 27.7402C32.6191 28.5602 31.9591 29.2402 31.1191 29.2402H20.6191C19.7991 29.2402 19.1191 28.5602 19.1191 27.7402C19.1191 26.9202 19.7991 26.2402 20.6191 26.2402H31.1191C31.9591 26.2402 32.6191 26.9202 32.6191 27.7402Z" fill="#543CDA"/>
<path d="M15.9391 25.7991L11.4391 30.2991C11.1391 30.5991 10.7591 30.7391 10.3791 30.7391C9.99914 30.7391 9.59914 30.5991 9.31914 30.2991L7.81914 28.7991C7.21914 28.2191 7.21914 27.2591 7.81914 26.6791C8.39914 26.0991 9.33914 26.0991 9.93914 26.6791L10.3791 27.1191L13.8191 23.6791C14.3991 23.0991 15.3391 23.0991 15.9391 23.6791C16.5191 24.2591 16.5191 25.2191 15.9391 25.7991Z" fill="#543CDA"/>
</svg>
</div>
<div className='mt-8'><DynamicContent type="p3" title='Best fit' css='font-semibold my-4' /></div>
<div>
<ul className="list-disc pl-6 space-y-2 p-base-res">
<li>Product or service businesses with a clear market</li>
<li>Teams ready to implement - we can run end-to-end or partner with in-house</li>
<li>Single-market or multi-location brands needing technical + content + PR in one lane</li>
</ul>
</div>
</div>
<div className="bg-[#543CDA] p-8 rounded-3xl">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M36.6173 10.684V21.5173H3.33398V10.684C3.33398 6.63398 6.63398 3.33398 10.684 3.33398H29.2673C33.3173 3.33398 36.6173 6.63398 36.6173 10.684Z" fill="white"/>
<path d="M3.33398 21.5332V21.8665C3.33398 25.9332 6.63398 29.2165 10.684 29.2165H17.084C18.0007 29.2165 18.7507 29.9665 18.7507 30.8832V32.4999C18.7507 33.4165 18.0007 34.1665 17.084 34.1665H13.0507C12.3673 34.1665 11.8007 34.7332 11.8007 35.4165C11.8007 36.0999 12.3507 36.6665 13.0507 36.6665H26.9673C27.6507 36.6665 28.2173 36.0999 28.2173 35.4165C28.2173 34.7332 27.6507 34.1665 26.9673 34.1665H22.934C22.0173 34.1665 21.2673 33.4165 21.2673 32.4999V30.8832C21.2673 29.9665 22.0173 29.2165 22.934 29.2165H29.284C33.3507 29.2165 36.634 25.9165 36.634 21.8665V21.5332H3.33398Z" fill="white"/>
</svg>
</div>
<div className='mt-8'><DynamicContent type="p3" title='What it delivers' css='font-semibold text-white my-4' /></div>
<div>
<ul className="list-disc text-white pl-6 space-y-3">
<li>Higher-quality traffic: more high-intent visitors and qualified leads</li>
<li>Bigger share of results: snippets, maps, and answer engines</li>
<li>Lower acquisition cost: compounding gains over time</li>
<li>Actionable reporting: decisions you can use the same day</li>
</ul>
</div>
</div>
<div className={`${isDark ? "darkModeBg" : "bg-white"} p-8 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.9164 5.93398V3.33398C27.9164 2.65065 27.3497 2.08398 26.6664 2.08398C25.9831 2.08398 25.4164 2.65065 25.4164 3.33398V5.83398H14.5831V3.33398C14.5831 2.65065 14.0164 2.08398 13.3331 2.08398C12.6497 2.08398 12.0831 2.65065 12.0831 3.33398V5.93398C7.58306 6.35065 5.39973 9.03398 5.0664 13.0173C5.03306 13.5006 5.43306 13.9006 5.89973 13.9006H34.0997C34.5831 13.9006 34.9831 13.484 34.9331 13.0173C34.5997 9.03398 32.4164 6.35065 27.9164 5.93398Z" fill="#543CDA"/>
<path opacity="0.4" d="M33.3333 16.4004C34.25 16.4004 35 17.1504 35 18.0671V28.3337C35 33.3337 32.5 36.6671 26.6667 36.6671H13.3333C7.5 36.6671 5 33.3337 5 28.3337V18.0671C5 17.1504 5.75 16.4004 6.66667 16.4004H33.3333Z" fill="#543CDA"/>
<path d="M14.1667 24.9995C13.7333 24.9995 13.3 24.8161 12.9833 24.5161C12.6833 24.1994 12.5 23.7661 12.5 23.3328C12.5 22.8995 12.6833 22.4661 12.9833 22.1495C13.45 21.6828 14.1833 21.5328 14.8 21.7994C15.0167 21.8828 15.2 21.9995 15.35 22.1495C15.65 22.4661 15.8333 22.8995 15.8333 23.3328C15.8333 23.7661 15.65 24.1994 15.35 24.5161C15.0333 24.8161 14.6 24.9995 14.1667 24.9995Z" fill="#543CDA"/>
<path d="M20.0007 24.9995C19.5673 24.9995 19.134 24.8161 18.8173 24.5161C18.5173 24.1994 18.334 23.7661 18.334 23.3328C18.334 22.8995 18.5173 22.4661 18.8173 22.1495C18.9673 21.9995 19.1506 21.8828 19.3673 21.7994C19.984 21.5328 20.7173 21.6828 21.184 22.1495C21.484 22.4661 21.6673 22.8995 21.6673 23.3328C21.6673 23.7661 21.484 24.1994 21.184 24.5161C21.1006 24.5828 21.0173 24.6494 20.934 24.7161C20.834 24.7828 20.734 24.8328 20.634 24.8662C20.534 24.9162 20.434 24.9495 20.334 24.9661C20.2173 24.9828 20.1173 24.9995 20.0007 24.9995Z" fill="#543CDA"/>
<path d="M25.8327 24.9994C25.3993 24.9994 24.966 24.816 24.6494 24.516C24.3494 24.1994 24.166 23.766 24.166 23.3327C24.166 22.8994 24.3494 22.466 24.6494 22.1494C24.816 21.9994 24.9827 21.8827 25.1993 21.7993C25.4993 21.666 25.8327 21.6327 26.166 21.6994C26.266 21.716 26.366 21.7493 26.466 21.7993C26.566 21.8327 26.666 21.8827 26.766 21.9494C26.8494 22.0161 26.9327 22.0827 27.016 22.1494C27.316 22.466 27.4993 22.8994 27.4993 23.3327C27.4993 23.766 27.316 24.1994 27.016 24.516C26.9327 24.5827 26.8494 24.6493 26.766 24.716C26.666 24.7827 26.566 24.8327 26.466 24.8661C26.366 24.9161 26.266 24.9494 26.166 24.9661C26.0494 24.9827 25.9327 24.9994 25.8327 24.9994Z" fill="#543CDA"/>
<path d="M14.1667 30.8334C13.95 30.8334 13.7333 30.7834 13.5333 30.7C13.3167 30.6167 13.15 30.5 12.9833 30.35C12.6833 30.0333 12.5 29.6 12.5 29.1667C12.5 28.7334 12.6833 28.3 12.9833 27.9834C13.15 27.8334 13.3167 27.7167 13.5333 27.6333C13.8333 27.5 14.1667 27.4667 14.5 27.5333C14.6 27.55 14.7 27.5833 14.8 27.6333C14.9 27.6667 15 27.7167 15.1 27.7834C15.1833 27.85 15.2667 27.9167 15.35 27.9834C15.65 28.3 15.8333 28.7334 15.8333 29.1667C15.8333 29.6 15.65 30.0333 15.35 30.35C15.2667 30.4167 15.1833 30.5 15.1 30.55C15 30.6167 14.9 30.6667 14.8 30.7C14.7 30.75 14.6 30.7834 14.5 30.8C14.3833 30.8167 14.2833 30.8334 14.1667 30.8334Z" fill="#543CDA"/>
<path d="M20.0007 30.834C19.5673 30.834 19.134 30.6506 18.8173 30.3506C18.5173 30.034 18.334 29.6006 18.334 29.1673C18.334 28.734 18.5173 28.3007 18.8173 27.984C19.434 27.3673 20.5673 27.3673 21.184 27.984C21.484 28.3007 21.6673 28.734 21.6673 29.1673C21.6673 29.6006 21.484 30.034 21.184 30.3506C20.8673 30.6506 20.434 30.834 20.0007 30.834Z" fill="#543CDA"/>
<path d="M25.8327 30.834C25.3993 30.834 24.966 30.6506 24.6494 30.3506C24.3494 30.034 24.166 29.6006 24.166 29.1673C24.166 28.734 24.3494 28.3007 24.6494 27.984C25.266 27.3673 26.3993 27.3673 27.016 27.984C27.316 28.3007 27.4993 28.734 27.4993 29.1673C27.4993 29.6006 27.316 30.034 27.016 30.3506C26.6993 30.6506 26.266 30.834 25.8327 30.834Z" fill="#543CDA"/>
</svg>
</div>
<div className='mt-8'><DynamicContent type="p3" title='Timeline' css='font-semibold my-4' /></div>
<div>
<ul className="list-disc pl-6 space-y-3">
<li>Days 1–60: Fix critical technical issues, tighten on-page, improve internal links, publish first pieces, tune GBP</li>
<li>Months 3–6: Non-brand clicks rise, first quality links land, key pages climb</li>
<li>Months 6–12: Topical authority takes hold; steadier organic pipeline and lower CAC</li>
</ul>
</div>
</div>
</div>
</div>




<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2 px-[1%] md:px-[6%]">  
{/* Child 2 */}
<div className="flex-1 flex flex-col items-center justify-center">
<DynamicContent type="img" src='/typical-projects.webp' css="h-auto w-auto" teaser={`Safe launches, compliance & recovery`} />
</div>

{/* Child 1 */}
<div className="flex-1 flex-col flex justify-center">
<div className='mb-8'><DynamicContent type="h2" title='Safe launches, compliance & recovery' /></div> 
<ul className="list-disc pl-6 space-y-5">
<li>Before launch: Full crawl & URL inventory; redirect map; canonicals/robots/sitemaps/hreflang; tracking spec & data layer; Consent Mode v2; NDPR-aware consent wording</li>
<li>Go-live (day 0): Smoke tests (key pages, forms, search, checkout); redirects validated; indexability & schema checks; CWV baseline</li>
<li>Weeks 1–4: GSC coverage & query shifts; server-log checks; fix 404s/duplicates/missing tags; compare pre/post metrics</li>
<li>Penalty & recovery: Thin/duplicate content and risky link audit; cleanup/disavow; manual action playbook</li>
<li>Rollback: Clear revert steps if key metrics fall; backups, previous sitemaps/robots on hand</li>
<li>What you receive: Migration checklist & redirect map (CSV) • Tracking spec & data layer notes • Post-launch watchlist • Recovery/rollback playbook</li>
</ul>
</div>
</div>


</div></>
);
}
