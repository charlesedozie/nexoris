'use client'

import type { Metadata } from 'next'
import DynamicContent, {Counter, DynamicIcon, Accordion, useDarkMode} from "@/components/cards"

const faqItems = [
  {
    question: `What plan should I pick: Shared Hosting or VPS?
`,
    answer:
      `Choose Shared Hosting for company sites, blogs, and small stores. <br />
Choose VPS for busy stores, apps, APIs, or when you need root access and custom stacks.<br />
Still unsure? Tell us your traffic and tech needs and we’ll point you to the right plan.
`,
  },
  {
    question: `Can you move my site for free?
`,
    answer:
     `Yes. Migration is free. We copy your files and database, test key flows, and switch DNS at a time you choose.
`,
  },
  {
    question: `Do you offer Managed VPS? What is included?
`,
    answer:
     ` Yes. Managed VPS covers server setup, OS and security updates, basic monitoring, and help with server configuration. You manage your code and releases.<br />
Prefer full control? Pick Unmanaged VPS.
`,
  },
   {
    question: `Do you provide a money-back guarantee?
`,
    answer:
     `Yes. There’s a 30-day money-back guarantee on hosting plans. <br />
Note: domain registrations and other pass-through services are not refundable.
`,
  },
   {
    question: `Can I register and manage my domain with you?
`,
    answer:
      `Yes. Search, register, or transfer your domain, manage DNS, and enable WHOIS privacy where available.`,
      
  },
   {
    question: `How do backups work?

`,
    answer:
      `We run daily backups and can restore fast. Ask for a full restore or only the files and databases you need.
`,
      
  },
   {
    question: `Where can I read the AUP?

`,
    answer:
      `Read our Acceptable Use Policy (AUP) for safe-use rules and restricted activities.
`,
      
  },
];

const engineered = [
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#00B8D9"/>
<path d="M30.8002 18.5172C30.7695 18.4708 30.7289 18.4317 30.6812 18.403C30.6336 18.3742 30.5801 18.3563 30.5248 18.3508C30.4694 18.3452 30.4134 18.352 30.361 18.3708C30.3086 18.3895 30.261 18.4197 30.2217 18.4591L23.1511 25.5297C23.008 25.6569 22.8217 25.7246 22.6303 25.7188C22.439 25.713 22.257 25.6343 22.1218 25.4988C21.9866 25.3632 21.9084 25.1811 21.9032 24.9897C21.8979 24.7983 21.966 24.6122 22.0936 24.4694L30.7842 15.7797C30.8539 15.71 30.9092 15.6273 30.9469 15.5363C30.9846 15.4452 31.004 15.3476 31.004 15.2491C31.004 15.1506 30.9846 15.053 30.9469 14.9619C30.9092 14.8709 30.8539 14.7882 30.7842 14.7185C30.7145 14.6488 30.6318 14.5935 30.5408 14.5558C30.4497 14.5181 30.3521 14.4987 30.2536 14.4987C30.1551 14.4987 30.0575 14.5181 29.9664 14.5558C29.8754 14.5935 29.7927 14.6488 29.723 14.7185L28.4686 15.9738C26.6784 14.5757 24.4833 13.7955 22.2124 13.7501C19.9414 13.7048 17.7169 14.3968 15.8724 15.7224C14.0278 17.0479 12.6627 18.9357 11.9815 21.1026C11.3003 23.2695 11.3399 25.5988 12.0942 27.7413C12.1976 28.035 12.3893 28.2896 12.6431 28.4701C12.8969 28.6505 13.2003 28.748 13.5117 28.7491H30.487C30.7981 28.7493 31.1016 28.6528 31.3554 28.4729C31.6092 28.293 31.8008 28.0386 31.9036 27.745C32.4382 26.225 32.6167 24.6026 32.4254 23.0028C32.2341 21.4029 31.6781 19.8683 30.8002 18.5172ZM15.3849 25.6C15.4244 25.795 15.3849 25.9976 15.275 26.1634C15.1651 26.3292 14.9938 26.4446 14.7989 26.4841C14.7496 26.4942 14.6993 26.4992 14.6489 26.4991C14.476 26.4989 14.3086 26.4389 14.1748 26.3294C14.041 26.2199 13.9492 26.0676 13.9149 25.8982C13.6467 24.5779 13.7056 23.2121 14.0866 21.9199C14.4676 20.6277 15.159 19.4484 16.1006 18.4849C17.0421 17.5213 18.2052 16.8028 19.4882 16.3921C20.7713 15.9814 22.1353 15.8908 23.4614 16.1285C23.6572 16.1635 23.8311 16.2749 23.9447 16.4382C24.0584 16.6014 24.1026 16.8031 24.0675 16.9989C24.0325 17.1947 23.921 17.3686 23.7578 17.4823C23.5946 17.5959 23.3928 17.6401 23.197 17.605C22.1119 17.4108 20.9957 17.485 19.9458 17.8212C18.8959 18.1574 17.9443 18.7453 17.1738 19.5338C16.4034 20.3223 15.8376 21.2873 15.5257 22.3447C15.2139 23.4021 15.1655 24.5197 15.3849 25.6Z" fill="white"/>
</svg>
`, title:'NVMe speed', teaser:'NVMe-powered servers keep pages quick on any device.'},
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#2ECC71"/>
<path d="M19.3751 13.375C19.3751 12.8558 19.529 12.3483 19.8175 11.9166C20.1059 11.485 20.5159 11.1485 20.9955 10.9498C21.4752 10.7511 22.003 10.6992 22.5122 10.8004C23.0214 10.9017 23.4891 11.1517 23.8562 11.5188C24.2233 11.886 24.4734 12.3537 24.5746 12.8629C24.6759 13.3721 24.6239 13.8999 24.4253 14.3795C24.2266 14.8592 23.8901 15.2692 23.4585 15.5576C23.0268 15.846 22.5193 16 22.0001 16C21.3039 16 20.6362 15.7234 20.1439 15.2312C19.6516 14.7389 19.3751 14.0712 19.3751 13.375ZM31.3376 18.6784C31.2692 18.3424 31.0857 18.0408 30.8187 17.8256C30.5517 17.6105 30.218 17.4953 29.8751 17.5H14.1251C13.7831 17.5 13.4514 17.6168 13.1849 17.8312C12.9184 18.0455 12.7332 18.3444 12.6599 18.6785C12.5866 19.0125 12.6296 19.3616 12.7818 19.6678C12.9341 19.974 13.1864 20.219 13.497 20.3622H13.5026L18.5548 22.5869L16.4998 30.3963C16.3429 30.755 16.3326 31.1609 16.471 31.5272C16.6094 31.8935 16.8855 32.1911 17.2404 32.3566C17.4387 32.4507 17.6555 32.4997 17.8751 32.5C18.1578 32.5004 18.435 32.4209 18.6745 32.2706C18.914 32.1203 19.1062 31.9054 19.2288 31.6506L22.0001 26.875L24.7732 31.6563C24.9457 32.0071 25.2483 32.2768 25.6167 32.4078C25.9851 32.5388 26.39 32.5208 26.7453 32.3576C27.1006 32.1945 27.3782 31.899 27.5189 31.5343C27.6596 31.1695 27.6523 30.7642 27.4985 30.4047L25.4435 22.5953L30.506 20.3678C30.8202 20.2278 31.0754 19.9821 31.2273 19.6735C31.3792 19.3649 31.4182 19.0128 31.3376 18.6784Z" fill="white"/>
</svg>
`, title:'Reliable uptime', teaser:'99.9% target with clear status updates.'},
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#543CDA"/>
<path d="M29.5 13.75H14.5C14.1022 13.75 13.7206 13.908 13.4393 14.1893C13.158 14.4706 13 14.8522 13 15.25V20.5C13 25.4425 15.3925 28.4378 17.3997 30.0803C19.5616 31.8484 21.7122 32.4484 21.8059 32.4738C21.9348 32.5088 22.0708 32.5088 22.1997 32.4738C22.2934 32.4484 24.4413 31.8484 26.6059 30.0803C28.6075 28.4378 31 25.4425 31 20.5V15.25C31 14.8522 30.842 14.4706 30.5607 14.1893C30.2794 13.908 29.8978 13.75 29.5 13.75ZM26.2825 20.2806L21.0325 25.5306C20.9628 25.6004 20.8801 25.6557 20.7891 25.6934C20.698 25.7312 20.6004 25.7506 20.5019 25.7506C20.4033 25.7506 20.3057 25.7312 20.2147 25.6934C20.1236 25.6557 20.0409 25.6004 19.9713 25.5306L17.7213 23.2806C17.5805 23.1399 17.5015 22.949 17.5015 22.75C17.5015 22.551 17.5805 22.3601 17.7213 22.2194C17.862 22.0786 18.0529 21.9996 18.2519 21.9996C18.4509 21.9996 18.6418 22.0786 18.7825 22.2194L20.5 23.9397L25.2194 19.2194C25.2891 19.1497 25.3718 19.0944 25.4628 19.0567C25.5539 19.019 25.6515 18.9996 25.75 18.9996C25.8485 18.9996 25.9461 19.019 26.0372 19.0567C26.1282 19.0944 26.2109 19.1497 26.2806 19.2194C26.3503 19.2891 26.4056 19.3718 26.4433 19.4628C26.481 19.5539 26.5004 19.6515 26.5004 19.75C26.5004 19.8485 26.481 19.9461 26.4433 20.0372C26.4056 20.1282 26.3503 20.2109 26.2806 20.2806H26.2825Z" fill="white"/>
</svg>

