"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import DynamicContent, {Counter, DynamicIcon, useDarkMode} from "@/components/cards"
import ThemeToggle from '@/components/themeToggle'
import { usePathname } from "next/navigation"
import {
ChevronDown, Megaphone,
ArrowRight,
LayoutPanelTop,
Menu,
X,
} from "lucide-react"



const services = [
{ title: "Web Development", icon:'CodeXml', desc: "Learn More about our team and works", url:'/web-development', },
{ title: "SEO & Content Marketing", icon:'Megaphone', desc: "Learn More about our team and works", url:'/seo-content-marketing', },
{ title: "Web Hosting", icon:'AppWindow', desc: "Learn More about our team and works", url:'/web-hosting' },
{ title: "Product Design", icon:'Brush', desc: "Learn More about our team and works", url:'/product-design' },
{ title: "Mobile App Development", icon:'TabletSmartphone', desc: "Learn More about our team and works", url:'/mobile-app-development' },
{ title: "Digital Transformation", icon:'TowerControl', desc: "Learn More about our team and works", url:'/digital-transformation' },
{ title: "Custom Software Solutions", icon:'FolderCode', desc: "Learn More about our team and works", url:'/custom-software-solutions', },
{ title: "Website Maintenance", icon:'Columns3Cog', desc: "Learn More about our team and works", url:'/website-maintenance', },
];

export default function Header() {
const [isOpen, setIsOpen] = useState(false) // desktop dropdown
const [menuOpen, setMenuOpen] = useState(false) // mobile menu
const [darkMode, setDarkMode] = useState(false)
const dropdownRef = useRef<HTMLDivElement>(null);

const { isDark } = useDarkMode();
const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
return (
<header className="mb-3 pb-3 relative w-full border-b border-[#D5D7DA] dark:border-[#D5D7DA] text-gray-900 dark:text-gray-100">
<div className="mx-auto flex items-center justify-between">
{/* LEFT */}
<div className="flex items-center gap-10">
<div className="max-w-[140px]">
<DynamicContent isLink={true} type="img" src='/blue logo.webp' url='/' title='Nexoris Logo' teaser='Go to home page' />
</div>

{/* DESKTOP MENU */}
<nav className={`hidden md:flex items-center gap-8 ${isDark ? "text-gray-100" : "text-gray-900"}`}>
<Link href="/about">
About
</Link>
{/* SERVICES – DESKTOP */}
<div className="relative" ref={dropdownRef}>
<button
onClick={() => setIsOpen(!isOpen)}
className="flex items-center pointer gap-1"
>
Services
<ChevronDown
className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
/>
</button>

{isOpen && (
<div
className="
z-50 
p-6 rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 
bg-white dark:bg-neutral-900

/* MEDIUM: full width at start of screen */
md:fixed md:top-[70px] md:left-0 md:w-screen md:px-8

/* LARGE: normal dropdown under the button */
lg:absolute lg:top-10 lg:left-0 lg:w-[800]
"
>
{services.map((item, idx) => (
<Link href={item.url}
key={idx}
className="flex items-center justify-between mr-10"
aria-label={item.title}
onClick={() => setIsOpen(!isOpen)}
>
<div className="flex items-center gap-4">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#543CDA] text-white shrink-0">{item.icon ? <DynamicIcon name={item.icon} size={28} color="#ffffff" /> : null}
</div>
<div>
<p className="text-base font-semibold text-gray-900">
{item.title}
</p>
<p className="text-sm text-gray-500">{item.desc}</p>
</div>
</div>

<div className="text-[#543CDA] ml-5 font-light"><ArrowRight /></div>
</Link>
))}
</div>
)}
</div>


<Link href="/insights">
Insight
</Link>

<Link href="/careers">
Careers
</Link>
</nav>
</div>

{/* RIGHT */}
<div className="flex items-center gap-3">
{/* Desktop buttons */}
<div  className="hidden md:block"><ThemeToggle /></div>
<div  className="hidden md:block">
<DynamicContent isLink={true} css={`${isDark ? "text-gray-100" : "text-gray-900 bg-white"}`} type="btn1" url='/contact' title='Contact Us' teaser='Go to contact page' /> </div>
<div className="hidden md:block">
<DynamicContent isLink={true} css={`${isDark ? "text-gray-900 bg-white" : "text-gray-100 bg-gray-900"}`} icon={`${isDark ? "text-gray-700 bg-gray-200" : "text-gray-200 bg-gray-700"}`} type="btn1" url='/technical-audit' title='Request a Technical Audit' teaser='Go to Request a Technical Audit page' /></div>
</div>


{/* Mobile toggle */}
<button
className="md:hidden ml-2 text-black dark:text-white"
onClick={() => setMenuOpen(!menuOpen)}
>
{menuOpen ? <X size={28} /> : <Menu size={28} />}
</button>
</div>

{/* MOBILE MENU */}
{menuOpen && (
<div className="md:hidden mt-4 px-4 pb-6 space-y-4 bg-white dark:bg-black">

<Link href="/about" className="block py-2 border-b dark:border-gray-800">
About
</Link>

{/* MOBILE SERVICES */}
<button
className="w-full flex items-center justify-between py-2 border-b dark:border-gray-800"
onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
>
Services
<ChevronDown
className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
/>
</button>

{mobileServicesOpen && (
<div className="pl-4 space-y-3">

<div className="space-y-3">
<MobileServiceItem label="Web Development" />
<MobileServiceItem label="Mobile App Development" />
<MobileServiceItem label="UI/UX Design" />
<MobileServiceItem label="Cloud Solutions" />
<MobileServiceItem label="AI Development" />
<MobileServiceItem label="DevOps & Security" />
</div>

</div>
)}

<Link href="/insight" className="block py-2 border-b dark:border-gray-800">
Insight
</Link>

<Link href="/careers" className="block py-2 border-b dark:border-gray-800">
Careers
</Link>

{/* Mobile buttons */}
<div className="flex flex-col gap-3 pt-4">

<button className="w-full py-2 rounded-lg border border-black dark:border-white text-black dark:text-white">
Get Proposal
</button>

<button className="w-full py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black">
Contact Us
</button>

</div>
</div>
)}
</header>
)
}



