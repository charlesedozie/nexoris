"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import Image from "next/image";
import { useTheme } from 'next-themes'; // Import from next-themes (or your theme library)
import Link from 'next/link';
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FProps } from '@/types'; 
import { usePathname } from "next/navigation";
import {
  icons,
  LucideProps,
  LucideIcon,
  ChevronDown
} from "lucide-react";


interface DynamicIconProps extends LucideProps {
  name: string;
}

type FooterSubject = {
  id: string;            // the section key (e.g. "home")
  title: string;
  teaser: string;
  tagline: string | React.ReactNode; 
  proposalTitle: string;
  proposalLink: string;
  cloudTitle: string;
  cloudLink: string; 
};

export const footerItems: FooterSubject[] = [
  {
    id: "home",
    title: "End-to-End Delivery and Care for Your Digital Presence",
    teaser: "We define the scope, build fast and secure sites, host on Nexoris Cloud with backups and monitoring, and keep improving performance, UX, and SEO over time.",
    tagline: 'We reply within one business day',
    proposalTitle: "Get a Proposal",
    proposalLink: "/request-a-proposal",
    cloudTitle: "Explore Nexoris Cloud",
    cloudLink: "/cloud-solutions",
  },
  {
    id: "about",
    title: "Tell us your goals. We’ll send a clear plan, timeline, and cost.",
    teaser: "We define the scope, build fast and secure sites, host on Nexoris Cloud with backups and monitoring, and keep improving performance, UX, and SEO over time. ",
    tagline: (
    <>
      Prefer to talk first?{" "} <DynamicContent type="link" title='Contact' url='/contact' css="mx-2 def-link-style"  />
    </>
  ),
   proposalTitle: "Get a Proposal",
    proposalLink: "/request-a-proposal",
    cloudTitle: "Explore Nexoris Cloud",
    cloudLink: "/cloud-solutions",
  },
    {
    id: "cloud-solutions",
    title: "Tell us your goals. We’ll send a clear plan, timeline, and cost.",
    teaser: "Move to Nexoris Cloud today. We handle the migration, testing, and go live with you",
    tagline: (
    <>
      We reply within one business day.
    </>
  ),
   proposalTitle: "Move to Nexoris Cloud today",
    proposalLink: "https://www.nexoriscloud.com",
    cloudTitle: "Talk to a hosting expert",
    cloudLink: "/contact",
  },
      {
    id: "digital-transformation",
    title: "Tell us your goals. We’ll send a clear plan, timeline, and cost.",
    teaser: "We define the scope, build fast and secure sites, host on Nexoris Cloud with backups and monitoring, and keep improving performance, UX, and SEO over time. ",
    tagline: (
    <>
      We reply within one business day.
    </>
  ),
   proposalTitle: "Get a Proposal",
    proposalLink: "/request-a-proposal",
    cloudTitle: "Request a technical audit",
    cloudLink: "/technical-audit",
  },
        {
    id: "digital-transformation",
    title: "Tell us your goals. We’ll send a clear plan, timeline, and cost.",
    teaser: "We define the scope, build fast and secure sites, host on Nexoris Cloud with backups and monitoring, and keep improving performance, UX, and SEO over time. ",
    tagline: (
    <>
      We reply within one business day.
    </>
  ),
   proposalTitle: "Get a Proposal",
    proposalLink: "/request-a-proposal",
    cloudTitle: "Request a technical audit",
    cloudLink: "/technical-audit",
  },

     {
    id: "website-maintenance",
    title: "Keep your site fast, secure, and reliable.",
    teaser: "Tell us your goals and current setup - we’ll reply with a clear plan, timeline, and cost. ",
    tagline: (
    <>
      We reply within one business day.
    </>
  ),
   proposalTitle: "Get a Proposal",
    proposalLink: "/request-a-proposal",
    cloudTitle: "Request a technical audit",
    cloudLink: "/technical-audit",
  },
        {
    id: "product-design",
    title: "Tell us your goals. We’ll send a clear plan, timeline, and cost.",
    teaser: "We define the scope, build fast and secure sites, host on Nexoris Cloud with backups and monitoring, and keep improving performance, UX, and SEO over time. ",
    tagline: (
    <>
      We reply within one business day.
    </>
  ),
   proposalTitle: "Get a Proposal",
    proposalLink: "/request-a-proposal",
    cloudTitle: "Request a technical audit",
    cloudLink: "/technical-audit",
  },
    {
    id: "technical-audit",
    title: "Tell us your goals. We’ll send a clear plan, timeline, and cost.",
    teaser: "We define the scope, build fast and secure sites, host on Nexoris Cloud with backups and monitoring, and keep improving performance, UX, and SEO over time. ",
    tagline: 'We reply within one business day',
    proposalTitle: "Get a Proposal",
    proposalLink: "/request-a-proposal",
    cloudTitle: "Explore Nexoris Cloud",
    cloudLink: "/cloud-solutions",
  },
    {
    id: "request-a-proposal",
    title: "Tell us your goals. We’ll send a clear plan, timeline, and cost.",
    teaser: "We define the scope, build fast and secure sites, host on Nexoris Cloud with backups and monitoring, and keep improving performance, UX, and SEO over time. ",
    tagline: 'We reply within one business day',
    proposalTitle: "Get a Proposal",
    proposalLink: "/request-a-proposal",
    cloudTitle: "Explore Nexoris Cloud",
    cloudLink: "/cloud-solutions",
  },
      {
    id: "seo-content-marketing",
    title: "Ready to turn search into a reliable pipeline?",
    teaser: "Tell us your goals. We’ll come back with a clear plan, timeline, and pricing.",
    tagline: 'We reply within one business day',
    proposalTitle: "Get a Proposal",
    proposalLink: "/request-a-proposal",
    cloudTitle: "Request a technical audit",
    cloudLink: "/technical-audit",
  },
      {
    id: "mobile-app-development",
    title: "Ready to build your app?",
    teaser: "Tell us your goals and we’ll send a clear plan, timeline, and cost.",
    tagline: 'We reply within one business day (Mon–Fri, 9–6 WAT).',
    proposalTitle: "Get a Proposal",
    proposalLink: "/request-a-proposal",
    cloudTitle: "Request an App Audit",
    cloudLink: "/technical-audit",
  },
  
{
id: "custom-software-solutions",
title: "Start your project",
teaser: "Tell us your goals and we’ll send a clear plan, timeline, and cost.",
tagline: 'We reply within one business day (Mon–Fri, 9–6 WAT).',
proposalTitle: "Move to Nexoris Cloud today",
proposalLink: "https://www.nexoriscloud.com",
cloudTitle: "Talk to a hosting expert",
cloudLink: "/contact",
},
        {
    id: "web-development",
    title: "Ready to launch a fast, secure site?",
    teaser: "Tell us your goals and we’ll send a clear plan, timeline, and cost.",
    tagline: 'We reply within one business day (Mon–Fri, 9–6 WAT).',
    proposalTitle: "Get a Proposal",
    proposalLink: "/request-a-proposal",
    cloudTitle: "Request an App Audit",
    cloudLink: "/technical-audit",
  },

];

