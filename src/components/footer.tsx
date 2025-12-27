"use client";

import Link from 'next/link';
import Image from 'next/image';
//import CookieConsentBanner from "@/components/cookie";
import {WhatsAppConnect} from "@/components/cards";
import { MapPin, Mail, Phone } from "lucide-react";
import DynamicContent from "@/components/cards"
import { Linkedin, Instagram, Facebook } from "lucide-react"
import { SiTiktok, SiX } from "react-icons/si"
import { usePathname } from "next/navigation";

const footerLinks = [
  { label: "About", href: "/about", teaser:'Go to about page' },
  { label: "Insights", href: "/insights", teaser:'Go to insights page' },
  { label: "Careers", href: "/careers", teaser:'Go to careers page' },
];

const footerLinks1 = [
  { label: "Contact", href: "/contact", teaser:'Go to contact page' },
  { label: "Technical Audit", href: "/technical-audit", teaser:'Go to technical audit page' },
  { label: "Privacy Policy", href: "/privacy-policy", teaser:'Go to privacy policy page' },
  { label: "Cookie Policy", href: "/cookie-policy", teaser:'Go to privacy policy page' },
  { label: "Terms of Service", href: "/terms-of-service", teaser:'Go to terms of services page' },
];

function Footer(){ 
const pathname = usePathname();
const isHome = ["/insights", "/services", '/careers', '/contact', '/privacy-policy',  '/cookie-policy', '/terms-of-service'].some(p => pathname.startsWith(p) );
const section = pathname === "/" || isHome ? "home" : pathname.replace("/", "");
return (<div className='p-[1%] sm:p-[2%] sm:pb-[1%] md:pb-[1%] footerBg rounded-3xl text-white mt-30'>
<WhatsAppConnect />
<DynamicContent type="footer" section={section} />
<div className="flex flex-wrap p-3">
<div className="w-full sm:w-1/2">
<div>
<Link aria-label={`Go to home page`}
title={`Go to home page`} href="/">
<Image src="/nexoris white logo.webp" 
alt="Nexoris logo" title='Nexoris logo' width={150}
height={70} priority 
className="sm:mx-0" />
</Link>
</div>
<p className='text-[#B3B3B3] mt-3 mb-4'>We plan, design, and build digital products 
that perform.</p>

<div className="space-y-2 text-base text-[#B3B3B3]">
<div className="flex items-center gap-4">
<MapPin className="w-5 h-5 text-[#B3B3B3]" />
<span>Lagos, Nigeria</span>
</div>

<div className="flex items-center gap-4">
<Mail className="w-5 h-5 text-[#B3B3B3]" />
<span>hello@nexoristech.com</span>
</div>

<div className="flex items-center gap-4">
<Phone className="w-5 h-5 text-[#B3B3B3]" />
<span>+234 913 813 3224</span>
</div>
</div>
</div>

<div className="w-full sm:w-1/2 mt-20 sm:mt-0">
<div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-4">
<div>
<div className="grid grid-cols-2 gap-5 w-full">
<div>
<div className='mb-3'>HOME</div>
<div className="flex flex-col gap-1 text-[#B3B3B3] mb-5">
{footerLinks.map((item, index) => (
<div key={index}>
<DynamicContent css='def-link-style' type="link" url={item.href} title={item.label} teaser={item.teaser}  /> 
</div>
))}
</div>
</div>

<div>
<div className='mb-3'>QUICK LINKS</div>
<div className="flex flex-col gap-1 text-[#B3B3B3] mb-5">
{footerLinks1.map((item, index) => (
<div key={index}>
<DynamicContent css='def-link-style' type="link" url={item.href} title={item.label} teaser={item.teaser}  /> 
</div>
))}
</div>
</div>
</div>


</div>
<div>
<div className='mb-3'>SOCIAL MEDIA</div>
 <div className="w-full flex justify-start">
      <div className="flex flex-nowrap gap-2">

        {/* LinkedIn (Filled) */}

<Link
  href="https://linkedin.com/"
  aria-label="LinkedIn"
  target={"_blank"}   // Open external links in new tab
 rel={"noopener noreferrer"} 
  className="
    flex items-center justify-center
    w-10 h-10
    rounded-full text-white
    hover:scale-110 transition
  "
>
  <Linkedin className="w-2/3 h-2/3 fill-white" />
</Link>

        {/* Instagram */}
        <a
          href="#"
          aria-label="Instagram"
          className="
            flex items-center justify-center
            w-10
            h-10
            rounded-full text-white
            hover:scale-110 transition
          "
        >
          <Instagram className="w-2/3 h-2/3" />
        </a>

        {/* Facebook (Filled) */}
        <a
          href="#"
          aria-label="Facebook"
          className="
            flex items-center justify-center
            w-10
            h-10
            rounded-full text-white
            hover:scale-110 transition
          "
        >
          <Facebook className="w-2/3 h-2/3 fill-white" />
        </a>

        {/* X (Better icon) */}
        <a
          href="#"
          aria-label="X (Twitter)"
          className="
            flex items-center justify-center
            w-10
            h-10
            rounded-full text-white 
            hover:scale-110 transition
          "
        >
          <SiX className="w-2/3 h-2/3" />
        </a>

        {/* TikTok */}
        <a
          href="#"
          aria-label="TikTok"
          className="
            flex items-center justify-center
            w-10
            h-10
            rounded-full
            bg-black text-white
            hover:scale-110 transition
          "
        >
          <SiTiktok className="w-2/3 h-2/3" />
        </a>

      </div>
    </div>
</div>
</div>
</div>
</div>

<hr className="border-t border-[#1B1D22] my-2" />
<div className="w-full text-center text-base silver flex items-center justify-center">
  <span className="pr-2 text-2xl">&copy;</span>
  {new Date().getFullYear()} Nexories Technologies. All rights reserved.
</div>
</div>
);
};

export default Footer;