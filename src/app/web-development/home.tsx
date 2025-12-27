'use client'

import { useRef } from "react";
import DynamicContent, {Counter, DynamicIcon, useDarkMode, Accordion} from "@/components/cards"
import './home.css';

      const features = [
    "95%+ Core Web Vitals pass rate",
    "Accessibility-first builds (WCAG 2.2 AA)",
    "Secure by design (OWASP Top 10 coverage)",
    "SEO foundations included (clean IA + schema)",
    "Production SLAs available (24–72h)",
  ];

const faqItems = [
  {
    question: "How long does a typical build take?",
    answer:`Most small–mid projects run 4–10 weeks, depending on scope, content readiness, and integrations.`,
  },
  {
    question: `Do you provide design, or work with our designs?
`,
    answer:`Both. We can lead design or implement from your system. See UI/UX Design & Consulting.
`,
  },
  {
    question: `Do you write content?
`,
    answer:`Yes, when included in scope or we partner with your team. For strategy at scale, see SEO & Content Marketing.
`,
  },
   {
    question: `Which CMS or commerce platform do you recommend?
`,
    answer:`We’re platform-agnostic and recommend based on goals, team skills, and total cost of ownership.
`,
  },
   {
    question: `Can you migrate our current site?
`,
    answer:`Yes. We handle URL inventories, redirect maps, structured content mapping, and pre/post-launch checks.
`,
  },
     {
    question: `How do you handle performance and security?

`,
    answer:`Core Web Vitals budgets, caching and rendering strategy, secure defaults, dependency checks, and monitoring. See Performance Optimization for deeper work.

`,
  },
     {
    question: `How is success measured?
`,
    answer:`Core Web Vitals, conversion events, uptime, error rates, SEO KPIs, and agreed business metrics.

`,
  },
];

const cards = [
{
title: "Marketing websites",
image: "/marketing-website.webp",
teaser: "Product/service, multi-location, multilingual",
},
{
title: "E-commerce",
image: "/ecommerce.webp",
teaser: `Hosted, open-source, and headless setups`,
},
{
title: "Editorial/CMS",
image: "/editorial.webp",
teaser: `Headless or traditional with role-based workflows
`,
},
{
title: "Landing pages & microsites",
image: "/landing-pages.webp",
teaser: `Campaign pages built for speed and conversion
`,
},
{
title: "Integrations",
image: "/integration.webp",
teaser: `
Payments, analytics, CRM/marketing, authentication
`,
},
];

