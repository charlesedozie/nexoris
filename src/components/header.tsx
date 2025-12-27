"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import DynamicContent, {DynamicIcon, useDarkMode} from "@/components/cards"
import ThemeToggle from '@/components/themeToggle'
import {
ChevronDown, 
ArrowRight,
X,
} from "lucide-react"




const services = [
{ title: "Web Development", icon:'CodeXml', desc: "Learn More about our team and works", url:'/web-development', },
{ title: "SEO & Content Marketing", icon:'Megaphone', desc: "Learn More about our team and works", url:'/seo-content-marketing', },
{ title: "Cloud Solutions", icon:'AppWindow', desc: "Learn More about our team and works", url:'/cloud-solutions' },
{ title: "Product Design", icon:'Brush', desc: "Learn More about our team and works", url:'/product-design' },
{ title: "Mobile App Development", icon:'TabletSmartphone', desc: "Learn More about our team and works", url:'/mobile-app-development' },
{ title: "Digital Transformation", icon:'TowerControl', desc: "Learn More about our team and works", url:'/digital-transformation' },
{ title: "Custom Software Solutions", icon:'FolderCode', desc: "Learn More about our team and works", url:'/custom-software-solutions', },
{ title: "Website Maintenance", icon:'Columns3Cog', desc: "Learn More about our team and works", url:'/website-maintenance', },
];