// Types for the props
export interface DetailItem {
[key: string]: any;
}

export interface ContentProps {
type: string;
section?: string;
title?: string;
tagline?: string;
teaser?: string;
iconcss?: string;
url?: string;
css?: string;
src?: string;
biconname?: string;
biconcss?: string;
bicon?: string;
linkCss?: string;
icon?: string;
iconname?: string;
btntype?: "button" | "submit" | "reset";
iconposition?: string;
isLink?: Boolean; 
children?: ReactNode;
details?: DetailItem[];
}

export function BackToTopButton() {const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
const toggleVisibility = () => {
setIsVisible(window.scrollY > 80);
};

window.addEventListener("scroll", toggleVisibility);
return () => window.removeEventListener("scroll", toggleVisibility);
}, []);

const scrollToTop = () => {
window.scrollTo({ top: 0, behavior: "smooth" });
};

return (
<button
onClick={scrollToTop}
aria-label="Back to top"
title="Back to top"
className={`fixed bottom-6 left-6 z-[9999] pointer flex items-center justify-center w-12 h-12 rounded-full bg-[#14265C] text-white shadow-lg transition-all duration-300 hover:bg-gray-700 ${
isVisible
? "opacity-100 translate-y-0"
: "opacity-0 translate-y-10 pointer-events-none"
}`}
>
<ArrowUp className="w-6 h-6" />
</button>
);
}


