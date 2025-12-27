'use client'

import type { Metadata } from 'next'
import DynamicContent, {useDarkMode} from "@/components/cards"
import WhatWeDo from "@/components/WhatWeDo"

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

export default function About() {
const { isDark } = useDarkMode();
  
return (
<div>
<div className="my-20 px-[1%] sm:px-[5%] md:px-[10%]">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-15">
<div className={`${isDark ? " bg-[#141313] border-[#141313] text-gray-100 " : " bg-white border-gray-200 "} border sm:p-5 rounded-2xl`}>
<div className="flex w-full items-center mb-4">
{/* Thumbnail (auto-sized to content) */}
<div className="flex-shrink-0">
<svg
className="w-6 h-6 text-yellow-600"
fill="none"
stroke="currentColor"
strokeWidth="2"
viewBox="0 0 24 24"
>
<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 4h.01M10.29 3.86L1.82 18a1 1 0 00.86 1.5h18.64a1 1 0 00.86-1.5L13.71 3.86a1 1 0 00-1.72 0z" />
</svg>
</div>

{/* Content (fills the remaining space) */}
<div className="flex-1 ml-4">
<DynamicContent css="font-semibold" type="p" title="Problems We Solve" />
</div>
</div>
<div>
<ul className="list-disc pl-6 space-y-2 p-base-res">
<li>Slow or unreliable sites that affect sales and trust </li>
<li>Manual processes that waste time and cause errors </li>
<li>Disconnected tools and data </li>
<li>Poor mobile experience and high drop-offs </li>
<li>Low search visibility and weak content </li>
<li>Hosting issues and downtime </li>
</ul>
</div>
</div>


<div className={`${isDark ? " bg-[#141313] border-[#141313] text-gray-100  " : " bg-white border-gray-200 "} border sm:p-5 rounded-2xl sm:p-5 rounded-2xl`}>
<div className="flex w-full items-center mb-4">
{/* Thumbnail (auto-sized to content) */}
<div className="flex-shrink-0">
<svg
className="w-9 h-9 text-green-600"  // ← Increase size here (e.g., w-12 h-12, w-14 h-14)
fill="currentColor"
viewBox="0 0 24 24"
>
<path
fillRule="evenodd"
d="M12 1.5l7 3v6c0 5.25-3.75 10.125-7 12-3.25-1.875-7-6.75-7-12v-6l7-3z"
clipRule="evenodd"
/>
<path
d="M16.5 9l-4.5 4.5L9 10.5"
stroke="white"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
/>
</svg>
</div>

{/* Content (fills the remaining space) */}
<div className="flex-1 ml-4">
<DynamicContent css="font-semibold" type="p" title="How We Help" />
</div>
</div>
<div>
<ul className="list-disc pl-6 space-y-2 p-base-res">
<li>Clean, fast builds that work well on real African networks </li>
<li>Simple user flows that reduce support tickets</li>
<li>Integrations for payments, CRM, and internal tools </li>
<li>Clear reports that show results and next steps  </li>
<li>Reliable hosting and VPS via Nexoris Cloud Solutions  </li>
<li>Technical SEO fixes and a practical content plan </li>
</ul>
</div>
</div>
</div>


<DynamicContent type="p"> <>We work with clients in Nigeria, across Africa, and globally - from first versions to major rebuilds. For lessons from our projects, see 
 See <DynamicContent type="link" title='Insights.' url='/seo-content-marketing' css="text-[#543CDA] font-semibold"  /> 
</>
</DynamicContent>


<div className="my-20">
<DynamicContent type="h2" title='What We Do' />
<DynamicContent type="p" title='We follow a simple path: understand the problem, design the right solution, build it well, then keep it running and improving.' />

<div className='mt-10 hidden sm:block'>
{isDark ? <DynamicContent src='/whatwedo.webp' type="img" title='What we do' teaser='What we do' /> : <DynamicContent src='/whatwedo1.webp' type="img" title='What we do' teaser='What we do' />}
</div>

<div className='mt-10 sm:hidden'>
<div className="flex items-start space-x-6 relative mb-8">
{/* LEFT: Icon + Vertical Line + Arrow */}
<div className="relative flex flex-col items-center">
{/* Icon Circle */}<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M35.8109 20.6282L29.3721 14.1895C29.2328 14.0501 29.0675 13.9396 28.8855 13.8642C28.7034 13.7888 28.5084 13.75 28.3114 13.75C28.1143 13.75 27.9193 13.7888 27.7372 13.8642C27.5552 13.9396 27.3899 14.0501 27.2506 14.1895L24.5843 16.8557L19.1468 18.8957C18.8997 18.9876 18.6813 19.1431 18.5134 19.3463C18.3455 19.5496 18.2342 19.7935 18.1906 20.0535L16.2434 31.7348C16.2303 31.8131 16.2425 31.8935 16.2781 31.9645C16.3137 32.0355 16.3709 32.0934 16.4415 32.1297C16.512 32.1661 16.5923 32.1792 16.6708 32.167C16.7493 32.1548 16.8218 32.118 16.8781 32.062L22.2218 26.7182C22.0525 26.366 21.9785 25.9755 22.0071 25.5857C22.042 25.1062 22.2295 24.6505 22.5423 24.2853C22.855 23.9201 23.2765 23.6647 23.7449 23.5565C24.2134 23.4484 24.7042 23.4931 25.1454 23.6841C25.5865 23.8752 25.9549 24.2026 26.1965 24.6182C26.4381 25.0339 26.5402 25.516 26.4878 25.994C26.4354 26.4719 26.2314 26.9205 25.9055 27.2739C25.5796 27.6274 25.149 27.8672 24.677 27.9582C24.2049 28.0492 23.716 27.9865 23.2821 27.7795L17.9384 33.1232C17.8823 33.1794 17.8455 33.252 17.8334 33.3305C17.8212 33.4089 17.8342 33.4892 17.8706 33.5598C17.907 33.6304 17.9648 33.6876 18.0358 33.7232C18.1068 33.7588 18.1872 33.771 18.2656 33.7579L29.9478 31.8107C30.2073 31.7675 30.451 31.6567 30.6542 31.4895C30.8574 31.3223 31.0131 31.1046 31.1056 30.8582L33.1465 25.4141L35.8109 22.7507C35.9502 22.6114 36.0607 22.446 36.1361 22.264C36.2115 22.082 36.2503 21.8869 36.2503 21.6899C36.2503 21.4929 36.2115 21.2978 36.1361 21.1158C36.0607 20.9338 35.9502 20.7684 35.8109 20.6291V20.6282ZM32.5006 23.9395L26.0618 17.5007L28.3118 15.2507L34.7506 21.6895L32.5006 23.9395Z" fill="white"/>
</svg>

{/* Vertical Line */}
<div className="w-px h-40 bg-gray-300"></div>

{/* Down Arrow */}
<div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-300"></div>
</div>

{/* RIGHT: Content */}
<div className="max-w-xl">
<DynamicContent type="p4" css='font-semibold' title='Plan & Design ' />
<ul className="list-disc space-y-4 pl-5 mt-2">
<li>
<strong>Product Design & Management:</strong> Clear goals, scope, roadmap, and success metrics. Alignment across teams and a plan for delivery.
</li>
<li>
<strong>UI/UX Design & Consulting:</strong> User journeys, wireframes, and clean screens developers can build without guesswork.
</li>
</ul>
</div>
</div>






<div className="flex items-start space-x-6 relative mb-8">
{/* LEFT: Icon + Vertical Line + Arrow */}
<div className="relative flex flex-col items-center">
{/* Icon Circle */}
<div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.3085 10.0509C22.2876 9.9453 22.2442 9.84543 22.1813 9.75807C22.1184 9.67072 22.0374 9.59793 21.9438 9.54467L19.1473 7.95092L19.136 4.79904C19.1357 4.69049 19.1118 4.58331 19.066 4.4849C19.0202 4.38649 18.9535 4.29919 18.8707 4.22904C17.8563 3.37095 16.6881 2.71336 15.4282 2.29123C15.329 2.25765 15.2238 2.24522 15.1195 2.25475C15.0152 2.26428 14.9141 2.29555 14.8226 2.34654L12.0016 3.92342L9.17789 2.34373C9.08635 2.29245 8.98506 2.26094 8.88058 2.25125C8.7761 2.24156 8.67074 2.2539 8.57133 2.28748C7.31224 2.71232 6.14531 3.37246 5.13258 4.23279C5.04986 4.30284 4.98331 4.38999 4.93751 4.48823C4.89171 4.58647 4.86774 4.69347 4.86727 4.80186L4.85321 7.95654L2.05664 9.55029C1.96308 9.60356 1.88209 9.67634 1.81916 9.7637C1.75623 9.85105 1.71285 9.95093 1.69196 10.0565C1.43601 11.3427 1.43601 12.6667 1.69196 13.9528C1.71285 14.0584 1.75623 14.1583 1.81916 14.2456C1.88209 14.333 1.96308 14.4058 2.05664 14.459L4.85321 16.0528L4.86446 19.2056C4.8648 19.3142 4.88869 19.4213 4.9345 19.5197C4.98031 19.6182 5.04693 19.7055 5.12977 19.7756C6.14421 20.6337 7.31241 21.2913 8.57227 21.7134C8.67148 21.747 8.77663 21.7594 8.88094 21.7499C8.98525 21.7404 9.0864 21.7091 9.17789 21.6581L12.0016 20.0765L14.8254 21.6562C14.9371 21.7185 15.0631 21.7508 15.191 21.75C15.2729 21.75 15.3543 21.7367 15.432 21.7106C16.6907 21.286 17.8576 20.6265 18.8707 19.7672C18.9534 19.6971 19.02 19.61 19.0658 19.5117C19.1116 19.4135 19.1355 19.3065 19.136 19.1981L19.1501 16.0434L21.9466 14.4497C22.0402 14.3964 22.1212 14.3236 22.1841 14.2363C22.2471 14.1489 22.2904 14.049 22.3113 13.9434C22.5658 12.6583 22.5649 11.3357 22.3085 10.0509ZM12.0016 15.75C11.26 15.75 10.5349 15.53 9.91825 15.118C9.30157 14.7059 8.82092 14.1203 8.53709 13.435C8.25327 12.7498 8.179 11.9958 8.3237 11.2684C8.46839 10.541 8.82555 9.87278 9.34999 9.34833C9.87444 8.82388 10.5426 8.46673 11.2701 8.32204C11.9975 8.17734 12.7515 8.2516 13.4367 8.53543C14.1219 8.81926 14.7076 9.29991 15.1197 9.91659C15.5317 10.5333 15.7516 11.2583 15.7516 12C15.7516 12.9945 15.3566 13.9484 14.6533 14.6516C13.95 15.3549 12.9962 15.75 12.0016 15.75Z" fill="white"/>
</svg>

</div>
{/* Vertical Line */}
<div className="w-px h-40 bg-gray-300"></div>

{/* Down Arrow */}
<div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-300"></div>
</div>

{/* RIGHT: Content */}
<div className="max-w-xl">
<DynamicContent type="p4" css='font-semibold' title='Build ' />
<ul className="list-disc space-y-4 pl-5 mt-2">
<li>
<strong>Web Development:</strong> Fast, secure sites that load quickly, rank well, and convert. 
</li>
<li>
<strong>Mobile App Development:</strong> Stable apps that perform on low data and older devices. 
</li>
<li>
<strong>Custom Software:</strong> Internal tools and APIs that replace manual steps and connect to your systems.
</li>
</ul>
</div>
</div>


<div className="flex items-start space-x-6 relative mb-8">
{/* LEFT: Icon + Vertical Line + Arrow */}
<div className="relative flex flex-col items-center">
{/* Icon Circle */}<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M22.5475 30.9201C22.1247 31.8444 20.7138 34.0007 16.7491 34.0007C16.5502 34.0007 16.3594 33.9217 16.2187 33.781C16.0781 33.6404 15.9991 33.4496 15.9991 33.2507C15.9991 29.286 18.1553 27.8751 19.0797 27.4523C19.1693 27.4114 19.2661 27.3886 19.3646 27.3851C19.463 27.3816 19.5612 27.3976 19.6535 27.4321C19.7457 27.4665 19.8303 27.5189 19.9024 27.586C19.9744 27.6532 20.0326 27.7339 20.0735 27.8235C20.1143 27.9131 20.1371 28.0099 20.1406 28.1084C20.1441 28.2068 20.1281 28.305 20.0936 28.3973C20.0592 28.4896 20.0069 28.5741 19.9397 28.6462C19.8725 28.7183 19.7918 28.7764 19.7022 28.8173C19.0994 29.0919 17.7691 29.976 17.5347 32.4651C20.0238 32.2307 20.9097 30.9004 21.1825 30.2976C21.2234 30.2079 21.2815 30.1272 21.3536 30.0601C21.4256 29.9929 21.5102 29.9406 21.6025 29.9061C21.6948 29.8717 21.7929 29.8557 21.8914 29.8592C21.9898 29.8626 22.0866 29.8854 22.1763 29.9263C22.2659 29.9672 22.3466 30.0253 22.4138 30.0974C22.4809 30.1694 22.5332 30.254 22.5677 30.3463C22.6022 30.4386 22.6181 30.5368 22.6147 30.6352C22.6112 30.7336 22.5884 30.8304 22.5475 30.9201ZM33.985 17.4201C33.9628 17.0544 33.8075 16.7095 33.5484 16.4504C33.2894 16.1913 32.9445 16.036 32.5788 16.0138C31.3994 15.9435 28.3853 16.0513 25.885 18.5516L21.2491 23.1913C21.1795 23.2611 21.0968 23.3164 21.0058 23.3542C20.9148 23.392 20.8172 23.4115 20.7186 23.4116C20.5196 23.4118 20.3287 23.3329 20.1878 23.1923C20.047 23.0517 19.9677 22.8609 19.9676 22.6618C19.9674 22.4628 20.0463 22.2719 20.1869 22.131L22.6769 19.6401C22.729 19.5876 22.7645 19.521 22.7788 19.4484C22.7932 19.3759 22.7857 19.3007 22.7575 19.2324C22.7292 19.1641 22.6814 19.1056 22.62 19.0644C22.5586 19.0232 22.4865 19.001 22.4125 19.0007H19.9694C19.7718 18.9997 19.576 19.0379 19.3933 19.1132C19.2106 19.1886 19.0448 19.2994 18.9053 19.4394L15.6897 22.6569C15.4925 22.854 15.3541 23.1021 15.2901 23.3735C15.2261 23.6448 15.2389 23.9287 15.3272 24.1931C15.4155 24.4575 15.5758 24.6921 15.79 24.8706C16.0043 25.049 16.264 25.1642 16.54 25.2032L20.1466 25.7066L24.2913 29.8513L24.7947 33.4598C24.8334 33.7358 24.9486 33.9956 25.1272 34.2096C25.3058 34.4236 25.5407 34.5835 25.8053 34.671C25.9595 34.7225 26.1209 34.7488 26.2835 34.7488C26.4802 34.7492 26.6752 34.7106 26.857 34.6353C27.0388 34.56 27.2039 34.4495 27.3428 34.3101L30.5603 31.0944C30.6999 30.9547 30.8105 30.7888 30.8858 30.6062C30.9611 30.4236 30.9996 30.2279 30.9991 30.0304V27.5873C30.9989 27.5131 30.9769 27.4407 30.9356 27.3791C30.8943 27.3175 30.8357 27.2696 30.7672 27.2413C30.6987 27.213 30.6233 27.2056 30.5506 27.2202C30.4779 27.2347 30.4112 27.2704 30.3588 27.3229L27.8678 29.8129C27.795 29.8858 27.7079 29.9429 27.6119 29.9807C27.516 30.0185 27.4134 30.036 27.3103 30.0323C27.2073 30.0287 27.1062 30.0038 27.0132 29.9592C26.9202 29.9147 26.8375 29.8515 26.77 29.7735C26.647 29.6247 26.5845 29.435 26.5949 29.2422C26.6053 29.0494 26.6879 28.8676 26.8263 28.7329L31.4453 24.1138C33.9475 21.6126 34.0553 18.5985 33.985 17.4182V17.4201Z" fill="white"/>
</svg>

{/* Vertical Line */}
<div className="w-px h-40 bg-gray-300"></div>
{/* Down Arrow */}
<div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-300"></div>
</div>

{/* RIGHT: Content */}
<div className="max-w-xl">
<DynamicContent type="p4" css='font-semibold' title='Launch ' />
<ul className="list-disc space-y-4 pl-5 mt-2">
<li>We ship in steady steps, manage releases, set up analytics, and share short guides so your team can run from day one.
</li>
</ul>
</div>
</div>




<div className="flex items-start space-x-6 relative mb-8">
{/* LEFT: Icon + Vertical Line + Arrow */}
<div className="relative flex flex-col items-center">
{/* Icon Circle */}<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M35.5004 18.25V24.25C35.5005 24.3984 35.4566 24.5435 35.3742 24.667C35.2918 24.7904 35.1746 24.8867 35.0375 24.9435C34.9004 25.0003 34.7495 25.0151 34.6039 24.9861C34.4584 24.9572 34.3247 24.8856 34.2198 24.7806L31.7504 22.3103L26.281 27.7806C26.2114 27.8504 26.1287 27.9057 26.0376 27.9434C25.9466 27.9812 25.849 28.0006 25.7504 28.0006C25.6519 28.0006 25.5543 27.9812 25.4632 27.9434C25.3722 27.9057 25.2894 27.8504 25.2198 27.7806L22.0004 24.5603L15.781 30.7806C15.6403 30.9214 15.4494 31.0004 15.2504 31.0004C15.0514 31.0004 14.8605 30.9214 14.7198 30.7806C14.5791 30.6399 14.5 30.449 14.5 30.25C14.5 30.051 14.5791 29.8601 14.7198 29.7194L21.4698 22.9694C21.5394 22.8996 21.6222 22.8443 21.7132 22.8066C21.8043 22.7688 21.9019 22.7494 22.0004 22.7494C22.099 22.7494 22.1966 22.7688 22.2876 22.8066C22.3787 22.8443 22.4614 22.8996 22.531 22.9694L25.7504 26.1897L30.6901 21.25L28.2198 18.7806C28.1148 18.6757 28.0433 18.542 28.0143 18.3965C27.9853 18.2509 28.0001 18.1 28.057 17.9629C28.1138 17.8258 28.21 17.7086 28.3334 17.6262C28.4569 17.5438 28.602 17.4999 28.7504 17.5H34.7504C34.9493 17.5 35.1401 17.579 35.2807 17.7197C35.4214 17.8603 35.5004 18.0511 35.5004 18.25Z" fill="white"/>
</svg>

{/* Vertical Line */}
<div className="w-px h-40 bg-gray-300"></div>
{/* Down Arrow */}
<div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-300"></div>
</div>

{/* RIGHT: Content */}
<div className="max-w-xl">
<DynamicContent type="p4" css='font-semibold' title='Improve & Grow ' />
<ul className="list-disc space-y-4 pl-5 mt-2">
<li>
<strong>SEO & Content Marketing:</strong> Fix technical issues and publish useful content that builds steady search traffic. 
</li>
<li>
<strong>Digital Transformation Consulting:</strong> Remove bottlenecks, cut costs, and improve delivery speed.
</li>
</ul>
</div>
</div>





<div className="flex items-start space-x-6 relative mb-8">
{/* LEFT: Icon + Vertical Line + Arrow */}
<div className="relative flex flex-col items-center">
{/* Icon Circle */}<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M34.7483 21.9998C34.7494 23.1224 34.4706 24.2275 33.937 25.2152C33.4033 26.2028 32.6318 27.0418 31.6923 27.6561C30.7527 28.2704 29.6748 28.6407 28.556 28.7335C27.4373 28.8263 26.3131 28.6385 25.2852 28.1873L20.4046 33.8329C20.3933 33.8461 20.3802 33.8601 20.368 33.8723C19.8053 34.435 19.0422 34.7511 18.2464 34.7511C17.4507 34.7511 16.6875 34.435 16.1249 33.8723C15.5622 33.3096 15.2461 32.5465 15.2461 31.7508C15.2461 30.955 15.5622 30.1919 16.1249 29.6292C16.138 29.617 16.1511 29.6039 16.1652 29.5926L21.8108 24.7129C21.305 23.5559 21.1336 22.2802 21.3159 21.0307C21.4983 19.7811 22.0272 18.6077 22.8427 17.6435C23.6581 16.6793 24.7275 15.9629 25.9294 15.5756C27.1313 15.1883 28.4177 15.1456 29.6427 15.4523C29.769 15.484 29.8848 15.5479 29.9789 15.6379C30.0729 15.7279 30.1419 15.8409 30.1791 15.9657C30.2163 16.0904 30.2204 16.2227 30.1909 16.3495C30.1614 16.4763 30.0995 16.5933 30.0111 16.6889L26.4983 20.4998L27.0289 22.9701L29.4983 23.4998L33.3092 19.9823C33.4049 19.894 33.5218 19.832 33.6486 19.8025C33.7754 19.7731 33.9077 19.7771 34.0325 19.8143C34.1572 19.8515 34.2702 19.9205 34.3602 20.0146C34.4502 20.1086 34.5142 20.2245 34.5458 20.3508C34.6804 20.8901 34.7484 21.4439 34.7483 21.9998Z" fill="white"/>
</svg>

{/* Vertical Line */}
<div className="w-px h-40 bg-gray-300"></div>
{/* Down Arrow */}
<div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-300"></div>
</div>

{/* RIGHT: Content */}
<div className="max-w-xl">
<DynamicContent type="p4" css='font-semibold' title='Maintenance & Support ' />
<ul className="list-disc space-y-4 pl-5 mt-2">
<li>
<strong>Website Maintenance & Support:</strong> Updates, monitoring, backups, and quick fixes to keep you online
</li>
<li>
<strong>Nexoris Cloud Solutions:</strong> Managed NVMe hosting and VPS so product and infrastructure stay under one trusted team.
</li>
</ul>
</div>
</div>



</div>
</div>

<div className="text-center text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<div className="flex items-center justify-center mb-4 break-words">
{/* Left element - width fits content */}
<div className="flex-none">
<DynamicContent type="h2" title='Our Hosting Brand: ' />
</div>

{/* Middle element - fixed width */}
<div className="max-w-[200px] flex-none text-center mx-4 hidden lg:block">
<DynamicContent type="img" src='/cloud.webp' css="h-auto w-auto" teaser={`Cloud Solutions`} />
</div>

{/* Right element - width fits content */}
<div className="flex-none">
<DynamicContent type="h2" title=' Cloud Solutions' />
</div>
</div>

<div className="flex items-center justify-center sm:hidden mb-3">
<DynamicContent
type="img"
src="/cloud.webp"
teaser="Cloud Solutions"
css="w-auto h-auto" />

</div>
<DynamicContent type="p" title='Nexoris Cloud Solutions is our hosting arm. Your product and the servers behind it are handled by one team - so ownership is clear, fixes are faster, and performance is better.' />
</div>


<div className="flex flex-wrap items-center justify-center my-14 px-[1%] lg:px-[12%]">
{/* LEFT COLUMN */}
<div className="w-full md:w-[65%] flex items-center justify-center md:justify-start mb-6 md:mb-0">
<ul className="space-y-3">
{features.map((feature, index) => (
<li key={index} className="flex items-start">
{/* Check Icon */}
<svg
className="w-5 h-5 text-green-500 flex-shrink-0 mt-1"
fill="none"
stroke="currentColor"
strokeWidth={2}
viewBox="0 0 24 24"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M5 13l4 4L19 7"
/>
</svg>

{/* Text */}
<span className="ml-2">{feature}</span>
</li>
))}
</ul>
</div>

{/* RIGHT COLUMN */}
<div className="w-full md:w-[35%] flex items-center justify-end px-5">
  <DynamicContent
    type="img"
    src="/security.webp"
    teaser="Cloud Solutions"
    css="w-1/2 h-auto"
  />
</div>



</div>


<p className="text-base text-center my-4">Prefer simple billing and a single point of contact? Learn more on <DynamicContent
type="link"
url="https://nexoristech.com"
teaser="Nexoris Cloud Solutions."
title="Nexoris Cloud Solutions."
section='true'
css='text-blue-700 font-bold'
/></p> 

<div className="text-center my-16 text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h2" title='How We Work' />
<DynamicContent type="p" title='We shape our approach to fit the job - full builds, ongoing management, targeted improvements, or clear advice. In every case, the plan is simple, progress is visible, and the language is plain.
' />
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
<div className={`${isDark ? "border-[#D2D2D3] bg-[#141313] " : "border-[#D2D2D3] bg-white"} rounded-3xl p-6 border  rounded-3xl`}>
<div className='max-w-40'>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.9031 35H32.5C33.163 35 33.7989 34.7366 34.2678 34.2678C34.7366 33.7989 35 33.163 35 32.5V26.6172C34.9989 26.4122 34.9475 26.2106 34.8501 26.0302C34.7528 25.8498 34.6126 25.6961 34.4419 25.5826C34.2711 25.4692 34.0751 25.3994 33.8711 25.3796C33.6671 25.3597 33.4613 25.3903 33.2719 25.4688C32.8289 25.6517 32.3543 25.7457 31.875 25.7453C29.8078 25.7453 28.125 24.0109 28.125 21.8812C28.125 19.7516 29.8078 18.0172 31.875 18.0172C32.3543 18.0168 32.8289 18.1108 33.2719 18.2938C33.4623 18.3726 33.6692 18.4031 33.8742 18.3826C34.0792 18.3622 34.276 18.2913 34.4471 18.1764C34.6181 18.0615 34.7581 17.9061 34.8546 17.724C34.951 17.542 35.001 17.3389 35 17.1328V11.25C35 10.587 34.7366 9.95107 34.2678 9.48223C33.7989 9.01339 33.163 8.75 32.5 8.75H26.8406C26.8639 8.54248 26.8754 8.33382 26.875 8.125C26.875 6.63316 26.2824 5.20242 25.2275 4.14752C24.1726 3.09263 22.7418 2.5 21.25 2.5C19.7582 2.5 18.3274 3.09263 17.2725 4.14752C16.2176 5.20242 15.625 6.63316 15.625 8.125C15.6246 8.33382 15.6361 8.54248 15.6594 8.75H10C9.33696 8.75 8.70107 9.01339 8.23223 9.48223C7.76339 9.95107 7.5 10.587 7.5 11.25V16.2844C7.29248 16.2611 7.08382 16.2496 6.875 16.25C5.38316 16.25 3.95242 16.8426 2.89752 17.8975C1.84263 18.9524 1.25 20.3832 1.25 21.875C1.25 23.3668 1.84263 24.7976 2.89752 25.8525C3.95242 26.9074 5.38316 27.5 6.875 27.5C7.08382 27.5004 7.29248 27.4889 7.5 27.4656V32.5C7.5 33.163 7.76339 33.7989 8.23223 34.2678C8.70107 34.7366 9.33696 35 10 35H16.5969" fill="#6C63FF"/>
</svg>
</div>
<div className='my-4'>
<DynamicContent type="p3" css='font-semibold' title='Ways to Work With Us'  /></div>
<div>
<ul className='list-disc pl-6 space-y-2 p-base-res font-semibold'>
<li><b>Full Build:</b> Align goals, plan scope, design, sprint, launch, and clean handover.
</li>
<li><b>Management:</b> Maintenance, updates, uptime checks, backups, and quick fixes. 
</li>
<li><b>Growth:</b> Technical SEO, practical content, steady publishing, and actionable reports. 
</li>
<li><b>Improve & Optimize:</b> Audit, set priorities, and ship high-impact fixes to speed, UX, and reliability. 
</li>
<li><b>Advisory:</b> Review your product, process, or stack and outline clear next steps. . 
</li>
<li><b>Advisory:</b> Review your product, process, or stack and outline clear next steps. 
</li>
</ul>
</div>
</div>

<div className={`${isDark ? "border-[#D2D2D3] bg-[#141313] " : "border-[#D2D2D3] bg-white"} rounded-3xl p-6 border  rounded-3xl`}>
<div className='mb-6'>
<div className='max-w-40'><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9996 3.75C17.1941 3.74939 14.4362 4.47514 11.9944 5.85661C9.55259 7.23808 7.51003 9.22821 6.06553 11.6333C4.62104 14.0384 3.82383 16.7764 3.7515 19.581C3.67916 22.3856 4.33417 25.1612 5.65277 27.6375L3.87933 32.9578C3.73243 33.3983 3.71111 33.871 3.81776 34.3229C3.92441 34.7749 4.15482 35.1881 4.48316 35.5165C4.8115 35.8448 5.22479 36.0752 5.67671 36.1819C6.12864 36.2885 6.60134 36.2672 7.04183 36.1203L12.3621 34.3469C14.5415 35.506 16.9562 36.1534 19.4231 36.24C21.89 36.3266 24.3442 35.85 26.5994 34.8465C28.8546 33.8429 30.8516 32.3388 32.4387 30.4483C34.0258 28.5577 35.1614 26.3304 35.7592 23.9355C36.357 21.5406 36.4014 19.0409 35.8889 16.6263C35.3764 14.2117 34.3206 11.9455 32.8016 9.99987C31.2825 8.05421 29.3402 6.48019 27.122 5.39727C24.9038 4.31436 22.4681 3.75101 19.9996 3.75ZM13.1246 21.875C12.7538 21.875 12.3913 21.765 12.0829 21.559C11.7746 21.353 11.5343 21.0601 11.3924 20.7175C11.2505 20.3749 11.2133 19.9979 11.2857 19.6342C11.358 19.2705 11.5366 18.9364 11.7988 18.6742C12.061 18.412 12.3951 18.2334 12.7588 18.161C13.1226 18.0887 13.4996 18.1258 13.8422 18.2677C14.1848 18.4096 14.4776 18.65 14.6836 18.9583C14.8897 19.2666 14.9996 19.6292 14.9996 20C14.9996 20.4973 14.8021 20.9742 14.4505 21.3258C14.0988 21.6775 13.6219 21.875 13.1246 21.875ZM19.9996 21.875C19.6288 21.875 19.2663 21.765 18.9579 21.559C18.6496 21.353 18.4093 21.0601 18.2674 20.7175C18.1255 20.3749 18.0883 19.9979 18.1607 19.6342C18.233 19.2705 18.4116 18.9364 18.6738 18.6742C18.936 18.412 19.2701 18.2334 19.6338 18.161C19.9976 18.0887 20.3746 18.1258 20.7172 18.2677C21.0598 18.4096 21.3526 18.65 21.5586 18.9583C21.7647 19.2666 21.8746 19.6292 21.8746 20C21.8746 20.4973 21.6771 20.9742 21.3255 21.3258C20.9738 21.6775 20.4969 21.875 19.9996 21.875ZM26.8746 21.875C26.5038 21.875 26.1413 21.765 25.8329 21.559C25.5246 21.353 25.2843 21.0601 25.1424 20.7175C25.0005 20.3749 24.9633 19.9979 25.0357 19.6342C25.108 19.2705 25.2866 18.9364 25.5488 18.6742C25.811 18.412 26.1451 18.2334 26.5088 18.161C26.8726 18.0887 27.2496 18.1258 27.5922 18.2677C27.9348 18.4096 28.2276 18.65 28.4336 18.9583C28.6397 19.2666 28.7496 19.6292 28.7496 20C28.7496 20.4973 28.5521 20.9742 28.2005 21.3258C27.8488 21.6775 27.3719 21.875 26.8746 21.875Z" fill="#2196F3"/>
</svg>

</div>
<div className='my-4'>
<DynamicContent type="p3" css='font-semibold' title='Communication'  /></div>
<div><DynamicContent type="p" title={`Shared tracker with scope, owners, dates, and decisions. Short weekly updates. Quick calls when useful. Any change request includes time and cost before we proceed. `}  />
</div>



<div className='max-w-40 mt-16'><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.95 10.3368L21.2 2.81338C20.8326 2.61039 20.4197 2.50391 20 2.50391C19.5803 2.50391 19.1674 2.61039 18.8 2.81338L5.05 10.3399C4.65733 10.5548 4.32954 10.8711 4.10086 11.2559C3.87219 11.6407 3.75102 12.0798 3.75 12.5274V27.4712C3.75102 27.9188 3.87219 28.3579 4.10086 28.7427C4.32954 29.1275 4.65733 29.4438 5.05 29.6587L18.8 37.1853C19.1674 37.3883 19.5803 37.4947 20 37.4947C20.4197 37.4947 20.8326 37.3883 21.2 37.1853L34.95 29.6587C35.3427 29.4438 35.6705 29.1275 35.8991 28.7427C36.1278 28.3579 36.249 27.9188 36.25 27.4712V12.529C36.2498 12.0806 36.129 11.6405 35.9003 11.2548C35.6716 10.8691 35.3434 10.5521 34.95 10.3368ZM20 5.00088L32.5547 11.8759L27.9016 14.4212L15.3469 7.5462L20 5.00088ZM20 18.7509L7.44531 11.8759L12.7437 8.97432L25.2984 15.8493L20 18.7509ZM33.75 27.4774L21.25 34.3196V20.9118L26.25 18.1759V23.7509C26.25 24.0824 26.3817 24.4003 26.6161 24.6348C26.8505 24.8692 27.1685 25.0009 27.5 25.0009C27.8315 25.0009 28.1495 24.8692 28.3839 24.6348C28.6183 24.4003 28.75 24.0824 28.75 23.7509V16.8071L33.75 14.0712V27.4712V27.4774Z" fill="#4CAF50"/>
</svg>

</div>
<div className='my-4'>
<DynamicContent type="p3" css='font-semibold' title='Quality & Handover'  /></div>
<div><DynamicContent type="p" title={`Work goes to staging first. We use source control and reviews. Access is least-privilege, backups are regular, and you own your code and content. We document delivery and provide short how-to guides.`}  />
</div>
</div>
<div>
</div>
</div>
</div>

<p className='text-center my-12'>Ready to move forward? <DynamicContent type="link" url='/request-a-proposal' title='Get a proposal' css='text-blue-800 font-semibold' /> or  <DynamicContent type="link" url='/technical-audit' title='Request a technical audit.' css='text-blue-800 font-semibold' /></p>
</div>


<div className='p-[2%] footerBg rounded-3xl text-white'>
<div className="my-8 px-[1%] lg:px-[5%]">
<div className="mb-8"><DynamicContent type="h2" title='Our Work and Clients' /></div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
<div className="">
<DynamicContent type="p4" title='We partner with small teams and growing companies in Nigeria, across Africa, and abroad. Most come to us to launch something new, fix what’s slow or broken, or scale what already works.

' />
</div>
<div className="border-t sm:p-6 border-t-gray-700 hidden sm:block"></div>
<div className="bg-[#464067] p-3 sm:p-10 rounded-lg">
<div className="max-w-80 mb-4">
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M16.8487 6.66602C16.7153 7.16602 16.6654 7.71602 16.6654 8.33268V13.3327H8.33203V9.99935C8.33203 8.16602 9.83203 6.66602 11.6654 6.66602H16.8487Z" fill="white"/>
<path d="M16.6654 31.6673V13.334H8.33203C4.9987 13.334 3.33203 15.0007 3.33203 18.334V31.6673C3.33203 35.0007 4.9987 36.6673 8.33203 36.6673H21.6654C18.332 36.6673 16.6654 35.0007 16.6654 31.6673ZM11.2487 28.334C11.2487 29.0173 10.682 29.584 9.9987 29.584C9.31536 29.584 8.7487 29.0173 8.7487 28.334V21.6673C8.7487 20.984 9.31536 20.4173 9.9987 20.4173C10.682 20.4173 11.2487 20.984 11.2487 21.6673V28.334Z" fill="white"/>
<path opacity="0.4" d="M23.3346 36.6673H21.668C18.3346 36.6673 16.668 35.0007 16.668 31.6673V8.33398C16.668 5.00065 18.3346 3.33398 21.668 3.33398H31.668C35.0013 3.33398 36.668 5.00065 36.668 8.33398V31.6673C36.668 35.0007 35.0013 36.6673 31.668 36.6673H30.0013" fill="white"/>
<path d="M29.9987 30.0007V36.6673H23.332V30.0007C23.332 29.084 24.082 28.334 24.9987 28.334H28.332C29.2487 28.334 29.9987 29.084 29.9987 30.0007Z" fill="white"/>
<path d="M23.332 22.9173C22.6487 22.9173 22.082 22.3507 22.082 21.6673V13.334C22.082 12.6507 22.6487 12.084 23.332 12.084C24.0154 12.084 24.582 12.6507 24.582 13.334V21.6673C24.582 22.3507 24.0154 22.9173 23.332 22.9173Z" fill="white"/>
<path d="M30 22.9173C29.3167 22.9173 28.75 22.3507 28.75 21.6673V13.334C28.75 12.6507 29.3167 12.084 30 12.084C30.6833 12.084 31.25 12.6507 31.25 13.334V21.6673C31.25 22.3507 30.6833 22.9173 30 22.9173Z" fill="white"/>
</svg>

</div>
<div className="mb-4"><DynamicContent css='font-bold' type="p" title='Sectors We Serve' /></div>
<p>Fintech, retail and e-commerce, education and training, media, hospitality, healthcare, professional services, sports and gaming, and non-profits.</p>
</div>

<div className="bg-[#464067] p-3 sm:p-10 rounded-lg">
<div className="max-w-80 mb-4"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M32.25 9.43391L21.7667 3.78398C20.6667 3.18398 19.3333 3.18398 18.2167 3.78398L7.73337 9.43391C6.9667 9.85057 6.5 10.6673 6.5 11.5673C6.5 12.4673 6.9667 13.2839 7.73337 13.7006L18.2167 19.3506C18.7667 19.6506 19.3833 19.8006 19.9833 19.8006C20.5833 19.8006 21.2 19.6506 21.75 19.3506L32.2333 13.7006C33 13.2839 33.4667 12.4673 33.4667 11.5673C33.5 10.6673 33.0167 9.85057 32.25 9.43391Z" fill="white"/>
<path opacity="0.4" d="M16.5018 21.316L6.7518 16.4327C6.0018 16.0493 5.13514 16.0993 4.41848 16.5327C3.70181 16.966 3.28516 17.7327 3.28516 18.566V27.7827C3.28516 29.3827 4.16846 30.816 5.6018 31.5327L15.3518 36.3994C15.6851 36.5661 16.0518 36.6493 16.4185 36.6493C16.8518 36.6493 17.2852 36.5327 17.6685 36.2827C18.3852 35.8494 18.8018 35.0827 18.8018 34.2493V25.0327C18.8185 23.466 17.9351 22.0326 16.5018 21.316Z" fill="white"/>
<path opacity="0.4" d="M36.7169 18.5834V26.2334C36.7003 26.2167 36.6836 26.1834 36.6669 26.1667C36.6669 26.1501 36.6503 26.1334 36.6336 26.1167C36.567 26.0167 36.4836 25.9167 36.4003 25.8334C36.3836 25.8167 36.3669 25.7834 36.3503 25.7668C35.0003 24.2668 33.0169 23.3334 30.8336 23.3334C28.7336 23.3334 26.8169 24.2 25.4503 25.6C24.1336 26.95 23.3336 28.8001 23.3336 30.8334C23.3336 32.2334 23.7336 33.5667 24.4169 34.7001C24.7003 35.1834 25.0503 35.6167 25.4336 36.0167L24.6503 36.4167C24.317 36.5833 23.9503 36.6667 23.5836 36.6667C23.1503 36.6667 22.717 36.5501 22.317 36.3001C21.617 35.8668 21.1836 35.1001 21.1836 34.2667V25.0667C21.1836 23.4667 22.067 22.0334 23.5003 21.3167L33.2503 16.45C34.0003 16.0667 34.867 16.1 35.5836 16.55C36.2836 16.9834 36.7169 17.7501 36.7169 18.5834Z" fill="white"/>
<path d="M36.632 26.1171C35.2654 24.4338 33.182 23.3672 30.832 23.3672C29.0654 23.3672 27.432 23.9838 26.1487 25.0172C24.4154 26.3838 23.332 28.5005 23.332 30.8672C23.332 32.2672 23.732 33.6005 24.4154 34.7339C24.8654 35.4839 25.432 36.1338 26.0987 36.6672H26.1154C27.3987 37.7338 29.0487 38.3672 30.832 38.3672C32.732 38.3672 34.4487 37.6672 35.7654 36.5005C36.3487 36.0005 36.8487 35.4005 37.2487 34.7339C37.932 33.6005 38.332 32.2672 38.332 30.8672C38.332 29.0672 37.6987 27.4005 36.632 26.1171ZM34.5987 29.9339L30.5987 33.6338C30.3653 33.8505 30.0487 33.9672 29.7487 33.9672C29.432 33.9672 29.1154 33.8504 28.8654 33.6004L27.0154 31.7505C26.532 31.2671 26.532 30.4671 27.0154 29.9838C27.4987 29.5005 28.2987 29.5005 28.782 29.9838L29.782 30.9839L32.8987 28.1005C33.3987 27.6338 34.1987 27.6672 34.6653 28.1672C35.1487 28.6839 35.1154 29.4672 34.5987 29.9339Z" fill="white"/>
</svg>
</div>
<div className="mb-4"><DynamicContent css='font-bold' type="p" title='Projects We Deliver' /></div>
<p>Corporate and product websites, mobile apps, customer portals, 
booking and ordering systems, internal tools and dashboards, API 
and systems integration, CMS builds and migrations, SEO and content 
programs, analytics setup, and ongoing maintenance and support.
</p>
</div>
</div>
<p className="mt-12">Not sure we’ve done work like yours? Tell us your goals and we’ll share relevant examples.</p>
</div>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 gap-12 px-[1%] my-18 md:mx-[6%]">
<div>
<DynamicContent css='font-semibold' type="h2" title='Leadership and Team' />
<div className="mb-3">
<DynamicContent type="img" src={isDark ? '/leadership1.webp' : '/leadership.webp'} css="h-auto w-auto sm:hidden" teaser={`Leadership and Team`} />
</div>

<DynamicContent type="p" title='
Founded by Chinedu Nwogu, Nexoris Technologies is a Lagos-based digital product studio. We plan, design, and build products that help teams work faster and serve customers better. 
After launch, we keep things healthy with clear updates and steady support.
' />
<ul className="list-disc pl-6 space-y-2 p-base-res my-10">
<li>A delivery lead keeps scope, timing, and quality on track </li>
<li>Designers and writers make the experience clear </li>
<li>Developers build and refine the web, mobile, and API parts </li>
<li>Cloud and QA look after uptime, speed, and releases </li>
</ul>
<div>DynamicContent type="p" title='How We Keep Standards High' css='font-semibold'</div>
<ul className="list-disc pl-6 space-y-2 p-base-res my-5">
<li>Clear acceptance criteria agreed before work starts </li>
<li>Ongoing reviews for design and code </li>
<li>Staging and real-device testing before launch</li>
<li>Regular backups, controlled access, and tidy handover notes </li>
</ul>
<p>Want to join us? See <DynamicContent type="link" url='/careers' title='Careers.' css='text-blue-800 font-semibold' /></p>
</div>
<div className="hidden sm:block">
<DynamicContent type="img" src={isDark ? '/leadership1.webp' : '/leadership.webp'} css="h-auto w-auto" teaser={`Leadership and Team`}
/></div>
</div>

<div className="text-center my-8 px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h2" title='Standards and Reliability' />
<DynamicContent type="p" title='We take uptime and data protection seriously. Clear rules guide how we handle access, keep systems healthy, and review risks over time.'  />
</div>


<div className="my-8 px-[1%] md:px-[5%] lg:px-[18%]">
<div className="grid grid-cols-1 sm:grid-cols-[57%_35%] gap-8">
<div className="p-6">
<div><DynamicContent type="p4" title='What We Practice' css='font-semibold'/></div>
<ul className="list-disc pl-6 space-y-2 p-base-res my-5">
<li>Least-privilege access with audit trails </li>
<li>Uptime targets backed by monitoring and alerts  </li>
<li>Scheduled backups with test restores </li>
<li>Periodic reviews for security, performance, and costs  </li>
</ul>
</div>
<div>
<div className="max-w-[200px] mx-auto flex justify-center">
  <DynamicContent
    type="img"
    src="/speaker.webp"
    css="h-auto w-auto block"
    teaser="What We Practice"
  />
</div>
</div>
</div>
</div>



<div className="grid grid-cols-1 sm:grid-cols-2 gap-12 px-[1%] my-18 md:mx-[6%]">
<div className="hidden sm:block">
<DynamicContent type="img" src='/our-story.webp' css="h-auto w-auto" teaser={`Our Story`} />
</div>
<div className='mt-14'>
<DynamicContent css='font-semibold' type="h2" title='Our Story' />
<div className="mb-3">
< DynamicContent type="img" src=
{isDark ? '/our-story1.webp' : '/our-story.webp'} css="h-auto w-auto sm:hidden" teaser={`Our Story`}
/></div>

<DynamicContent type="p" title='Nexoris began with a simple observation: many teams had one part working well and another holding them back. Some shipped solid code but the experience felt confusing. Others had clean designs but search engines could not read the site. Sometimes the hosting was the issue. ' css='mb-3' />

<DynamicContent css='mb-3' type="p" title='We set out to close that gap. We bring product planning, UX writing and design, engineering, SEO, and hosting together from day one. We agree on goals, design the flow, then build in steady steps. Speed and search checks are part of the work, not an afterthought. Each release is tested on real devices and networks, then improved based on what users do.'  />

<DynamicContent css='mb-3' type="p" title='As projects grew, we added Nexoris Cloud Solutions so the same team could look after the code and the servers. That cut handoffs, sped up fixes, and gave clients one place to turn when something needed attention.'  />


<DynamicContent type="p" title='Today we work the same way: clear goals, simple flows, clean builds, and plain reporting.' />
</div>
</div>



<div className={`${isDark ? "border-gray-700" : "border-gray-300"} " border rounded-3xl  my-10 mx-[1%] md:mx-[6%] p-[5%] sm:p-[3%]"`}>
<DynamicContent type="h2" title='Where We Work. '  />
<DynamicContent type="p" title='We’re based in Lagos and work with clients across Africa and around the world. Most projects run remotely with clear check-ins and a shared tracker. When needed, we match meeting times to your time zone.'  />
<hr className={`${isDark ? "text-gray-700" : "text-gray-300"} "  my-8`} />
<DynamicContent type="h2" title='Support hours. ' />
<DynamicContent type="p"> <>
Monday – Friday, 08:00 – 18:00 WAT. Urgent issues get quick replies. To reach us, visit  {" "}<DynamicContent type="link" title='Contact.' url='/contact' css="text-blue-700 font-semibold"  /> 
</>
</DynamicContent>
</div><div>
</div>
</div>
);
}