const compliance = [
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#2ECC71"/>
<path d="M19.3751 13.375C19.3751 12.8558 19.529 12.3483 19.8175 11.9166C20.1059 11.485 20.5159 11.1485 20.9955 10.9498C21.4752 10.7511 22.003 10.6992 22.5122 10.8004C23.0214 10.9017 23.4891 11.1517 23.8562 11.5188C24.2233 11.886 24.4734 12.3537 24.5746 12.8629C24.6759 13.3721 24.6239 13.8999 24.4253 14.3795C24.2266 14.8592 23.8901 15.2692 23.4585 15.5576C23.0268 15.846 22.5193 16 22.0001 16C21.3039 16 20.6362 15.7234 20.1439 15.2312C19.6516 14.7389 19.3751 14.0712 19.3751 13.375ZM31.3376 18.6784C31.2692 18.3424 31.0857 18.0408 30.8187 17.8256C30.5517 17.6105 30.218 17.4953 29.8751 17.5H14.1251C13.7831 17.5 13.4514 17.6168 13.1849 17.8312C12.9184 18.0455 12.7332 18.3444 12.6599 18.6785C12.5866 19.0125 12.6296 19.3616 12.7818 19.6678C12.9341 19.974 13.1864 20.219 13.497 20.3622H13.5026L18.5548 22.5869L16.4998 30.3963C16.3429 30.755 16.3326 31.1609 16.471 31.5272C16.6094 31.8935 16.8855 32.1911 17.2404 32.3566C17.4387 32.4507 17.6555 32.4997 17.8751 32.5C18.1578 32.5004 18.435 32.4209 18.6745 32.2706C18.914 32.1203 19.1062 31.9054 19.2288 31.6506L22.0001 26.875L24.7732 31.6563C24.9457 32.0071 25.2483 32.2768 25.6167 32.4078C25.9851 32.5388 26.39 32.5208 26.7453 32.3576C27.1006 32.1945 27.3782 31.899 27.5189 31.5343C27.6596 31.1695 27.6523 30.7642 27.4985 30.4047L25.4435 22.5953L30.506 20.3678C30.8202 20.2278 31.0754 19.9821 31.2273 19.6735C31.3792 19.3649 31.4182 19.0128 31.3376 18.6784Z" fill="white"/>
</svg>
`, title:'Accessibility', teaser:'WCAG 2.2 AA targets, keyboard paths, focus states, color contrast'},
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#FF6200"/>
<path d="M29.5 13.75H14.5C14.1022 13.75 13.7206 13.908 13.4393 14.1893C13.158 14.4706 13 14.8522 13 15.25V20.5C13 25.4425 15.3925 28.4378 17.3997 30.0803C19.5616 31.8484 21.7122 32.4484 21.8059 32.4738C21.9348 32.5088 22.0708 32.5088 22.1997 32.4738C22.2934 32.4484 24.4413 31.8484 26.6059 30.0803C28.6075 28.4378 31 25.4425 31 20.5V15.25C31 14.8522 30.842 14.4706 30.5607 14.1893C30.2794 13.908 29.8978 13.75 29.5 13.75ZM26.2825 20.2806L21.0325 25.5306C20.9628 25.6004 20.8801 25.6557 20.7891 25.6934C20.698 25.7312 20.6004 25.7506 20.5019 25.7506C20.4033 25.7506 20.3057 25.7312 20.2147 25.6934C20.1236 25.6557 20.0409 25.6004 19.9713 25.5306L17.7213 23.2806C17.5805 23.1399 17.5015 22.949 17.5015 22.75C17.5015 22.551 17.5805 22.3601 17.7213 22.2194C17.862 22.0786 18.0529 21.9996 18.2519 21.9996C18.4509 21.9996 18.6418 22.0786 18.7825 22.2194L20.5 23.9397L25.2194 19.2194C25.2891 19.1497 25.3718 19.0944 25.4628 19.0567C25.5539 19.019 25.6515 18.9996 25.75 18.9996C25.8485 18.9996 25.9461 19.019 26.0372 19.0567C26.1282 19.0944 26.2109 19.1497 26.2806 19.2194C26.3503 19.2891 26.4056 19.3718 26.4433 19.4628C26.481 19.5539 26.5004 19.6515 26.5004 19.75C26.5004 19.8485 26.481 19.9461 26.4433 20.0372C26.4056 20.1282 26.3503 20.2109 26.2806 20.2806H26.2825Z" fill="white"/>
</svg>
`, title:'Privacy', teaser:'NDPR/GDPR-aware consent, configurable retention, DPA on request'},
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#543CDA"/>
<path d="M29.5 13.75H14.5C14.1022 13.75 13.7206 13.908 13.4393 14.1893C13.158 14.4706 13 14.8522 13 15.25V20.5C13 25.4425 15.3925 28.4378 17.3997 30.0803C19.5616 31.8484 21.7122 32.4484 21.8059 32.4738C21.9348 32.5088 22.0708 32.5088 22.1997 32.4738C22.2934 32.4484 24.4413 31.8484 26.6059 30.0803C28.6075 28.4378 31 25.4425 31 20.5V15.25C31 14.8522 30.842 14.4706 30.5607 14.1893C30.2794 13.908 29.8978 13.75 29.5 13.75ZM26.2825 20.2806L21.0325 25.5306C20.9628 25.6004 20.8801 25.6557 20.7891 25.6934C20.698 25.7312 20.6004 25.7506 20.5019 25.7506C20.4033 25.7506 20.3057 25.7312 20.2147 25.6934C20.1236 25.6557 20.0409 25.6004 19.9713 25.5306L17.7213 23.2806C17.5805 23.1399 17.5015 22.949 17.5015 22.75C17.5015 22.551 17.5805 22.3601 17.7213 22.2194C17.862 22.0786 18.0529 21.9996 18.2519 21.9996C18.4509 21.9996 18.6418 22.0786 18.7825 22.2194L20.5 23.9397L25.2194 19.2194C25.2891 19.1497 25.3718 19.0944 25.4628 19.0567C25.5539 19.019 25.6515 18.9996 25.75 18.9996C25.8485 18.9996 25.9461 19.019 26.0372 19.0567C26.1282 19.0944 26.2109 19.1497 26.2806 19.2194C26.3503 19.2891 26.4056 19.3718 26.4433 19.4628C26.481 19.5539 26.5004 19.6515 26.5004 19.75C26.5004 19.8485 26.481 19.9461 26.4433 20.0372C26.4056 20.1282 26.3503 20.2109 26.2806 20.2806H26.2825Z" fill="white"/>
</svg>
`, title:'Security', teaser:'Least-privilege access, credential rotation; ready for independent penetration testing.'},
];

const training = [
{title:'Administrator and editor training (live or recorded)'},
{title:'Playbooks: publishing workflow, media specs, redirects'},
{title:'Roles and permissions; change-log process with quick-reference checklists'},
];

const engineered = [
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#F2F2F2"/>
<path d="M30.97 16.2017L22.72 11.6876C22.4996 11.5658 22.2518 11.502 22 11.502C21.7482 11.502 21.5004 11.5658 21.28 11.6876L13.03 16.2036C12.7944 16.3325 12.5977 16.5223 12.4605 16.7532C12.3233 16.984 12.2506 17.2475 12.25 17.5161V26.4823C12.2506 26.7509 12.3233 27.0144 12.4605 27.2452C12.5977 27.4761 12.7944 27.6659 13.03 27.7948L21.28 32.3108C21.5004 32.4326 21.7482 32.4965 22 32.4965C22.2518 32.4965 22.4996 32.4326 22.72 32.3108L30.97 27.7948C31.2056 27.6659 31.4023 27.4761 31.5395 27.2452C31.6767 27.0144 31.7494 26.7509 31.75 26.4823V17.517C31.7499 17.248 31.6774 16.9839 31.5402 16.7525C31.403 16.5211 31.206 16.3308 30.97 16.2017ZM22 21.2501L14.4672 17.1251L22 13.0001L29.5328 17.1251L22 21.2501ZM22.75 30.5914V22.5467L30.25 18.4423V26.4823L22.75 30.5914Z" fill="#00B8D9"/>
</svg>
`, title:'Strong Foundations', teaser:'Fast, indexable, structured'},
{src:`<svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7501 20.2524C12.7501 20.4513 12.6711 20.6421 12.5305 20.7827C12.3898 20.9234 12.199 21.0024 12.0001 21.0024H4.50012C4.30121 21.0024 4.11045 20.9234 3.96979 20.7827C3.82914 20.6421 3.75012 20.4513 3.75012 20.2524C3.75012 20.0535 3.82914 19.8627 3.96979 19.7221C4.11045 19.5814 4.30121 19.5024 4.50012 19.5024H12.0001C12.199 19.5024 12.3898 19.5814 12.5305 19.7221C12.6711 19.8627 12.7501 20.0535 12.7501 20.2524ZM16.5001 8.2524C16.5034 9.50268 16.2209 10.7372 15.6743 11.8617C15.1278 12.9862 14.3315 13.971 13.3464 14.7408C13.1622 14.882 13.0127 15.0635 12.9093 15.2713C12.806 15.4791 12.7515 15.7078 12.7501 15.9399V16.5024C12.7501 16.9002 12.5921 17.2818 12.3108 17.5631C12.0295 17.8444 11.6479 18.0024 11.2501 18.0024H5.25012C4.8523 18.0024 4.47077 17.8444 4.18946 17.5631C3.90816 17.2818 3.75012 16.9002 3.75012 16.5024V15.9399C3.74997 15.7106 3.69724 15.4844 3.59599 15.2786C3.49474 15.0728 3.34766 14.893 3.16606 14.753C2.18337 13.9877 1.38767 13.0088 0.839165 11.8906C0.290664 10.7723 0.00374416 9.54388 0.000122671 8.29833C-0.0242523 3.83021 3.587 0.10927 8.05137 0.00239455C9.15139 -0.0241136 10.2456 0.169694 11.2696 0.572411C12.2936 0.975128 13.2267 1.57862 14.0139 2.34735C14.8012 3.11609 15.4267 4.03455 15.8537 5.04867C16.2806 6.06278 16.5004 7.15206 16.5001 8.2524ZM13.4898 7.37677C13.2953 6.29048 12.7727 5.28986 11.9923 4.50961C11.2119 3.72936 10.2111 3.20695 9.12481 3.01271C9.02767 2.99633 8.92826 2.99925 8.83225 3.0213C8.73624 3.04334 8.64552 3.08408 8.56525 3.14119C8.48499 3.1983 8.41676 3.27066 8.36446 3.35413C8.31216 3.43761 8.27681 3.53057 8.26044 3.62771C8.24406 3.72484 8.24698 3.82426 8.26902 3.92026C8.29107 4.01627 8.33181 4.107 8.38892 4.18727C8.44602 4.26753 8.51838 4.33576 8.60186 4.38806C8.68534 4.44036 8.7783 4.47571 8.87543 4.49208C10.4289 4.75364 11.747 6.07177 12.0104 7.62802C12.0401 7.8027 12.1307 7.96123 12.2661 8.07551C12.4015 8.1898 12.5729 8.25246 12.7501 8.2524C12.7925 8.25214 12.8348 8.24869 12.8767 8.24208C13.0727 8.20862 13.2474 8.09865 13.3624 7.93638C13.4774 7.77411 13.5232 7.57282 13.4898 7.37677Z" fill="#F4B400"/>
</svg>
`, title:'Conversion Clarity', teaser:'Task-first navigation, clean forms, sharp CTAs'},
{src:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 3.75H4.5C4.10218 3.75 3.72064 3.90804 3.43934 4.18934C3.15804 4.47064 3 4.85218 3 5.25V9.75C3 10.1478 3.15804 10.5294 3.43934 10.8107C3.72064 11.092 4.10218 11.25 4.5 11.25H19.5C19.8978 11.25 20.2794 11.092 20.5607 10.8107C20.842 10.5294 21 10.1478 21 9.75V5.25C21 4.85218 20.842 4.47064 20.5607 4.18934C20.2794 3.90804 19.8978 3.75 19.5 3.75ZM16.875 8.625C16.6525 8.625 16.435 8.55902 16.25 8.4354C16.065 8.31179 15.9208 8.13609 15.8356 7.93052C15.7505 7.72495 15.7282 7.49875 15.7716 7.28052C15.815 7.06229 15.9222 6.86184 16.0795 6.7045C16.2368 6.54717 16.4373 6.44002 16.6555 6.39662C16.8738 6.35321 17.1 6.37549 17.3055 6.46064C17.5111 6.54578 17.6868 6.68998 17.8104 6.87498C17.934 7.05999 18 7.2775 18 7.5C18 7.79837 17.8815 8.08452 17.6705 8.2955C17.4595 8.50647 17.1734 8.625 16.875 8.625Z" fill="#543CDA"/>
<path d="M19.5 12.75H4.5C4.10218 12.75 3.72064 12.908 3.43934 13.1893C3.15804 13.4706 3 13.8522 3 14.25V18.75C3 19.1478 3.15804 19.5294 3.43934 19.8107C3.72064 20.092 4.10218 20.25 4.5 20.25H19.5C19.8978 20.25 20.2794 20.092 20.5607 19.8107C20.842 19.5294 21 19.1478 21 18.75V14.25C21 13.8522 20.842 13.4706 20.5607 13.1893C20.2794 12.908 19.8978 12.75 19.5 12.75ZM16.875 17.625C16.6525 17.625 16.435 17.559 16.25 17.4354C16.065 17.3118 15.9208 17.1361 15.8356 16.9305C15.7505 16.725 15.7282 16.4988 15.7716 16.2805C15.815 16.0623 15.9222 15.8618 16.0795 15.7045C16.2368 15.5472 16.4373 15.44 16.6555 15.3966C16.8738 15.3532 17.1 15.3755 17.3055 15.4606C17.5111 15.5458 17.6868 15.69 17.8104 15.875C17.934 16.06 18 16.2775 18 16.5C18 16.7984 17.8815 17.0845 17.6705 17.2955C17.4595 17.5065 17.1734 17.625 16.875 17.625Z" fill="#543CDA"/>
</svg>
`, title:'Credible SEO Base', teaser:'Information architecture, internal links, schema'},
{src:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.75 11.9997V19.4997C21.75 20.4943 21.3549 21.4481 20.6517 22.1513C19.9484 22.8546 18.9946 23.2497 18 23.2497H12.75C12.5511 23.2497 12.3603 23.1707 12.2197 23.03C12.079 22.8894 12 22.6986 12 22.4997C12 22.3008 12.079 22.11 12.2197 21.9694C12.3603 21.8287 12.5511 21.7497 12.75 21.7497H18C18.5967 21.7497 19.169 21.5126 19.591 21.0907C20.0129 20.6687 20.25 20.0964 20.25 19.4997H18C17.4033 19.4997 16.831 19.2626 16.409 18.8407C15.9871 18.4187 15.75 17.8464 15.75 17.2497V13.4997C15.75 12.903 15.9871 12.3307 16.409 11.9087C16.831 11.4867 17.4033 11.2497 18 11.2497H20.2172C20.0753 9.69057 19.4926 8.20402 18.5374 6.96367C17.5821 5.72332 16.2936 4.78039 14.8225 4.245C13.3513 3.70962 11.7581 3.60389 10.2291 3.94016C8.70008 4.27644 7.2983 5.04083 6.1875 6.14407C4.80624 7.50711 3.9543 9.31664 3.78375 11.2497H6C6.59674 11.2497 7.16903 11.4867 7.59099 11.9087C8.01295 12.3307 8.25 12.903 8.25 13.4997V17.2497C8.25 17.8464 8.01295 18.4187 7.59099 18.8407C7.16903 19.2626 6.59674 19.4997 6 19.4997H4.5C3.90326 19.4997 3.33097 19.2626 2.90901 18.8407C2.48705 18.4187 2.25 17.8464 2.25 17.2497V11.9997C2.2521 10.0683 2.82715 8.18104 3.90235 6.57665C4.97755 4.97227 6.50456 3.72294 8.29012 2.9868C10.0757 2.25066 12.0395 2.0608 13.933 2.44125C15.8265 2.82171 17.5646 3.75537 18.9272 5.12407C19.8268 6.0281 20.5393 7.10077 21.0237 8.28062C21.5081 9.46046 21.7549 10.7243 21.75 11.9997Z" fill="#008753"/>
</svg>
`, title:'Ongoing Care', teaser:'Small improvements, monitoring, and SLAs'},
];

