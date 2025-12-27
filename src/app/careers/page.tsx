import type { Metadata } from 'next'
import Jobs from "@/components/jobs"
import DynamicContent, {Title} from "@/components/cards"
import Header from "@/components/header"
import SearchBar from "@/components/searchBar";

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

export default function Careers() {


return (
  <>
  
<div className="relative z-10">
<div className="card-surface">
<Header />
<div className=" mt-8">
<>
<div className="relative z-10">
<div className="flex items-center justify-center mt-3 mb-5 sm:mb-8 sm:mt-12">
<Title title={'We’re Hiring!'} />
</div>
<div className="text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h1" title='Join Our Team at Nexoris'  /> 
</div>
<div className="my-8 text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="p4" title={`At Nexoris, we design and build websites, apps, and tools that solve everyday problems for people. We're committed to providing a clear path for your growth through well-defined goals and consistent feedback. We're a remote-friendly company with our headquarters in Lagos, Nigeria. We provide fair, transparent pay, a flexible work environment, and full support for your professional learning.
`}  />
</div>
<div className="mt-4 mb-8">
<div className="w-full flex flex-col sm:flex-row justify-center gap-4">
{/* RIGHT BUTTON — Explore Nexoris Cloud */}

<SearchBar />
</div>
</div>
</div>
</>    
</div>
</div>
</div>

<div className="my-8 px-[1%] md:px-[6%]">
<DynamicContent type="h2" title='Currently Open Positions' />
<DynamicContent type="p" title='Explore our open roles below. Each listing provides the essential details you need to know before applying.'  />
<Jobs />
</div>
</>);
}