`, title:'Straight pricing', teaser:'Simple plans and domain fees. No hidden charges'},
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#F4B400"/>
<path d="M25.75 20.4998C25.75 21.5381 25.4421 22.5532 24.8652 23.4165C24.2884 24.2799 23.4684 24.9528 22.5091 25.3501C21.5498 25.7475 20.4942 25.8515 19.4758 25.6489C18.4574 25.4463 17.5219 24.9463 16.7877 24.2121C16.0535 23.4779 15.5535 22.5424 15.3509 21.524C15.1483 20.5056 15.2523 19.45 15.6497 18.4907C16.047 17.5314 16.7199 16.7114 17.5833 16.1346C18.4466 15.5577 19.4617 15.2498 20.5 15.2498C21.8924 15.2498 23.2278 15.8029 24.2123 16.7875C25.1969 17.772 25.75 19.1074 25.75 20.4998ZM31.5307 31.5304C31.461 31.6001 31.3783 31.6554 31.2872 31.6932C31.1962 31.7309 31.0986 31.7504 31 31.7504C30.9015 31.7504 30.8039 31.7309 30.7128 31.6932C30.6218 31.6554 30.5391 31.6001 30.4694 31.5304L25.7763 26.8363C24.1442 28.1941 22.0515 28.8705 19.9335 28.7247C17.8154 28.5789 15.8351 27.6222 14.4045 26.0536C12.9738 24.485 12.203 22.4252 12.2522 20.3027C12.3015 18.1803 13.1671 16.1585 14.6689 14.6579C16.1708 13.1574 18.1934 12.2936 20.3159 12.2462C22.4384 12.1988 24.4975 12.9715 26.0648 14.4035C27.6322 15.8356 28.5871 17.8167 28.731 19.9349C28.8749 22.053 28.1968 24.1451 26.8375 25.776L31.5307 30.4691C31.6004 30.5388 31.6557 30.6215 31.6934 30.7126C31.7312 30.8036 31.7506 30.9012 31.7506 30.9998C31.7506 31.0983 31.7312 31.1959 31.6934 31.287C31.6557 31.378 31.6004 31.4607 31.5307 31.5304ZM20.5 27.2498C21.8351 27.2498 23.1401 26.8539 24.2501 26.1122C25.3602 25.3705 26.2253 24.3163 26.7362 23.0829C27.2471 21.8495 27.3808 20.4923 27.1203 19.1829C26.8599 17.8735 26.217 16.6708 25.273 15.7268C24.329 14.7828 23.1263 14.1399 21.8169 13.8795C20.5075 13.619 19.1503 13.7527 17.9169 14.2636C16.6835 14.7745 15.6293 15.6396 14.8876 16.7497C14.1459 17.8597 13.75 19.1647 13.75 20.4998C13.752 22.2894 14.4638 24.0051 15.7293 25.2706C16.9947 26.536 18.7104 27.2478 20.5 27.2498Z" fill="white"/>
</svg>
`, title:'Free migration', teaser:'We move your site carefully and test before go-live.'},
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

