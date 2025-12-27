"use client";

import {Accordion} from "@/components/cards"; // adjust path
import { FC } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  pageId: string;
};

const faqData: Record<string, FAQItem[]> = {
    

home: [
  {
    question: "Do you only build websites?",
    answer:
      "No. We also design apps, manage hosting, create content, and handle long-term support",
  },
  {
    question: "Can you work with my existing systems?",
    answer:
      "Yes. We integrate with existing platforms and migrate where needed.",
  },
  {
    question: "What size of projects do you take on?",
    answer:
      "From single product sites to multi-service platforms as long as the scope is clear.",
  },
   {
    question: "Do you provide hosting?",
    answer:
      "Yes. Our hosting arm, Nexoris Cloud, runs on fast NVMe servers with backups and security included.",
  },
   {
    question: "How do we start?",
    answer:
      "Share your goals, and we’ll respond with scope, timelines, and next steps.",
  },
],



seo: [
  {
    question: `How soon will we see results?
`,
    answer:
      `Quick wins in 30–60 days (technical fixes, on-page, first content). Compounding gains over 3–12 months. Exact pace depends on your baseline and market.
`,
  },
  {
    question: `Do you implement changes or just advise?
`,
    answer:
     `Either. We can implement end-to-end or guide your team with clear steps and acceptance criteria.
`,
  },
  {
    question: `What’s your link approach?
`,
    answer:
     `We earn relevant coverage via digital PR, useful assets, and reclaiming brand mentions. No paid links. No PBNs. You’ll see the outreach log.
`,
  },
   {
    question: `How do you choose topics and keywords?
`,
    answer:
      `We score by intent fit, business value, difficulty, and time to impact. Winners form a topical map with an internal link plan focused on pages that drive leads.
`,
  },
   {
    question: `Can you support multiple locations or countries?
`,
    answer:
      `Yes. Local: location hubs, GBP, NAP, reviews. International: clean URL structure and hreflang so the right page ranks in each market.
`,
  },
     {
    question: `How will we work together and how fast do you respond?

`,
    answer:
      `Models: Fixed-scope project or monthly support. Response times (Mon–Fri, 09:00–18:00 WAT): Critical ≤2 hrs; Major next business day; Standard ≤2 business days. Your accounts (GSC/GA4/Looker, CMS, hosting) stay under your control.

`,
  },
     {
    question: `What will it cost and how do you prove expertise?

`,
    answer:
      `Fixed-fee projects or monthly plans after a short baseline review. We show named authors, expert review, citations, “Reviewed on” dates, and a public editorial policy with author/expert bios.
`,
  },
],
  about: [
    { question: "What is this about?", answer: "This is the About page FAQ." },
    { question: "Who can access?", answer: "Anyone can access this page." },
  ],
  services: [
    { question: "What services do you offer?", answer: "We offer X, Y, Z." },
    { question: "How to request service?", answer: "Contact us via form." },
  ],
  contact: [
    { question: "How to contact?", answer: "Send an email to hello@example.com" },
    { question: "Response time?", answer: "Usually within 24 hours." },
  ],
};

const FAQ: FC<FAQProps> = ({ pageId }) => {
  const faqItems = faqData[pageId] || [
    { question: "No FAQ available", answer: "There are no FAQs for this page." },
  ];

  return <Accordion items={faqItems} defaultOpenIndex={0} />;
};

export default FAQ;
