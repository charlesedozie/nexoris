"use client"

import Link from "next/link"
import HowWeWork from "@/components/howWeWorkAnimated"
import DynamicContent, {Counter, DynamicIcon, useDarkMode} from "@/components/cards"


const images = [
{src:"/sscale.webp", url:'https://nexoristech.com'},
{src:"/bversed.webp", url:'https://nexoristech.com'},
{src:"/g1.webp", url:'https://nexoristech.com'},
// add more if needed
];
const engineered = [
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#00B8D9"/>
<path d="M30.8021 18.5172C30.7714 18.4708 30.7308 18.4317 30.6832 18.403C30.6355 18.3742 30.5821 18.3563 30.5267 18.3508C30.4713 18.3452 30.4154 18.352 30.363 18.3708C30.3106 18.3895 30.263 18.4197 30.2237 18.4591L23.1531 25.5297C23.01 25.6569 22.8236 25.7246 22.6323 25.7188C22.4409 25.713 22.259 25.6343 22.1238 25.4988C21.9886 25.3632 21.9104 25.1811 21.9051 24.9897C21.8999 24.7983 21.968 24.6122 22.0956 24.4694L30.7862 15.7797C30.8559 15.71 30.9111 15.6273 30.9489 15.5363C30.9866 15.4452 31.006 15.3476 31.006 15.2491C31.006 15.1506 30.9866 15.053 30.9489 14.9619C30.9111 14.8709 30.8559 14.7882 30.7862 14.7185C30.7165 14.6488 30.6338 14.5935 30.5427 14.5558C30.4517 14.5181 30.3541 14.4987 30.2556 14.4987C30.157 14.4987 30.0594 14.5181 29.9684 14.5558C29.8773 14.5935 29.7946 14.6488 29.7249 14.7185L28.4706 15.9738C26.6804 14.5757 24.4853 13.7955 22.2143 13.7501C19.9433 13.7048 17.7188 14.3968 15.8743 15.7224C14.0298 17.0479 12.6646 18.9357 11.9835 21.1026C11.3023 23.2695 11.3419 25.5988 12.0962 27.7413C12.1995 28.035 12.3913 28.2896 12.6451 28.4701C12.8989 28.6505 13.2023 28.748 13.5137 28.7491H30.489C30.8001 28.7493 31.1035 28.6528 31.3573 28.4729C31.6111 28.293 31.8027 28.0386 31.9056 27.745C32.4402 26.225 32.6187 24.6026 32.4274 23.0028C32.2361 21.4029 31.68 19.8683 30.8021 18.5172ZM15.3868 25.6C15.4263 25.795 15.3868 25.9976 15.2769 26.1634C15.167 26.3292 14.9958 26.4446 14.8009 26.4841C14.7515 26.4942 14.7013 26.4992 14.6509 26.4991C14.478 26.4989 14.3105 26.4389 14.1768 26.3294C14.043 26.2199 13.9512 26.0676 13.9168 25.8982C13.6486 24.5779 13.7076 23.2121 14.0886 21.9199C14.4696 20.6277 15.161 19.4484 16.1025 18.4849C17.0441 17.5213 18.2071 16.8028 19.4902 16.3921C20.7732 15.9814 22.1373 15.8908 23.4634 16.1285C23.6592 16.1635 23.833 16.2749 23.9467 16.4382C24.0604 16.6014 24.1045 16.8031 24.0695 16.9989C24.0344 17.1947 23.923 17.3686 23.7598 17.4823C23.5965 17.5959 23.3948 17.6401 23.199 17.605C22.1139 17.4108 20.9977 17.485 19.9478 17.8212C18.8979 18.1574 17.9462 18.7453 17.1758 19.5338C16.4053 20.3223 15.8395 21.2873 15.5277 22.3447C15.2159 23.4021 15.1675 24.5197 15.3868 25.6Z" fill="white"/>
</svg>
`, title:'Performance & Speed', teaser:'Fast load times and consistent behavior across devices.'},
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#2ECC71"/>
<path d="M19.3751 13.375C19.3751 12.8558 19.529 12.3483 19.8175 11.9166C20.1059 11.485 20.5159 11.1485 20.9955 10.9498C21.4752 10.7511 22.003 10.6992 22.5122 10.8004C23.0214 10.9017 23.4891 11.1517 23.8562 11.5188C24.2233 11.886 24.4734 12.3537 24.5746 12.8629C24.6759 13.3721 24.6239 13.8999 24.4253 14.3795C24.2266 14.8592 23.8901 15.2692 23.4585 15.5576C23.0268 15.846 22.5193 16 22.0001 16C21.3039 16 20.6362 15.7234 20.1439 15.2312C19.6516 14.7389 19.3751 14.0712 19.3751 13.375ZM31.3376 18.6784C31.2692 18.3424 31.0857 18.0408 30.8187 17.8256C30.5517 17.6105 30.218 17.4953 29.8751 17.5H14.1251C13.7831 17.5 13.4514 17.6168 13.1849 17.8312C12.9184 18.0455 12.7332 18.3444 12.6599 18.6785C12.5866 19.0125 12.6296 19.3616 12.7818 19.6678C12.9341 19.974 13.1864 20.219 13.497 20.3622H13.5026L18.5548 22.5869L16.4998 30.3963C16.3429 30.755 16.3326 31.1609 16.471 31.5272C16.6094 31.8935 16.8855 32.1911 17.2404 32.3566C17.4387 32.4507 17.6555 32.4997 17.8751 32.5C18.1578 32.5004 18.435 32.4209 18.6745 32.2706C18.914 32.1203 19.1062 31.9054 19.2288 31.6506L22.0001 26.875L24.7732 31.6563C24.9457 32.0071 25.2483 32.2768 25.6167 32.4078C25.9851 32.5388 26.39 32.5208 26.7453 32.3576C27.1006 32.1945 27.3782 31.899 27.5189 31.5343C27.6596 31.1695 27.6523 30.7642 27.4985 30.4047L25.4435 22.5953L30.506 20.3678C30.8202 20.2278 31.0754 19.9821 31.2273 19.6735C31.3792 19.3649 31.4182 19.0128 31.3376 18.6784Z" fill="white"/>
</svg>
`, title:'Accessibility & Inclusivity', teaser:'WCAG 2.2 AA patterns, keyboard paths, readable contrast.'},
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#543CDA"/>
<path d="M29.5 13.75H14.5C14.1022 13.75 13.7206 13.908 13.4393 14.1893C13.158 14.4706 13 14.8522 13 15.25V20.5C13 25.4425 15.3925 28.4378 17.3997 30.0803C19.5616 31.8484 21.7122 32.4484 21.8059 32.4738C21.9348 32.5088 22.0708 32.5088 22.1997 32.4738C22.2934 32.4484 24.4413 31.8484 26.6059 30.0803C28.6075 28.4378 31 25.4425 31 20.5V15.25C31 14.8522 30.842 14.4706 30.5607 14.1893C30.2794 13.908 29.8978 13.75 29.5 13.75ZM26.2825 20.2806L21.0325 25.5306C20.9628 25.6004 20.8801 25.6557 20.7891 25.6934C20.698 25.7312 20.6004 25.7506 20.5019 25.7506C20.4033 25.7506 20.3057 25.7312 20.2147 25.6934C20.1236 25.6557 20.0409 25.6004 19.9713 25.5306L17.7213 23.2806C17.5805 23.1399 17.5015 22.949 17.5015 22.75C17.5015 22.551 17.5805 22.3601 17.7213 22.2194C17.862 22.0786 18.0529 21.9996 18.2519 21.9996C18.4509 21.9996 18.6418 22.0786 18.7825 22.2194L20.5 23.9397L25.2194 19.2194C25.2891 19.1497 25.3718 19.0944 25.4628 19.0567C25.5539 19.019 25.6515 18.9996 25.75 18.9996C25.8485 18.9996 25.9461 19.019 26.0372 19.0567C26.1282 19.0944 26.2109 19.1497 26.2806 19.2194C26.3503 19.2891 26.4056 19.3718 26.4433 19.4628C26.481 19.5539 26.5004 19.6515 26.5004 19.75C26.5004 19.8485 26.481 19.9461 26.4433 20.0372C26.4056 20.1282 26.3503 20.2109 26.2806 20.2806H26.2825Z" fill="white"/>
</svg>
`, title:'Secure & Optimized Hosting', teaser:'Free SSL, daily backups, HTTP/3, DDoS protection via Nexoris Cloud.'},
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#F4B400"/>
<path d="M25.75 20.4998C25.75 21.5381 25.4421 22.5532 24.8652 23.4165C24.2884 24.2799 23.4684 24.9528 22.5091 25.3501C21.5498 25.7475 20.4942 25.8515 19.4758 25.6489C18.4574 25.4463 17.5219 24.9463 16.7877 24.2121C16.0535 23.4779 15.5535 22.5424 15.3509 21.524C15.1483 20.5056 15.2523 19.45 15.6497 18.4907C16.047 17.5314 16.7199 16.7114 17.5833 16.1346C18.4466 15.5577 19.4617 15.2498 20.5 15.2498C21.8924 15.2498 23.2278 15.8029 24.2123 16.7875C25.1969 17.772 25.75 19.1074 25.75 20.4998ZM31.5307 31.5304C31.461 31.6001 31.3783 31.6554 31.2872 31.6932C31.1962 31.7309 31.0986 31.7504 31 31.7504C30.9015 31.7504 30.8039 31.7309 30.7128 31.6932C30.6218 31.6554 30.5391 31.6001 30.4694 31.5304L25.7763 26.8363C24.1442 28.1941 22.0515 28.8705 19.9335 28.7247C17.8154 28.5789 15.8351 27.6222 14.4045 26.0536C12.9738 24.485 12.203 22.4252 12.2522 20.3027C12.3015 18.1803 13.1671 16.1585 14.6689 14.6579C16.1708 13.1574 18.1934 12.2936 20.3159 12.2462C22.4384 12.1988 24.4975 12.9715 26.0648 14.4035C27.6322 15.8356 28.5871 17.8167 28.731 19.9349C28.8749 22.053 28.1968 24.1451 26.8375 25.776L31.5307 30.4691C31.6004 30.5388 31.6557 30.6215 31.6934 30.7126C31.7312 30.8036 31.7506 30.9012 31.7506 30.9998C31.7506 31.0983 31.7312 31.1959 31.6934 31.287C31.6557 31.378 31.6004 31.4607 31.5307 31.5304ZM20.5 27.2498C21.8351 27.2498 23.1401 26.8539 24.2501 26.1122C25.3602 25.3705 26.2253 24.3163 26.7362 23.0829C27.2471 21.8495 27.3808 20.4923 27.1203 19.1829C26.8599 17.8735 26.217 16.6708 25.273 15.7268C24.329 14.7828 23.1263 14.1399 21.8169 13.8795C20.5075 13.619 19.1503 13.7527 17.9169 14.2636C16.6835 14.7745 15.6293 15.6396 14.8876 16.7497C14.1459 17.8597 13.75 19.1647 13.75 20.4998C13.752 22.2894 14.4638 24.0051 15.7293 25.2706C16.9947 26.536 18.7104 27.2478 20.5 27.2498Z" fill="white"/>
</svg>
`, title:'Search Engine Ready', teaser:'Structured pages, clean metadata, schema, and internal links.'},
// add more if needed
];