function MobileServiceItem({ label }: { label: string }) {
return (
<Link
href="/services"
className="flex items-center justify-between text-gray-700 dark:text-gray-200"
>
{label}
<ArrowRight className="w-4 h-4" />
</Link>
)
}



export function Title() {
const { isDark } = useDarkMode();
const pathname = usePathname()
switch (pathname) {
case "/":
case "/home":
return (<>
</>);


case "/web-development":
return (<>
<div className="relative z-10">
<div className="flex items-center justify-center mt-3 mb-5 sm:mb-8 sm:mt-12">
<div className="border border-gray-300 rounded-3xl bg-white p-2 px-5 w-fit">
Web Development
</div>
</div>
<div className="text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%] dark:text-white">
<DynamicContent type="h1" title='Websites & E-commerce That Load Fast, Rank Well, and Convert '  /> 
</div>
<div className="my-8 text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="p" title={`We design and build modern sites with speed, accessibility, and SEO at their core. We keep them steady with proactive improvements. `}  />
</div>
<div className="mt-4 mb-8">
<div className="w-full flex flex-col sm:flex-row justify-center gap-4">
{/* RIGHT BUTTON — Explore Nexoris Cloud */}
<DynamicContent isLink={true} css='bg-blue-800 text-white' type="btn1" url='/request-a-proposal' title='Get a Proposal' teaser='Get a Proposal' icon='bg-purple-500 text-gray-100' /> 
<DynamicContent isLink={true} css='bg-white text-black' type="btn1" url='/cloud-solutions' title='Explore Nexoris Cloud' teaser='Explore Nexoris Cloud' icon='bg-gray-200 text-gray-900' /> 
</div>
</div>
<div className="my-3 py3">
<DynamicContent type="p4" css='font-bold text-center' title={`Typical LCP ≤ 2.5s • WCAG 2.2 AA targets`}  /></div>
</div>
</>);

default:
return ('');
}
}


export function Cover() {
const pathname = usePathname()
switch (pathname) {
case "/about":
return (
<div className="relative z-20 -mt-60 px-[1%] sm:px-[5%] md:px-[10%] flex justify-center mb-10">
  <div className="bg-white rounded-3xl border border-gray-300 p-6 pt-15 flex justify-center items-center shadow-lg">
    <DynamicContent
      type="img"
      src="/about.webp"
      title="Explore Nexoris Cloud"
      teaser="Explore Nexoris Cloud"
      css="rounded-3xl w-full h-full sm:object-cover object-contain"
    />
  </div>
</div>
);


case "/web-development":
return (
<div className="relative z-20 -mt-60 px-[1%] sm:px-[5%] md:px-[10%] flex justify-center mb-10">
  <div className="bg-white rounded-3xl border border-gray-300 p-6 pt-15 flex justify-center items-center shadow-lg">
    <DynamicContent
      type="img"
      src="/web-development.webp"
      title="Web Development"
      teaser="Websites & E-commerce That Load Fast, Rank Well, and Convert "
      css="rounded-3xl w-full h-full sm:object-cover object-contain"
    />
  </div>
</div>
)

default:
return ('');
}
}