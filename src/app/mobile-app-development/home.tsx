'use client'

import type { Metadata } from 'next'
import DynamicContent, {useDarkMode, Accordion} from "@/components/cards"

const faqItems = [
  {
    question: "Do we build one app for both iOS and Android or two separate apps?",
    answer:
      `We recommend what fits your goals and budget. One codebase can reduce cost and time; separate native apps can help when you need deeper device features. We explain the trade-offs plainly.
`,
  },
  {
    question: `Can you work with our current app or backend?
`,
    answer:
      `Yes. We audit what you have, keep what’s solid, and only refactor where it adds value.
`,
  },
  {
    question: `How do store approvals and releases work?
`,
    answer:
      `We prepare assets/builds, submit to Apple and Google, and roll out in stages. If an issue appears, we roll back quickly.
`,
  },

    {
    question: `What support do we get after launch?

`,
    answer:
      `A clear channel for issues, scheduled updates, and a monthly health report.

`,
  },

    {
    question: `Can you add payments, maps, chat, and push notifications?

`,
    answer:
      `Yes, implemented with attention to security and maintainability.

`,
  },

    {
    question: `How will we track success?

`,
    answer:
      `Crash-free rate, start time, usage of key features, and business actions like orders or bookings are shared in simple reports.

`,
  },

    {
    question: `How long will the first version take?

`,
    answer:
      `It depends on scope and how ready your content/designs are. After a short discovery call, we give you dates and a straightforward plan.

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

const how_we_build = [
{src:`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M15.5 25C15.5 20.5217 15.5 18.2825 16.8912 16.8912C18.2825 15.5 20.5217 15.5 25 15.5C29.4783 15.5 31.7175 15.5 33.1088 16.8912C34.5 18.2825 34.5 20.5217 34.5 25C34.5 29.4783 34.5 31.7175 33.1088 33.1088C31.7175 34.5 29.4783 34.5 25 34.5C20.5217 34.5 18.2825 34.5 16.8912 33.1088C15.5 31.7175 15.5 29.4783 15.5 25Z" stroke="white" strokeWidth="1.5"/>
<path d="M15.5 22H34.5" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
<path d="M20 19H20.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24 19H24.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'Product & UX', teaser:'User journeys, wireframes, clickable prototypes, and a clean UI kit. Clear touch targets, helpful empty/error states, onboarding that reduces drop-off.'},
{src:`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M15.5 25C15.5 20.5217 15.5 18.2825 16.8912 16.8912C18.2825 15.5 20.5217 15.5 25 15.5C29.4783 15.5 31.7175 15.5 33.1088 16.8912C34.5 18.2825 34.5 20.5217 34.5 25C34.5 29.4783 34.5 31.7175 33.1088 33.1088C31.7175 34.5 29.4783 34.5 25 34.5C20.5217 34.5 18.2825 34.5 16.8912 33.1088C15.5 31.7175 15.5 29.4783 15.5 25Z" stroke="white" strokeWidth="1.5"/>
<path d="M15.5 22H34.5" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
<path d="M20 19H20.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24 19H24.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'Engineering', teaser:'Solid iOS/Android - native or cross-platform using camera, biometrics, maps, background tasks, notifications. Offline-first sync with safe retries.'},
{src:`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M15.5 25C15.5 20.5217 15.5 18.2825 16.8912 16.8912C18.2825 15.5 20.5217 15.5 25 15.5C29.4783 15.5 31.7175 15.5 33.1088 16.8912C34.5 18.2825 34.5 20.5217 34.5 25C34.5 29.4783 34.5 31.7175 33.1088 33.1088C31.7175 34.5 29.4783 34.5 25 34.5C20.5217 34.5 18.2825 34.5 16.8912 33.1088C15.5 31.7175 15.5 29.4783 15.5 25Z" stroke="white" strokeWidth="1.5"/>
<path d="M15.5 22H34.5" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
<path d="M20 19H20.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24 19H24.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'Backend & Data', teaser:'Connect to your systems or design a right-sized API (REST/GraphQL) with versioning, webhooks, queues, and admin dashboards. '},
{src:`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M15.5 25C15.5 20.5217 15.5 18.2825 16.8912 16.8912C18.2825 15.5 20.5217 15.5 25 15.5C29.4783 15.5 31.7175 15.5 33.1088 16.8912C34.5 18.2825 34.5 20.5217 34.5 25C34.5 29.4783 34.5 31.7175 33.1088 33.1088C31.7175 34.5 29.4783 34.5 25 34.5C20.5217 34.5 18.2825 34.5 16.8912 33.1088C15.5 31.7175 15.5 29.4783 15.5 25Z" stroke="white" strokeWidth="1.5"/>
<path d="M15.5 22H34.5" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
<path d="M20 19H20.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24 19H24.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'Performance, Security & Reliability', teaser:'Targets for start time, smooth scrolling, battery/data use. Data encrypted in-app and over the network. Sensible permissions.'},
{src:`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M15.5 25C15.5 20.5217 15.5 18.2825 16.8912 16.8912C18.2825 15.5 20.5217 15.5 25 15.5C29.4783 15.5 31.7175 15.5 33.1088 16.8912C34.5 18.2825 34.5 20.5217 34.5 25C34.5 29.4783 34.5 31.7175 33.1088 33.1088C31.7175 34.5 29.4783 34.5 25 34.5C20.5217 34.5 18.2825 34.5 16.8912 33.1088C15.5 31.7175 15.5 29.4783 15.5 25Z" stroke="white" strokeWidth="1.5"/>
<path d="M15.5 22H34.5" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
<path d="M20 19H20.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24 19H24.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'Analytics & Growth', teaser:'Event map, funnels, retention (D1/D7/D30). Push strategy (segmentation, timing, delivery). Small tests to lift key actions.'},
{src:`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M15.5 25C15.5 20.5217 15.5 18.2825 16.8912 16.8912C18.2825 15.5 20.5217 15.5 25 15.5C29.4783 15.5 31.7175 15.5 33.1088 16.8912C34.5 18.2825 34.5 20.5217 34.5 25C34.5 29.4783 34.5 31.7175 33.1088 33.1088C31.7175 34.5 29.4783 34.5 25 34.5C20.5217 34.5 18.2825 34.5 16.8912 33.1088C15.5 31.7175 15.5 29.4783 15.5 25Z" stroke="white" strokeWidth="1.5"/>
<path d="M15.5 22H34.5" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
<path d="M20 19H20.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24 19H24.009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'QA & Device Coverage', teaser:'Device/OS matrix across popular mid-range Androids and iPhones in Nigeria. Accessibility checks with VoiceOver/TalkBack and manual edge-case testing.'},
];

const hand_over = [
{src:`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M15.5 25C15.5 20.5217 15.5 18.2825 16.8912 16.8912C18.2825 15.5 20.5217 15.5 25 15.5C29.4783 15.5 31.7175 15.5 33.1088 16.8912C34.5 18.2825 34.5 20.5217 34.5 25C34.5 29.4783 34.5 31.7175 33.1088 33.1088C31.7175 34.5 29.4783 34.5 25 34.5C20.5217 34.5 18.2825 34.5 16.8912 33.1088C15.5 31.7175 15.5 29.4783 15.5 25Z" stroke="white" stroke-width="1.5"/>
<path d="M15.5 22H34.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M20 19H20.009" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 19H24.009" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Code & access', teaser:' Full repositories, accounts, keys, plus a documented build/release setup'},
{src:`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M15.5 25C15.5 20.5217 15.5 18.2825 16.8912 16.8912C18.2825 15.5 20.5217 15.5 25 15.5C29.4783 15.5 31.7175 15.5 33.1088 16.8912C34.5 18.2825 34.5 20.5217 34.5 25C34.5 29.4783 34.5 31.7175 33.1088 33.1088C31.7175 34.5 29.4783 34.5 25 34.5C20.5217 34.5 18.2825 34.5 16.8912 33.1088C15.5 31.7175 15.5 29.4783 15.5 25Z" stroke="white" stroke-width="1.5"/>
<path d="M15.5 22H34.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M20 19H20.009" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 19H24.009" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Design files', teaser:'Figma prototype, UI kit, component library, and a simple style guide.'},
{src:`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M15.5 25C15.5 20.5217 15.5 18.2825 16.8912 16.8912C18.2825 15.5 20.5217 15.5 25 15.5C29.4783 15.5 31.7175 15.5 33.1088 16.8912C34.5 18.2825 34.5 20.5217 34.5 25C34.5 29.4783 34.5 31.7175 33.1088 33.1088C31.7175 34.5 29.4783 34.5 25 34.5C20.5217 34.5 18.2825 34.5 16.8912 33.1088C15.5 31.7175 15.5 29.4783 15.5 25Z" stroke="white" stroke-width="1.5"/>
<path d="M15.5 22H34.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M20 19H20.009" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 19H24.009" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Technical docs', teaser:'Architecture diagram, data model, API docs, and practical ops guides.'},
{src:`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M15.5 25C15.5 20.5217 15.5 18.2825 16.8912 16.8912C18.2825 15.5 20.5217 15.5 25 15.5C29.4783 15.5 31.7175 15.5 33.1088 16.8912C34.5 18.2825 34.5 20.5217 34.5 25C34.5 29.4783 34.5 31.7175 33.1088 33.1088C31.7175 34.5 29.4783 34.5 25 34.5C20.5217 34.5 18.2825 34.5 16.8912 33.1088C15.5 31.7175 15.5 29.4783 15.5 25Z" stroke="white" stroke-width="1.5"/>
<path d="M15.5 22H34.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M26 26H30" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26 30H28" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 19H20.009" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 19H24.009" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22V34.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`, title:'Store assets', teaser:'Listings, screenshots, signed builds, release notes, and a pre-launch checklist.'},
{src:`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#543CDA"/>
<path d="M15.5 25C15.5 20.5217 15.5 18.2825 16.8912 16.8912C18.2825 15.5 20.5217 15.5 25 15.5C29.4783 15.5 31.7175 15.5 33.1088 16.8912C34.5 18.2825 34.5 20.5217 34.5 25C34.5 29.4783 34.5 31.7175 33.1088 33.1088C31.7175 34.5 29.4783 34.5 25 34.5C20.5217 34.5 18.2825 34.5 16.8912 33.1088C15.5 31.7175 15.5 29.4783 15.5 25Z" stroke="white" stroke-width="1.5"/>
<path d="M15.5 22H34.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M26 26H30" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26 30H28" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 19H20.009" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 19H24.009" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22V34.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Team enablement', teaser:'Live training sessions + short recordings for admins/editors; roles, permissions, and change history documented.'},
];

const scope = [
{src:"/scope_proposal.webp", title:'Proposal', teaser:'After a short call, you’ll receive a detailed document with scope, timeline, and costs.'},
{src:"/scope_change.webp", title:'Change Requests', teaser:'Any extra work is quoted first and begins only after your written approval.'},
{src:"/scope_care.webp", title:'Monthly care (optional)', teaser:'Flexible plan for updates, monitoring, and support. Start or stop with notice.'},
];

const engagement = [
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.1497 11.6326C33.7331 10.0659 31.3664 9.28255 27.9331 9.28255H27.5331V9.21589C27.5331 6.41589 27.5331 2.94922 21.2664 2.94922H18.7331C12.4664 2.94922 12.4664 6.43255 12.4664 9.21589V9.29922H12.0664C8.6164 9.29922 6.2664 10.0826 4.84974 11.6492C3.19974 13.4826 3.24974 15.9492 3.4164 17.6326L3.43307 17.7492L3.59974 19.4992C3.6164 19.5159 3.64974 19.5492 3.68307 19.5659C4.23307 19.9326 4.79974 20.2992 5.39974 20.6326C5.63307 20.7826 5.88307 20.9159 6.13307 21.0492C8.98307 22.6159 12.1164 23.6659 15.2997 24.1826C15.4497 25.7492 16.1331 27.5826 19.7831 27.5826C23.4331 27.5826 24.1497 25.7659 24.2664 24.1492C27.6664 23.5992 30.9497 22.4159 33.9164 20.6826C34.0164 20.6326 34.0831 20.5826 34.1664 20.5326C34.9331 20.0992 35.6497 19.6326 36.3497 19.1159C36.3831 19.0992 36.4164 19.0659 36.4331 19.0326L36.4997 18.4326L36.5831 17.6492C36.5997 17.5492 36.5997 17.4659 36.6164 17.3492C36.7497 15.6659 36.7164 13.3659 35.1497 11.6326ZM21.8164 23.0492C21.8164 24.8159 21.8164 25.0826 19.7664 25.0826C17.7164 25.0826 17.7164 24.7659 17.7164 23.0659V20.9659H21.8164V23.0492ZM14.8497 9.28255V9.21589C14.8497 6.38255 14.8497 5.33255 18.7331 5.33255H21.2664C25.1497 5.33255 25.1497 6.39922 25.1497 9.21589V9.29922H14.8497V9.28255Z" fill="#543CDA"/>
<path opacity="0.4" d="M34.1663 20.5C34.0829 20.55 33.9996 20.6 33.9163 20.65C30.9496 22.3833 27.6663 23.55 24.2663 24.1167C24.1329 25.7167 23.4329 27.55 19.7829 27.55C16.1329 27.55 15.4329 25.7333 15.2996 24.15C12.1163 23.65 8.98294 22.6 6.13294 21.0167C5.88294 20.8833 5.63294 20.75 5.39961 20.6C4.79961 20.2667 4.23294 19.9 3.68294 19.5333C3.64961 19.5167 3.61628 19.4833 3.59961 19.4667L4.61628 30.3167C4.96628 33.6333 6.33294 37.05 13.6663 37.05H26.3663C33.6996 37.05 35.0663 33.6333 35.4163 30.3L36.4663 19C36.4496 19.0333 36.4163 19.0667 36.3829 19.0833C35.6663 19.6 34.9329 20.0833 34.1663 20.5Z" fill="#543CDA"/>
</svg>
`, title:'Project', teaser:'MVP or phase with agreed deliverables, timeline, and price.'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.9993 34.1674C31.4807 33.8345 32.6057 33.2877 33.514 32.3885C35.8327 30.0929 35.8327 26.3982 35.8327 19.0091C35.8327 11.6197 35.8327 7.92508 33.514 5.62953C31.1952 3.33398 27.4632 3.33398 19.9993 3.33398C12.5354 3.33398 8.8035 3.33398 6.48475 5.62953C4.16602 7.92508 4.16602 11.6197 4.16602 19.0091C4.16602 26.3982 4.16602 30.0929 6.48475 32.3885C7.393 33.2877 8.51808 33.8345 9.99935 34.1674" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
<path d="M4.16602 14.166H35.8327" stroke="white" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M11.666 9.16602H11.681" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.334 9.16602H18.349" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8327 29.1673V25.0007C22.4993 25.0007 19.9993 23.334 19.9993 23.334C19.9993 23.334 17.4993 25.0007 14.166 25.0007V29.1673C14.166 35.0007 19.9993 36.6673 19.9993 36.6673C19.9993 36.6673 25.8327 35.0007 25.8327 29.1673Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Monthly care', teaser:'Ongoing updates, improvements, monitoring, and support.'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.8327 18.3333C25.8327 15.1117 23.221 12.5 19.9993 12.5C16.7777 12.5 14.166 15.1117 14.166 18.3333C14.166 21.555 16.7777 24.1667 19.9993 24.1667C23.221 24.1667 25.8327 21.555 25.8327 18.3333Z" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8043 18.9165C26.341 19.0792 26.9101 19.1667 27.4998 19.1667C30.7215 19.1667 33.3331 16.555 33.3331 13.3333C33.3331 10.1117 30.7215 7.5 27.4998 7.5C24.475 7.5 21.9878 9.80233 21.6953 12.7502" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3038 12.7502C18.0113 9.80233 15.5242 7.5 12.4993 7.5C9.27768 7.5 6.66602 10.1117 6.66602 13.3333C6.66602 16.555 9.27768 19.1667 12.4993 19.1667C13.089 19.1667 13.6583 19.0792 14.1948 18.9165" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.6667 27.4993C36.6667 22.897 32.5627 19.166 27.5 19.166" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.1673 32.4993C29.1673 27.897 25.0633 24.166 20.0007 24.166C14.938 24.166 10.834 27.897 10.834 32.4993" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5007 19.166C7.43803 19.166 3.33398 22.897 3.33398 27.4993" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Team extension', teaser:'Our specialists work alongside your team.'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0007 36.666L16.6673 26.666H3.33398L6.66732 36.666H20.0007ZM20.0007 36.666H26.6673" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.9993 21.666V20.8327C19.9993 17.69 19.9993 16.1186 19.023 15.1423C18.0467 14.166 16.4754 14.166 13.3327 14.166C10.19 14.166 8.61863 14.166 7.64233 15.1423C6.66602 16.1186 6.66602 17.69 6.66602 20.8327V21.666" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.6667 21.6673C31.6667 23.5083 30.1743 25.0007 28.3333 25.0007C26.4923 25.0007 25 23.5083 25 21.6673C25 19.8263 26.4923 18.334 28.3333 18.334C30.1743 18.334 31.6667 19.8263 31.6667 21.6673Z" stroke="white" stroke-width="2.5"/>
<path d="M16.6667 6.66732C16.6667 8.50827 15.1743 10.0007 13.3333 10.0007C11.4924 10.0007 10 8.50827 10 6.66732C10 4.82637 11.4924 3.33398 13.3333 3.33398C15.1743 3.33398 16.6667 4.82637 16.6667 6.66732Z" stroke="white" stroke-width="2.5"/>
<path d="M23.334 29.166H33.334C35.175 29.166 36.6673 30.6583 36.6673 32.4993V33.3327C36.6673 35.1737 35.175 36.666 33.334 36.666H31.6673" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
</svg>
`, title:'Support & SLAs', teaser:'Outages or failed payments/login - immediate action, fix or rollback, frequent updates.'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.666 23.334V16.6673C36.666 10.3819 36.666 7.23923 34.7133 5.2866C32.7608 3.33398 29.618 3.33398 23.3327 3.33398H19.9993C13.7139 3.33398 10.5713 3.33398 8.61863 5.2866C6.66602 7.23923 6.66602 10.3819 6.66602 16.6673V23.334C6.66602 29.6193 6.66602 32.7621 8.61863 34.7146C10.5713 36.6673 13.7139 36.6673 19.9993 36.6673H23.3327C29.618 36.6673 32.7608 36.6673 34.7133 34.7146C36.666 32.7621 36.666 29.6193 36.666 23.334Z" stroke="#543CDA" stroke-width="2.5"/>
<path d="M8.33398 10H3.33398M8.33398 20H3.33398M8.33398 30H3.33398" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.1667 11.666H22.5M25.8333 18.3327H22.5" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 36.6673V3.33398" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Change control', teaser:'Release calendar, approvals, release notes, and a safe rollback plan.'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.1595 3.33398H15.8262C14.4455 3.33398 13.3262 4.45328 13.3262 5.83398C13.3262 7.2147 14.4455 8.33398 15.8262 8.33398H24.1595C25.5402 8.33398 26.6595 7.2147 26.6595 5.83398C26.6595 4.45328 25.5402 3.33398 24.1595 3.33398Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3262 25.0007H19.0405M13.3262 18.334H26.6595" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.6602 5.83398C29.2492 5.91202 30.7935 6.20078 31.8623 7.2696C33.3268 8.73407 33.3268 11.0911 33.3268 15.805V26.6664C33.3268 31.3805 33.3268 33.7375 31.8623 35.202C30.3978 36.6664 28.0408 36.6664 23.3268 36.6664H16.6601C11.9461 36.6664 9.58909 36.6664 8.12462 35.202C6.66017 33.7375 6.66016 31.3805 6.66016 26.6665L6.66017 15.8051C6.66016 11.0911 6.66016 8.73405 8.12462 7.26958C9.19342 6.20077 10.7377 5.912 13.3267 5.83398" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Reporting', teaser:'Monthly health report (performance, stability, adoption).'},
];


const our_process = [
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.3491 6.56617C34.1658 12.0162 29.1824 19.1328 24.4324 23.7828C23.7491 19.4828 20.3158 16.1162 15.9824 15.5162C20.6491 10.7495 27.8158 5.6995 33.2824 3.4995C34.2491 3.13283 35.2158 3.41617 35.8158 4.01617C36.4491 4.6495 36.7491 5.5995 36.3491 6.56617Z" fill="white"/>
<path opacity="0.4" d="M24.4326 23.7842C23.5992 24.6009 22.7659 25.3509 21.9659 25.9842L18.6826 28.6176C18.2659 28.9176 17.8492 29.1676 17.3826 29.3676C17.3826 29.0509 17.3492 28.7342 17.3159 28.4009C17.1326 27.0176 16.4992 25.7009 15.3826 24.5842C14.2326 23.4509 12.8659 22.8009 11.4492 22.6176C11.1159 22.5842 10.7659 22.5676 10.4492 22.5842C10.6326 22.0676 10.9159 21.5842 11.2659 21.1842L13.8659 17.9009C14.4826 17.1176 15.1992 16.3176 15.9826 15.5176C20.3159 16.1176 23.7492 19.4842 24.4326 23.7842Z" fill="white"/>
<path d="M17.3836 29.366C17.3836 31.1994 16.6836 32.9494 15.3503 34.266C14.3336 35.2994 12.9669 35.9994 11.3003 36.1994L7.21693 36.6494C4.98359 36.8994 3.06693 34.9827 3.31693 32.7327L3.76693 28.6327C4.16693 24.9827 7.21693 22.6494 10.4503 22.5827C10.7669 22.566 11.1169 22.5827 11.4503 22.616C12.8669 22.7994 14.2336 23.4494 15.3836 24.5827C16.5003 25.6994 17.1336 27.016 17.3169 28.3994C17.3503 28.7327 17.3836 29.0494 17.3836 29.366Z" fill="white"/>
</svg>
`, title:'Discover', teaser:'Agree on goals, scope, timeline, budget, risks, and success measures. Prioritise what goes first. Share a clear plan and estimate.'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M36.6673 13.334V26.984C36.6673 33.0507 33.0507 36.6673 26.984 36.6673H13.0173C6.95065 36.6673 3.33398 33.0507 3.33398 26.984V13.3507L36.6673 13.334Z" fill="white"/>
<path d="M15.0009 29.5834C14.8176 29.5834 14.6176 29.5334 14.4509 29.45C13.1676 28.8 12.0676 27.8334 11.2676 26.6334C10.6009 25.6334 10.6009 24.35 11.2676 23.35C12.0676 22.15 13.1676 21.1834 14.4509 20.55C15.0676 20.2334 15.8176 20.5 16.1342 21.1167C16.4509 21.7334 16.2009 22.4834 15.5676 22.8C14.6676 23.25 13.9009 23.9334 13.3509 24.7667C13.2509 24.9167 13.2509 25.1167 13.3509 25.2834C13.9009 26.1167 14.6676 26.8 15.5676 27.25C16.1842 27.5667 16.4342 28.3167 16.1342 28.9334C15.9009 29.3334 15.4509 29.5834 15.0009 29.5834Z" fill="white"/>
<path d="M25.3494 29.584C24.8827 29.584 24.4494 29.334 24.2327 28.9007C23.9161 28.284 24.1661 27.534 24.7994 27.2174C25.6994 26.7673 26.4661 26.084 27.0161 25.2507C27.1161 25.1007 27.1161 24.9007 27.0161 24.734C26.4661 23.9007 25.6994 23.2174 24.7994 22.7673C24.1827 22.4507 23.9327 21.7007 24.2327 21.084C24.5494 20.4673 25.2994 20.2174 25.9161 20.5174C27.1994 21.1674 28.2994 22.134 29.0994 23.334C29.7661 24.334 29.7661 25.6174 29.0994 26.6174C28.2994 27.8174 27.1994 28.784 25.9161 29.4173C25.7161 29.534 25.5327 29.584 25.3494 29.584Z" fill="white"/>
<path d="M36.6673 13.0173V13.334L3.33398 13.3507V13.0173C3.33398 6.95065 6.95065 3.33398 13.0173 3.33398H26.984C33.0507 3.33398 36.6673 6.95065 36.6673 13.0173Z" fill="white"/>
</svg>
`, title:'Design & Plan', teaser:'Turn ideas into flows and screens; clickable prototype for key tasks. Technical plan: data model, API outline, release plan.'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.1169 11.583C35.0503 7.96634 32.0336 4.94968 28.4169 3.88301C25.6669 3.08301 23.7669 3.14968 22.4503 4.13301C20.8669 5.31634 20.6836 7.44968 20.6836 8.96634V13.1163C20.6836 17.2163 22.5503 19.2997 26.2169 19.2997H31.0003C32.5003 19.2997 34.6503 19.1163 35.8336 17.533C36.8503 16.233 36.9336 14.333 36.1169 11.583Z" fill="white"/>
<path opacity="0.4" d="M31.517 22.2659C31.0837 21.7659 30.4503 21.4826 29.8003 21.4826H23.8337C20.9003 21.4826 18.517 19.0993 18.517 16.1659V10.1993C18.517 9.54927 18.2337 8.91594 17.7337 8.48261C17.2503 8.04927 16.5837 7.84927 15.9503 7.93261C12.0337 8.43261 8.43365 10.5826 6.08365 13.8159C3.71699 17.0659 2.85032 21.0326 3.60032 24.9993C4.68365 30.7326 9.26699 35.3159 15.017 36.3993C15.9337 36.5826 16.8503 36.6659 17.767 36.6659C20.7837 36.6659 23.7003 35.7326 26.1837 33.9159C29.417 31.5659 31.567 27.9659 32.067 24.0493C32.1503 23.3993 31.9503 22.7493 31.517 22.2659Z" fill="white"/>
</svg>
`, title:'Build & Test', teaser:'Short cycles you can review. Weekly demos and notes. Testing on real Androids/iPhones used locally. Security and accessibility checks.'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.334 23.75C35.4051 23.75 37.084 22.0711 37.084 20C37.084 17.9289 35.4051 16.25 33.334 16.25C31.2629 16.25 29.584 17.9289 29.584 20C29.584 22.0711 31.2629 23.75 33.334 23.75Z" fill="white"/>
<path d="M33.334 10.416C35.4051 10.416 37.084 8.73708 37.084 6.66602C37.084 4.59495 35.4051 2.91602 33.334 2.91602C31.2629 2.91602 29.584 4.59495 29.584 6.66602C29.584 8.73708 31.2629 10.416 33.334 10.416Z" fill="white"/>
<path d="M33.334 37.084C35.4051 37.084 37.084 35.4051 37.084 33.334C37.084 31.2629 35.4051 29.584 33.334 29.584C31.2629 29.584 29.584 31.2629 29.584 33.334C29.584 35.4051 31.2629 37.084 33.334 37.084Z" fill="white"/>
<path d="M6.66602 23.75C8.73708 23.75 10.416 22.0711 10.416 20C10.416 17.9289 8.73708 16.25 6.66602 16.25C4.59495 16.25 2.91602 17.9289 2.91602 20C2.91602 22.0711 4.59495 23.75 6.66602 23.75Z" fill="white"/>
<path opacity="0.4" d="M31.6673 21.2493C32.3507 21.2493 32.9173 20.6827 32.9173 19.9993C32.9173 19.316 32.3507 18.7493 31.6673 18.7493H19.584V11.666C19.584 9.03268 20.7007 7.91602 23.334 7.91602H31.6673C32.3507 7.91602 32.9173 7.34935 32.9173 6.66602C32.9173 5.98268 32.3507 5.41602 31.6673 5.41602H23.334C19.3007 5.41602 17.084 7.63268 17.084 11.666V18.7493H8.33398C7.65065 18.7493 7.08398 19.316 7.08398 19.9993C7.08398 20.6827 7.65065 21.2493 8.33398 21.2493H17.084V28.3327C17.084 32.366 19.3007 34.5827 23.334 34.5827H31.6673C32.3507 34.5827 32.9173 34.016 32.9173 33.3327C32.9173 32.6493 32.3507 32.0827 31.6673 32.0827H23.334C20.7007 32.0827 19.584 30.966 19.584 28.3327V21.2493H31.6673Z" fill="white"/>
</svg>
`, title:'Launch & Improve', teaser:'Store assets and approvals handled. Staged rollout with fallback. Baseline metrics + regular updates and a monthly review.'},
];

const blogs = [
{
title: "STABILITY",
teaser: "Crash-free sessions ≥ 99.5%, low ANR/freeze, store reviews monitored.",
image: "/success1.webp",
},
{
title: "PERFORMANCE",
teaser: "P95 cold start ≤ 2.0s, smooth scrolling, battery-friendly background tasks.",
image: "/success2.webp",
},
{
title: "ADOPTION",
teaser: "Onboarding completion up; D1/D7/D30 retention tracked; feature usage reported.",
image: "/success3.webp",
},
{
title: "CONVERSION",
teaser: "Orders/bookings/payments defined; funnels improved; push opt-in & re-engagement measured.",
image: "/success4.webp",
},
];

const what_we_build = [
{
title: "Consumer & Community",
teaser: "Media/streaming, social/chat, loyalty/referrals, marketplaces & profiles.",
image: "/we_build1.webp",
},
{
title: "Work & Operations",
teaser: "Field ops, logistics, inventory, approvals; barcode/QR, GPS, photo proof and logs.",
image: "/we_build2.webp",
},
{
title: "Money & Commerce",
teaser: "Wallets, KYC, cards/subscriptions; catalog, cart, checkout, POS; dispatch & tracking.",
image: "/we_build3.webp",
},
{
title: "Devices & Special Screens",
teaser: "Tablet-first layouts, wearables, in-vehicle, kiosks/large touch screens.",
image: "/we_build4.webp",
},
];


export default function MobileHome() {
const { isDark } = useDarkMode();
return (
<div>
  

<div className="relative w-full py-16">
{/* Gradient line */}
<div
  className="absolute left-1/2 top-0 bottom-0 w-5 -translate-x-1/2
             sm:left-0 sm:right-0 sm:top-1/2 sm:h-5 sm:w-auto sm:-translate-y-1/2 sm:translate-x-0
             bg-gradient-to-b sm:bg-gradient-to-r
             from-[#543CDA] to-[#000000]"
/>

{/* Transparent overlay container */}
<div className="relative z-3 px-[10%] grid grid-cols-1 sm:grid-cols-3 gap-10">
{/* Child 1 */}
<div className={`${isDark ? "darkModeBg" : "bg-white"} rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='semibold' title='Crash-free: ≥ 99.5%'  /></div>
</div>

{/* Child 2 */}
<div className={`${isDark ? "darkModeBg" : "bg-white"} rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='semibold' title='P95 cold start: ≤ 2.0s'  /></div>
</div>

{/* Child 3 */}
<div className={`${isDark ? "darkModeBg" : "bg-white"} rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='semibold' title='Accessibility: iOS & Android '  /></div>
</div>
</div>
</div>




<div className="my-16 content-padding">
<div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 h-full">
<div className="flex flex-col justify-center">
<DynamicContent type="h2" title='How We Measure Success' />
<DynamicContent type="p" title='We set baselines and targets, then report measurable progress after every release.' />
</div>
<div className="flex items-center ">
<div>
<DynamicContent css='text-[#543CDA]' type="p"> <>How you see it: shared dashboards, weekly notes, and release metrics.
</>
</DynamicContent>
</div>
</div>
</div>
</div>




<div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-10 content-padding">
  {blogs.map((blog, index) => (
    <div key={index} className={`${isDark ? "" : "border border-gray-200"}  rounded-lg overflow-hidden`}>
      
      {/* Fixed-height container */}
      <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
        {/* Floating tag */}
        <span className="absolute top-4 left-4 z-3 bg-[#EAEAEA4D] text-white text-sm font-medium px-4 py-2 rounded-full border border-gray-400">
          {blog.title}
        </span>

        {/* Image fills container */}
        <DynamicContent
          type="img"
          src={blog.image}
          css="w-full h-full object-cover brightness-50"
          teaser={blog.title}
        />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-4 bg-gradient-to-t from-black/80 to-transparent p-4">
          <DynamicContent
            type="p"
            title={blog.teaser}
            css="text-gray-200 font-semibold leading-snug"
          />
        </div>
      </div>

    </div>
  ))}
</div>





<div className="my-20">
<div className="my-20 content-padding">
<DynamicContent type="h2" title='What we build' />
<DynamicContent type="p" title='User-focused, operations-ready products that grow revenue and run reliably on everyday devices.' />


<div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-10">
  {what_we_build.map((blog, index) => (
    <div key={index} className="overflow-hidden">      
      {/* Fixed-height container */}
      <div className="relative w-full h-[180px] rounded-2xl overflow-hidden">
        {/* Image fills container */}
        <DynamicContent
          type="img"
          src={blog.image}
          css="w-full h-full object-cover"
          teaser={blog.title}
        />
      </div>

        {/* Title overlay */}
        <div className="my-4">
          <DynamicContent
            type="p4"
            title={blog.title}
            css="font-semibold leading-snug"
          />
        </div>
        {/* Title overlay */}
        <div className="">
          <DynamicContent
            type="p"
            title={blog.teaser}
            css="silvergrayText"
          />
        </div>

    </div>
  ))}
</div>

<div className='my-20'>
<DynamicContent type="p"> <>
Need web back-office or custom APIs? {" "} 
 <DynamicContent type="link" title='See Custom Software Solutions.' url='/custom-software-solutions' css="text-blue-700 font-semibold"  /> 
</>
</DynamicContent>
</div>
</div>

<div className="content-padding">
<DynamicContent type="h2" title='How we build' />
<DynamicContent type="p" title='Integrated design, engineering, and data deliver fast, secure apps optimized for everyday use.'  />
</div>

<div className={`grid grid-cols-1 rounded-3xl sm:grid-cols-2 md:grid-cols-2 content-padding gap-4 items-stretch mb-10 py-6 px-3 ${isDark ? "" : ""}`}>
{how_we_build.map((src, i) => (
<div key={`howwebuikd-${i}`} className={`mb-5 rounded-3xl ${isDark ? "darkModeBg" : "bg-white"}`}>
<div className="p-5 h-full flex flex-col">
<div className="w-[58px] space-y-2 shrink-0 mb-4" dangerouslySetInnerHTML={{ __html: src.src }} />
<div className="space-y-2 mb-3 font-bold"><DynamicContent css='font-semibold' type="p3" title={src.title || ``}  /></div>
<div className="space-y-2"><DynamicContent type="p" title={src.teaser || ``}  /></div>
</div>
</div>
))}
</div>
</div>



<div className='p-[2%] footerBg rounded-3xl text-white'>
<div className="my-8 px-[1%] lg:px-[5%]">
<div className="mb-8"><DynamicContent type="h2" title='Our Process' /></div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
<div className="">
<DynamicContent type="p4" title='A disciplined path from goal alignment to launch, followed by steady, data-led improvement.' />
</div>
<div className="border-t sm:p-6 border-t-gray-700 hidden sm:block"></div>
</div>



<div className={`grid grid-cols-1 rounded-3xl sm:grid-cols-4 gap-8 items-stretch my-16 ${isDark ? "" : ""}`}>
{our_process.map((src, i) => (
<div key={`ourprocess-${i}`} className={`mb-5 py-6 px-3 bg-[#464067] rounded-3xl ${isDark ? "" : ""}`}>
<div className="p-5 h-full flex flex-col">
<div className="w-[58px] space-y-2 shrink-0 mb-4" dangerouslySetInnerHTML={{ __html: src.src }} />

<div className="space-y-2 mt-5 mb-3 font-bold"><DynamicContent css='font-semibold' type="p3" title={src.title || ``}  /></div>
<div className="space-y-2"><DynamicContent type="p" title={src.teaser || ``}  /></div>
</div>
</div>
))}
</div>
</div>
</div>

<div className='card-surface rounded-3xl my-20 py-15 content-padding'>
<div className="text-center my-8">
<DynamicContent type="h2" title='Operations & Reliability' />
<DynamicContent type="p4" title='Safe releases, continuous monitoring, and flexible hosting with no vendor lock-in.'  />
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-10 p-2 my-15">
<div className={`${isDark ? "darkModeBg" : "bg-white"} p-8 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M28.38 0H11.62C4.34 0 0 4.34 0 11.62V28.38C0 35.66 4.34 40 11.62 40H28.38C35.66 40 40 35.66 40 28.38V11.62C40 4.34 35.66 0 28.38 0Z" fill="#543CDA"/>
<path d="M32.6191 13.7402C32.6191 14.5602 31.9591 15.2402 31.1191 15.2402H20.6191C19.7991 15.2402 19.1191 14.5602 19.1191 13.7402C19.1191 12.9202 19.7991 12.2402 20.6191 12.2402H31.1191C31.9591 12.2402 32.6191 12.9202 32.6191 13.7402Z" fill="#543CDA"/>
<path d="M15.9391 11.7991L11.4391 16.2991C11.1391 16.5991 10.7591 16.7391 10.3791 16.7391C9.99914 16.7391 9.59914 16.5991 9.31914 16.2991L7.81914 14.7991C7.21914 14.2191 7.21914 13.2591 7.81914 12.6791C8.39914 12.0991 9.33914 12.0991 9.93914 12.6791L10.3791 13.1191L13.8191 9.67914C14.3991 9.09914 15.3391 9.09914 15.9391 9.67914C16.5191 10.2591 16.5191 11.2191 15.9391 11.7991Z" fill="#543CDA"/>
<path d="M32.6191 27.7402C32.6191 28.5602 31.9591 29.2402 31.1191 29.2402H20.6191C19.7991 29.2402 19.1191 28.5602 19.1191 27.7402C19.1191 26.9202 19.7991 26.2402 20.6191 26.2402H31.1191C31.9591 26.2402 32.6191 26.9202 32.6191 27.7402Z" fill="#543CDA"/>
<path d="M15.9391 25.7991L11.4391 30.2991C11.1391 30.5991 10.7591 30.7391 10.3791 30.7391C9.99914 30.7391 9.59914 30.5991 9.31914 30.2991L7.81914 28.7991C7.21914 28.2191 7.21914 27.2591 7.81914 26.6791C8.39914 26.0991 9.33914 26.0991 9.93914 26.6791L10.3791 27.1191L13.8191 23.6791C14.3991 23.0991 15.3391 23.0991 15.9391 23.6791C16.5191 24.2591 16.5191 25.2191 15.9391 25.7991Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p3" title='Releases you can trust' css='font-semibold my-4' /></div>
<div><DynamicContent type="p" title='TestFlight and Play Console for internal/closed testing and gradual rollout. Quick rollback if needed. Every change ships with a build you can try—nothing goes live without your approval.' css='my-2' /></div>
</div>
<div className="bg-[#543CDA] p-8 rounded-3xl">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M36.6173 10.684V21.5173H3.33398V10.684C3.33398 6.63398 6.63398 3.33398 10.684 3.33398H29.2673C33.3173 3.33398 36.6173 6.63398 36.6173 10.684Z" fill="white"/>
<path d="M3.33398 21.5332V21.8665C3.33398 25.9332 6.63398 29.2165 10.684 29.2165H17.084C18.0007 29.2165 18.7507 29.9665 18.7507 30.8832V32.4999C18.7507 33.4165 18.0007 34.1665 17.084 34.1665H13.0507C12.3673 34.1665 11.8007 34.7332 11.8007 35.4165C11.8007 36.0999 12.3507 36.6665 13.0507 36.6665H26.9673C27.6507 36.6665 28.2173 36.0999 28.2173 35.4165C28.2173 34.7332 27.6507 34.1665 26.9673 34.1665H22.934C22.0173 34.1665 21.2673 33.4165 21.2673 32.4999V30.8832C21.2673 29.9665 22.0173 29.2165 22.934 29.2165H29.284C33.3507 29.2165 36.634 25.9165 36.634 21.8665V21.5332H3.33398Z" fill="white"/>
</svg>
</div>
<div><DynamicContent type="p3" title='Monitoring that matters' css='font-semibold my-4 text-gray-100' /></div>
<div className="mb-20"><DynamicContent type="p" title='Uptime, errors, crashes, performance. Alerts if something breaks. Short weekly health summary.' css='my-2 text-gray-100' /></div>
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
<div><DynamicContent type="p3" title='Where it runs' css='font-semibold my-4' /></div>
<div><DynamicContent type="p" title='Use your cloud, or choose Nexoris Cloud VPS (NVMe) with managed security and backups - optional, no lock-in.' css='my-2' /></div>
</div>
</div>
</div>


<div className="content-padding">
<DynamicContent type="h2" title='Quality, Accessibility & Compliance' />
<DynamicContent type="p" title='Accessible by design, privacy-respectful, and audit-ready, NDPR/GDPR-aligned.'  />
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-10 p-2 my-15 content-padding">
<div className={`${isDark ? "darkModeBg" : "bg-white"} p-8 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M28.38 0H11.62C4.34 0 0 4.34 0 11.62V28.38C0 35.66 4.34 40 11.62 40H28.38C35.66 40 40 35.66 40 28.38V11.62C40 4.34 35.66 0 28.38 0Z" fill="#543CDA"/>
<path d="M32.6191 13.7402C32.6191 14.5602 31.9591 15.2402 31.1191 15.2402H20.6191C19.7991 15.2402 19.1191 14.5602 19.1191 13.7402C19.1191 12.9202 19.7991 12.2402 20.6191 12.2402H31.1191C31.9591 12.2402 32.6191 12.9202 32.6191 13.7402Z" fill="#543CDA"/>
<path d="M15.9391 11.7991L11.4391 16.2991C11.1391 16.5991 10.7591 16.7391 10.3791 16.7391C9.99914 16.7391 9.59914 16.5991 9.31914 16.2991L7.81914 14.7991C7.21914 14.2191 7.21914 13.2591 7.81914 12.6791C8.39914 12.0991 9.33914 12.0991 9.93914 12.6791L10.3791 13.1191L13.8191 9.67914C14.3991 9.09914 15.3391 9.09914 15.9391 9.67914C16.5191 10.2591 16.5191 11.2191 15.9391 11.7991Z" fill="#543CDA"/>
<path d="M32.6191 27.7402C32.6191 28.5602 31.9591 29.2402 31.1191 29.2402H20.6191C19.7991 29.2402 19.1191 28.5602 19.1191 27.7402C19.1191 26.9202 19.7991 26.2402 20.6191 26.2402H31.1191C31.9591 26.2402 32.6191 26.9202 32.6191 27.7402Z" fill="#543CDA"/>
<path d="M15.9391 25.7991L11.4391 30.2991C11.1391 30.5991 10.7591 30.7391 10.3791 30.7391C9.99914 30.7391 9.59914 30.5991 9.31914 30.2991L7.81914 28.7991C7.21914 28.2191 7.21914 27.2591 7.81914 26.6791C8.39914 26.0991 9.33914 26.0991 9.93914 26.6791L10.3791 27.1191L13.8191 23.6791C14.3991 23.0991 15.3391 23.0991 15.9391 23.6791C16.5191 24.2591 16.5191 25.2191 15.9391 25.7991Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p3" title='Accessibility' css='font-semibold my-4' /></div>
<div><DynamicContent type="p" title='Readable text and contrast, clear labels/hints, comfortable tap targets; compatible with VoiceOver/TalkBack.' css='my-2' /></div>
<div className='my-16'><DynamicContent type="img" src='/quality1.webp' css="h-auto w-auto" teaser={`Encryption in transit and at rest`} /></div>
</div>
<div className="bg-[#543CDA] p-8 rounded-3xl">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M28.38 0H11.62C4.34 0 0 4.34 0 11.62V28.38C0 35.66 4.34 40 11.62 40H28.38C35.66 40 40 35.66 40 28.38V11.62C40 4.34 35.66 0 28.38 0Z" fill="white"/>
<path d="M32.6191 13.7402C32.6191 14.5602 31.9591 15.2402 31.1191 15.2402H20.6191C19.7991 15.2402 19.1191 14.5602 19.1191 13.7402C19.1191 12.9202 19.7991 12.2402 20.6191 12.2402H31.1191C31.9591 12.2402 32.6191 12.9202 32.6191 13.7402Z" fill="white"/>
<path d="M15.9391 11.7991L11.4391 16.2991C11.1391 16.5991 10.7591 16.7391 10.3791 16.7391C9.99914 16.7391 9.59914 16.5991 9.31914 16.2991L7.81914 14.7991C7.21914 14.2191 7.21914 13.2591 7.81914 12.6791C8.39914 12.0991 9.33914 12.0991 9.93914 12.6791L10.3791 13.1191L13.8191 9.67914C14.3991 9.09914 15.3391 9.09914 15.9391 9.67914C16.5191 10.2591 16.5191 11.2191 15.9391 11.7991Z" fill="white"/>
<path d="M32.6191 27.7402C32.6191 28.5602 31.9591 29.2402 31.1191 29.2402H20.6191C19.7991 29.2402 19.1191 28.5602 19.1191 27.7402C19.1191 26.9202 19.7991 26.2402 20.6191 26.2402H31.1191C31.9591 26.2402 32.6191 26.9202 32.6191 27.7402Z" fill="white"/>
<path d="M15.9391 25.7991L11.4391 30.2991C11.1391 30.5991 10.7591 30.7391 10.3791 30.7391C9.99914 30.7391 9.59914 30.5991 9.31914 30.2991L7.81914 28.7991C7.21914 28.2191 7.21914 27.2591 7.81914 26.6791C8.39914 26.0991 9.33914 26.0991 9.93914 26.6791L10.3791 27.1191L13.8191 23.6791C14.3991 23.0991 15.3391 23.0991 15.9391 23.6791C16.5191 24.2591 16.5191 25.2191 15.9391 25.7991Z" fill="white"/>
</svg>
</div>
<div><DynamicContent type="p3" title='Privacy' css='font-semibold my-4 text-gray-100' /></div>
<div className="mb-20"><DynamicContent type="p" title='Collect only what’s needed. Clear consent screens. Options for data retention and deletion. NDPR/GDPR aligned where required.' css='my-2 text-gray-100' /></div>
<div className='my-16'><DynamicContent type="img" src='/quality2.webp' css="h-auto w-auto" teaser={`Encryption in transit and at rest`} /></div>
</div>
<div className={`${isDark ? "darkModeBg" : "bg-white"} p-8 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M28.38 0H11.62C4.34 0 0 4.34 0 11.62V28.38C0 35.66 4.34 40 11.62 40H28.38C35.66 40 40 35.66 40 28.38V11.62C40 4.34 35.66 0 28.38 0Z" fill="#543CDA"/>
<path d="M32.6191 13.7402C32.6191 14.5602 31.9591 15.2402 31.1191 15.2402H20.6191C19.7991 15.2402 19.1191 14.5602 19.1191 13.7402C19.1191 12.9202 19.7991 12.2402 20.6191 12.2402H31.1191C31.9591 12.2402 32.6191 12.9202 32.6191 13.7402Z" fill="#543CDA"/>
<path d="M15.9391 11.7991L11.4391 16.2991C11.1391 16.5991 10.7591 16.7391 10.3791 16.7391C9.99914 16.7391 9.59914 16.5991 9.31914 16.2991L7.81914 14.7991C7.21914 14.2191 7.21914 13.2591 7.81914 12.6791C8.39914 12.0991 9.33914 12.0991 9.93914 12.6791L10.3791 13.1191L13.8191 9.67914C14.3991 9.09914 15.3391 9.09914 15.9391 9.67914C16.5191 10.2591 16.5191 11.2191 15.9391 11.7991Z" fill="#543CDA"/>
<path d="M32.6191 27.7402C32.6191 28.5602 31.9591 29.2402 31.1191 29.2402H20.6191C19.7991 29.2402 19.1191 28.5602 19.1191 27.7402C19.1191 26.9202 19.7991 26.2402 20.6191 26.2402H31.1191C31.9591 26.2402 32.6191 26.9202 32.6191 27.7402Z" fill="#543CDA"/>
<path d="M15.9391 25.7991L11.4391 30.2991C11.1391 30.5991 10.7591 30.7391 10.3791 30.7391C9.99914 30.7391 9.59914 30.5991 9.31914 30.2991L7.81914 28.7991C7.21914 28.2191 7.21914 27.2591 7.81914 26.6791C8.39914 26.0991 9.33914 26.0991 9.93914 26.6791L10.3791 27.1191L13.8191 23.6791C14.3991 23.0991 15.3391 23.0991 15.9391 23.6791C16.5191 24.2591 16.5191 25.2191 15.9391 25.7991Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p3" title='Security' css='font-semibold my-4' /></div>
<div><DynamicContent type="p" title='Encryption in transit and at rest. Role-based access with logs. We support independent security reviews and penetration tests.' css='my-2' /></div>
<div className='my-16'><DynamicContent type="img" src='/quality3.webp' css="h-auto w-auto" teaser={`Encryption in transit and at rest`} /></div>
</div>
</div>

<div className="text-center my-24 mb-12 sub-title">
<DynamicContent type="h2" title='Handover & Ownership' />
<DynamicContent type="p" title='You own code, accounts, and analytics; we provide a complete, well-documented handover and training.'  />
</div>



<div className="grid grid-cols-1 md:grid-cols-2 gap-6 content-padding">
{hand_over.map((item, i) => {
const isLast = i === hand_over.length - 1;
const isOdd = hand_over.length % 2 !== 0;

return (
<div
key={i}
className={`rounded-xl ${
isLast && isOdd ? "md:col-span-2" : ""
}`}
>
<div className={`${isDark ? "darkModeBg" : "border border-gray-200 "} flex w-full items-stretch gap-6 rounded-2xl p-5`}>
<div className="flex-1 flex-col w-full">
<div className="w-[58px] space-y-2 shrink-0 mb-8" dangerouslySetInnerHTML={{ __html: item.src }} />
<DynamicContent
type="p3"
title={item.title}
css="font-bold mb-2"
/>
<DynamicContent
type="p"
title={item.teaser}
/>
</div>
</div>
</div>
);
})}
</div>

<div className='my-10 text-[#543CDA]'>
<DynamicContent css='text-center content-padding' type="p" title='You own the repos, cloud accounts, and analytics - always.'  />
</div>

<div className="text-center mt-20 sub-title">
<DynamicContent type="h2" title='Engagement & Service Levels' />
<DynamicContent type="p" title='Engagements that fit your team, backed by clear priorities, response times, and updates.'  />
</div>


<div
  className={`grid grid-cols-1 rounded-3xl md:grid-cols-3 content-padding gap-6 items-stretch my-10`}
>
  {engagement.map((src, i) => {
    const isEven = i % 2 === 0;

    return (
      <div
        key={`engagement-${i}`}
        className={`p-[1%] sm:p-[2%] md:p-[3%] rounded-3xl
          ${
            !isEven
              ? "bg-[#110C2C] text-white"
              : isDark
              ? "darkModeBg "
              : "bg-white border-gray-400"
          }
        `}
      >
        <div className="p-5 h-full flex flex-col">
          <div className="w-[58px] space-y-2 shrink-0 mb-8" dangerouslySetInnerHTML={{ __html: src.src }} />

          <div className="space-y-2 mb-3 font-bold">
            <DynamicContent
              css="font-semibold"
              type="p3"
              title={src.title || ""}
            />
          </div>

          <div className="space-y-2">
            <DynamicContent
              type="p"
              title={src.teaser || ""}
            />
          </div>
        </div>
      </div>
    );
  })}
</div>


<div className="text-center mt-[8%] sub-title">
<DynamicContent type="h2" title='Scope & Transparent Pricing' />
<DynamicContent type="p" title='We confirm scope, timeline, and milestone-based costs upfront with clear change control and no surprises.'  css='mb-15' />
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-10 content-padding">
  {scope.map((src, i) => (
    <div key={`scope-${i}`} className="flex h-full">
      <div className="w-full flex flex-col h-full">

        {/* Image container */}
        <div className="h-[180px] overflow-hidden rounded-t-3xl">
          <DynamicContent
            type="img"
            src={src.src}
            teaser={src.title}
            css="w-full h-full object-cover rounded-t-3xl"
          />
        </div>

        {/* Content */}
        <div className={`${isDark ? "darkModeBg " : "bg-white border-t border-t-purple-200 border lightBorder "} -mt-6 relative z-10 flex-1 rounded-t-3xl  p-6 flex flex-col`}>
          <DynamicContent
            type="p3"
            title={src.title}
            css="mb-4 text-lg font-semibold"
          />
          <DynamicContent
            type="p"
            title={src.teaser}
          />
        </div>

      </div>
    </div>
  ))}
</div>

<div className="sub-title text-center my-20">
<DynamicContent type="h2" title='Got questions? We’ve got answers' />
<DynamicContent type="p" title='Clear answers on platforms, timelines, support, and how success is measured.' />
</div>

<div>
<Accordion items={faqItems} defaultOpenIndex={0} />
</div>
</div>
);
}