export default function Header() {
const [isOpen, setIsOpen] = useState(false) // desktop dropdown
const [menuOpen, setMenuOpen] = useState(false) // mobile menu
const dropdownRef = useRef<HTMLDivElement>(null);
const { isDark } = useDarkMode();

const headerRef = useRef<HTMLElement | null>(null);
const [showFixed, setShowFixed] = useState(false);

useEffect(() => {
    if (!headerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFixed(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);
  
const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
return (
  <>
      {/* NORMAL HEADER */}
<header ref={headerRef} className={`mb-3 pb-3 z-100 relative w-full border-b ${isDark ? " border-b-gray-800 " : " border-b-[#D5D7DA] "}`}>
<div className="mx-auto flex items-center justify-between">
{/* LEFT */}
<div className="flex items-center gap-10">
<div className="max-w-[140px]">
<DynamicContent isLink={true} type="img" src='/blue logo.webp' url='/' title='Nexoris Logo' teaser='Go to home page' />
</div>

{/* DESKTOP MENU */}
<nav className={`hidden md:flex items-center gap-8`}>
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
className={`
z-50 p-6 rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 
 ${isDark ? " darkModeBg " : " bg-white "}

/* MEDIUM: full width at start of screen */
md:fixed md:top-[70px] md:left-0 md:w-screen md:px-8

/* LARGE: normal dropdown under the button */
lg:absolute lg:top-10 lg:left-0 lg:w-[800]
`}
>
{services.map((item, idx) => (
<Link href={item.url}
key={`nav${idx}`}
className="flex items-center justify-between mr-10"
aria-label={item.title}
onClick={() => setIsOpen(!isOpen)}
>
<div className="flex items-center gap-4 items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#543CDA] text-white shrink-0">{item.icon ? <DynamicIcon name={item.icon} size={28} color="#ffffff" />  : null}
</div>
<div>
<p className={`font-semibold ${!isDark ? "text-gray-900" : "text-gray-100"}`}>{item.title}</p>
<p className={`text-sm ${!isDark ? "text-gray-900" : "text-gray-400"}`}>{item.desc}</p>
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
<div className="hidden md:flex items-center gap-4 flex-wrap">
  <ThemeToggle />

  <DynamicContent
    isLink
    type="btn1"
    url="/contact"
    title="Contact Us"
    css={`${isDark ? " darkModeBg " : " bg-white "}`}
    teaser='Go to contact page'
  />

  <DynamicContent
    isLink
    type="btn1"
    url="/technical-audit"
    title="Request a Technical Audit"
    css={`${isDark ? " darkModeBg " : " darkModeBg text-white "}`}
    icon={`y`} 
    iconcss={`${isDark ? " text-gray-700 bg-gray-200 " : "text-gray-200 bg-gray-700"}`} 
    teaser='Go to Request a Technical Audit page'
  />




</div>
</div>


{/* Mobile toggle */}
{/* Mobile menu */}
<button
  className="md:hidden ml-2 "
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? "Close menu" : "Open menu"}       // descriptive label
  aria-expanded={menuOpen}                                 // true if menu is open
  aria-controls="mobile-menu"                               // id of the mobile menu container
>
{menuOpen ? <X size={28} /> : isDark ? <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3335 5.8335H4.66683" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.3335 14H4.66683" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.3335 22.1665H11.6668" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
 : <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.334 5.8335H4.66732" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.334 14H4.66732" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.334 22.1665H11.6673" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}
</button>
</div>

{/* MOBILE MENU */}
{menuOpen && (
<div className={`md:hidden mt-4 px-4 pb-6 space-y-4  ${isDark ? " darkModeBg " : " bg-white "}`}>
<Link href="/about" className="block py-2 border-b border-gray-300">
About
</Link>

{/* MOBILE SERVICES */}
{/* MOBILE SERVICES */}
<button
  className="w-full flex items-center justify-between py-2 border-b border-gray-300"
  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
>
  Services
  <ChevronDown
    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
  />
</button>

{mobileServicesOpen && (
  <div className="pl-4 space-y-3">
    {services.map((item, idx) => (
      <Link
        key={idx}
        href={item.url}
        className="flex items-center justify-between py-2"
        onClick={() => setMenuOpen(false)} // optional: close menu on click
      >
        <span>{item.title}</span>
        <ArrowRight className="w-4 h-4 text-[#543CDA]" />
      </Link>
    ))}
  </div>
)}





<Link href="/insights" className="block py-2 border-b border-gray-300">
Insight
</Link>

<Link href="/careers" className="block py-2 border-b border-gray-300">
Careers
</Link>

{/* Mobile buttons */}
<div className="flex flex-col gap-3 pt-4">
<div className="flex justify-between items-center"><span>Darck mode</span> <ThemeToggle /></div>



  <DynamicContent
    isLink
    type="btn1"
    url="/contact"
    title="Contact Us"
    css={isDark ? "text-gray-100" : "text-gray-900 bg-white"}
    teaser='Go to contact page'
  />

  <DynamicContent
    isLink
    type="btn1"
    url="/technical-audit"
    title="Request a Technical Audit"
    css={isDark ? "text-gray-900 bg-white" : "text-gray-100 bg-gray-900"} 
    icon={`${isDark ? "text-gray-700 bg-gray-200" : "text-gray-200 bg-gray-700"}`} 
    teaser='Go to Request a Technical Audit page'
  />
</div>
</div>
)}
</header>

      {/* FIXED HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-100 border-b mb-3 px-[3%] py-[2%] sm:px-[2%] sm:py-[1%]
          ${isDark ? " border-b-gray-800 bg-[#0a0a0a] " : " border-b-[#D5D7DA] card-surface "}
          ${showFixed ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >

<div className="mx-auto flex items-center justify-between">
{/* LEFT */}
<div className="flex items-center gap-10">
<div className="max-w-[140px]">
<DynamicContent isLink={true} type="img" src='/blue logo.webp' url='/' title='Nexoris Logo' teaser='Go to home page' />
</div>

{/* DESKTOP MENU */}
<nav className={`hidden md:flex items-center gap-8`}>
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
className={`
z-50 p-6 rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 
 ${isDark ? " darkModeBg " : " bg-white "}

/* MEDIUM: full width at start of screen */
md:fixed md:top-[70px] md:left-0 md:w-screen md:px-8

/* LARGE: normal dropdown under the button */
lg:absolute lg:top-10 lg:left-0 lg:w-[800]
`}
>
{services.map((item, idx) => (
<Link href={item.url}
key={idx}
className="flex items-center justify-between mr-10"
aria-label={item.title}
onClick={() => setIsOpen(!isOpen)}
>
<div className="flex items-center gap-4 items-center">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#543CDA] text-white shrink-0">{item.icon ? <DynamicIcon name={item.icon} size={28} color="#ffffff" />  : null}
</div>
<div>
<p className={`font-semibold ${!isDark ? "text-gray-900" : "text-gray-100"}`}>{item.title}</p>
<p className={`text-sm ${!isDark ? "text-gray-900" : "text-gray-400"}`}>{item.desc}</p>
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
<div className="hidden md:flex items-center gap-4 flex-wrap">
  <ThemeToggle />

  <DynamicContent
    isLink
    type="btn1"
    url="/contact"
    title="Contact Us"
    css={`${isDark ? " darkModeBg " : " bg-white "}`}
    teaser='Go to contact page'
  />

  <DynamicContent
    isLink
    type="btn1"
    url="/technical-audit"
    title="Request a Technical Audit"
    css={`${isDark ? " darkModeBg " : " darkModeBg text-white "}`}
    icon={`y`} 
    iconcss={`${isDark ? " text-gray-700 bg-gray-200 " : "text-gray-200 bg-gray-700"}`} 
    teaser='Go to Request a Technical Audit page'
  />




</div>
</div>


{/* Mobile toggle */}
{/* Mobile menu */}
<button
  className="md:hidden ml-2 "
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? "Close menu" : "Open menu"}       // descriptive label
  aria-expanded={menuOpen}                                 // true if menu is open
  aria-controls="mobile-menu"                               // id of the mobile menu container
>
{menuOpen ? <X size={28} /> : isDark ? <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3335 5.8335H4.66683" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.3335 14H4.66683" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.3335 22.1665H11.6668" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
 : <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.334 5.8335H4.66732" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.334 14H4.66732" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.334 22.1665H11.6673" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}
</button>
</div>

{/* MOBILE MENU */}
{menuOpen && (
<div className={`md:hidden mt-4 px-4 pb-6 space-y-4  ${isDark ? " darkModeBg " : " bg-white "}`}>
<Link href="/about" className="block py-2 border-b border-gray-300">
About
</Link>

{/* MOBILE SERVICES */}
<button
className="w-full flex items-center justify-between py-2 border-b border-gray-300"
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
<MobileServiceItem label="Web Development 333" url="/web-development" />
<MobileServiceItem label="Mobile App Development" url="/mobile-app-development" />
<MobileServiceItem label="Cloud Solutions" url="/cloud-solutions" />
<MobileServiceItem label="Product Design" url="/product-design" />
<MobileServiceItem label="SEO & Content Marketing" url="/seo-content-marketing" />
<MobileServiceItem label="Digital Transformation" url="/digital-transformation" />
<MobileServiceItem label="Custom Software Solutions" url="/custom-software-solutions" />
<MobileServiceItem label="Website Maintenance" url="/website-maintenance" />
</div>
</div>
)}

<Link href="/insights" className="block py-2 border-b border-gray-300">
Insight
</Link>

<Link href="/careers" className="block py-2 border-b border-gray-300">
Careers
</Link>

{/* Mobile buttons */}
<div className="flex flex-col gap-3 pt-4">
<div className="flex justify-between items-center"><span>Darck mode</span> <ThemeToggle /></div>



  <DynamicContent
    isLink
    type="btn1"
    url="/contact"
    title="Contact Us"
    css={isDark ? "text-gray-100" : "text-gray-900 bg-white"}
    teaser='Go to contact page'
  />

  <DynamicContent
    isLink
    type="btn1"
    url="/technical-audit"
    title="Request a Technical Audit"
    css={isDark ? "text-gray-900 bg-white" : "text-gray-100 bg-gray-900"} 
    icon={`${isDark ? "text-gray-700 bg-gray-200" : "text-gray-200 bg-gray-700"}`} 
    teaser='Go to Request a Technical Audit page'
  />
</div>
</div>
)}
      </header>
    </>
)
}


function MobileServiceItem({ label, url }: { label: string, url: string }) {
return (
<Link
href={url}
className="flex items-center justify-between"
>
{label}
<ArrowRight className="w-4 h-4" />
</Link>
)
}