export function WhatsAppConnect() { const [isMobile, setIsMobile] = useState(false);
const [isVisible, setIsVisible] = useState(false);

// Detect mobile devices
useEffect(() => {
const checkMobile = () => {
const ua = navigator.userAgent || navigator.vendor || "";
setIsMobile(
/android|iphone|ipad|ipod|mobile/i.test(ua) || window.innerWidth <= 768
);
};

checkMobile();
window.addEventListener("resize", checkMobile);
return () => window.removeEventListener("resize", checkMobile);
}, []);

// Show button after scrolling 200px
useEffect(() => {
const handleScroll = () => setIsVisible(window.scrollY > 200);
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

// if (!isMobile || !isVisible) return null; // show / hide for desktop

const phoneNumber = "2348012345678"; // Replace with your WhatsApp number
const message = encodeURIComponent("Hello! I’d like to connect with you.");
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

return (
<a
href={whatsappUrl}
target="_blank"
rel="noopener noreferrer"
aria-label="Chat on WhatsApp"
className="fixed bottom-22 right-6 z-[9999] bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transform transition-all duration-300 hover:scale-110"
>
<FaWhatsapp className="w-7 h-7" />
</a>
);
}



// Main component
export default function DynamicContent({ type, btntype, children, section, title, url, css, iconname, biconname, biconcss, bicon, linkCss, src, icon, isLink, teaser, iconcss, iconposition, details = [] }: ContentProps) {
// New: type variants
const { isDark } = useDarkMode();
const renderByType = () => {
switch (type) {
case "img":
return (
<Link href={`${url}`} className="def-link-style">
<Image
src="/custom.webp"
alt="custom"
width={1000}
height={400}
className="block max-w-full h-auto"
priority   // ← IMPORTANT FOR LCP
fetchPriority="high"
placeholder="empty"
quality={75}
/>
</Link>
);


default:
return <div>Unknown type: {type}</div>;
}
};

// New: section variants
const renderBySection = () => {
switch (type) {
case "img":
return (<>
{isLink ? (
<Link
href={`${url}`}
aria-label={teaser}
className="inline-block focus:outline-none" // disables focus ring
target={section ? "_blank" : undefined}   // Open external links in new tab
rel={section ? "noopener noreferrer" : undefined} // Safe external links
>
<Image
src={src || "/plc.webp"}
alt={title || ''}
title={title || ''}
width={1000}
height={400}
priority
className={`block max-w-full h-auto cursor-pointer select-none ${css || ''}`}
unoptimized
/>
</Link>
) : (

<Image
  src={src || "/plc.webp"}
  alt={title || ''}
  title={title || ''}
  width={2500}
  height={1000}
  priority
  unoptimized
  className={`block select-none ${css || ""}`}
 />

)}
</>
);

case "btn1":
return (<>
{isLink ? (
<Link
href={url || "#"}
aria-label={teaser || ""}
target={section ? "_blank" : undefined}   // Open external links in new tab
rel={section ? "noopener noreferrer" : undefined} // Safe external links
className={linkCss || "def-link-style"}>


<button 
type={btntype || "button"}
role="button"
aria-label={title || "Button"}
className={`group m-0 w-full sm:w-fit hover:opacity-90 items-center justify-between gap-2 pointer font-medium rounded-full flex items-center justify-between transition ${!icon && !bicon ? 'py-3' : ''} ${css || " bg-[#543CDA] text-white "}`}>

  
{bicon ? <span className={`${biconcss || ` bg-[#4D3BAD] `} p-3 rounded-full`}>
<DynamicIcon size={20} name={biconname || `ArrowRight`} aria-hidden="true" /></span> : '' }

<span className="px-6 text-sm">{title || ""}</span>

{icon ? <span className={`${iconcss || ` bg-[#4D3BAD] `} p-3 rounded-full`}>
<DynamicIcon size={20} name={iconname || `ArrowRight`} aria-hidden="true" /></span> : '' }
</button>
</Link>

) : (

<button 
type="button"
role="button"
aria-label={title || "Button"}
className={`group m-0 w-full sm:w-fit hover:opacity-90 items-center justify-between gap-2 pointer font-medium rounded-full flex items-center justify-between transition ${!icon && !bicon ? 'py-3' : ''} ${css || "bg-[#543CDA] "}`}>

  
{bicon ? <span className={`${biconcss || ` bg-[#4D3BAD] `} p-4 rounded-full`}>
<DynamicIcon size={20} name={biconname || `ArrowRight`} aria-hidden="true" /></span> : '' }

<span className="px-8 text-sm">{title || ""}</span>

{icon ? <span className={`${iconcss || ` bg-[#4D3BAD] `} p-4 rounded-full`}>
<DynamicIcon size={20} name={iconname || `ArrowRight`} aria-hidden="true" /></span> : '' }
</button>
)}
</>
);

case "link":
return (  <Link
href={url || '#'}
aria-label={teaser || ''}          // Screen readers
target={section ? "_blank" : undefined}   // Open external links in new tab
rel={section ? "noopener noreferrer" : undefined} // Safe external links
className={`focus:outline-none ${css || ''}
`}>{title}</Link>);

case "h1":
return (  
<h1 className={`mb-2 font-semibold leading-relaxed text-2xl sm:text-3xl md:text-5xl ${css || ''}`}>{title}</h1>);

case "h2":
return (  <h2 className={`mb-2 text-xl sm:text-2xl md:text-4xl font-semibold leading-relaxed ${css || ''}`}>{title}</h2>
);

case "p2":
return (<p className={`text-xl leading-relaxed ${css || ''}`}>{title}</p>);

case "p3":
return (<p className={`text-lg sm:text-xl leading-relaxed ${css || ''}`}>{title}</p>);

case "p4":
return (<p className={`text-base md:text-lg leading-relaxed ${css || ''}`}>
{title}</p>);

case "p": return ( <p className={`p-base-res ${css || ''}`}>{title || ''} {children || ''}</p>);
case "card":
if (!section) return '';
switch (section) {
case "home_engineered":
return (<div className="p-5 h-full flex flex-col">
<div className="w-[58px] space-y-2 shrink-0 mb-4"><DynamicContent type="img" src={src} teaser={title || ``} /></div>
<div className="space-y-2 mb-3 font-bold"><DynamicContent css={css || ``} type="p4" title={title || ``}  /></div>
<div className="space-y-2"><DynamicContent type="p" title={teaser || ``}  /></div>
</div>);

default:
return (<div></div>);
}


case "footer":
if (!section) return '';
const footerItem = getFooterSubject(section);
return <div
className="flex flex-wrap mb-10 bg-[#17142966] bg-cover bg-no-repeat bg-center p-2 sm:px-10 rounded-3xl" style={{ backgroundImage: "url('/bgfoot.webp')" }}>
{/* LEFT COLUMN — full width on mobile, left half on md+ */}
<div className="w-full md:w-1/2 p-1 sm:p-4 mb-8 sm:mb-4">
<DynamicContent type="h2"  title={footerItem?.title ?? ""}  /> 
<p className="silver pr-8">{footerItem?.teaser ?? ""}</p>
</div>

{/* RIGHT COLUMN — full width on mobile, right half on md+ */}
<div className="w-full md:w-1/2 p-4 flex items-end justify-end">
<div className='pl-[3%]'>
  <div className="">
  <div className="w-full flex flex-col sm:flex-row justify-center gap-4 flex-wrap lg:flex-nowrap">
    {/* RIGHT BUTTON — Explore Nexoris Cloud */}


     <DynamicContent isLink={true} css=' bg-[#543CDA] text-gray-100 ' type="btn1" url={footerItem?.proposalLink ?? ""} title={footerItem?.proposalTitle ?? ""} teaser={footerItem?.proposalTitle ?? ""} icon='bg-[#4D3BAD] text-gray-100' /> 
     <DynamicContent isLink={true} css={`${isDark ? " darkModeBg text-gray-200 " : " bg-white text-gray-900 "}`} type="btn1" url={footerItem?.cloudLink ?? ""} title={footerItem?.cloudTitle ?? ""} teaser={footerItem?.cloudTitle ?? ""} icon='y' iconcss={` text-gray-200 bg-gray-700 `} /> 

  </div></div>
  <div className='silver mt-4 italic'>{footerItem?.tagline ?? ""}</div>
</div>
</div>
</div>
;


case "content":
return <div>{renderByType()}</div>;
default:
return <div>Unknown:</div>;
}
};

return renderBySection();
}



export  function Counter(options: FProps) {
  const [startTime, setStartTime] = useState<number>(0);
  const [now, setNow] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const ref = useRef<number>(0);
  const refbox = useRef<HTMLElement | null>(null);

  const handleStart = () => {
    setStartTime(0);
    const max = parseInt(options.string1 ?? '0');

    if (!isNaN(max) && ref.current < max) {
      setNow(ref.current + 1);
    }

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (ref.current < max) {
        ref.current += 1;
        setNow(ref.current);
      }

      if (ref.current >= max) {
        clearInterval(intervalRef.current!);
        document.removeEventListener('scroll', handleStop);
      }
    }, 10);
  };

  const handleStop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const isInViewport = (box: HTMLElement | null): boolean => {
    if (!box) return false;
    const rect = box.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    refbox.current = document.querySelector(`#counter${options.string1}`) as HTMLElement | null;

    const onScroll = () => {
      if (isInViewport(refbox.current)) {
        handleStart();
      }
    };

    if (isInViewport(refbox.current)) {
      handleStart();
    }

    document.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', onScroll);
      handleStop();
    };
  }, []);

  const secondsPassed = now - startTime;

  return (
    <span className={`${options.string3}`} id={`counter${options.string1}`}>
      {secondsPassed}
    </span>
  );
}



export function ScrollToTop() {
const pathname = usePathname();
useEffect(() => {
window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}, [pathname]);

return null;
}


export function DynamicIcon({ name, ...props }: DynamicIconProps) {
const formattedName =
name.charAt(0).toUpperCase() + name.slice(1);
const Icon =
(icons as Record<string, LucideIcon>)[formattedName];
if (!Icon) return null;
return <Icon {...props} />
}


interface TitleProps {
  title: string;
  className?: string;
  counter?: string;
  title2?: string;
  url?: string;
  css2?: string;
  css1?: string;
  iconcss2?: string;
  iconcss1?: string;
}

export const Title: React.FC<TitleProps> = ({ title, className = "", counter, title2 }) => {
const { isDark } = useDarkMode();
return <div className={`${className} border rounded-3xl p-2 px-5 w-fit ${isDark ? "border-gray-800 text-gray-200" : "text-gray-900 bg-white border-gray-300"}`}>{title}{counter ? <Counter string1="100" string2="homePage" /> : ''}{title2 ? title2 : ''}
</div>;
};


export const DBtn: React.FC<TitleProps> = ({ title, css1, css2,  url, iconcss2, iconcss1 }) => {
const { isDark } = useDarkMode();
return <DynamicContent isLink={true} css={`${isDark ? css2 : css1}`} type="btn1" url={url ? url : '#'} title={title} teaser={title} icon='y' iconcss={`${isDark ? iconcss2 : iconcss1}`}  />;
};


type ArrowLineProps = {
  direction: "right" | "up" | "down" | "left"; // extendable
};

export function ArrowLine({ direction }: ArrowLineProps) {
  const renderArrow = () => {
    switch (direction) {
      case "right":
        return (
          <div
            className="w-0 h-0 border-l-[10px] border-l-black border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent -ml-[3px] relative bottom-0"
          ></div>
        );
      case "up":
        return (
          <div
            className="w-0 h-0 border-b-[10px] border-b-black border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent -ml-[3px] relative bottom-0"
          ></div>
        );
      case "down":
        return (
          <div
            className="w-0 h-0 border-t-[10px] border-t-black border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent -ml-[3px] relative bottom-0"
          ></div>
        );
      case "left":
        return (
          <div
            className="w-0 h-0 border-r-[10px] border-r-black border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent -ml-[3px] relative bottom-0"
          ></div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1">
      <div className="flex items-center w-[100%] h-[30px] relative">
        {/* Horizontal Line */}
        {direction == 'left' ? renderArrow() : null }        
        <div className="flex-1 border-b-[3px] border-black h-0 -ml-[3px] relative bottom-0"></div>
       {direction == 'right' ? renderArrow() : null }
      </div>
    </div>
  );
}


export function getFooterSubject(section: string) {
  return footerItems.find(item => item.id === section) || null;
}

export const useDarkMode = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return { isDark, mounted };
};


export function Policy() {const contentRef = useRef<HTMLDivElement>(null);
  const [canAccept, setCanAccept] = useState(false);

  const handleScroll = () => {
    const el = contentRef.current;
    if (!el) return;

    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight - el.clientHeight;

    const scrolledRatio = scrollTop / scrollHeight;

    // Enable button after user scrolls more than half
    if (scrolledRatio >= 0.5) {
      setCanAccept(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h2 className="text-xl font-semibold">Policy Agreement</h2>

      {/* Scrollable Policy Content */}
      <div
        ref={contentRef}
        onScroll={handleScroll}
        className="h-64 overflow-y-auto border p-4 rounded-lg bg-white"
      >
        {/* Your policy text here (long content) */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus 
          euismod nunc sit amet nulla dapibus, vitae aliquam lacus fermentum.
          Pellentesque habitant morbi tristique senectus et netus et malesuada 
          fames ac turpis egestas. Suspendisse potenti. Sed non ligula leo.
          <br/><br/>
          {/* Repeat or insert your real policy */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
          tincidunt, sapien at sollicitudin bibendum, justo massa ultrices 
          orci, vitae dapibus lorem lorem sed dui. 
          <br/><br/>
          More text...
        </p>
      </div>

      {/* Accept Button */}
      <button
        disabled={!canAccept}
        className={`w-full py-3 rounded-lg text-white transition
          ${canAccept ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"}
        `}
      >
        Accept Policy
      </button>
    </div>
  );
}

export function Terms() {const contentRef = useRef<HTMLDivElement>(null);
  const [canAccept, setCanAccept] = useState(false);

  const handleScroll = () => {
    const el = contentRef.current;
    if (!el) return;

    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight - el.clientHeight;

    const scrolledRatio = scrollTop / scrollHeight;

    // Enable button after user scrolls more than half
    if (scrolledRatio >= 0.5) {
      setCanAccept(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h2 className="text-xl font-semibold">Policy Agreement</h2>

      {/* Scrollable Policy Content */}
      <div
        ref={contentRef}
        onScroll={handleScroll}
        className="h-64 overflow-y-auto border p-4 rounded-lg bg-white"
      >
        {/* Your policy text here (long content) */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus 
          euismod nunc sit amet nulla dapibus, vitae aliquam lacus fermentum.
          Pellentesque habitant morbi tristique senectus et netus et malesuada 
          fames ac turpis egestas. Suspendisse potenti. Sed non ligula leo.
          <br/><br/>
          {/* Repeat or insert your real policy */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
          tincidunt, sapien at sollicitudin bibendum, justo massa ultrices 
          orci, vitae dapibus lorem lorem sed dui. 
          <br/><br/>
          More text...
        </p>
      </div>

      {/* Accept Button */}
      <button
        disabled={!canAccept}
        className={`w-full py-3 rounded-lg text-white transition
          ${canAccept ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"}
        `}
      >
        Accept Policy
      </button>
    </div>
  );
}




type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenIndex?: number | null;
};

export function Accordion({
  items,
  defaultOpenIndex = null,
}: AccordionProps) {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex
  );

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


const { isDark } = useDarkMode();
  return (
    <div className="w-full max-w-5xl mx-auto space-y-4 mt-14">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all
              ${
                isDark
                  ? "border-zinc-800 bg-zinc-900 text-zinc-100"
                  : "border-gray-200 bg-white text-gray-900"
              }
              hover:shadow-md`}
          >
            {/* Header */}
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none"
            >
              <span className="text-base font-semibold pointer">
                {item.question}
              </span>

              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform duration-300 pointer 
                  ${isOpen ? "rotate-180" : ""}
                  ${isDark ? "text-zinc-400" : "text-gray-500"}`}
              />
            </button>

            {/* Content */}
            <div
              className={`grid transition-all duration-300 ease-in-out
                ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
            >
              <div
                className={`overflow-hidden px-5 pb-5 leading-relaxed
                  ${
                    isDark
                      ? "text-zinc-300"
                      : "text-gray-600"
                  }`}
              >
                <span dangerouslySetInnerHTML={{ __html: item.answer }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}