export default function Home() {
const { isDark } = useDarkMode();
return (
<div>
<div className="px-[1%] sm:px-[2%] md:px-[4%] lg:px-[6%] lg:pb-[2%]">
<div className="flex justify-between my-20">
<div>

<div className="flex items-center gap-6">
<div>
<div className="flex items-center">
<div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white -mr-12 sm:-mr-9 flex items-center justify-center">
<DynamicContent type="img" src="/trust.webp" css="w-full h-full object-cover" />
</div>

<div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white -mr-12 sm:-mr-9 flex items-center justify-center">
<DynamicContent type="img" src="/trust1.webp" css="w-full h-full object-cover" />
</div>

<div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white -mr-12 sm:-mr-9 flex items-center justify-center">
<DynamicContent type="img" src="/trust2.webp" css="w-full h-full object-cover" />
</div>
</div>
</div>

<p className="mx-8">
<Counter string3='text-3xl font-semibold' string1="100" string2="homePage" /> <span className="text-3xl font-semibold">+</span> <br />
Trusted by forward-thinking teams
</p>
</div>
</div>
<div className="hidden sm:block">
<Link
href="#selectedwork"
aria-label="Go to selected work"
title="Go to selected work"
className={`flex items-center gap-2 justify-center sm:justify-start ${isDark ? "text-[#D2D2D3]" : " text-[#515154]"}`}
><span>Scroll down to explore</span>
<DynamicIcon
name="ArrowDown"
size={20}
/>
</Link>
</div>
</div>
<div className="relative w-full overflow-hidden">
<div className="flex animate-marquee gap-6 w-max">

{/* Original items */}
{images.map((src, i) => (
<div
key={`o-${i}`}
className="h-48 w-[120px] mx-5 flex items-center justify-center overflow-hidden shrink-0"
><DynamicContent
type="img"
src={src.src}
title={src.url}
teaser={src.url}
isLink={true}
url={src.url}
section='true'
/>
</div>
))}

{/* Duplicate items */}
{images.map((src, i) => (
<div
key={`d-${i}`}
className="h-48 w-[120px] mx-5 flex items-center justify-center overflow-hidden shrink-0"
> <DynamicContent
type="img"
src={src.src}
title={src.url}
teaser={src.url}
isLink={true}
url={src.url}
section='true'
/>
</div>
))}

{/* Duplicate items */}
{images.map((src, i) => (
<div
key={`d-${i}`}
className="h-48 w-[120px] mx-5 flex items-center justify-center overflow-hidden shrink-0"
>    <DynamicContent
type="img"
src={src.src}
title={src.url}
teaser={src.url}
isLink={true}
url={src.url}
section='true'
/>
</div>
))}

{/* Duplicate items */}
{images.map((src, i) => (
<div
key={`d-${i}`}
className="h-48 w-[120px] mx-5 flex items-center justify-center overflow-hidden shrink-0"
>    <DynamicContent
type="img"
src={src.src}
title={src.url}
teaser={src.url}
isLink={true}
url={src.url}
section='true'
/>
</div>
))}

{/* Duplicate items */}
{images.map((src, i) => (
<div
key={`d-${i}`}
className="h-48 w-[120px] mx-5 flex items-center justify-center overflow-hidden shrink-0"
>    <DynamicContent
type="img"
src={src.src}
title={src.url}
teaser={src.url}
isLink={true}
url={src.url}
section='true'
/>
</div>
))}

{/* Duplicate items */}
{images.map((src, i) => (
<div
key={`d-${i}`}
className="h-48 w-[120px] mx-5 flex items-center justify-center overflow-hidden shrink-0"
>    <DynamicContent
type="img"
src={src.src}
title={src.url}
teaser={src.url}
isLink={true}
url={src.url}
section='true'
/>
</div>
))}

{/* Duplicate items */}
{images.map((src, i) => (
<div
key={`d-${i}`}
className="h-48 w-[120px] mx-5 flex items-center justify-center overflow-hidden shrink-0"
>    <DynamicContent
type="img"
src={src.src}
title={src.url}
teaser={src.url}
isLink={true}
url={src.url}
section='true'
/>
</div>
))}
</div>
</div>


<div className="text-center my-8 text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h2" title='Engineered for Trust' />
<DynamicContent type="p" title='From performance to security, accessibility, and search visibility, 
every Nexoris solution is built on proven standards that 
keep your digital presence reliable.'  />
</div>

<div className="my-22">
<div className={`grid grid-cols-1 rounded-3xl sm:grid-cols-2 md:grid-cols-4 gap-4 items-stretch  py-6 px-3 ${isDark ? "" : "bg-gray-100"}`}>
{engineered.map((src, i) => (
<div key={`enginnered-${i}`} className={`mb-5 p-[1%] sm:p-[2%] md:p-[3%] rounded-3xl ${isDark ? "darkModeBg" : "bg-white"}`}>
<div className="p-5 h-full flex flex-col">
<div className="w-[58px] space-y-2 shrink-0 mb-4" dangerouslySetInnerHTML={{ __html: src.src }} />
<div className="space-y-2 mb-3 font-bold"><DynamicContent css={`font-bold`} type="p4" title={src.title || ``}  /></div>
<div className="space-y-2"><DynamicContent type="p" title={src.teaser || ``}  /></div>
</div>
</div>
))}
</div>


<div className="text-center my-8 text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h2" title='Solutions that scale with you' />
<DynamicContent css={`${isDark ? "darkModeText" : ""}`} type="p" title='From building user-friendly websites to powering them with secure hosting, we deliver end-to-end solutions that keep your digital presence reliable.'  />
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-10">
<div className={`p-6 rounded-2xl py-10 ${isDark ? "darkModeBg" : "bg-gray-100"}`}>
<DynamicContent type="p3" css='font-bold' title='Web Development' />
<div className={`${isDark ? "darkModeText" : ""} my-5`}>
<DynamicContent type="p" title='We plan the structure, design clear interfaces, and build websites 
that are fast, accessible, and easy to maintain.' css={`${isDark ? "darkModeText" : ""}`} /></div>
<DynamicContent type="p" title='This covers:' css={`font-semibold ${isDark ? "darkModeText" : ""}`} />
<ul className={`list-disc pl-6 space-y-2 p-base-res font-semibold ${isDark ? "darkModeText" : ""}`}>
<li>Business sites, portals, e-commerce, and SaaS fronts</li>
<li>Clear information architecture and straightforward navigation</li>
<li>Core Web Vitals focus (smart images, caching, lean assets)</li>
<li>WCAG 2.2 AA accessibility, analytics setup, and reporting</li>
</ul>

<div className="w-full flex justify-center my-10 sm:hidden">
  <div className="w-1/2">
    <DynamicContent
      isLink
      type="img"
      src="/computer.webp"
      url="/web-development"
      title="Web Development"
      teaser="Go to Web Development page"
    />
  </div>
</div>

<div className='my-8'>
<DynamicContent isLink={true} css={`${isDark ? "bg-[#543CDA] text-gray-100" : "text-gray-100 bg-[#543CDA]"}`} icon='bg-[#4D3BAD] text-gray-100' type="btn1" url='/web-development' title='Learn More' teaser='Go to Web Development page' /></div>
<div className="mb-8 py-8 max-w-[400px] mx-auto hidden sm:block">
<DynamicContent
isLink={true}
type="img"
src="/computer.webp"
url="/web-development"
title="Web Development"
teaser="Go to Web Development page"
/>
</div>
</div>

<div className={`${isDark ? "darkModeBg" : "bg-gray-100"} p-6 rounded-2xl py-10`}>
<DynamicContent type="p3" css='font-bold' title='Web Hosting' />
<div className={`my-5 {${isDark ? "darkModeText" : ""}`}>
<DynamicContent type="p" title='Fast, secure, and fully managed NVMe hosting with automatic 
backups - all set up and managed by our team.' css={`${isDark ? "darkModeText" : ""}`} /></div>
<DynamicContent type="p" css={`${isDark ? "darkModeText" : ""} font-semibold`} title='This covers:' />
<ul className={`${isDark ? "darkModeText" : ""} list-disc pl-6 space-y-2 text-gray-800 p-base-res`}>
<li>NVMe storage with cPanel access </li>
<li>Free SSL, daily backups, HTTP/3 </li>
<li>DDoS protection, 99.9% uptime, responsive support </li>
</ul>

<div className="w-full flex justify-center my-10 sm:hidden">
<div className="w-1/2">
<DynamicContent
isLink={true}
type="img"
src="/server.webp"
url="/web-hosting"
title="Web Hosting page"
teaser="Go to Web Hosting page"
/>
</div>
</div>

<div className='my-8'>  
<DynamicContent isLink={true} css={`${isDark ? "bg-[#543CDA] text-gray-100" : "text-gray-100 bg-[#543CDA]"}`} icon='bg-[#4F3CB2] text-gray-100' type="btn1" url='/web-hosting' title='Explore Hosting Plans' teaser='Go to Web Hosting page' /></div>
<div className="mb-8 max-w-[400px] mx-auto py-8 hidden sm:block">
<DynamicContent
isLink={true}
type="img"
src="/server.webp"
url="/web-hosting"
title="Web Hosting page"
teaser="Go to Web Hosting page"
/>
</div>
</div>
</div>
</div>


<div className='p-[2%] md:p-[4%] lg:p-[6%] footerBg rounded-3xl text-white'>
<div className="text-center my-8 text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h2" title='Our Full Suite of Digital Services' />
<DynamicContent type="p" title='Beyond development and hosting, we provide services that connect design, content, and technology so your digital presence is complete. ' css={`${isDark ? "darkModeText" : ""}`}  />
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
<div>
<div className="relative rounded-3xl overflow-hidden bg-[#0b0c1d] shadow-xl">
{/* Background Image */}
<div
className="h-[580px] bg-cover bg-center"
style={{
backgroundImage: "url('/mobile-app.webp')", // place your image in /public/mis.PNG
}}
/>

{/* Overlay content */}
<div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end rounded-3xl">
<h3 className="text-white text-lg font-semibold mb-2">
Mobile App Development
</h3>
<p className="text-gray-300 text-sm leading-relaxed mb-5">
Cross-platform and native apps designed for performance,
reliability, and smooth user experiences.
</p>

{/* Button */}
<Link
href={`/mobile-app-development`}
aria-label='Go to Mobile App Development page'
className="inline-block focus:outline-none" // disables focus ring
>
<button className="w-full pointer bg-white text-gray-900 font-medium py-3 rounded-full flex items-center justify-between px-5 hover:bg-gray-200 transition">
<span>App Development</span>
<span className="text-xl">→</span>
</button>
</Link>
</div>
</div>
</div>



<div>
<div className="relative rounded-3xl overflow-hidden bg-[#0b0c1d] shadow-xl">
{/* Background Image */}
<div
className="h-[580px] bg-cover bg-center"
style={{
backgroundImage: "url('/custom-software.webp')", // place your image in /public/mis.PNG
}}
/>

{/* Overlay content */}
<div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end rounded-3xl">
<h3 className="text-white text-lg font-semibold mb-2">
Custom Software Solutions
</h3>
<p className="text-gray-300 text-sm leading-relaxed mb-5">
Tailored platforms, APIs, and tools aligned to your workflows and goals.
</p>

{/* Button */}
<Link
href={`/custom-software-solutions`}
aria-label='go to Custom Software Solutions page'
className="inline-block focus:outline-none" // disables focus ring
>
<button className="w-full bg-white pointer text-gray-900 font-medium py-3 rounded-full flex items-center justify-between px-5 hover:bg-gray-200 transition">
<span>Custom Software</span>
<span className="text-xl">→</span>
</button>
</Link>
</div>
</div>
</div>



<div>
<div className="relative rounded-3xl overflow-hidden bg-[#0b0c1d] shadow-xl">
{/* Background Image */}
<div
className="h-[580px] bg-cover bg-center"
style={{
backgroundImage: "url('/seo.webp')", // place your image in /public/mis.PNG
}}
/>

{/* Overlay content */}
<div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end rounded-3xl">
<h3 className="text-white text-lg font-semibold mb-2">
SEO & Content
</h3>
<p className="text-gray-300 text-sm leading-relaxed mb-5">
Strategies that combine technical SEO, on-page content, and structured data to improve visibility, engagement, and authority.
</p>

{/* Button */}

<Link
href={`/seo-content-marketing`}
aria-label='go to SEO & Content page'
className="inline-block focus:outline-none" // disables focus ring
>

<button className="w-full pointer bg-white text-gray-900 font-medium py-3 rounded-full flex items-center justify-between px-5 hover:bg-gray-200 transition">
<span>SEO & Content</span>
<span className="text-xl">→</span>
</button>
</Link>
</div>
</div>
</div>



<div>
<div className="relative rounded-3xl overflow-hidden bg-[#0b0c1d] shadow-xl">
{/* Background Image */}
<div
className="h-[580px] bg-cover bg-center"
style={{
backgroundImage: "url('/product.webp')", // place your image in /public/mis.PNG
}}
/>

{/* Overlay content */}
<div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end rounded-3xl">
<h3 className="text-white text-lg font-semibold mb-2">
Product Design & Management
</h3>
<p className="text-gray-300 text-sm leading-relaxed mb-5">
From idea to launch: discovery, prototyping, roadmaps, and delivery management.
</p>

{/* Button */}
<Link
href={`/product-design`}
aria-label='go to  Product Design & Management page'
className="inline-block focus:outline-none" // disables focus ring
>


<button className="w-full pointer bg-white text-gray-900 font-medium py-3 rounded-full flex items-center justify-between px-5 hover:bg-gray-200 transition">
<span>Product Design</span>
<span className="text-xl">→</span>
</button>
</Link>
</div>
</div>
</div>




<div>
<div className="relative rounded-3xl overflow-hidden bg-[#0b0c1d] shadow-xl">
{/* Background Image */}
<div
className="h-[580px] bg-cover bg-center"
style={{
backgroundImage: "url('/digital.webp')", // place your image in /public/mis.PNG
}}
/>

{/* Overlay content */}
<div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end rounded-3xl">
<h3 className="text-white text-lg font-semibold mb-2">
Digital Transformation Consulting
</h3>
<p className="text-gray-300 text-sm leading-relaxed mb-5">
Structured roadmap to modernize processes, platforms, and teams, aligning tech with business goals for faster and cost-efficient delivery.
</p>

{/* Button */}
<Link
href={`/digital-transformation`}
aria-label='go to  Digital Transformation Consulting page'
className="inline-block focus:outline-none" // disables focus ring
>

<button className="w-full pointer bg-white text-gray-900 font-medium py-3 rounded-full flex items-center justify-between px-5 hover:bg-gray-200 transition">
<span>Digital Transformation Consulting</span>
<span className="text-xl">→</span>
</button>
</Link>
</div>
</div>
</div>




<div>
<div className="relative rounded-3xl overflow-hidden bg-[#0b0c1d] shadow-xl">
{/* Background Image */}
<div
className="h-[580px] bg-cover bg-center"
style={{
backgroundImage: "url('/web-design.webp')", // place your image in /public/mis.PNG
}}
/>

{/* Overlay content */}
<div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end rounded-3xl">
<h3 className="text-white text-lg font-semibold mb-2">
Website Maintenance & Support
</h3>
<p className="text-gray-300 text-sm leading-relaxed mb-5">
Ongoing updates, monitoring, fixes, and reporting to keep sites dependable.
</p>

{/* Button */}
<Link
href={`/website-maintenance`}
aria-label='go to   Website Maintenance & Support page'
className="inline-block focus:outline-none" // disables focus ring
>

<button className="w-full bg-white pointer text-gray-900 font-medium py-3 rounded-full flex items-center justify-between px-5 hover:bg-gray-200 transition">
<span>Maintenance</span>
<span className="text-xl">→</span>
</button>
</Link>
</div>
</div>
</div>
</div>
</div>



<div>
<div id='selectedwork' className="my-16 text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h2" title='Selected Work' />
<DynamicContent type="p" css={`${isDark ? "darkModeText" : ""}`} title='We work on projects that combine design, content, and technology in practical ways. Each one reflects our focus on clarity, performance, and long-term reliability. '  /></div>

<div className="px-[2%] md:px-[4%] lg:px-[6%] lg:pb-[2%]">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
{/* Column 1 */}
<div>
{/* Responsive image with equal-height on sm+ */}
<div className={`${isDark ? "darkModeBg" : "bg-gray-100"} p-6 mb-8 rounded-2xl`}>
<div className="w-full h-auto sm:h-[660px] overflow-hidden rounded-3xl">

<div className="flex flex-nowrap gap-12 p-10 item-center justify-center">
  <DynamicContent
    type="img"
    src="/phone1.webp"
    teaser="Gamified Learning Platform"
    css="w-1/2 object-cover"
  />
  <DynamicContent
    type="img"
    src="/phone2.webp"
    teaser="Gamified Learning Platform"
    css="w-1/2 object-cover mb-12 pt-6 -mt-12" 
  />
</div>

</div>
</div>

{/* Text Card */}
<div className="flex w-full max-w-4xl rounded-2xl">
<div className="w-[70px] h-[70px] rounded-2xl flex items-center justify-start">
<DynamicContent type="img" src="/gleen1.webp" />
</div>

<div className="flex-1 ml-5">
<h2 className="text-xl font-semibold mb-2">GLEEN</h2>
<p className={`${isDark ? "darkModeText" : ""} mb-3`}>Gamified Learning Platform</p>

</div>
</div>
<p className={`${isDark ? "darkModeText" : ""} leading-relaxed`}>
GLEEN is an education platform built to support secondary school students
preparing for WAEC, NECO, and JAMB exams. We designed a gamified
experience with streaks, rewards, and offline access, alongside dashboards
for parents and teachers. The result is a tool that keeps learners engaged
while giving families and educators a clear view of progress.
</p>
</div>

{/* Column 2 */}
<div>
{/* Responsive image with equal-height on sm+ */}
<div className={`${isDark ? "darkModeBg " : "bg-gray-100 "} p-6 mb-8`}>
<div className="w-full h-auto p-0 sm:h-[660px] sm:p-12">
<DynamicContent
type="img"
src="/work.webp"
css="w-full sm:object-cover object-contain"
/>
</div>
</div>

{/* Text Card */}
<div className="flex w-full max-w-4xl rounded-2xl">
<div className="w-[70px] h-[70px] rounded-lg flex items-center justify-start"><DynamicContent type="img" src="/swift.webp" />
</div>

<div className="flex-1 ml-5">
<h2 className="text-xl font-semibold mb-2">SwiftScale Consult</h2>
<p className={`${isDark ? "darkModeText" : ""} text-base mb-3`}>Digital Solutions Agency</p>
</div>
</div>
<p className={`${isDark ? "darkModeText" : ""} text-base mb-3`}>
SwiftScale Consult helps businesses grow by combining people, technology, and identity to deliver tailored solutions in HR consulting, software development, design, legal services, and SEO consultation. Their mission is to help organizations scale confidently by offering customized strategies that drive innovation, and position clients for long-term success.
</p>
</div>
</div>
</div>

<div className="my-20 text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h2" title='How We Work ' />
<DynamicContent type="p" title='Our approach brings clarity and accountability at every stage. Whether it’s a website, an app, a content program, or hosting on Nexoris Cloud, we follow the 
same process so outcomes are measurable and reliable.' css={`${isDark ? "darkModeText" : ""}`}  />
</div>

<div className="z-3"><HowWeWork /></div>
<div className="my-20 text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h2" title='Insights' />
<DynamicContent type="p4" title='Our insights cover the practical side of digital work, from development and hosting to user experience and search. Each piece is written to clarify ideas and share approaches that have worked in real projects. ' css={`${isDark ? "darkModeText" : ""}`}  />
</div>
</div>

</div>
)
}