const our_process = [
{src:"01.", title:'Discover', teaser:'Define goals, risks, and acceptance criteria; audit your current site and stack.'},
{src:"02.", title:'Design', teaser:'Information architecture, wireframes, UI kit, content plan, and tracking plan.'},
{src:"03.", title:'Build', teaser:'Frontend, backend, CMS, and integrations backed by CI/CD and automated tests.'},
{src:"04.", title:'Launch', teaser:'Redirects, meta/robots, schema, consent, smoke tests, and a Core Web Vitals baseline.'},
{src:"05.", title:'Grow', teaser:'Prioritized backlog, incremental improvements, A/B tests, and a content refresh rhythm.'},
];

export default function WebHome() {
const { isDark } = useDarkMode();
const sliderRef = useRef<HTMLDivElement>(null);

const slide = (direction: "left" | "right") => {
const el = sliderRef.current;
if (!el) return;

const scrollAmount = el.offsetWidth * 0.8;

el.scrollBy({
left: direction === "left" ? -scrollAmount : scrollAmount,
behavior: "smooth",
});
};


return (
  <>
  
   <div className="relative w-full">
      {/* Top bar */}
      <div className="h-[30px] w-full bg-indigo-950" />

      {/* Cards */}
      <div className="-mt-4 pb-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((text, i) => (
              <div key={i} className="relative">
                {/* Pin */}
                <div className="absolute -top-3 left-1/2 z-3 h-4 w-4 -translate-x-1/2 rounded-full bg-orange-500 shadow-md">
                  <div className="absolute left-1/2 top-4 h-3 w-px -translate-x-1/2 bg-orange-400" />
                </div>

                {/* Card */}
                <div className={`${isDark ? " bg-[#141313] text-white " : " bg-white text-black text-slate-900 "}  flex h-full items-start rounded-xl px-4 py-5 text-sm font-medium shadow-lg`}>
                  <span className="mr-2 text-indigo-600">●</span>
                  <p className="text-sm font-semibold">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>


<div className='mt-6'>
<div className="px-[1%] md:px-[6%] mb-20">
<DynamicContent type="h2" title='Results' />
<DynamicContent type="p" css='mb-16' title='Selected outcomes from recent builds - actuals vary by scope and baseline:'  />




<div className={`grid grid-cols-1 sm:grid-cols-3 gap-12`}>
<div>
<div className="flex items-stretch gap-4">
{/* Image / icon column */}
<div className="flex max-w-[50px] flex-shrink-0 items-center justify-center">
<DynamicContent
type="img"
src="/check.webp"
css="h-full w-auto object-contain"
teaser="Cloud Solutions"
/>
</div>

{/* Text column */}
<div className="flex flex-1 flex-col justify-between">
<DynamicContent type="p4" title='+28% form completions' css='font-semibold' />
<DynamicContent type="p" title='after performance + UX fixes' css='text-sm' />
</div>
</div>

</div>
<div>
<div className="flex items-stretch gap-4">
{/* Image / icon column */}
<div className="flex max-w-[50px] flex-shrink-0 items-center justify-center">
<DynamicContent
type="img"
src="/check.webp"
css="h-full w-auto object-contain"
teaser="Cloud Solutions"
/>
</div>

{/* Text column */}
<div className="flex flex-1 flex-col justify-between">
<DynamicContent type="p4" title='LCP 3.8s → 1.7s ' css='font-semibold' />
<DynamicContent type="p" title='on mobile for a content-heavy site' css='text-sm' />
</div>
</div>
</div>

<div>

<div className="flex items-stretch gap-4">
{/* Image / icon column */}
<div className="flex max-w-[50px] flex-shrink-0 items-center justify-center">
<DynamicContent
type="img"
src="/check.webp"
css="h-full w-auto object-contain"
teaser="Cloud Solutions"
/>
</div>

{/* Text column */}
<div className="flex flex-1 flex-col justify-between">
<DynamicContent type="p4" title='+46% non-brand clicks in 90 days' css='font-semibold' />
<DynamicContent type="p" title='after rebuild with clean IA and schema' css='text-sm' />
</div>
</div>
</div>
</div>


<DynamicContent type="h2" css='mt-[5%]' title='What We Build' />
<DynamicContent type="p" title='User-focused, operations-ready products that grow revenue and run reliably on everyday devices.'  />


<div className="relative w-full p-[2%]">
<button
onClick={() => slide("left")}
className="absolute left-0 top-1/2 z-3 -translate-y-1/2 rounded-full bg-white p-2 shadow"
aria-label="Scroll left"
>
←
</button>

<div
  ref={sliderRef}
  className="flex gap-4 overflow-x-auto px-10 scroll-smooth
    [scrollbar-width:none] [-ms-overflow-style:none]
    [&::-webkit-scrollbar]:hidden"
>
  {cards.map((card, i) => (
    <div key={i} className="w-64 flex-shrink-0 p-4">
      {/* Image wrapper enforces equal height */}
      <div className="h-40 w-full flex items-center justify-center">
        <DynamicContent
          type="img"
          src={card.image}
          teaser={card.title}
          css="h-full w-full object-contain rounded-3xl"
        />
      </div>

      <div className="my-4">
        <DynamicContent
          type="p4"
          title={card.title}
          css="font-semibold"
        />
      </div>

      <div>
        <DynamicContent
          type="p"
          title={card.teaser}
          css="text-slated-800 text-sm"
        />
      </div>
    </div>
  ))}
</div>


<button
onClick={() => slide("right")}
className="absolute right-0 top-1/2 z-3 -translate-y-1/2 rounded-full bg-white p-2 shadow"
aria-label="Scroll right"
>
→
</button>
</div>

<DynamicContent type="p"> <>
Need a bespoke web application?{" "}
Need a bespoke web application? See <DynamicContent type="link" title='Custom Software Solutions.' url='/custom-software-solutions' css="text-blue-700 font-semibold"  /> 
</>
</DynamicContent>

<div className="sub-title text-center my-12">
<DynamicContent type="h2" title='At a Glance: What You Get' />
</div>

<div className={`grid grid-cols-1 rounded-3xl sm:grid-cols-2 md:grid-cols-4 gap-4 items-stretch  py-6 px-3 ${isDark ? "" : "bg-gray-100"}`}>
{engineered.map((src, i) => (
<div key={`enginnered1-${i}`} className={`mb-5 rounded-3xl ${isDark ? "darkModeBg" : "bg-white"}`}>
<div className="p-5 h-full flex flex-col">
<div className="w-[58px] space-y-2 shrink-0 mb-4" dangerouslySetInnerHTML={{ __html: src.src }}></div>
<div className="space-y-2 mb-3 font-bold font-bold"><DynamicContent css="space-y-2 mb-3 font-bold font-bold" type="p4" title={src.title || ``}  /></div>
<div className="space-y-2"><DynamicContent css='space-y-2' type="p" title={src.teaser || ``}  /></div>
</div>
</div>
))}
</div>

<div className="sub-title text-center my-12">
<DynamicContent type="h2" title='Core Capabilities' />
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
<div className={`${isDark ? "border-[#141313] " : "border-[#D2D2D3] "} border py-12 px-6 rounded-3xl`}>
<div><DynamicContent type="p3" title='Architecture & Frontend' css='font-semibold' /></div>
<div className="my-6"><ul className="list-disc pl-6 space-y-2 p-base-res">
<li>Component-driven UI, semantic HTML, accessible patterns </li>
<li>Performance budgets (LCP/INP/CLS), image/CDN optimization </li>
<li>Design systems with consistent tokens and documentation </li>
</ul></div>

<div className="mb-8">
<DynamicContent type="p"> <>
For research, wireframes, and prototyping, <br />see <DynamicContent type="link" title='UI/UX Design & Consulting.' url='/custom-software-solutions' css="text-blue-700 font-semibold"  /> 
</>
</DynamicContent></div>
<div className="flex justify-end">
<DynamicContent type="img" src='/computer.webp' css="max-w-1/3 w-full object-contain" teaser={`Architecture & Frontend`} /></div>
</div>
<div className={`${isDark ? "border-[#141313] " : "border-[#D2D2D3] "} border py-12 px-6 rounded-3xl`}>
<div><DynamicContent type="p3" title='Backend & CMS' css='font-semibold' /></div>
<div className="my-6"><ul className="list-disc pl-6 space-y-2 p-base-res">
<li>API design (REST/GraphQL), authentication, roles, audit logs </li>
<li>Headless or traditional CMS with clean content models </li>
<li>Editorial workflows: drafts, approvals, versioning, review states </li>
</ul></div>
<div className="flex justify-end">
<DynamicContent type="img" src='/Backend.webp' css="max-w-1/3 w-full object-contain" teaser={`Backend & CMS`} /></div></div>


<div className={`${isDark ? "border-[#141313] " : "border-[#D2D2D3] "} border py-12 px-6 rounded-3xl`}>
<div><DynamicContent type="p3" title='Performance, Security & Reliability' css='font-semibold' /></div>
<div className="my-6"><ul className="list-disc pl-6 space-y-2 p-base-res">
<li>Rendering strategies (SSR/SSG/ISR), CDN and edge caching </li>
<li>Secrets management, dependency checks, WAF, DDoS protection  </li>
<li>Backups, uptime monitoring, error tracking, incident playbooks </li>
</ul></div>

<div className="mb-8">
<DynamicContent type="p"> <>
Deep work on speed and stability?  
 <br />See <DynamicContent type="link" title='Performance Optimization.' url='/seo-content-marketing' css="text-blue-700 font-semibold"  /> 
</>
</DynamicContent></div>
<div className="flex justify-end">
<DynamicContent type="img" src='/Performance.webp' css="max-w-1/3 w-full object-contain" teaser={`Performance Optimization`} /></div>
</div>




<div className={`${isDark ? "border-[#141313] " : "border-[#D2D2D3] "} border py-12 px-6 rounded-3xl`}>
<div><DynamicContent type="p3" title='SEO & Analytics Foundations' css='font-semibold' /></div>
<div className="my-6"><ul className="list-disc pl-6 space-y-2 p-base-res">
<li>IA, internal linking, schema (Services/Articles/FAQs/Products) </li>
<li>GA4 with Consent Mode v2; dashboards in Looker Studio </li>
<li>Internationalization: URL strategy, hreflang, regional metadata</li>
</ul></div>
<div className="flex justify-end">
<DynamicContent type="img" src='/SEO1.webp' css="max-w-1/3 w-full object-contain" teaser={`SEO & Analytics Foundations`} /></div>
</div>
</div>




</div>
{/* end first row */}

<div>

<div className='p-[2%] footerBg rounded-3xl text-white my-[8%] py-[5%]'>
<div className="my-8 content-padding">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
<div className="bg-[#464067] p-6 sm:p-7 rounded-3xl">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.8659 2.5H19.1992C17.8159 2.5 16.6992 3.61667 16.6992 5V6.66667C16.6992 8.05 17.8159 9.16667 19.1992 9.16667H20.8659C22.2492 9.16667 23.3659 8.05 23.3659 6.66667V5C23.3659 3.61667 22.2492 2.5 20.8659 2.5Z" fill="white"/>
<path d="M7.11589 17.7832H5.44922C4.06589 17.7832 2.94922 18.8999 2.94922 20.2832V21.9499C2.94922 23.3332 4.06589 24.4499 5.44922 24.4499H7.11589C8.49922 24.4499 9.61589 23.3332 9.61589 21.9499V20.2832C9.61589 18.8999 8.48255 17.7832 7.11589 17.7832Z" fill="white"/>
<path d="M34.5495 17.7832H32.8828C31.4995 17.7832 30.3828 18.8999 30.3828 20.2832V21.9499C30.3828 23.3332 31.4995 24.4499 32.8828 24.4499H34.5495C35.9328 24.4499 37.0495 23.3332 37.0495 21.9499V20.2832C37.0495 18.8999 35.9328 17.7832 34.5495 17.7832Z" fill="white"/>
<path d="M6.25 19.8672C5.56667 19.8672 5 19.3005 5 18.6172C5 11.5005 10.3333 5.51721 17.4 4.68388C18.0667 4.61721 18.7 5.1005 18.7833 5.78383C18.8667 6.46716 18.3667 7.08386 17.6833 7.16719C11.8833 7.85053 7.5 12.7672 7.5 18.6172C7.5 19.3005 6.93333 19.8672 6.25 19.8672Z" fill="white"/>
<path d="M33.7504 19.8663C33.067 19.8663 32.5004 19.2997 32.5004 18.6163C32.5004 12.7997 28.1503 7.88301 22.3837 7.18301C21.7003 7.09968 21.217 6.48298 21.3004 5.79965C21.3837 5.11631 22.017 4.63304 22.7004 4.71637C29.717 5.56637 35.017 11.5497 35.017 18.633C35.0004 19.2997 34.4504 19.8663 33.7504 19.8663Z" fill="white"/>
<path d="M22.1497 36.6832H17.8664C16.333 36.6832 15.1997 35.4498 15.483 34.1165L16.1831 31.0332H23.833L24.533 34.1165C24.8497 35.5332 23.783 36.6832 22.1497 36.6832Z" fill="white"/>
<path opacity="0.4" d="M26.7837 28.4174L23.8337 31.0341H16.1837L13.2337 28.4174C11.517 27.0174 11.517 25.9341 12.817 24.2841L18.017 17.7174C18.3837 17.2674 18.8003 16.9508 19.2503 16.8008C19.7337 16.6341 20.267 16.6341 20.7503 16.8008C21.2003 16.9674 21.617 17.2674 21.9837 17.7174L27.1837 24.2841C28.4837 25.9341 28.4337 26.9674 26.7837 28.4174Z" fill="white"/>
</svg>
</div>
<div><DynamicContent type="p4" css='font-semibold my-6' title='Information Architecture & Content Design.' /></div>
<div>
<ul className="list-disc pl-6 space-y-2 text-gray-100 p-base-res">
<li>Task-first navigation and page templates </li>
<li>Clear headings, scannable sections, purposeful CTAs </li>
<li>Content patterns for product/service, comparison, and FAQs </li>
</ul>
</div>
<div className="mt-5">
<DynamicContent type="p"> <>Scale content and clusters with <DynamicContent type="link" title='SEO & Content Marketing.' url='/seo-content-marketing' css="px-2 text-[#543CDA] font-semibold"  /> 
</>
</DynamicContent></div>
</div>


<div className="bg-[#464067] p-6 sm:p-7 rounded-3xl">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M35.6161 18.9842V28.9676C35.6161 33.5676 31.8828 37.3009 27.2828 37.3009H12.7161C8.11615 37.3009 4.38281 33.5676 4.38281 28.9676V19.1009C5.64948 20.4676 7.44948 21.2509 9.39948 21.2509C11.4995 21.2509 13.5161 20.2009 14.7828 18.5176C15.9161 20.2009 17.8495 21.2509 19.9995 21.2509C22.1328 21.2509 24.0328 20.2509 25.1828 18.5842C26.4661 20.2342 28.4495 21.2509 30.5161 21.2509C32.5328 21.2509 34.3661 20.4342 35.6161 18.9842Z" fill="white"/>
<path d="M24.9842 2.08398H14.9842L13.7509 14.3506C13.6509 15.484 13.8176 16.5507 14.2342 17.5173C15.2009 19.784 17.4676 21.2507 20.0009 21.2507C22.5676 21.2507 24.7842 19.8173 25.7842 17.534C26.0842 16.8173 26.2676 15.984 26.2842 15.134V14.8173L24.9842 2.08398Z" fill="white"/>
<path opacity="0.6" d="M37.2676 13.784L36.7842 9.16732C36.0842 4.13398 33.8009 2.08398 28.9176 2.08398H22.5176L23.7509 14.584C23.7676 14.7507 23.7842 14.934 23.7842 15.2507C23.8842 16.1173 24.1509 16.9173 24.5509 17.634C25.7509 19.834 28.0842 21.2507 30.5176 21.2507C32.7342 21.2507 34.7342 20.2673 35.9842 18.534C36.9842 17.2007 37.4342 15.5173 37.2676 13.784Z" fill="white"/>
<path opacity="0.6" d="M10.9827 2.08398C6.08275 2.08398 3.81608 4.13398 3.09942 9.21732L2.64942 13.8007C2.48275 15.584 2.96608 17.3173 4.01608 18.6673C5.28275 20.3173 7.23275 21.2507 9.39942 21.2507C11.8327 21.2507 14.1661 19.834 15.3494 17.6673C15.7828 16.9173 16.0661 16.0507 16.1494 15.1507L17.4494 2.10065H10.9827V2.08398Z" fill="white"/>
<path d="M18.9159 27.7658C16.7992 27.9824 15.1992 29.7824 15.1992 31.9158V37.2991H24.7826V32.4991C24.7992 29.0158 22.7492 27.3658 18.9159 27.7658Z" fill="white"/>
</svg>
</div>
<div><DynamicContent type="p4" css='font-semibold my-6' title='E-commerce' /></div>
<div>
<ul className="list-disc pl-6 space-y-2 text-gray-100 p-base-res">
<li>Catalog architecture, variants, filters, on-site search</li>
<li>Checkout UX, trust cues, payment/tax/shipping integrations </li>
<li>Performance budgets for product, listing, and checkout templates </li>
</ul></div></div>

<div className="bg-[#464067] p-6 sm:p-7 rounded-3xl">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M14.2664 5.56641V29.4497C13.6997 29.4664 13.1331 29.5997 12.7164 29.8497L8.79974 32.0831C6.06641 33.6497 3.81641 32.3497 3.81641 29.1831V12.9664C3.81641 11.9164 4.56641 10.6164 5.49974 10.0831L12.7164 5.94974C13.1331 5.71641 13.6997 5.58307 14.2664 5.56641Z" fill="white"/>
<path d="M26.2176 10.5496V34.4329C25.6342 34.4496 25.0676 34.3496 24.6176 34.1329L15.8676 29.7496C15.4176 29.5329 14.8509 29.4329 14.2676 29.4496V5.56624C14.8509 5.54957 15.4176 5.64957 15.8676 5.86624L24.6176 10.2496C25.0676 10.4662 25.6342 10.5662 26.2176 10.5496Z" fill="white"/>
<path opacity="0.4" d="M36.6668 10.8161V27.0328C36.6668 28.0828 35.9168 29.3828 34.9835 29.9161L27.7668 34.0495C27.3501 34.2828 26.7835 34.4161 26.2168 34.4328V10.5495C26.7835 10.5328 27.3501 10.3995 27.7668 10.1495L31.6835 7.91612C34.4168 6.34946 36.6668 7.64946 36.6668 10.8161Z" fill="white"/>
</svg></div>
<div><DynamicContent type="p4" css='font-semibold my-6' title='Localization & Multilingual' /></div>
<div>
<ul className="list-disc pl-6 space-y-2 text-gray-100 p-base-res">
<li>Region/language URL strategy with hreflang </li>
<li>Translation workflow and regional content ownership  </li>
<li>Local signals: currency, units, addresses, reviews </li>
</ul></div></div>


<div className="bg-[#464067] p-6 sm:p-7 rounded-3xl">
<div>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M28.334 6.24981H21.784L24.134 4.29984C24.6673 3.84984 24.734 3.06651 24.3006 2.53317C23.8506 1.99984 23.0673 1.93311 22.534 2.36645L17.534 6.53311C17.2506 6.76645 17.084 7.11647 17.084 7.49981C17.084 7.88314 17.2506 8.2165 17.534 8.4665L22.534 12.6332C22.7673 12.8332 23.0507 12.9165 23.334 12.9165C23.684 12.9165 24.0506 12.7664 24.3006 12.4664C24.7506 11.9331 24.6673 11.1498 24.134 10.6998L21.784 8.74981H28.334C29.484 8.74981 30.4173 9.68314 30.4173 10.8331V26.6665C30.4173 27.3498 30.984 27.9165 31.6673 27.9165C32.3507 27.9165 32.9173 27.3498 32.9173 26.6665V10.8331C32.9173 8.29981 30.8673 6.24981 28.334 6.24981Z" fill="white"/>
<path d="M31.666 36.666C34.4274 36.666 36.666 34.4274 36.666 31.666C36.666 28.9046 34.4274 26.666 31.666 26.666C28.9046 26.666 26.666 28.9046 26.666 31.666C26.666 34.4274 28.9046 36.666 31.666 36.666Z" fill="white"/>
<path opacity="0.4" d="M22.4673 31.534L17.4673 27.3673C16.934 26.9173 16.1507 27.0007 15.7007 27.534C15.2507 28.0674 15.334 28.8507 15.8673 29.3007L18.2173 31.2507H11.6673C10.5173 31.2507 9.58398 30.3173 9.58398 29.1673V13.334C9.58398 12.6507 9.01732 12.084 8.33398 12.084C7.65065 12.084 7.08398 12.6507 7.08398 13.334V29.1673C7.08398 31.7007 9.13398 33.7507 11.6673 33.7507H18.2173L15.8673 35.7006C15.334 36.1506 15.2673 36.934 15.7007 37.4673C15.9507 37.7673 16.3007 37.9173 16.6673 37.9173C16.9507 37.9173 17.234 37.8173 17.4673 37.634L22.4673 33.4673C22.7507 33.234 22.9173 32.884 22.9173 32.5007C22.9173 32.1173 22.7507 31.784 22.4673 31.534Z" fill="white"/>
<path d="M8.33398 13.334C11.0954 13.334 13.334 11.0954 13.334 8.33398C13.334 5.57256 11.0954 3.33398 8.33398 3.33398C5.57256 3.33398 3.33398 5.57256 3.33398 8.33398C3.33398 11.0954 5.57256 13.334 8.33398 13.334Z" fill="white"/>
</svg>
</div>
<div><DynamicContent type="p4" css='font-semibold my-6' title='Content Migration & Replatforming' /></div>
<div>
<ul className="list-disc pl-6 space-y-2 text-gray-100 p-base-res">
<li>URL inventory and redirect maps (1:1 and pattern rules) </li>
<li>Structured content mapping (fields, media, relations) </li>
<li>Pre/post-launch checks to protect rankings and analytics </li>
</ul></div></div>
</div>
</div>
</div>
</div>

<div className="px-[1%] md:px-[6%]">
<div className="grid grid-cols-1 sm:grid-cols-[40%_60%] gap-8 p-2">
<div className="p-6">
<div className="w-full h-full flex flex-col justify-center">
<div>


  
<div className="flex items-center gap-6">
<div>
<div className="flex items-center">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white -mr-6 flex items-center justify-center">
<DynamicContent type="img" src="/trust.webp" css="w-full h-full object-cover" />
</div>

<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white -mr-6 flex items-center justify-center">
<DynamicContent type="img" src="/trust1.webp" css="w-full h-full object-cover" />
</div>

<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white -mr-6 flex items-center justify-center bg-black text-white">
+8
</div>
</div>
</div>

<p className="mx-4">
10+ Completed Projects
</p>
</div>
</div>

<div><DynamicContent type="h2" title='Our Process' css='font-bold mt-8' /></div>
<DynamicContent type="p" title='Discover • Design • Build • Launch • Grow' css='font-semibold' />
<DynamicContent type="p" title='A simple five-step framework we follow on every project - visible in your proposal, timeline, and dashboard. ' css='my-8' />
</div>
</div>
<div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{our_process.map((item, i) => (
<div key={i} className="rounded-xl md:[&:last-child:nth-child(odd)]:col-span-2
">
<div className={`${isDark ? "border-[#141313] " : "border-gray-200 "}  flex w-full max-w-5xl items-stretch gap-6 border rounded-2xl p-5`}>
{/* First div — size fits content */}
<div className="flex items-center justify-center text-[#543CDA] text-4xl font-bold">
{item.src}
</div>

{/* Second div — fills remaining space */}
<div className="flex-1 flex-col">
<DynamicContent type="p3" title={item.title} css='font-bold mb-2' />
<DynamicContent type="p" title={item.teaser} /></div></div>
</div>))}</div></div></div>
</div>

<DynamicContent type="p" css='my-[6%] px-[2%] text-center'><>
Planning a longer, multi-quarter rollout? See  <DynamicContent type="link" title='Digital Transformation Consulting' url='/seo-content-marketing' css="text-blue-700 font-semibold"  /> 
</></DynamicContent>




<div className="py-[5%] px-[1%] sm:px-[5%] md:px-[10%] card-surface">
<div className="px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h2" title='Deployment & DevOps' css='text-center' />
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-10 p-2 mt-10">
<div className={`${isDark ? "bg-[#141313] " : "bg-white "}  p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M36.6673 13.334V26.984C36.6673 33.0507 33.0507 36.6673 26.984 36.6673H13.0173C6.95065 36.6673 3.33398 33.0507 3.33398 26.984V13.3507L36.6673 13.334Z" fill="#543CDA"/>
<path d="M15.0009 29.5834C14.8176 29.5834 14.6176 29.5334 14.4509 29.45C13.1676 28.8 12.0676 27.8334 11.2676 26.6334C10.6009 25.6334 10.6009 24.35 11.2676 23.35C12.0676 22.15 13.1676 21.1834 14.4509 20.55C15.0676 20.2334 15.8176 20.5 16.1342 21.1167C16.4509 21.7334 16.2009 22.4834 15.5676 22.8C14.6676 23.25 13.9009 23.9334 13.3509 24.7667C13.2509 24.9167 13.2509 25.1167 13.3509 25.2834C13.9009 26.1167 14.6676 26.8 15.5676 27.25C16.1842 27.5667 16.4342 28.3167 16.1342 28.9334C15.9009 29.3334 15.4509 29.5834 15.0009 29.5834Z" fill="#543CDA"/>
<path d="M25.3494 29.584C24.8827 29.584 24.4494 29.334 24.2327 28.9007C23.9161 28.284 24.1661 27.534 24.7994 27.2174C25.6994 26.7673 26.4661 26.084 27.0161 25.2507C27.1161 25.1007 27.1161 24.9007 27.0161 24.734C26.4661 23.9007 25.6994 23.2174 24.7994 22.7673C24.1827 22.4507 23.9327 21.7007 24.2327 21.084C24.5494 20.4673 25.2994 20.2174 25.9161 20.5174C27.1994 21.1674 28.2994 22.134 29.0994 23.334C29.7661 24.334 29.7661 25.6174 29.0994 26.6174C28.2994 27.8174 27.1994 28.784 25.9161 29.4173C25.7161 29.534 25.5327 29.584 25.3494 29.584Z" fill="#543CDA"/>
<path d="M36.6673 13.0173V13.334L3.33398 13.3507V13.0173C3.33398 6.95065 6.95065 3.33398 13.0173 3.33398H26.984C33.0507 3.33398 36.6673 6.95065 36.6673 13.0173Z" fill="#543CDA"/>
</svg>
</div>
<div className="mt-6"><DynamicContent type="p4" title='Where we deploy' css='font-semibold my-4' /></div>
<div><DynamicContent type="p" title='Your cloud (AWS/GCP/Azure), managed platforms (e.g., Vercel/Netlify/Render), or traditional panels (cPanel/aaPanel).' css='my-2' /></div>
</div>
<div className="bg-[#543CDA] p-5 rounded-3xl">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6673 13.334H6.66732C4.83398 13.334 3.33398 11.834 3.33398 10.0007V6.66732C3.33398 4.83398 4.83398 3.33398 6.66732 3.33398H11.6673C13.5007 3.33398 15.0007 4.83398 15.0007 6.66732V10.0007C15.0007 11.834 13.5007 13.334 11.6673 13.334Z" fill="white"/>
<path d="M34.666 11.6667H28.666C27.566 11.6667 26.666 10.7666 26.666 9.66665V7.00002C26.666 5.90002 27.566 5 28.666 5H34.666C35.766 5 36.666 5.90002 36.666 7.00002V9.66665C36.666 10.7666 35.766 11.6667 34.666 11.6667Z" fill="white"/>
<path d="M34.666 24.1667H28.666C27.566 24.1667 26.666 23.2666 26.666 22.1666V19.5C26.666 18.4 27.566 17.5 28.666 17.5H34.666C35.766 17.5 36.666 18.4 36.666 19.5V22.1666C36.666 23.2666 35.766 24.1667 34.666 24.1667Z" fill="white"/>
<path opacity="0.37" d="M26.6667 22.084C27.35 22.084 27.9167 21.5173 27.9167 20.834C27.9167 20.1507 27.35 19.584 26.6667 19.584H22.0833V9.58398H26.6667C27.35 9.58398 27.9167 9.01732 27.9167 8.33398C27.9167 7.65065 27.35 7.08398 26.6667 7.08398H15C14.3167 7.08398 13.75 7.65065 13.75 8.33398C13.75 9.01732 14.3167 9.58398 15 9.58398H19.5833V30.0007C19.5833 32.534 21.6333 34.584 24.1667 34.584H26.6667C27.35 34.584 27.9167 34.0173 27.9167 33.334C27.9167 32.6507 27.35 32.084 26.6667 32.084H24.1667C23.0167 32.084 22.0833 31.1507 22.0833 30.0007V22.084H26.6667Z" fill="white"/>
<path d="M34.666 36.6667H28.666C27.566 36.6667 26.666 35.7666 26.666 34.6666V32C26.666 30.9 27.566 30 28.666 30H34.666C35.766 30 36.666 30.9 36.666 32V34.6666C36.666 35.7666 35.766 36.6667 34.666 36.6667Z" fill="white"/>
</svg>
</div>
<div className="mt-6"><DynamicContent type="p4" title='Pipelines' css='font-semibold my-4 text-gray-100' /></div>
<div className="mb-20"><DynamicContent type="p4" title='CI/CD with preview PRs, matching staging/production environments, zero-downtime releases.' css='my-2 text-gray-100' /></div>
</div>
<div className={`${isDark ? "bg-[#141313] " : "bg-white "}  p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M36.6673 13.0173V23.334H29.8673C28.7507 23.334 27.434 22.534 26.9173 21.5507L25.184 18.2673C24.7173 17.384 24.0507 17.434 23.684 18.3507L19.8507 28.034C19.434 29.1173 18.734 29.1173 18.3006 28.034L16.4007 23.234C15.9507 22.0673 14.5507 21.1173 13.3007 21.1173L3.33398 21.1673V13.0173C3.33398 6.95065 6.95065 3.33398 13.0173 3.33398H26.984C33.0507 3.33398 36.6673 6.95065 36.6673 13.0173Z" fill="#543CDA"/>
<path d="M36.6673 26.9837V23.3337H29.8673C28.7507 23.3337 27.434 22.5337 26.9173 21.5504L25.184 18.2671C24.7173 17.3837 24.0507 17.4337 23.684 18.3504L19.8507 28.0337C19.434 29.1171 18.734 29.1171 18.3006 28.0337L16.4007 23.2337C15.9507 22.0671 14.5507 21.1171 13.3007 21.1171L3.33398 21.1671V26.9837C3.33398 32.9504 6.83398 36.5504 12.7173 36.6504C12.9007 36.6671 13.1007 36.6671 13.284 36.6671H26.6173C26.8673 36.6671 27.1173 36.6671 27.3507 36.6504C33.2006 36.5171 36.6673 32.9337 36.6673 26.9837Z" fill="#543CDA"/>
<path d="M3.3332 21.166V26.6827C3.29987 26.1493 3.2832 25.5827 3.2832 24.9993V21.166H3.3332Z" fill="#543CDA"/>
</svg>
</div>
<div className="mt-6"><DynamicContent type="p4" title='Observability' css='font-semibold my-4' /></div>
<div><DynamicContent type="p4" title='Uptime, logs, error tracking, weekly health summaries.' css='my-2' /></div>
</div>
</div>

<DynamicContent type="p" css='mt-18 text-center'> <>
Prefer a single-partner setup? <b>Our Nexoris Cloud (NVMe)</b> option includes managed security, backups, and WAT-time-zone support - <b>optional and no lock-in.</b>
</>
</DynamicContent>


<div className="w-full flex flex-col sm:flex-row justify-center gap-4 mt-20">
{/* RIGHT BUTTON — Explore Nexoris Cloud */}
<DynamicContent section='true' isLink={true} css='bg-[#543CDA] text-white' type="btn1" url='https://www.nexoriscloud.com' title='Explore Nexoris Cloud' teaser='Explore Nexoris Cloud' icon='bg-[#4D3BAD] text-gray-100' />

    <DynamicContent
    isLink
    type="btn1"
    section='true'
    url="https://www.nexoriscloud.com/domains"
    title="See Pricing"
    css={`${isDark ? " darkModeBg text-white " : " bg-white text-black "}`}
    icon={`y`} 
    iconcss={`${isDark ? " bg-gray-200 text-gray-900 " : " bg-gray-200 text-gray-900 "}`} 
    teaser='Go to See Pricing Audit page'
  />
</div>
</div>

<div>



<DynamicContent css='sub-title text-center my-10' type="h2" title='Compliance & Accessibility' />
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-4 content-padding">
{compliance.map((src, i) => (
<div key={`enginnered-${i}`} className={`mb-5 p-[1%] sm:p-[2%] md:p-[3%] rounded-3xl ${isDark ? "darkModeBg" : "bg-white"}`}>
  <div className="p-5 h-full flex flex-col">
<div className="w-[58px] space-y-2 shrink-0 mb-4" dangerouslySetInnerHTML={{ __html: src.src }}></div>
<div className="space-y-2 mb-3 font-bold font-bold"><DynamicContent css="space-y-2 mb-3 font-bold font-bold" type="p4" title={src.title || ``}  /></div>
<div className="space-y-2"><DynamicContent css='space-y-2' type="p" title={src.teaser || ``}  /></div>
</div>
</div>
))}
</div>

<div className="my-12">
<DynamicContent css='sub-title text-center' type="h2" title='Training & Handover' />
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-4 content-padding">
{training.map((src, i) => (
<div key={`enginnered-${i}`} className={`mb-5 p-[1%] sm:p-[2%] md:p-[3%] rounded-3xl ${isDark ? "darkModeBg" : "bg-white"}`}>
<div className="flex items-stretch gap-4">
{/* Image / icon column */}
<div className="flex max-w-[50px] flex-shrink-0 items-center justify-center">
<DynamicContent
type="img"
src="/hand.webp"
css="h-full w-auto object-contain"
teaser="Cloud Solutions"
/>
</div>

{/* Text column */}
<div className="flex flex-1 flex-col justify-between">
<DynamicContent type="p" title={src.title} css='font-semibold' />
</div>
</div>


</div>
))}
</div>
</div>




<div className="sm:hidden">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-6 sm:my-16 content-padding p-4">

  {/* Left Column */}
  <div>
    <DynamicContent type="p2" css='font-semibold mb-5' title='Engagement Models & Governance' />
    <div className="relative w-full max-w-3xl mt-15">

      {/* Top-left decorative star */}
      <div className="pointer-events-none absolute top-0 left-0 z-0 -translate-x-1/3 -translate-y-1/3 text-indigo-600">
        <svg width="96" height="96" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <polygon points="50,5 61,39 95,39 67,59 78,93 50,72 22,93 33,59 5,39 39,39" />
        </svg>
      </div>

      {/* Card */} 
      <div className={`relative z-3 rounded-2xl border rounded-3xl p-8 ${isDark ? "darkModeBg" : " bg-white "}`}>
        <ul className="list-disc pl-6 space-y-4 mt-5 p-base-res">
          <li>Models: Fixed-scope project • Monthly care (support & enhancements)</li>
          <li>Ownership: Your repos, your cloud accounts, your analytics - always</li>
          <li>Response times (Mon–Fri, 09:00–18:00 WAT): Critical ≤ 2h • Major next business day • Standard ≤ 2 business days</li>
          <li>Change control: ticketed backlog, clear acceptance criteria, versioned releases</li>
        </ul>
        <DynamicContent type="p4" css='font-semibold my-2' title='Project vs Monthly Care' />
        <ul className="list-disc pl-6 space-y-4 mt-5 p-base-res">
          <li>Project: defined scope, milestones, handover on completion</li>
          <li>Monthly care: SLAs, improvements, updates, dashboards</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Right Column */}
  <div>
    <DynamicContent type="p2" css='font-semibold mb-5' title='Deliverables - You Own Everything' />
    <div className="relative w-full max-w-3xl mt-15">

      {/* Bottom-right decorative star */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 translate-x-1/3 translate-y-1/3 text-indigo-600">
        <svg width="96" height="96" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <polygon points="50,5 61,39 95,39 67,59 78,93 50,72 22,93 33,59 5,39 39,39" />
        </svg>
      </div>

      {/* Card */}
      <div className={`${isDark ? "bg-[#141313] text-white" : "  text-slate-900 border border-white/60 bg-slate-50"} relative z-3 rounded-2xl p-8`}>
        <ul className="space-y-4 text-sm">
          <li className="flex gap-3"><span className="mt-1">•</span><span>IA map, wireframes, and UI kit</span></li>
          <li className="flex gap-3"><span className="mt-1">•</span><span>Component library with usage docs</span></li>
          <li className="flex gap-3"><span className="mt-1">•</span><span>CMS models + content guidelines</span></li>
          <li className="flex gap-3"><span className="mt-1">•</span><span>Tracking spec + dashboards (GA4/Looker Studio)</span></li>
          <li className="flex gap-3"><span className="mt-1">•</span><span>SEO pack: schema, redirects, sitemap, robots, meta patterns</span></li>
          <li className="flex gap-3"><span className="mt-1">•</span><span>Runbooks: deploy, rollback, backups, monitoring</span></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>







<div className="hidden sm:block">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-6 sm:my-16 content-padding p-4 items-stretch">
<div className="h-full flex flex-col">

<DynamicContent type="p2" css='font-semibold mb-5' title='Engagement Models & Governance' />
<div className="relative w-full max-w-3xl">
      {/* Decorative star (behind card, bottom-left) */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 -translate-x-1/3 translate-y-1/3 text-indigo-600">
        <svg
          width="96"
          height="96"
          viewBox="0 0 100 100"
          fill="currentColor"
          aria-hidden="true"
        >
          <polygon points="50,5 61,39 95,39 67,59 78,93 50,72 22,93 33,59 5,39 39,39" />
        </svg>
      </div>

      {/* Card */}
      <div className={`h-full relative z-3 rounded-2xl rounded-3xl p-8 ${isDark ? "darkModeBg" : " bg-white border  border-gray-300 "}`}>
       
<ul className="list-disc pl-6 space-y-4 mt-5 p-base-res">
<li>Models: Fixed-scope project • Monthly care (support & enhancements) </li>
<li>Ownership: Your repos, your cloud accounts, your analytics - always </li>
<li>Response times (Mon–Fri, 09:00–18:00 WAT): Critical ≤ 2h • Major next business day • Standard ≤ 2 business days </li>
<li>Change control: ticketed backlog, clear acceptance criteria, versioned releases
</li>
</ul>
<DynamicContent type="p4" css='font-semibold my-2' title='Project vs Monthly Care' />
<ul className="list-disc pl-6 space-y-4 mt-5 p-base-res">
<li>Project: defined scope, milestones, handover on completion </li>
<li>Monthly care: SLAs, improvements, updates, dashboards
</li>
</ul>
</div>
</div>
</div>






<div className="h-full flex flex-col">
<DynamicContent type="p2" css='font-semibold mb-5' title='Deliverables - You Own Everything' />
<div className="relative w-full max-w-3xl">
      {/* Decorative star (behind card) */}
      <div className="pointer-events-none absolute right-0 top-0 z-0 translate-x-1/2 -translate-y-1/2 text-indigo-600">
        <svg
          width="96"
          height="96"
          viewBox="0 0 100 100"
          fill="currentColor"
          aria-hidden="true"
        >
          <polygon points="50,5 61,39 95,39 67,59 78,93 50,72 22,93 33,59 5,39 39,39" />
        </svg>
      </div>

      {/* Card */}
      <div className={`${isDark ? " darkModeBg " : " border  bg-white border-gray-300 "} rounded-3xl relative z-3 rounded-2xl p-8`}>
        <ul className={`space-y-4 text-sm ${isDark ? "text-white" : " text-slate-900"} `}>
          <li className="flex gap-3">
            <span className="mt-1">•</span>
            <span>IA map, wireframes, and UI kit</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1">•</span>
            <span>Component library with usage docs</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1">•</span>
            <span>CMS models + content guidelines</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1">•</span>
            <span>
              Tracking spec + dashboards (GA4/Looker Studio)
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1">•</span>
            <span>
              SEO pack: schema, redirects, sitemap, robots, meta patterns
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1">•</span>
            <span>
              Runbooks: deploy, rollback, backups, monitoring
            </span>
          </li>
        </ul>
      </div>
    </div>
</div>
</div>
</div>















<div className="text-center my-8 sub-title">
<DynamicContent type="h2" title='Simple pricing. No Hidden Charges' />
<DynamicContent type="p4" title='Nexoris Cloud Solutions is our hosting arm. Your product and the servers behind it are handled by one team - so ownership is clear, fixes are faster, and performance is better.'  />
</div>

<div className="flex flex-wrap items-center justify-center my-14 px-[1%] sm:px-[8%] md:px-[15%]">
{/* LEFT COLUMN */}
<div className="w-full md:w-[65%] flex items-center justify-center md:justify-start mb-6 md:mb-0">
<ul className="space-y-3">
<li key={'kash1'} className="flex items-start">
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
<span className="ml-2">We start with a short chat and send a clear proposal - what we’ll do, 
when we’ll deliver, and how much it costs (broken into stages). 
</span>
</li>

<li key={'kash2'} className="flex items-start">
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
<span className="ml-2">
If you ask for anything extra, we’ll share the price first and wait for 
your go-ahead. Nothing moves without your approval. 

</span>
</li>
</ul>
</div>

{/* RIGHT COLUMN */}
<div className="w-full md:w-[35%] flex items-center justify-end">
  <DynamicContent
    type="img"
    src="/cash.webp"
    teaser="Simple pricing. No Hidden Charges"
    css="w-1/2 h-auto"
  />
</div>



</div>



<div className="text-center mt-18 mb-8 sub-title">
<DynamicContent type="h2" title='Got questions? We’ve got answers' />
<DynamicContent type="p4" title='Everything you need to know about Nexoris Technologies.'  />
</div>


<div>
<Accordion items={faqItems} defaultOpenIndex={0} />
</div>
</div>
</div></>
);
}