return (<>

<div className="relative w-full py-16">
{/* Gradient line */}
<div
  className="absolute left-1/2 top-0 bottom-0 w-5 -translate-x-1/2
             sm:left-0 sm:right-0 sm:top-1/2 sm:h-5 sm:w-auto sm:-translate-y-1/2 sm:translate-x-0
             bg-gradient-to-b sm:bg-gradient-to-r
             from-[#543CDA] to-[#000000]"
/>



{/* Transparent overlay container */}
<div className="relative z-10 px-[10%] grid grid-cols-1 sm:grid-cols-4 gap-10">
{/* Child 1 */}
<div className={`${isDark ? "bg-[#141313] " : "bg-white "} rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='semibold' title='99.9% uptime'  /></div>
</div>

{/* Child 2 */}
<div className={`${isDark ? "bg-[#141313] " : "bg-white "} bg-[#141313] rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='semibold' title='Daily backups'  /></div>
</div>

{/* Child 3 */}
<div className={`${isDark ? "bg-[#141313] " : "bg-white "} rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='semibold' title='Free migration'  /></div>
</div>


{/* Child 3 */}
<div className={`${isDark ? "bg-[#141313] " : "bg-white "} rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='semibold' title='30-day money-back'  /></div>
</div>
</div>
</div>
<div className='mt-6'>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2 px-[1%] md:px-[6%]">
<div className="sm:hidden">
<div className="flex-1 flex flex-col items-center justify-center">
<DynamicContent type="img" src='/whoweserver.webp' css="h-auto w-auto" teaser={`Cloud Solutions`} />
</div>
</div>
{/* Child 1 */}
<div className="flex-1 flex-col flex justify-center rounded-lg p-6">
<div><DynamicContent type="h2" title='Who We Serve' /></div>  
<div><DynamicContent type="p4" title='We work with small businesses, agencies, startups, and growing teams in Nigeria and beyond. If you need fast sites, solid uptime, and a support team you can reach, we are a good fit.' /></div>  


{/* Content */}
<div className="px-3 flex flex-col gap-0 mt-10">
<DynamicContent type="p" title='Small and medium businesses' css='py-3 border-l-4 border-[#543CDA] text-[#543CDA] pl-4' />
<DynamicContent type="p" title='Agencies and freelancers with client sites' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
<DynamicContent type="p" title='Startups and product teams' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
<DynamicContent type="p" title='Schools, NGOs, and community projects' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
</div>
</div>

{/* Child 2 */}
<div className="hidden sm:block">
<div className="flex-1 flex flex-col items-center justify-center">
<DynamicContent type="img" src='/whoweserver.webp' css="h-auto w-auto" teaser={`who we serve`} />
</div>
</div>
</div>

{isDark ? <div className='my-20'></div> : <div className="flex-1 flex flex-col items-center justify-center my-16 px-[1%] md:px-[6%]">
<DynamicContent type="img" src='/line.webp' css="none" teaser={`divider`} />
</div>}



<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2 px-[1%] md:px-[6%]">  
{/* Child 2 */}
<div className="flex-1 flex flex-col items-center justify-center">
<DynamicContent type="img" src={isDark ? '/whoweserve2.webp' : '/whoweserve1.webp'} css="h-auto w-auto" teaser={`Cloud Solutions`} />
</div>

{/* Child 1 */}
<div className="flex-1 flex-col flex justify-center">
<div className='mb-8'><DynamicContent type="h2" title='Typical Projects We Host' /></div> 
<div className="px-3 flex flex-col gap-0">
<DynamicContent type="p" title='Company websites and blogs' css='py-3 border-l-4 border-[#543CDA] text-[#543CDA] pl-4' />
<DynamicContent type="p" title='E-commerce stores' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
<DynamicContent type="p" title='Startups and product teams' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
<DynamicContent type="p" title='Landing pages and campaign sites' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
<DynamicContent type="p" title='Customer portals and internal dashboards' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
<DynamicContent type="p" title='Web apps and APIs' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
</div>
</div>
</div>




<div className="py-20 px-[1%] sm:px-[5%] md:px-[10%] card-surface">
<div className="my-20 px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h2" title='Hosting, VPS, and Domains' css='text-center' />
<DynamicContent type="p4"  css='text-center' title='Choose what fits your needs today and scale without stress. Our hosting and VPS run on NVMe-powered servers for speed and reliability, and you can manage your domain and DNS in the same place.'  />
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-10 p-2 mt-10">
<div className={`${isDark ? "text-[#141313]" : "bg-white "} p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 19.9993C4.16602 12.5354 4.16602 8.8035 6.48475 6.48475C8.8035 4.16602 12.5354 4.16602 19.9993 4.16602C27.4632 4.16602 31.1952 4.16602 33.514 6.48475C35.8327 8.8035 35.8327 12.5354 35.8327 19.9993C35.8327 27.4632 35.8327 31.1952 33.514 33.514C31.1952 35.8327 27.4632 35.8327 19.9993 35.8327C12.5354 35.8327 8.8035 35.8327 6.48475 33.514C4.16602 31.1952 4.16602 27.4632 4.16602 19.9993Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M4.16602 15H35.8327" stroke="#543CDA" strokeWidth="2.5" strokeLinejoin="round"/>
<path d="M11.666 10H11.681" stroke="#543CDA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.334 10H18.349" stroke="#543CDA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</div>
<div className='mt-8'><DynamicContent type="p4" title='NVMe Web Hosting' css={`font-semibold my-4  ${isDark ? "text-gray-100" : "text-gray-900"}`} /></div>
<div><DynamicContent type="p4" title='Fast, secure shared hosting for everyday sites and growing projects.' css={`font-semibold my-4  ${isDark ? "text-gray-100" : "text-gray-900"} my-2`} /></div>
<div>
<ul className={`${isDark ? "text-gray-100" : "text-gray-900"} list-disc pl-6 space-y-2 p-base-res`}>
<li>Free SSL</li>
<li>Daily backups with quick restore</li>
<li>Free migration </li>
<li>Responsive support</li>
</ul>
</div>
</div>
<div className="bg-[#543CDA] p-5 rounded-3xl text-[#cccccc]">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 5H10C8.44687 5 7.6703 5 7.05772 5.25373C6.24097 5.59205 5.59205 6.24097 5.25373 7.05772C5 7.6703 5 8.44687 5 10C5 11.5531 5 12.3297 5.25373 12.9423C5.59205 13.759 6.24097 14.408 7.05772 14.7463C7.6703 15 8.44687 15 10 15H30C31.5532 15 32.3297 15 32.9423 14.7463C33.759 14.408 34.408 13.759 34.7463 12.9423C35 12.3297 35 11.5531 35 10C35 8.44687 35 7.6703 34.7463 7.05772C34.408 6.24097 33.759 5.59205 32.9423 5.25373C32.3297 5 31.5532 5 30 5Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30 15H10C8.44687 15 7.6703 15 7.05772 15.2537C6.24097 15.592 5.59205 16.241 5.25373 17.0577C5 17.6703 5 18.4468 5 20C5 21.5532 5 22.3297 5.25373 22.9423C5.59205 23.759 6.24097 24.408 7.05772 24.7463C7.6703 25 8.44687 25 10 25H30C31.5532 25 32.3297 25 32.9423 24.7463C33.759 24.408 34.408 23.759 34.7463 22.9423C35 22.3297 35 21.5532 35 20C35 18.4468 35 17.6703 34.7463 17.0577C34.408 16.241 33.759 15.592 32.9423 15.2537C32.3297 15 31.5532 15 30 15Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30 25H10C8.44687 25 7.6703 25 7.05772 25.2537C6.24097 25.592 5.59205 26.241 5.25373 27.0577C5 27.6703 5 28.4468 5 30C5 31.5532 5 32.3297 5.25373 32.9423C5.59205 33.759 6.24097 34.408 7.05772 34.7463C7.6703 35 8.44687 35 10 35H30C31.5532 35 32.3297 35 32.9423 34.7463C33.759 34.408 34.408 33.759 34.7463 32.9423C35 32.3297 35 31.5532 35 30C35 28.4468 35 27.6703 34.7463 27.0577C34.408 26.241 33.759 25.592 32.9423 25.2537C32.3297 25 31.5532 25 30 25Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 10H10.0167" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 20H10.0167" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 30H10.0167" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10H15.0167" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 20H15.0167" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 30H15.0167" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
<div className='mt-8'><DynamicContent type="p4" title='VPS Hosting' css='font-semibold my-4 text-gray-100' /></div>
<div><DynamicContent type="p4" title='More power and control for apps, APIs, and busy stores. ' css='my-2 text-gray-100' /></div>
<div>
<ul className="list-disc pl-6 space-y-2 text-gray-100 p-base-res">
<li>SLA uptime with optional monitoring</li>
<li>Backups and snapshots available</li>
<li>Root access and SSH</li>
<li>Flexible stack support</li>
</ul>
</div>
</div>
<div className={`${isDark ? "text-[#141313]" : "bg-white "}  p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.334 16.8807C33.334 10.4947 33.334 7.30172 31.3813 5.31785C29.4288 3.33398 26.286 3.33398 20.0007 3.33398H16.6673C10.3819 3.33398 7.23923 3.33398 5.2866 5.31785C3.33398 7.30172 3.33398 10.4947 3.33398 16.8807C3.33398 23.2667 3.33398 26.4597 5.2866 28.4435C6.06928 29.2387 7.04315 29.7152 8.33398 30.0007" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M36.6673 29.166C36.6673 26.0412 36.6673 24.4788 35.8715 23.3835C35.6145 23.0298 35.3035 22.7188 34.9498 22.4618C33.8545 21.666 32.2922 21.666 29.1673 21.666H20.834C17.7092 21.666 16.1468 21.666 15.0516 22.4618C14.6978 22.7188 14.3868 23.0298 14.1298 23.3835C13.334 24.4788 13.334 26.0412 13.334 29.166C13.334 32.2908 13.334 33.8532 14.1298 34.9485C14.3868 35.3022 14.6978 35.6132 15.0516 35.8702C16.1468 36.666 17.7092 36.666 20.834 36.666H29.1673C32.2922 36.666 33.8545 36.666 34.9498 35.8702C35.3035 35.6132 35.6145 35.3022 35.8715 34.9485C36.6673 33.8532 36.6673 32.2908 36.6673 29.166Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M27.5 26.666L29.0332 27.9875C29.6777 28.543 30 28.8208 30 29.166C30 29.5112 29.6777 29.789 29.0332 30.3445L27.5 31.666" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.5 26.666L20.9668 27.9875C20.3223 28.543 20 28.8208 20 29.166C20 29.5112 20.3223 29.789 20.9668 30.3445L22.5 31.666" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.16602 10H32.4994" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
<div className='mt-8'><DynamicContent type="p4" title='Domains' css={`font-semibold my-4  ${isDark ? "text-gray-100" : "text-gray-900"} font-semibold my-4`} /></div>
<div><DynamicContent type="p4" title='Search, register, or transfer your name in minutes.' css={`font-semibold my-4  ${isDark ? "text-gray-100" : "text-gray-900"} my-2`} /></div>
<div>
<ul className={`${isDark ? "text-gray-100" : "text-gray-900"} list-disc pl-6 space-y-2 p-base-res`}>
<li>WHOIS privacy for eligible TLDs</li>
<li>DNS management and custom records</li>
<li>Simple transfers and renewal reminders</li>
</ul>
</div>
</div>
</div>
</div>

<div>


<div className="text-center my-16 text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h2" title='Why Choose Nexoris Cloud' />
<DynamicContent type="p" title='Your site loads fast, stays online, and gets help when you need it. Pricing is clear from day one.' />
</div>

<div className={`px-[1%] md:px-[6%] grid grid-cols-1 rounded-3xl sm:grid-cols-2 md:grid-cols-4 gap-4 items-stretch  py-6 px-3 ${isDark ? "" : "bg-gray-100"}`}>
{engineered.map((src, i) => (
<div key={`enginnered88-${i}`} className={`mb-5 p-[1%] sm:p-[2%] md:p-[3%] rounded-3xl ${isDark ? "darkModeBg" : "bg-white"}`}>
<div className="p-5 h-full flex flex-col">
<div className="w-[58px] space-y-2 shrink-0 mb-4" dangerouslySetInnerHTML={{ __html: src.src }} />
<div className="space-y-2 mb-3 font-bold"><DynamicContent css={`font-bold`} type="p4" title={src.title || ``}  /></div>
<div className="space-y-2"><DynamicContent type="p" title={src.teaser || ``}  /></div>
</div>
</div>
))}
</div>


<div className="text-center mt-18 mb-8 text-center sub-title">
<DynamicContent type="h2" title='Performance & Reliability' />
<DynamicContent type="p" title='Nexoris Cloud Solutions is our hosting arm. Your product and the servers behind it are handled by one team - so ownership is clear, fixes are faster, and performance is better.'  />
</div>


<div className="content-padding grid grid-cols-1 sm:grid-cols-3 gap-10 p-2 mt-10">
<div className={`${isDark ? "darkModeBg" : "bg-white"} p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.6673 6.66602H8.33398C6.78085 6.66602 6.00428 6.66602 5.3917 6.91975C4.57495 7.25807 3.92603 7.90698 3.58772 8.72373C3.33398 9.33632 3.33398 10.1129 3.33398 11.666C3.33398 13.2191 3.33398 13.9957 3.58772 14.6083C3.92603 15.425 4.57495 16.074 5.3917 16.4123C6.00428 16.666 6.78085 16.666 8.33398 16.666H31.6673C33.2205 16.666 33.997 16.666 34.6097 16.4123C35.4263 16.074 36.0753 15.425 36.4136 14.6083C36.6673 13.9957 36.6673 13.2191 36.6673 11.666C36.6673 10.1129 36.6673 9.33632 36.4136 8.72373C36.0753 7.90698 35.4263 7.25807 34.6097 6.91975C33.997 6.66602 33.2205 6.66602 31.6673 6.66602Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M31.6673 23.334H8.33398C6.78085 23.334 6.00428 23.334 5.3917 23.5877C4.57495 23.926 3.92603 24.575 3.58772 25.3917C3.33398 26.0043 3.33398 26.7808 3.33398 28.334C3.33398 29.8872 3.33398 30.6637 3.58772 31.2763C3.92603 32.093 4.57495 32.742 5.3917 33.0803C6.00428 33.334 6.78085 33.334 8.33398 33.334H31.6673C33.2205 33.334 33.997 33.334 34.6097 33.0803C35.4263 32.742 36.0753 32.093 36.4136 31.2763C36.6673 30.6637 36.6673 29.8872 36.6673 28.334C36.6673 26.7808 36.6673 26.0043 36.4136 25.3917C36.0753 24.575 35.4263 23.926 34.6097 23.5877C33.997 23.334 33.2205 23.334 31.6673 23.334Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 28.334H10.0167" stroke="#543CDA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.666 28.334H16.6827" stroke="#543CDA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 11.666H10.0167" stroke="#543CDA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.666 11.666H16.6827" stroke="#543CDA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
<div className='mt-8'><DynamicContent type="p4" title='NVMe for Real Speed' css='font-semibold my-4' /></div>
<div><DynamicContent type="p4" title='NVMe lets servers read and write data faster, so pages load quicker, dashboards run smoothly, and checkouts stay fast even in heavy traffic' css='my-2' /></div>
</div>
<div className="bg-[#110C2C] p-5 rounded-3xl">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.834 31.666V36.666" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 36.666H24.1667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.4993 26.6673C16.056 26.6673 10.8327 21.444 10.8327 15.0007C10.8327 8.55733 16.056 3.33398 22.4993 3.33398C28.9427 3.33398 34.166 8.55733 34.166 15.0007C34.166 21.444 28.9427 26.6673 22.4993 26.6673Z" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M14.166 6.66732C15.2565 6.73148 15.8199 7.26563 16.7885 8.289C18.5378 10.1374 20.2872 10.2917 21.4533 9.67552C23.2027 8.75132 21.7327 7.25433 23.7858 6.4408C25.124 5.91057 25.3107 4.46775 24.5658 3.33398" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
<path d="M33.3327 16.666C30.8327 16.666 30.389 18.744 28.3327 18.3327C24.166 17.4993 22.9853 18.4308 22.9853 20.4178C22.9853 22.4047 22.9853 22.4047 22.1188 23.8948C21.5552 24.8642 21.3582 25.8333 22.4817 26.666" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
<path d="M10.834 3.33398C7.74838 6.3339 5.83398 10.5143 5.83398 15.1382C5.83398 24.267 13.2959 31.6673 22.5007 31.6673C27.0432 31.6673 31.161 29.8652 34.1673 26.9423" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
</svg>
</div>
<div className='mt-8'><DynamicContent type="p4" title='Global Locations' css='font-semibold my-4 text-gray-100' /></div>
<div><DynamicContent type="p4" title='Pick a region close to your visitors to cut delay and improve response time.Not sure which data centre fits your audience? We’ll guide you' css='my-2 text-gray-100' /></div>
</div>
<div className={`${isDark ? "darkModeBg" : "bg-white"} p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0007 6.66732C10.0007 8.50827 8.50827 10.0007 6.66732 10.0007C4.82637 10.0007 3.33398 8.50827 3.33398 6.66732C3.33398 4.82637 4.82637 3.33398 6.66732 3.33398C8.50827 3.33398 10.0007 4.82637 10.0007 6.66732Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M36.6667 6.66732C36.6667 8.50827 35.1743 10.0007 33.3333 10.0007C31.4923 10.0007 30 8.50827 30 6.66732C30 4.82637 31.4923 3.33398 33.3333 3.33398C35.1743 3.33398 36.6667 4.82637 36.6667 6.66732Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M36.6667 33.3333C36.6667 35.1743 35.1743 36.6667 33.3333 36.6667C31.4923 36.6667 30 35.1743 30 33.3333C30 31.4923 31.4923 30 33.3333 30C35.1743 30 36.6667 31.4923 36.6667 33.3333Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M10.0007 33.3333C10.0007 35.1743 8.50827 36.6667 6.66732 36.6667C4.82637 36.6667 3.33398 35.1743 3.33398 33.3333C3.33398 31.4923 4.82637 30 6.66732 30C8.50827 30 10.0007 31.4923 10.0007 33.3333Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M33.3327 9.99935V29.9993M29.9993 33.3327H9.99935M29.9993 6.66602H9.99935M6.66602 9.99935V29.9993" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.7495 14.1347L15.9351 15.0227C13.645 16.1434 12.5 16.7037 12.5 17.5007C12.5 18.2977 13.645 18.858 15.9351 19.9787L17.7495 20.8665C18.8403 21.4003 19.3858 21.6673 20 21.6673C20.6142 21.6673 21.1597 21.4003 22.2505 20.8665L24.0648 19.9787C26.355 18.858 27.5 18.2977 27.5 17.5007C27.5 16.7037 26.355 16.1434 24.0648 15.0227L22.2505 14.1347C21.1597 13.6009 20.6142 13.334 20 13.334C19.3858 13.334 18.8403 13.6009 17.7495 14.1347Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.5 22.5C27.5 23.297 26.355 23.8573 24.0648 24.978L22.2505 25.8658C21.1597 26.3997 20.6142 26.6667 20 26.6667C19.3858 26.6667 18.8403 26.3997 17.7495 25.8658L15.9351 24.978C13.645 23.8573 12.5 23.297 12.5 22.5" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
<div className='mt-8'><DynamicContent type="p4" title='Domains' css='font-semibold my-4' /></div>
<div><DynamicContent type="p4" title='Search, register, or transfer your name in minutes.' css='my-2' /></div>
<div>
<ul className="list-disc pl-6 space-y-2 text-gray-1 p-base-res">
<li>WHOIS privacy for eligible TLDs</li>
<li>DNS management and custom records</li>
<li>Simple transfers and renewal reminders</li>
</ul>
</div>
</div>
</div>
</div>


<div className='p-[2%] bg-[#110C2C] rounded-3xl text-white my-[8%]'>
<div className="my-8 px-[1%] lg:px-[5%]">
<div className="mb-8"><DynamicContent type="h2" title='Security & Compliance' /></div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
<div>
<DynamicContent type="p4" title='Keep your data safe and your site clean. We use strong defaults, clear rules, and simple tools you can trust' css='silver' />
</div>
<div className="border-t sm:p-6 border-t-gray-700 hidden sm:block"></div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-4 gap-8 my-16">
<div className='py-8'>
<div className="bg-[#464067] p-3 sm:p-7 rounded-3xl">
<div className="max-w-80 mb-12"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.6673 26.666L33.334 23.3327H17.5543C16.3272 20.8632 13.7788 19.166 10.834 19.166C6.69183 19.166 3.33398 22.5238 3.33398 26.666C3.33398 30.808 6.69183 34.166 10.834 34.166C13.7787 34.166 16.3271 32.4688 17.5543 29.9993H27.5007L29.584 27.8448L31.6673 29.9993H33.334L36.6673 26.666Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 26.666H11.6667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 5.83398V14.1673" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 11.6673V8.33398C10 6.95327 11.1193 5.83398 12.5 5.83398C13.8807 5.83398 15 6.95327 15 8.33398V11.6673C15 13.048 13.8807 14.1673 12.5 14.1673C11.1193 14.1673 10 13.048 10 11.6673Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 5.83398V14.1673" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25 5.83398V14.1673" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30 11.6673V8.33398C30 6.95327 31.1193 5.83398 32.5 5.83398C33.8807 5.83398 35 6.95327 35 8.33398V11.6673C35 13.048 33.8807 14.1673 32.5 14.1673C31.1193 14.1673 30 13.048 30 11.6673Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>

<div className="mb-4">
<DynamicContent css='font-bold' type="p4" title='SSL and Encryption' /></div>
<ul className="list-disc pl-6 space-y-2 text-gray-100 p-base-res">
<li>Free SSL on all hosting plans</li>
<li>Auto-issue and auto-renew</li>
<li>Secure access with SFTP/SSH and HTTPS
</li>
</ul>
</div>
</div>


<div className="bg-[#464067] p-3 sm:p-7 rounded-3xl">
<div className="max-w-80 mb-12"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.405 5.2433L11.5636 6.55668C7.18787 8.5793 5 9.5906 5 11.2507C5 12.9107 7.18787 13.922 11.5636 15.9446L14.405 17.258C17.1587 18.5308 18.5357 19.1673 20 19.1673C21.4643 19.1673 22.8413 18.5308 25.595 17.258L28.4363 15.9446C32.8122 13.922 35 12.9107 35 11.2507C35 9.5906 32.8122 8.5793 28.4363 6.55668L25.595 5.2433C22.8413 3.97042 21.4643 3.33398 20 3.33398C18.5357 3.33398 17.1587 3.97042 14.405 5.2433Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34.6467 18.4961C34.8822 18.8273 35 19.1726 35 19.5523C35 21.1886 32.8122 22.1856 28.4363 24.1794L25.595 25.4741C22.8413 26.7288 21.4643 27.3563 20 27.3563C18.5357 27.3563 17.1587 26.7288 14.405 25.4741L11.5636 24.1794C7.18787 22.1856 5 21.1886 5 19.5523C5 19.1726 5.11778 18.8273 5.35333 18.4961" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M33.9612 27.1094C34.6537 27.661 35 28.2109 35 28.8619C35 30.4984 32.8122 31.4952 28.4363 33.489L25.595 34.7837C22.8413 36.0385 21.4643 36.6659 20 36.6659C18.5357 36.6659 17.1587 36.0385 14.405 34.7837L11.5636 33.489C7.18787 31.4952 5 30.4984 5 28.8619C5 28.2109 5.3463 27.661 6.0389 27.1094" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


</div>
<div className="mb-4"><DynamicContent css='font-bold' type="p" title='Protection Layers' /></div>
<ul className="list-disc pl-6 space-y-2 text-gray-100 p-base-res">
<li>Server firewall and DDoS mitigation</li>
<li>Account isolation to limit cross-site risk</li>
<li>Malware scans and timely security updates</li>
</ul>
</div>

<div className="bg-[#464067] p-3 sm:p-7 rounded-3xl">
<div className="max-w-80 mb-12"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.1813 5.82622C28.0275 4.25702 24.1682 3.33398 20 3.33398C15.8318 3.33398 11.9725 4.25702 8.8186 5.82623C7.27197 6.59575 6.49865 6.98052 5.74933 8.1903C5 9.40008 5 10.5715 5 12.9142V18.7291C5 28.2015 12.5706 33.468 16.955 35.7236C18.1778 36.3528 18.7892 36.6673 20 36.6673C21.2108 36.6673 21.8222 36.3528 23.0448 35.7236C27.4293 33.468 35 28.2015 35 18.7291V12.9142C35 10.5715 35 9.40008 34.2507 8.1903C33.5013 6.98052 32.728 6.59575 31.1813 5.82622Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0007 14.9993V16.666M18.334 15.8327C18.334 16.2747 18.5097 16.6986 18.8222 17.0111C19.1347 17.3238 19.5587 17.4993 20.0007 17.4993C20.4427 17.4993 20.8667 17.3238 21.1792 17.0111C21.4917 16.6986 21.6673 16.2747 21.6673 15.8327C21.6673 15.3907 21.4917 14.9667 21.1792 14.6542C20.8667 14.3416 20.4427 14.166 20.0007 14.166C19.5587 14.166 19.1347 14.3416 18.8222 14.6542C18.5097 14.9667 18.334 15.3907 18.334 15.8327Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.25 23.3333H18.75L20 17.5L21.25 23.3333Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


</div>
<div className="mb-4"><DynamicContent css='font-bold' type="p" title='Account Safety' /></div>
<ul className="list-disc pl-6 space-y-2 text-gray-100 p-base-res">
<li>Two-factor authentication where available </li>
<li>Role-based access and strong password guidance</li>
<li>IP and directory protections you can enable in a few clicks</li>
</ul>
</div>



<div className='py-8'>
<div className="bg-[#464067] p-3 sm:p-7 rounded-3xl">
<div className="max-w-80 mb-12"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.6673 21.6673C36.5375 24.7878 36.119 26.7011 34.7697 28.048C32.8137 30.0006 29.6655 30.0007 23.369 30.0007H16.6907C10.3943 30.0007 7.24607 30.0006 5.29002 28.048C3.33398 26.0955 3.33398 22.9527 3.33398 16.6673C3.33398 10.3819 3.33398 7.23923 5.29002 5.2866C7.24607 3.33398 10.3943 3.33398 16.6907 3.33398H18.334" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M20 30V36.6667" stroke="white" strokeWidth="2.5"/>
<path d="M13.334 36.666H26.6673" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M18.334 25H21.6673" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M36.6667 9.16732V5.00065C33.3333 5.00065 30.8333 3.33398 30.8333 3.33398C30.8333 3.33398 28.3333 5.00065 25 5.00065V9.16732C25 15.0007 30.8333 16.6673 30.8333 16.6673C30.8333 16.6673 36.6667 15.0007 36.6667 9.16732Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</div>
<div className="mb-4">
<DynamicContent css='font-bold' type="p4" title='Responsible Use (AUP)' /></div>
<DynamicContent type="p" title='For protection, some uses are not allowed. In short, no spam, no malware or hacking tools, and no illegal or harmful content.' />
</div>
</div>
</div>
<div className="mt-[6%] flex justify-center mb-[6%]">
  <DynamicContent
    isLink={true}
    css={`${isDark ? "text-gray-100" : "text-gray-900 bg-white"}`}
    type="btn1"
    url="/terms-of-service"
    title="Read our Acceptable Use Policy"
    teaser="Go to Acceptable Use Policy page"
    icon={`${isDark ? "text-gray-700 bg-gray-200" : "text-gray-800 bg-gray-200"}`}
  />
</div>
</div>
</div>

<div className="text-center my-8 sub-title">
<DynamicContent type="h2" title='Choose Your Plan' />
<DynamicContent type="p" title='Start with what you need today and scale without stress. You can upgrade or switch plans anytime.'  />
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-10 content-padding z-4">
    <div className="flex h-full">
  <div className="w-full flex flex-col h-full">
    {/* Top dark strip (fixed height) */}
    <div className="h-16 rounded-t-3xl bg-gradient-to-r from-black to-zinc-900" />

    {/* Overlapping content (fills remaining height) */}
    <div className={`${isDark ? "darkModeBg border-gray-800 " : "bg-white border-purple-200 "} -mt-6 relative z-4 flex-1 border rounded-t-3xl border-t p-6 flex flex-col`}>
      {/* Icon */}
      <div className="mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 5H10C8.44687 5 7.6703 5 7.05772 5.25373C6.24097 5.59205 5.59205 6.24097 5.25373 7.05772C5 7.6703 5 8.44687 5 10C5 11.5531 5 12.3297 5.25373 12.9423C5.59205 13.759 6.24097 14.408 7.05772 14.7463C7.6703 15 8.44687 15 10 15H30C31.5532 15 32.3297 15 32.9423 14.7463C33.759 14.408 34.408 13.759 34.7463 12.9423C35 12.3297 35 11.5531 35 10C35 8.44687 35 7.6703 34.7463 7.05772C34.408 6.24097 33.759 5.59205 32.9423 5.25373C32.3297 5 31.5532 5 30 5Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30 15H10C8.44687 15 7.6703 15 7.05772 15.2537C6.24097 15.592 5.59205 16.241 5.25373 17.0577C5 17.6703 5 18.4468 5 20C5 21.5532 5 22.3297 5.25373 22.9423C5.59205 23.759 6.24097 24.408 7.05772 24.7463C7.6703 25 8.44687 25 10 25H30C31.5532 25 32.3297 25 32.9423 24.7463C33.759 24.408 34.408 23.759 34.7463 22.9423C35 22.3297 35 21.5532 35 20C35 18.4468 35 17.6703 34.7463 17.0577C34.408 16.241 33.759 15.592 32.9423 15.2537C32.3297 15 31.5532 15 30 15Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30 25H10C8.44687 25 7.6703 25 7.05772 25.2537C6.24097 25.592 5.59205 26.241 5.25373 27.0577C5 27.6703 5 28.4468 5 30C5 31.5532 5 32.3297 5.25373 32.9423C5.59205 33.759 6.24097 34.408 7.05772 34.7463C7.6703 35 8.44687 35 10 35H30C31.5532 35 32.3297 35 32.9423 34.7463C33.759 34.408 34.408 33.759 34.7463 32.9423C35 32.3297 35 31.5532 35 30C35 28.4468 35 27.6703 34.7463 27.0577C34.408 26.241 33.759 25.592 32.9423 25.2537C32.3297 25 31.5532 25 30 25Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 10H10.0167" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 20H10.0167" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 30H10.0167" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10H15.0167" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 20H15.0167" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 30H15.0167" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </div>
      </div>

      {/* Title */}
      <DynamicContent
        type="p4"
        title="Shared NVMe Hosting"
        css="mb-4 text-lg font-semibold"
      />

      {/* Content grows naturally but cards stay equal height */}
      <ul className="list-disc pl-6 space-y-2 p-base-res">
        <li>Best for: company sites, blogs, small stores</li>
        <li>Includes: NVMe storage, free SSL, daily backups, free migration, responsive support</li>
        <li>You manage: content and plugins</li>
        <li>We manage: server, security, uptime</li>
      </ul>
    </div>
  </div>
</div>



<div className="flex h-full">
  <div className="w-full flex flex-col h-full">
<div className="h-16 rounded-t-3xl bg-gradient-to-b from-[#543CDA] to-[#880286]" />



    {/* Overlapping content (fills remaining height) */}
    <div className={`${isDark ? "darkModeBg border-gray-800 " : "bg-white border-purple-200 "} -mt-6 relative z-4 flex-1 border rounded-t-3xl border-t p-6 flex flex-col`}>
      {/* Icon */}
      <div className="mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">
 <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.8327 11.6673C30.8327 7.73895 30.8327 5.77477 29.6123 4.55437C28.3918 3.33398 26.4277 3.33398 22.4993 3.33398H17.4993C13.571 3.33398 11.6068 3.33398 10.3864 4.55437C9.16602 5.77477 9.16602 7.73895 9.16602 11.6673M30.8327 28.334C30.8327 32.2623 30.8327 34.2265 29.6123 35.447C28.3918 36.6673 26.4277 36.6673 22.4993 36.6673H17.4993C13.571 36.6673 11.6068 36.6673 10.3864 35.447C9.16602 34.2265 9.16602 32.2623 9.16602 28.334" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.3327 3.33398H16.666L17.4993 5.00065H22.4993L23.3327 3.33398Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25.8342 25.8326C25.8342 25.8326 31.6673 21.5365 31.6673 19.9993C31.6673 18.4621 25.834 14.166 25.834 14.166" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.1673 25.8327C14.1673 25.8327 8.334 21.5365 8.33398 19.9993C8.33397 18.4622 14.1673 14.166 14.1673 14.166" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </div>
      </div>

      {/* Title */}
<DynamicContent
type="p4"
title="Managed VPS"
css="mb-4 text-lg font-semibold"
/>

{/* Content grows naturally but cards stay equal height */}
<ul className="list-disc pl-6 space-y-2 p-base-res">
<li>Best for: busy stores, apps, APIs, dashboards</li>
<li>Includes: dedicated CPU and RAM, NVMe storage, root access, optional monitoring and backups</li>
<li>We manage: setup, patches, security updates, performance checks</li>
<li>You manage: your code and releases</li>
</ul>
</div>
</div>
</div>

<div className="flex h-full">
  <div className="w-full flex flex-col h-full">
    {/* Top dark strip (fixed height) */}
    <div className="h-16 rounded-t-3xl bg-gradient-to-r from-black to-zinc-900" />

    {/* Overlapping content (fills remaining height) */}
    <div className={`${isDark ? "darkModeBg border-gray-800 " : "bg-white border-purple-200 "} -mt-6 relative z-4 flex-1 border rounded-t-3xl border-t p-6 flex flex-col`}>
      {/* Icon */}
      <div className="mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.2917 36.6673V35.0201V34.9853C25.3002 34.0768 26.045 33.3425 26.9662 33.334L27.0912 33.3338C29.4772 33.3148 31.527 31.6576 32.0138 29.354L32.0315 29.2675L32.8968 25.0007L34.4657 24.2272C35.3053 23.8132 35.725 23.6062 35.8158 23.2267C35.9067 22.8472 35.6252 22.4768 35.062 21.7363L31.8828 17.5562C31.5665 17.1402 31.4083 16.9322 31.3235 16.7122C31.2388 16.4921 31.2127 16.1802 31.1607 15.5565C30.5882 8.71245 24.7742 3.33398 17.6865 3.33398C10.2193 3.33398 4.16602 9.30352 4.16602 16.6673C4.16602 21.2502 6.5105 25.2928 10.0812 27.6928M10.0812 27.6928V36.6673M10.0812 27.6928C11.1143 28.3871 12.25 28.944 13.4613 29.3367" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.334 15L24.8672 16.3215C25.5117 16.877 25.834 17.1548 25.834 17.5C25.834 17.8452 25.5117 18.123 24.8672 18.6785L23.334 20" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.666 15L10.1328 16.3215C9.4883 16.877 9.16602 17.1548 9.16602 17.5C9.16602 17.8452 9.48828 18.123 10.1328 18.6785L11.666 20" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.1673 13.334L15.834 21.6673" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </div>
      </div>

{/* Title */}
<DynamicContent
type="p4"
title="Unmanaged VPS"
css="mb-4 text-lg font-semibold"
/>

{/* Content grows naturally but cards stay equal height */}
<ul className="list-disc pl-6 space-y-2 p-base-res">
<li>Best for: developers and teams that want full control</li>
<li>Includes: dedicated CPU and RAM, NVMe storage, full root access</li>
<li>You manage: OS, stack, patches, backups</li>
<li>We manage: reliable infrastructure</li>
</ul>
</div>
</div>
</div>
</div> 

<div className="mt-[6%] flex justify-center mb-[6%]">
<DynamicContent isLink={true} css='bg-[#543CDA] text-white' type="btn1" url='https://www.nexoriscloud.com/domains' title='See full pricing' teaser='See full pricing' icon='bg-[#4D3BAD] text-gray-100' />
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 gap-20 content-padding mb-[4%]">
<div>
<div className="my-8">
<DynamicContent type="h2" title='Free Site Migration & Onboarding' />
<DynamicContent type="p4" title='We move your site at no cost. We copy your files and database, test key flows, and switch DNS at the time you choose'  />
</div>
<DynamicContent type="p4" title='How it works' css='font-semibold mb-4' />
<div className='mb-12'>
<ul className="list-disc pl-6 space-y-2">
<li>Request a migration. Tell us your current host and preferred move time.</li>
<li>Send access securely. Panel or SFTP/SSH, database, and CMS admin.</li>
<li>We copy and test. Pages, forms, checkout, and admin. </li>
<li>Go live. We switch DNS and issue SSL. </li>
</ul></div>


<DynamicContent type="p4" title='Timing' css='font-semibold mb-4' />
<div className='mb-12'>
Most sites move in 24–48 hours. Busy stores and apps take 2–5 business days. We aim for zero downtime; if a short window is needed, we schedule it off-peak
</div>



<DynamicContent type="p4" title='What we need' css='font-semibold mb-4' />
<div className='mb-12'>
<ul className="list-disc pl-6 space-y-2">
<li>cPanel or hosting panel, or SFTP/SSH</li>
<li>Database user and password</li>
<li>CMS admin login (e.g., WordPress, Strapi)</li>
<li>Domain registrar access for DNS updates (if needed)</li>
</ul></div>



<DynamicContent type="p4" title='Handover' css='font-semibold mb-4' />
<div className='mb-12'>
<ul className="list-disc pl-6 space-y-2">
<li>Backups enabled</li>
<li>Monitoring on</li>
<li>SSL active</li>
<li>Final checks done</li>
<li>Short report sent.</li>
</ul></div>
</div>
<div>
<div className="my-8">
<DynamicContent type="h2" title='Support & Service Levels' />
<DynamicContent type="p4" title='Fast help, clear timelines, honest updates. That is our support promise.'  />
</div>

<DynamicContent type="p4" title='How to Reach Us' css='font-semibold mb-4' />
<div className='mb-12'>
<ul className="list-disc pl-6 space-y-2">
<li>Support portal (tickets): 24/7</li>
<li>Email: 24/7 monitoring</li>
<li>Live chat: Monday–Friday, 08:00–18:00 WAT</li>
<li>Emergency incidents: on-call, 24/7 </li>
</ul></div>


<DynamicContent type="p4" title='Response Targets' css='font-semibold mb-4' />
<div className='mb-12'>
<ul className="list-disc pl-6 space-y-2">
<li>Critical (site down or security): acknowledge in 15 minutes, work starts immediately</li>
<li>High (major errors, checkout issues): response within 1 hour</li>
<li>Normal (updates, guidance): response within 4 business hours</li>
</ul>
</div>



<DynamicContent type="p4" title='Uptime & Maintenance' css='font-semibold mb-4' />
<div className='mb-12'>
<ul className="list-disc pl-6 space-y-2">
<li>•	Uptime target: 99.9% on VPS with SLA
•	Planned maintenance: advance notice with a clear window
•	Status updates: progress during incidents and a short post-incident summary
</li>
<li>Uptime target: 99.9% on VPS with SLA</li>
<li>Planned maintenance: advance notice with a clear window</li>
</ul></div>


<DynamicContent type="p4" title='Scope of Support' css='font-semibold mb-4' />
<div className='mb-12'>
<ul className="list-disc pl-6 space-y-2">
<li>Managed VPS: setup, patches, security updates, performance checks</li>
<li>Unmanaged VPS: reliable infrastructure; you manage OS, stack, and code</li>
<li>Shared Hosting: server management by us; you manage your site and plugins</li>
</ul></div>
</div>
</div>


<div className="text-center mb-10 mt-18 sub-title">
<DynamicContent type="h2" title='Got questions? We’ve got answers' />
<DynamicContent type="p3" title='Straight answers to common questions.'  />
</div>

<div>
<Accordion items={faqItems} defaultOpenIndex={0} />
</div>
</div></>
);
}
