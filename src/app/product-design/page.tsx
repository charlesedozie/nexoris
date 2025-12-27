import type { Metadata } from 'next'
import DynamicContent, {Counter, DynamicIcon, ArrowLine, Accordion} from "@/components/cards"
import Home from "./home"


const faqItems = [
  {
    question: `What does this service cover?
`,
    answer:
     `Strategy, research, prototypes, UI/UX, design system, backlog and release plan, launch support, and ongoing improvements.
`,
  },
  {
    question: `Can you work with our in-house developers or agency?
`,
    answer:
    `Yes. We share specs and backlogs, join stand-ups when needed, and use your tools or ours. Handover includes clean tickets and acceptance criteria.
`,
  },
  {
    question: `Do we need a full redesign?
`,
    answer:
      `Not always. We keep what works and fix weak spots - flows, clarity, and speed. A full redesign only happens if it brings clear gains.
`,
  },
   {
    question: `Do you handle branding?
`,
    answer:
      `Yes, review or rebrand when needed. We align logo, colours, type, icons, and voice, then map them to UI components for a consistent look across screens.
`,
  },
   {
    question: `How long does an MVP design take?
`,
    answer:
     `Most MVP design and handover fits in 4–8 weeks, depending on scope and your team’s speed. You’ll get a plan with dates after kickoff.
`,
  },
     {
    question: `What happens after launch?

`,
    answer:
     `We track real use, fix issues, and ship small improvements on a steady schedule. For SLAs and ongoing care, see Website Maintenance & Support. For hosting or migration, see Cloud Solutions.

`,
  },
     {
    question: `How do you price the work?

`,
    answer:
     `Choose a fixed-scope project, monthly product management, or a short design sprint. Your proposal will include scope, timeline, and cost so you can decide quickly.

`,
  },
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

export default function Product() {
return (
<>
<Home />

<div className="text-center mt-24 sub-title">
<DynamicContent type="h2" title='Got questions? We’ve got answers' />
<DynamicContent type="p3" title='Straight answers to common questions.'  />
</div>
<div>
<Accordion items={faqItems} defaultOpenIndex={0} />
</div></> 
);
}
