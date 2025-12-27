'use client'

import type { Metadata } from 'next'
import DynamicContent, {Counter, DynamicIcon, useDarkMode, Accordion} from "@/components/cards"


const faqItems = [
  {
    question: `Custom build or ready made, which is better?
`,
    answer:
      `We check your goals, budget, and timeline. If a good off-the-shelf tool fits, we recommend it. If not, we build.`,
  },
  {
    question: `Can you connect to our current systems?
`,
    answer:
     `Yes. We keep what works and connect safely to the rest. All keys and webhooks are documented.`,
  },
  {
    question: `Do we have to host with Nexoris?
`,
    answer:
      `No. You can use your own provider. Nexoris Cloud VPS is available if you prefer.
`,
  },
   {
    question: `How will you move our old data?
`,
    answer:
     `We map the fields, test on staging, confirm with your team, then cut over with a backup and quick restore plan.`,
  },
   {
    question: `How do you handle traffic spikes?
`,
    answer:
     `We use caching and job queues, scale resources when needed, and watch live alerts.
`,
  },
     {
    question: `Who owns the code and data?

`,
    answer:
     `You do. We hand over all accounts, repositories, and documentation at launch.`,
  },
     {
    question: `How long will the first version take?

`,
    answer:
     `It depends on scope and data readiness. After discovery, we give firm dates.

`,
  },
];

const engineered = [
{src:"/speed.webp", title:'NVMe speed', teaser:'NVMe-powered servers keep pages quick on any device.'},
{src:"/access.webp", title:'Reliable uptime', teaser:'99.9% target with clear status updates.'},
{src:"/secure.webp", title:'Straight pricing', teaser:'Simple plans and domain fees. No hidden charges'},
{src:"/search.webp", title:'Free migration', teaser:'We move your site carefully and test before go-live.'},
// add more if needed
];

const hand_over = [
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#00B8D9"/>
<path d="M30.8002 18.5172C30.7695 18.4708 30.7289 18.4317 30.6812 18.403C30.6336 18.3742 30.5801 18.3563 30.5248 18.3508C30.4694 18.3452 30.4134 18.352 30.361 18.3708C30.3086 18.3895 30.261 18.4197 30.2217 18.4591L23.1511 25.5297C23.008 25.6569 22.8217 25.7246 22.6303 25.7188C22.439 25.713 22.257 25.6343 22.1218 25.4988C21.9866 25.3632 21.9084 25.1811 21.9032 24.9897C21.8979 24.7983 21.966 24.6122 22.0936 24.4694L30.7842 15.7797C30.8539 15.71 30.9092 15.6273 30.9469 15.5363C30.9846 15.4452 31.004 15.3476 31.004 15.2491C31.004 15.1506 30.9846 15.053 30.9469 14.9619C30.9092 14.8709 30.8539 14.7882 30.7842 14.7185C30.7145 14.6488 30.6318 14.5935 30.5408 14.5558C30.4497 14.5181 30.3521 14.4987 30.2536 14.4987C30.1551 14.4987 30.0575 14.5181 29.9664 14.5558C29.8754 14.5935 29.7927 14.6488 29.723 14.7185L28.4686 15.9738C26.6784 14.5757 24.4833 13.7955 22.2124 13.7501C19.9414 13.7048 17.7169 14.3968 15.8724 15.7224C14.0278 17.0479 12.6627 18.9357 11.9815 21.1026C11.3003 23.2695 11.3399 25.5988 12.0942 27.7413C12.1976 28.035 12.3893 28.2896 12.6431 28.4701C12.8969 28.6505 13.2003 28.748 13.5117 28.7491H30.487C30.7981 28.7493 31.1016 28.6528 31.3554 28.4729C31.6092 28.293 31.8008 28.0386 31.9036 27.745C32.4382 26.225 32.6167 24.6026 32.4254 23.0028C32.2341 21.4029 31.6781 19.8683 30.8002 18.5172ZM15.3849 25.6C15.4244 25.795 15.3849 25.9976 15.275 26.1634C15.1651 26.3292 14.9938 26.4446 14.7989 26.4841C14.7496 26.4942 14.6993 26.4992 14.6489 26.4991C14.476 26.4989 14.3086 26.4389 14.1748 26.3294C14.041 26.2199 13.9492 26.0676 13.9149 25.8982C13.6467 24.5779 13.7056 23.2121 14.0866 21.9199C14.4676 20.6277 15.159 19.4484 16.1006 18.4849C17.0421 17.5213 18.2052 16.8028 19.4882 16.3921C20.7713 15.9814 22.1353 15.8908 23.4614 16.1285C23.6572 16.1635 23.8311 16.2749 23.9447 16.4382C24.0584 16.6014 24.1026 16.8031 24.0675 16.9989C24.0325 17.1947 23.921 17.3686 23.7578 17.4823C23.5946 17.5959 23.3928 17.6401 23.197 17.605C22.1119 17.4108 20.9957 17.485 19.9458 17.8212C18.8959 18.1574 17.9443 18.7453 17.1738 19.5338C16.4034 20.3223 15.8376 21.2873 15.5257 22.3447C15.2139 23.4021 15.1655 24.5197 15.3849 25.6Z" fill="white"/>
</svg>
`, title:'Ownership and access', teaser:'Code, repositories, environments, keys, pipelines, and admin accounts.'},
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#2ECC71"/>
<path d="M19.3751 13.375C19.3751 12.8558 19.529 12.3483 19.8175 11.9166C20.1059 11.485 20.5159 11.1485 20.9955 10.9498C21.4752 10.7511 22.003 10.6992 22.5122 10.8004C23.0214 10.9017 23.4891 11.1517 23.8562 11.5188C24.2233 11.886 24.4734 12.3537 24.5746 12.8629C24.6759 13.3721 24.6239 13.8999 24.4253 14.3795C24.2266 14.8592 23.8901 15.2692 23.4585 15.5576C23.0268 15.846 22.5193 16 22.0001 16C21.3039 16 20.6362 15.7234 20.1439 15.2312C19.6516 14.7389 19.3751 14.0712 19.3751 13.375ZM31.3376 18.6784C31.2692 18.3424 31.0857 18.0408 30.8187 17.8256C30.5517 17.6105 30.218 17.4953 29.8751 17.5H14.1251C13.7831 17.5 13.4514 17.6168 13.1849 17.8312C12.9184 18.0455 12.7332 18.3444 12.6599 18.6785C12.5866 19.0125 12.6296 19.3616 12.7818 19.6678C12.9341 19.974 13.1864 20.219 13.497 20.3622H13.5026L18.5548 22.5869L16.4998 30.3963C16.3429 30.755 16.3326 31.1609 16.471 31.5272C16.6094 31.8935 16.8855 32.1911 17.2404 32.3566C17.4387 32.4507 17.6555 32.4997 17.8751 32.5C18.1578 32.5004 18.435 32.4209 18.6745 32.2706C18.914 32.1203 19.1062 31.9054 19.2288 31.6506L22.0001 26.875L24.7732 31.6563C24.9457 32.0071 25.2483 32.2768 25.6167 32.4078C25.9851 32.5388 26.39 32.5208 26.7453 32.3576C27.1006 32.1945 27.3782 31.899 27.5189 31.5343C27.6596 31.1695 27.6523 30.7642 27.4985 30.4047L25.4435 22.5953L30.506 20.3678C30.8202 20.2278 31.0754 19.9821 31.2273 19.6735C31.3792 19.3649 31.4182 19.0128 31.3376 18.6784Z" fill="white"/>
</svg>
`, title:'Design files', teaser:'Figma files, UI kit, and a short style guide.'},
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#543CDA"/>
<path d="M29.5 13.75H14.5C14.1022 13.75 13.7206 13.908 13.4393 14.1893C13.158 14.4706 13 14.8522 13 15.25V20.5C13 25.4425 15.3925 28.4378 17.3997 30.0803C19.5616 31.8484 21.7122 32.4484 21.8059 32.4738C21.9348 32.5088 22.0708 32.5088 22.1997 32.4738C22.2934 32.4484 24.4413 31.8484 26.6059 30.0803C28.6075 28.4378 31 25.4425 31 20.5V15.25C31 14.8522 30.842 14.4706 30.5607 14.1893C30.2794 13.908 29.8978 13.75 29.5 13.75ZM26.2825 20.2806L21.0325 25.5306C20.9628 25.6004 20.8801 25.6557 20.7891 25.6934C20.698 25.7312 20.6004 25.7506 20.5019 25.7506C20.4033 25.7506 20.3057 25.7312 20.2147 25.6934C20.1236 25.6557 20.0409 25.6004 19.9713 25.5306L17.7213 23.2806C17.5805 23.1399 17.5015 22.949 17.5015 22.75C17.5015 22.551 17.5805 22.3601 17.7213 22.2194C17.862 22.0786 18.0529 21.9996 18.2519 21.9996C18.4509 21.9996 18.6418 22.0786 18.7825 22.2194L20.5 23.9397L25.2194 19.2194C25.2891 19.1497 25.3718 19.0944 25.4628 19.0567C25.5539 19.019 25.6515 18.9996 25.75 18.9996C25.8485 18.9996 25.9461 19.019 26.0372 19.0567C26.1282 19.0944 26.2109 19.1497 26.2806 19.2194C26.3503 19.2891 26.4056 19.3718 26.4433 19.4628C26.481 19.5539 26.5004 19.6515 26.5004 19.75C26.5004 19.8485 26.481 19.9461 26.4433 20.0372C26.4056 20.1282 26.3503 20.2109 26.2806 20.2806H26.2825Z" fill="white"/>
</svg>
`, title:'Step-by-step guides', teaser:'How to deploy, restore, manage backups, and check monitoring.'},
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#F4B400"/>
<path d="M25.75 20.4998C25.75 21.5381 25.4421 22.5532 24.8652 23.4165C24.2884 24.2799 23.4684 24.9528 22.5091 25.3501C21.5498 25.7475 20.4942 25.8515 19.4758 25.6489C18.4574 25.4463 17.5219 24.9463 16.7877 24.2121C16.0535 23.4779 15.5535 22.5424 15.3509 21.524C15.1483 20.5056 15.2523 19.45 15.6497 18.4907C16.047 17.5314 16.7199 16.7114 17.5833 16.1346C18.4466 15.5577 19.4617 15.2498 20.5 15.2498C21.8924 15.2498 23.2278 15.8029 24.2123 16.7875C25.1969 17.772 25.75 19.1074 25.75 20.4998ZM31.5307 31.5304C31.461 31.6001 31.3783 31.6554 31.2872 31.6932C31.1962 31.7309 31.0986 31.7504 31 31.7504C30.9015 31.7504 30.8039 31.7309 30.7128 31.6932C30.6218 31.6554 30.5391 31.6001 30.4694 31.5304L25.7763 26.8363C24.1442 28.1941 22.0515 28.8705 19.9335 28.7247C17.8154 28.5789 15.8351 27.6222 14.4045 26.0536C12.9738 24.485 12.203 22.4252 12.2522 20.3027C12.3015 18.1803 13.1671 16.1585 14.6689 14.6579C16.1708 13.1574 18.1934 12.2936 20.3159 12.2462C22.4384 12.1988 24.4975 12.9715 26.0648 14.4035C27.6322 15.8356 28.5871 17.8167 28.731 19.9349C28.8749 22.053 28.1968 24.1451 26.8375 25.776L31.5307 30.4691C31.6004 30.5388 31.6557 30.6215 31.6934 30.7126C31.7312 30.8036 31.7506 30.9012 31.7506 30.9998C31.7506 31.0983 31.7312 31.1959 31.6934 31.287C31.6557 31.378 31.6004 31.4607 31.5307 31.5304ZM20.5 27.2498C21.8351 27.2498 23.1401 26.8539 24.2501 26.1122C25.3602 25.3705 26.2253 24.3163 26.7362 23.0829C27.2471 21.8495 27.3808 20.4923 27.1203 19.1829C26.8599 17.8735 26.217 16.6708 25.273 15.7268C24.329 14.7828 23.1263 14.1399 21.8169 13.8795C20.5075 13.619 19.1503 13.7527 17.9169 14.2636C16.6835 14.7745 15.6293 15.6396 14.8876 16.7497C14.1459 17.8597 13.75 19.1647 13.75 20.4998C13.752 22.2894 14.4638 24.0051 15.7293 25.2706C16.9947 26.536 18.7104 27.2478 20.5 27.2498Z" fill="white"/>
</svg>
`, title:'Team training', teaser:'Short live sessions, recordings, and quick-start checklists.'},
// add more if needed
];

const how_we_work = [
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.9982 4.36928C28.343 3.58898 29.0156 3.19885 29.6746 3.3763C30.3336 3.55375 30.7217 4.22951 31.4982 5.58103L33.9689 9.88151C34.7454 11.233 35.1336 11.9088 34.9569 12.5711C34.7804 13.2333 34.1079 13.6235 32.7631 14.4038L27.0574 17.7143C25.7126 18.4946 25.0402 18.8848 24.3812 18.7073C23.7222 18.5298 23.3339 17.8541 22.5576 16.5026L20.0869 12.2021C19.3104 10.8505 18.9222 10.1748 19.0987 9.51253C19.2754 8.85026 19.9477 8.46011 21.2926 7.67981L26.9982 4.36928Z" stroke="#543CDA" stroke-width="2.5"/>
<path d="M19.2638 10.7676L23.3817 17.9352L17.676 21.2457C16.3311 22.0258 15.6587 22.416 14.9997 22.2387C14.3407 22.0612 13.9524 21.3853 13.176 20.0338L12.3525 18.6003C11.576 17.2488 11.1878 16.5731 11.3644 15.9108C11.5409 15.2486 12.2134 14.8584 13.5582 14.0781L19.2638 10.7676Z" stroke="#543CDA" stroke-width="2.5"/>
<path d="M11.5292 17.168L13.9999 21.4685L9.0074 24.3651C8.34276 24.7508 8.01045 24.9436 7.68563 24.9866C7.25253 25.044 6.81451 24.926 6.46795 24.6588C6.20803 24.4583 6.01616 24.1243 5.63245 23.4565C5.24871 22.7885 5.05686 22.4545 5.0141 22.1281C4.95708 21.6928 5.07445 21.2526 5.34036 20.9043C5.53981 20.6431 5.87213 20.4503 6.53676 20.0648L11.5292 17.168Z" stroke="#543CDA" stroke-width="2.5"/>
<path d="M12.5 36.6667L20 20L27.5 36.6667" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Understand', teaser:'We align on goals,scope, timeline, budget, risks, and how we’ll measure success'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 19.9993C4.16602 12.5354 4.16602 8.8035 6.48475 6.48475C8.8035 4.16602 12.5354 4.16602 19.9993 4.16602C27.4632 4.16602 31.1952 4.16602 33.514 6.48475C35.8327 8.8035 35.8327 12.5354 35.8327 19.9993C35.8327 27.4632 35.8327 31.1952 33.514 33.514C31.1952 35.8327 27.4632 35.8327 19.9993 35.8327C12.5354 35.8327 8.8035 35.8327 6.48475 33.514C4.16602 31.1952 4.16602 27.4632 4.16602 19.9993Z" stroke="white" stroke-width="2.5"/>
<path d="M4.16602 15H35.8327" stroke="white" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M21.666 21.666H28.3327" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.666 28.334H24.9993" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.666 10H11.681" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.334 10H18.349" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15V35.8333" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Design', teaser:'We map key user paths, sketch screens, and share a small demo you can click. See UI/UX Design & Consulting.'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.334 16.8807C33.334 10.4947 33.334 7.30172 31.3813 5.31785C29.4288 3.33398 26.286 3.33398 20.0007 3.33398H16.6673C10.3819 3.33398 7.23923 3.33398 5.2866 5.31785C3.33398 7.30172 3.33398 10.4947 3.33398 16.8807C3.33398 23.2667 3.33398 26.4597 5.2866 28.4435C6.06928 29.2387 7.04315 29.7152 8.33398 30.0007" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round"/>
<path d="M36.6673 29.166C36.6673 26.0412 36.6673 24.4788 35.8715 23.3835C35.6145 23.0298 35.3035 22.7188 34.9498 22.4618C33.8545 21.666 32.2922 21.666 29.1673 21.666H20.834C17.7092 21.666 16.1468 21.666 15.0516 22.4618C14.6978 22.7188 14.3868 23.0298 14.1298 23.3835C13.334 24.4788 13.334 26.0412 13.334 29.166C13.334 32.2908 13.334 33.8532 14.1298 34.9485C14.3868 35.3022 14.6978 35.6132 15.0516 35.8702C16.1468 36.666 17.7092 36.666 20.834 36.666H29.1673C32.2922 36.666 33.8545 36.666 34.9498 35.8702C35.3035 35.6132 35.6145 35.3022 35.8715 34.9485C36.6673 33.8532 36.6673 32.2908 36.6673 29.166Z" stroke="#543CDA" stroke-width="2.5"/>
<path d="M27.5 26.666L29.0332 27.9875C29.6777 28.543 30 28.8208 30 29.166C30 29.5112 29.6777 29.789 29.0332 30.3445L27.5 31.666" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.5 26.666L20.9668 27.9875C20.3223 28.543 20 28.8208 20 29.166C20 29.5112 20.3223 29.789 20.9668 30.3445L22.5 31.666" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.16602 10H32.4994" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Build', teaser:'We work in short steps and show progress every week on staging.'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.9313 22.2605C31.9488 24.2427 28.2187 24.1657 22.4993 24.1657C18.8197 24.1657 15.8363 21.1778 15.8344 17.4982C15.8344 11.7827 15.7573 8.05043 17.7398 6.06832C19.7222 4.08622 20.5978 4.16647 29.3796 4.16647C30.2283 4.16283 30.6555 5.18917 30.0555 5.78925L25.5338 10.3112C24.3862 11.459 24.383 13.3199 25.5308 14.4675C26.6787 15.6152 28.5397 15.6153 29.6877 14.4678L34.2105 9.94693C34.8107 9.347 35.8372 9.77407 35.8335 10.6226C35.8335 19.403 35.9138 20.2785 33.9313 22.2605Z" stroke="#543CDA" stroke-width="2.5"/>
<path d="M22.4993 24.1667L12.2134 34.4527C10.3724 36.2935 7.38768 36.2935 5.54673 34.4527C3.70578 32.6117 3.70578 29.6268 5.54673 27.786L15.8327 17.5" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round"/>
<path d="M9.18095 30.834H9.16602" stroke="#543CDA" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Test', teaser:'We test with real data where possible, check security and speed, and fix issues. We also verify it works well on Nigerian networks and common devices'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6682 10.8152L22.1442 8.33922C24.932 5.55136 28.5818 4.39497 32.4445 4.206C33.947 4.1325 34.6982 4.09575 35.3005 4.69815C35.903 5.30054 35.8662 6.05174 35.7927 7.55417C35.6037 11.4169 34.4473 15.0667 31.6595 17.8545L29.1835 20.3305C27.1445 22.3695 26.5648 22.9494 26.9928 25.161C27.4153 26.8505 27.8242 28.4865 26.5957 29.715C25.1055 31.2052 23.7462 31.2052 22.256 29.715L10.2836 17.7427C8.7935 16.2525 8.79345 14.8932 10.2836 13.403C11.5121 12.1745 13.1482 12.5834 14.8376 13.0058C17.0493 13.4339 17.6292 12.8542 19.6682 10.8152Z" stroke="white" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M28.3262 11.666H28.3412" stroke="white" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.16602 35.8333L12.4993 27.5" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
<path d="M14.166 35.8333L17.4993 32.5" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
<path d="M4.16602 25.8333L7.49935 22.5" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
</svg>
`, title:'Launch and improve', teaser:'We release in stages, watch uptime and errors, and make steady updates after launch.'},
// add more if needed
];


const support_level = [
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2087 35H16.7927C9.07526 35 5.21657 35 3.79459 32.4898C2.37261 29.9798 4.34626 26.6523 8.29356 19.9975L11.5016 14.5889C15.2933 8.1963 17.1892 5 20.0007 5C22.8122 5 24.708 8.19628 28.4997 14.5889L31.7078 19.9975C35.655 26.6523 37.6287 29.9798 36.2067 32.4898C34.7847 35 30.926 35 23.2087 35Z" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 28.334V20.834" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 14.9971V14.9805" stroke="#543CDA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Critical', teaser:'App down, logins or payments failing. Response target: within 1 hour in support hours. We work until it is stable.'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0007 36.6673C29.2054 36.6673 36.6673 29.2054 36.6673 20.0007C36.6673 10.7959 29.2054 3.33398 20.0007 3.33398C10.7959 3.33398 3.33398 10.7959 3.33398 20.0007C3.33398 29.2054 10.7959 36.6673 20.0007 36.6673Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 13.334V20.834" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 26.6465V26.6631" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'High', teaser:'A major feature is broken but there is a workaround. Same-day fix and confirmation where possible'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 19.9993C4.16602 12.5354 4.16602 8.8035 6.48475 6.48475C8.8035 4.16602 12.5354 4.16602 19.9993 4.16602C27.4632 4.16602 31.1952 4.16602 33.514 6.48475C35.8327 8.8035 35.8327 12.5354 35.8327 19.9993C35.8327 27.4632 35.8327 31.1952 33.514 33.514C31.1952 35.8327 27.4632 35.8327 19.9993 35.8327C12.5354 35.8327 8.8035 35.8327 6.48475 33.514C4.16602 31.1952 4.16602 27.4632 4.16602 19.9993Z" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 13.334V20.834" stroke="#543CDA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 26.6465V26.6631" stroke="#543CDA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, title:'Normal', teaser:'Not blocking work. Planned for the next routine update.'},
// add more if needed
];




const success = [
{
title: "UPTIME & ERRORS",
teaser: "Online time and error rate",
image: "/success-1.webp",
},
{
title: "SPEED",
teaser: "Page and API response time",
image: "/success-2.webp",
},
{
title: "WORKFLOW TIME",
teaser: "How long key tasks and approvals take",
image: "/success-3.webp",
},
{
title: "ADOPTION",
teaser: "Active users and usage trends",
image: "/success-4.webp",
},
{
title: "SUPPORT",
teaser: "Ticket volume and time to resolve",
image: "/success-5.webp",
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

const scope = [
{src:"/scope_proposal.webp", title:'Proposal', teaser:'Scope, milestones, timeline, and cost. Fixed price for a defined phase, or an estimate.'},
{src:"/scope_change.webp", title:'Change', teaser:'Extra work is quoted first and begins only after you approve.'},
{src:"/scope_care.webp", title:'Monthly care', teaser:'This is optional. You can start or stop with notice.'},
];

export default function CustomHome() {
const { isDark } = useDarkMode();
return (
  <>
  
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
<div className={`${isDark ? "darkModeBg " : "bg-white "}  rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='semibold' title='99.9% uptime target'  /></div>
</div>

{/* Child 2 */}
<div className={`${isDark ? "darkModeBg " : "bg-white "}  rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='semibold' title='Fast pages & APIs'  /></div>
</div>

{/* Child 3 */}
<div className={`${isDark ? "darkModeBg " : "bg-white "}  rounded-xl shadow-md px-6 py-4`}>
<div className="mb-3"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="#543CDA"/>
<path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p" css='semibold' title=' Secure by default'  /></div>
</div>
</div>
</div>

<div className='mt-6'>
  
<div className="py-20 px-[1%] sm:px-[5%] md:px-[10%] card-surface">
<div className="sub-title">
<DynamicContent type="h2" title='Why choose Nexoris Technologies' css='text-center' />
<DynamicContent type="p4"  css='text-center' title='From day one, we deliver fast pages, steady uptime, strong security, and a smooth fit with your current tools. Your team gets more done with fewer mistakes.'  />
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-10 p-2 mt-10">
<div className={`${isDark ? "darkModeBg " : "bg-white "} p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3796 21.1227H13.6146C11.1418 21.1227 9.90531 21.1227 9.37828 20.3073C8.85125 19.4922 9.35341 18.3563 10.3577 16.0847L13.3771 9.25538C14.2903 7.19 14.7469 6.1573 15.6326 5.57865C16.5184 5 17.6425 5 19.891 5H23.3733C26.1047 5 27.4703 5 27.9853 5.89225C28.5005 6.7845 27.823 7.97647 26.4678 10.3604L24.6813 13.5031C24.0077 14.6882 23.6708 15.2808 23.6755 15.7659C23.6817 16.3963 24.0168 16.977 24.5583 17.295C24.975 17.5398 25.6538 17.5398 27.0117 17.5398C28.7282 17.5398 29.5865 17.5398 30.0335 17.837C30.6142 18.223 30.9182 18.9137 30.8117 19.6053C30.7297 20.1377 30.1523 20.776 28.9977 22.0528L19.7725 32.2538C17.9605 34.2575 17.0545 35.2593 16.4461 34.9423C15.8377 34.6252 16.1299 33.3037 16.7142 30.6603L17.8588 25.4827C18.3037 23.47 18.5262 22.4637 17.9912 21.7932C17.4562 21.1227 16.4306 21.1227 14.3796 21.1227Z" stroke="#543CDA" strokeWidth="2.5" strokeLinejoin="round"/>
</svg>
</div>
<div className='mt-6'><DynamicContent type="p4" title='Speed' css='font-semibold my-4' /></div>
<div><DynamicContent type="p4" title='Fast-loading pages and APIs' css='my-2' /></div>
</div>
<div className="bg-[#543CDA] p-5 rounded-3xl">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6682 10.8152L22.1442 8.33922C24.932 5.55136 28.5818 4.39497 32.4445 4.206C33.947 4.1325 34.6982 4.09575 35.3005 4.69815C35.903 5.30054 35.8662 6.05174 35.7927 7.55417C35.6037 11.4169 34.4473 15.0667 31.6595 17.8545L29.1835 20.3305C27.1445 22.3695 26.5648 22.9494 26.9928 25.161C27.4153 26.8505 27.8242 28.4865 26.5957 29.715C25.1055 31.2052 23.7462 31.2052 22.256 29.715L10.2836 17.7427C8.7935 16.2525 8.79345 14.8932 10.2836 13.403C11.5121 12.1745 13.1482 12.5834 14.8376 13.0058C17.0493 13.4339 17.6292 12.8542 19.6682 10.8152Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
<path d="M28.3262 11.666H28.3412" stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.16602 35.8333L12.4993 27.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M14.166 35.8333L17.4993 32.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M4.16602 25.8333L7.49935 22.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
</svg>
</div>
<div className='mt-6'><DynamicContent type="p3" title='Reliability' css='font-semibold my-4 text-gray-100' /></div>
<div><DynamicContent type="p" title='99.9% uptime target, stable releases' css='my-2 text-gray-100' /></div>
</div>
<div className={`${isDark ? "darkModeBg" : "bg-white"} p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.1813 5.82622C28.0275 4.25702 24.1682 3.33398 20 3.33398C15.8318 3.33398 11.9725 4.25702 8.8186 5.82623C7.27197 6.59575 6.49865 6.98052 5.74933 8.1903C5 9.40008 5 10.5715 5 12.9142V18.7291C5 28.2015 12.5706 33.468 16.955 35.7236C18.1778 36.3528 18.7892 36.6673 20 36.6673C21.2108 36.6673 21.8222 36.3528 23.0448 35.7236C27.4293 33.468 35 28.2015 35 18.7291V12.9142C35 10.5715 35 9.40008 34.2507 8.1903C33.5013 6.98052 32.728 6.59575 31.1813 5.82622Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0007 14.9993V16.666M18.334 15.8327C18.334 16.2747 18.5097 16.6986 18.8222 17.0111C19.1347 17.3238 19.5587 17.4993 20.0007 17.4993C20.4427 17.4993 20.8667 17.3238 21.1792 17.0111C21.4917 16.6986 21.6673 16.2747 21.6673 15.8327C21.6673 15.3907 21.4917 14.9667 21.1792 14.6542C20.8667 14.3416 20.4427 14.166 20.0007 14.166C19.5587 14.166 19.1347 14.3416 18.8222 14.6542C18.5097 14.9667 18.334 15.3907 18.334 15.8327Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.25 23.3333H18.75L20 17.5L21.25 23.3333Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
<div className='mt-6'><DynamicContent type="p3" title='Security' css='font-semibold my-4' /></div>
<div><DynamicContent type="p" title='Best practices built-in' css='my-2' /></div>
</div>
</div>
</div>


<div className="flex-1 flex flex-col items-center justify-center">
<DynamicContent type="img" src='/results you see.webp' css="h-auto w-auto sm:hidden" teaser={`results you see`} />
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10  p-2 my-16 content-padding">
{/* Child 1 */}
<div className="flex-1 flex-col flex justify-center rounded-lg p-6">
<div><DynamicContent type="h2" title='Results you’ll see after launch' /></div>  
<div><DynamicContent type="p4" title='Once we go live, these are the improvements you’ll notice' /></div>  
{/* Content */}
<div className="px-3 flex flex-col gap-0 mt-10">
<DynamicContent type="p" title='Less manual work, fewer errors' css='py-3 border-l-4 border-[#543CDA] text-[#543CDA] pl-4' />
<DynamicContent type="p" title='Faster approvals, shorter waits' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
<DynamicContent type="p" title='Clear reports your team trusts' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
<DynamicContent type="p" title='Fewer support tickets' css='py-3 border-l-4 border-[#E9EAEB]  pl-4' />
</div>
  <DynamicContent isLink={true} css='bg-[#543CDA] mt-10 text-white' type="btn1" url='/request-a-proposal' title='Get a Proposal' teaser='Get a Proposal' icon='bg-[#4D3BAD] text-gray-100' />
</div>

{/* Child 2 */}
<div className="flex-1 flex flex-col items-center justify-center">
<DynamicContent type="img" src='/results you see.webp' css="h-auto w-auto hidden sm:block" teaser={`results you see`} />
</div>
</div>





<div className="text-center mt-18 mb-8 text-center sub-title">
<DynamicContent type="h2" title='What we build' />
<DynamicContent type="p" title='Practical software for customers, staff, and partners built to fit your daily work and connect to your existing tools.'  />
</div>


<div className="content-padding grid grid-cols-1 sm:grid-cols-3 gap-10 p-2 mt-10">
<div className={`${isDark ? "darkModeBg" : "bg-white"} p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.1497 11.6326C33.7331 10.0659 31.3664 9.28255 27.9331 9.28255H27.5331V9.21589C27.5331 6.41589 27.5331 2.94922 21.2664 2.94922H18.7331C12.4664 2.94922 12.4664 6.43255 12.4664 9.21589V9.29922H12.0664C8.6164 9.29922 6.2664 10.0826 4.84974 11.6492C3.19974 13.4826 3.24974 15.9492 3.4164 17.6326L3.43307 17.7492L3.59974 19.4992C3.6164 19.5159 3.64974 19.5492 3.68307 19.5659C4.23307 19.9326 4.79974 20.2992 5.39974 20.6326C5.63307 20.7826 5.88307 20.9159 6.13307 21.0492C8.98307 22.6159 12.1164 23.6659 15.2997 24.1826C15.4497 25.7492 16.1331 27.5826 19.7831 27.5826C23.4331 27.5826 24.1497 25.7659 24.2664 24.1492C27.6664 23.5992 30.9497 22.4159 33.9164 20.6826C34.0164 20.6326 34.0831 20.5826 34.1664 20.5326C34.9331 20.0992 35.6497 19.6326 36.3497 19.1159C36.3831 19.0992 36.4164 19.0659 36.4331 19.0326L36.4997 18.4326L36.5831 17.6492C36.5997 17.5492 36.5997 17.4659 36.6164 17.3492C36.7497 15.6659 36.7164 13.3659 35.1497 11.6326ZM21.8164 23.0492C21.8164 24.8159 21.8164 25.0826 19.7664 25.0826C17.7164 25.0826 17.7164 24.7659 17.7164 23.0659V20.9659H21.8164V23.0492ZM14.8497 9.28255V9.21589C14.8497 6.38255 14.8497 5.33255 18.7331 5.33255H21.2664C25.1497 5.33255 25.1497 6.39922 25.1497 9.21589V9.29922H14.8497V9.28255Z" fill="#543CDA"/>
<path opacity="0.4" d="M34.1663 20.5C34.0829 20.55 33.9996 20.6 33.9163 20.65C30.9496 22.3833 27.6663 23.55 24.2663 24.1167C24.1329 25.7167 23.4329 27.55 19.7829 27.55C16.1329 27.55 15.4329 25.7333 15.2996 24.15C12.1163 23.65 8.98294 22.6 6.13294 21.0167C5.88294 20.8833 5.63294 20.75 5.39961 20.6C4.79961 20.2667 4.23294 19.9 3.68294 19.5333C3.64961 19.5167 3.61628 19.4833 3.59961 19.4667L4.61628 30.3167C4.96628 33.6333 6.33294 37.05 13.6663 37.05H26.3663C33.6996 37.05 35.0663 33.6333 35.4163 30.3L36.4663 19C36.4496 19.0333 36.4163 19.0667 36.3829 19.0833C35.6663 19.6 34.9329 20.0833 34.1663 20.5Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p3" title='Business portals' css='font-semibold my-4 mt-6' /></div>
<div><DynamicContent type="p" title='Self-service sign-up, subscriptions, billing, account management' css='my-2' /></div>
</div>
<div className="bg-[#110C2C] p-5 rounded-3xl">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.3685 11.6673C27.804 9.69725 29.1854 6.34132 27.5657 4.55402C26.4602 3.33398 24.3807 3.33398 20.2219 3.33398H19.7769C15.618 3.33398 13.5386 3.33398 12.433 4.55402C10.8134 6.34133 12.1947 9.69725 12.6303 11.6673" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30.012 24.4203L22.9786 33.93C21.6296 35.754 20.955 36.666 20.0006 36.666C19.0463 36.666 18.3718 35.754 17.0226 33.93L9.9894 24.4203C8.86158 22.8955 8.29766 22.133 8.3358 21.3205C8.37391 20.508 9.1272 19.657 10.6337 17.9547C12.0858 16.3141 12.6315 14.6151 12.6315 11.6668L27.3698 11.666C27.3698 14.6144 27.9161 16.3136 29.3678 17.9545C30.8743 19.6572 31.6275 20.5083 31.6655 21.3208C31.7035 22.1332 31.1396 22.8955 30.012 24.4203Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.5 23.334C21.7645 23.864 20.9107 24.1673 20 24.1673M20 24.1673C19.0893 24.1673 18.2355 23.864 17.5 23.334M20 24.1673V36.6673" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
</svg>
</div>
<div><DynamicContent type="p3" title='Internal tools' css='font-semibold my-4 mt-6 text-gray-100' /></div>
<div><DynamicContent type="p" title='Workflows and approvals, documents, HR and finance tasks' css='my-2 text-gray-100' /></div>
</div>
<div className={`${isDark ? "darkModeBg" : "bg-white"} p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66602 31.077V13.4244C6.66602 8.66773 6.66602 6.2894 8.13048 4.8117C9.59495 3.33398 11.952 3.33398 16.666 3.33398H23.3327C28.0467 3.33398 30.4037 3.33398 31.8682 4.8117C33.3327 6.2894 33.3327 8.66773 33.3327 13.4244V31.077C33.3327 33.5965 33.3327 34.8562 32.5627 35.352C31.3045 36.1625 29.3595 34.463 28.3812 33.8462C27.5728 33.3363 27.1688 33.0815 26.7202 33.0668C26.2355 33.0508 25.8242 33.2953 24.9508 33.8462L21.766 35.8546C20.9068 36.3963 20.4773 36.6673 19.9993 36.6673C19.5213 36.6673 19.0918 36.3963 18.2327 35.8546L15.0479 33.8462C14.2396 33.3363 13.8354 33.0815 13.3869 33.0668C12.9022 33.0508 12.4909 33.2953 11.6175 33.8462C10.6393 34.463 8.69413 36.1625 7.43593 35.352C6.66602 34.8562 6.66602 33.5965 6.66602 31.077Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.6673 10H13.334" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.6673 16.666H13.334" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.166 16.4583C22.7853 16.4583 21.666 17.4377 21.666 18.6458C21.666 19.854 22.7853 20.8333 24.166 20.8333C25.5467 20.8333 26.666 21.8127 26.666 23.0208C26.666 24.229 25.5467 25.2083 24.166 25.2083M24.166 16.4583C25.2545 16.4583 26.1805 17.067 26.5237 17.9167M24.166 16.4583V15M24.166 25.2083C23.0775 25.2083 22.1515 24.5997 21.8083 23.75M24.166 25.2083V26.6667" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
</svg>
</div>
<div><DynamicContent type="p3" title='Payments & commerce' css='font-semibold my-4 mt-6' /></div>
<div><DynamicContent type="p" title='Checkout, invoices, wallets, recurring payments, automated reconciliation' css='my-2' /></div>
</div>




<div className="bg-[#110C2C] p-5 rounded-3xl text-gray-100">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 6.66602V33.3327" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 6.66602V28.3327" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 6.66602V28.3327" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.5 6.66602V28.3327" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M35 6.66602V33.3327" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 33.334H12.515" stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 33.334H20.015" stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.5 33.334H27.515" stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
<div><DynamicContent type="p3" title='Operations & logistics' css='font-semibold my-4 mt-6' /></div>
<div><DynamicContent type="p" title='Inventory, dispatch, barcode scans, proof of delivery' css='my-2' /></div>
</div>
<div className={`${isDark ? "darkModeBg" : "bg-white"} p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3333 25C10.9695 25 5 22.7615 5 20" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M31.6667 8.33398V19.1673M5 8.33398V31.6673C5 34.4288 10.9695 36.6673 18.3333 36.6673C18.6132 36.6673 18.891 36.6642 19.1667 36.6577" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M18.3333 13.334C25.6971 13.334 31.6667 11.0954 31.6667 8.33398C31.6667 5.57256 25.6971 3.33398 18.3333 3.33398C10.9695 3.33398 5 5.57256 5 8.33398C5 11.0954 10.9695 13.334 18.3333 13.334Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M11.666 13.334V16.6673" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M11.666 25V28.3333" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M28.3327 27.7785V30.0007M28.3327 30.0007V32.2228M28.3327 30.0007H30.5548M28.3327 30.0007H26.1105M34.9993 30.0007C34.9993 33.6825 32.0145 36.6673 28.3327 36.6673C24.6508 36.6673 21.666 33.6825 21.666 30.0007C21.666 26.3188 24.6508 23.334 28.3327 23.334C32.0145 23.334 34.9993 26.3188 34.9993 30.0007Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
</svg>
</div>
<div><DynamicContent type="p3" title='Data & reporting' css='font-semibold my-4 mt-6' /></div>
<div><DynamicContent type="p" title='Role-based dashboards, alerts, clean exports your team trusts' css='my-2' /></div>
</div>
<div className="bg-[#110C2C] p-5 rounded-3xl text-gray-100">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.6516 15.2533C35.9955 17.5697 36.6673 18.7277 36.6673 20C36.6673 21.2723 35.9955 22.4303 34.6516 24.7467L31.4455 30.273C30.107 32.58 29.4378 33.7337 28.3371 34.3668C27.2366 35 25.901 35 23.2295 35H16.7718C14.1004 35 12.7647 35 11.6641 34.3668C10.5636 33.7337 9.8943 32.58 8.55583 30.273L5.34968 24.7467C4.00588 22.4303 3.33398 21.2723 3.33398 20C3.33398 18.7277 4.00588 17.5697 5.34968 15.2533L8.55583 9.72702C9.8943 7.41993 10.5636 6.2664 11.6641 5.6332C12.7647 5 14.1004 5 16.7718 5H23.2295C25.901 5 27.2366 5 28.3371 5.6332C29.4378 6.2664 30.107 7.41995 31.4455 9.72703L34.6516 15.2533Z" stroke="white" strokeWidth="2.5"/>
<path d="M15 13.334L25 26.6673" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
</svg>
</div>
<div><DynamicContent type="p3" title='System integrations' css='font-semibold my-4 mt-6' /></div>
<div><DynamicContent type="p" title='ERP/CRM, payments, SMS, email, and other APIs' css='my-2' /></div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2 content-padding my-20">
<div className={`p-[1%] sm:p-[2%]`}>
<DynamicContent type="h2" title='How we work' />
<DynamicContent type="p" title='From day one we agree on goals, scope, timeline and budget. You’ll see weekly progress on a staging link. If something needs to change, we talk about it and get your approval first. When we go live, we plan it well and keep watch'  />
</div>

  {how_we_work.map((src, i) => {
    const indigoIndexes = [1, 4]; // 👈 manually choose
    return (
      <div
        key={`how_we_work-${i}`}
        className={`p-[1%] sm:p-[2%] md:p-[3%] rounded-3xl ${
      indigoIndexes.includes(i)
        ? "bg-[#322483] text-white"
        : isDark ? "darkModeBg " : "bg-white "
    }`}
      >
        <div className="p-5 h-full flex flex-col">
          <div className="w-[58px] space-y-2 shrink-0 mb-4" dangerouslySetInnerHTML={{ __html: src.src }} />

          <div className="space-y-2 mb-3 mt-5 font-bold">
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



<div className="grid content-padding grid-cols-1 sm:grid-cols-[40%_56%] my-20 py-18 gap-10 p-2 card-surface">  
{/* Child 2 */}
<div className="flex-1 flex flex-col items-center justify-center">
<DynamicContent type="img" src='/done.webp' css="rounded-3xl w-[90%]
    md:w-[80%]" teaser={`Build standards we stick to`} />
</div>

{/* Child 1 */}
<div className="flex-1 flex-col flex justify-center">
<div>
<DynamicContent type="h2" title='Build standards we stick to' />
<DynamicContent type="p4" title='Every project gets the same care - clean code, quick data, smooth integrations, and tests before launch with monitoring after.'  />
</div>
<ul className="list-disc pl-6 space-y-6 mt-10">
<li>Clean, fast builds that work well on real African networks </li>
<li>Simple user flows that reduce support tickets</li>
<li>Integrations for payments, CRM, and internal tools </li>
<li>Clear reports that show results and next steps  </li>
<li>Reliable hosting and VPS via Nexoris Cloud Solutions  </li>
<li>Technical SEO fixes and a practical content plan </li>
</ul>
</div>
</div>



<div className="content-padding sm:hidden"><div className="flex-1 flex flex-col items-center justify-center">
<DynamicContent type="img" src='/security-compliance.webp' css="rounded-3xl w-[90%]
md:w-[80%] sm:hidden" teaser={`Security & compliance you can trust`} />
</div></div>

<div className="grid content-padding grid-cols-1 sm:grid-cols-[56%_40%] my-20 py-18 gap-10 p-2 card-surface">  
{/* Child 2 */}
{/* Child 1 */}
<div className="flex-1 flex-col flex justify-center">
<div>
<DynamicContent type="h2" title='Security & compliance you can trust' />
<DynamicContent type="p4" title='We keep your data safe, limit access to the right people, and make key screens usable for everyone. You’re set for NDPR/GDPR where required and ready for audits.'  />
</div>
<ul className="list-disc pl-6 space-y-6 mt-10">
<li>Encryption in transit and at rest</li>
<li>Role-based access with activity logs</li>
<li>Meets NDPR and GDPR where required </li>
<li>Keyboard and screen-reader support on key screens</li>
</ul>
</div>

<div className="flex-1 flex flex-col items-center justify-center">
<DynamicContent type="img" src='/security-compliance.webp' css="rounded-3xl w-[90%]
    md:w-[80%] hidden sm:block" teaser={`Security & compliance you can trust`} />
</div>
</div>



<div className="text-center sub-title">
<DynamicContent type="h2" title='Operations & hosting' />
<DynamicContent type="p" title='Releases are planned and predictable. You review changes on a staging link, give approval, and we schedule go-live. If anything breaks, we restore quickly. After launch, we keep watch and host on your preferred platform, or on Nexoris Cloud VPS (NVMe) with backups and security. No lock-in.'  />
</div>


<div className="content-padding grid grid-cols-1 sm:grid-cols-3 gap-10 p-2 mt-10">
<div className={`${isDark ? "darkModeBg " : "bg-white "}  p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.1497 11.6326C33.7331 10.0659 31.3664 9.28255 27.9331 9.28255H27.5331V9.21589C27.5331 6.41589 27.5331 2.94922 21.2664 2.94922H18.7331C12.4664 2.94922 12.4664 6.43255 12.4664 9.21589V9.29922H12.0664C8.6164 9.29922 6.2664 10.0826 4.84974 11.6492C3.19974 13.4826 3.24974 15.9492 3.4164 17.6326L3.43307 17.7492L3.59974 19.4992C3.6164 19.5159 3.64974 19.5492 3.68307 19.5659C4.23307 19.9326 4.79974 20.2992 5.39974 20.6326C5.63307 20.7826 5.88307 20.9159 6.13307 21.0492C8.98307 22.6159 12.1164 23.6659 15.2997 24.1826C15.4497 25.7492 16.1331 27.5826 19.7831 27.5826C23.4331 27.5826 24.1497 25.7659 24.2664 24.1492C27.6664 23.5992 30.9497 22.4159 33.9164 20.6826C34.0164 20.6326 34.0831 20.5826 34.1664 20.5326C34.9331 20.0992 35.6497 19.6326 36.3497 19.1159C36.3831 19.0992 36.4164 19.0659 36.4331 19.0326L36.4997 18.4326L36.5831 17.6492C36.5997 17.5492 36.5997 17.4659 36.6164 17.3492C36.7497 15.6659 36.7164 13.3659 35.1497 11.6326ZM21.8164 23.0492C21.8164 24.8159 21.8164 25.0826 19.7664 25.0826C17.7164 25.0826 17.7164 24.7659 17.7164 23.0659V20.9659H21.8164V23.0492ZM14.8497 9.28255V9.21589C14.8497 6.38255 14.8497 5.33255 18.7331 5.33255H21.2664C25.1497 5.33255 25.1497 6.39922 25.1497 9.21589V9.29922H14.8497V9.28255Z" fill="#543CDA"/>
<path opacity="0.4" d="M34.1663 20.5C34.0829 20.55 33.9996 20.6 33.9163 20.65C30.9496 22.3833 27.6663 23.55 24.2663 24.1167C24.1329 25.7167 23.4329 27.55 19.7829 27.55C16.1329 27.55 15.4329 25.7333 15.2996 24.15C12.1163 23.65 8.98294 22.6 6.13294 21.0167C5.88294 20.8833 5.63294 20.75 5.39961 20.6C4.79961 20.2667 4.23294 19.9 3.68294 19.5333C3.64961 19.5167 3.61628 19.4833 3.59961 19.4667L4.61628 30.3167C4.96628 33.6333 6.33294 37.05 13.6663 37.05H26.3663C33.6996 37.05 35.0663 33.6333 35.4163 30.3L36.4663 19C36.4496 19.0333 36.4163 19.0667 36.3829 19.0833C35.6663 19.6 34.9329 20.0833 34.1663 20.5Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p3" title='Releases' css='font-semibold my-4 mt-6' /></div>
<div><DynamicContent type="p" title='Stage, review, approve, then go live on schedule. Tested rollback plan included.' css='my-2' /></div>
</div>
<div className="footerBg p-5 rounded-3xl">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.1497 11.6326C33.7331 10.0659 31.3664 9.28255 27.9331 9.28255H27.5331V9.21589C27.5331 6.41589 27.5331 2.94922 21.2664 2.94922H18.7331C12.4664 2.94922 12.4664 6.43255 12.4664 9.21589V9.29922H12.0664C8.6164 9.29922 6.2664 10.0826 4.84974 11.6492C3.19974 13.4826 3.24974 15.9492 3.4164 17.6326L3.43307 17.7492L3.59974 19.4992C3.6164 19.5159 3.64974 19.5492 3.68307 19.5659C4.23307 19.9326 4.79974 20.2992 5.39974 20.6326C5.63307 20.7826 5.88307 20.9159 6.13307 21.0492C8.98307 22.6159 12.1164 23.6659 15.2997 24.1826C15.4497 25.7492 16.1331 27.5826 19.7831 27.5826C23.4331 27.5826 24.1497 25.7659 24.2664 24.1492C27.6664 23.5992 30.9497 22.4159 33.9164 20.6826C34.0164 20.6326 34.0831 20.5826 34.1664 20.5326C34.9331 20.0992 35.6497 19.6326 36.3497 19.1159C36.3831 19.0992 36.4164 19.0659 36.4331 19.0326L36.4997 18.4326L36.5831 17.6492C36.5997 17.5492 36.5997 17.4659 36.6164 17.3492C36.7497 15.6659 36.7164 13.3659 35.1497 11.6326ZM21.8164 23.0492C21.8164 24.8159 21.8164 25.0826 19.7664 25.0826C17.7164 25.0826 17.7164 24.7659 17.7164 23.0659V20.9659H21.8164V23.0492ZM14.8497 9.28255V9.21589C14.8497 6.38255 14.8497 5.33255 18.7331 5.33255H21.2664C25.1497 5.33255 25.1497 6.39922 25.1497 9.21589V9.29922H14.8497V9.28255Z" fill="white"/>
<path opacity="0.4" d="M34.1663 20.5C34.0829 20.55 33.9996 20.6 33.9163 20.65C30.9496 22.3833 27.6663 23.55 24.2663 24.1167C24.1329 25.7167 23.4329 27.55 19.7829 27.55C16.1329 27.55 15.4329 25.7333 15.2996 24.15C12.1163 23.65 8.98294 22.6 6.13294 21.0167C5.88294 20.8833 5.63294 20.75 5.39961 20.6C4.79961 20.2667 4.23294 19.9 3.68294 19.5333C3.64961 19.5167 3.61628 19.4833 3.59961 19.4667L4.61628 30.3167C4.96628 33.6333 6.33294 37.05 13.6663 37.05H26.3663C33.6996 37.05 35.0663 33.6333 35.4163 30.3L36.4663 19C36.4496 19.0333 36.4163 19.0667 36.3829 19.0833C35.6663 19.6 34.9329 20.0833 34.1663 20.5Z" fill="white"/>
</svg>
</div>
<div><DynamicContent type="p3" title='Monitoring' css='font-semibold my-4 mt-6 text-gray-100' /></div>
<div><DynamicContent type="p" title='We track uptime, errors, response time, background jobs, and database health. Alerts go to our team and yours' css='my-2 text-gray-100' /></div>
</div>
<div className={`${isDark ? "darkModeBg " : "bg-white "} p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.1497 11.6326C33.7331 10.0659 31.3664 9.28255 27.9331 9.28255H27.5331V9.21589C27.5331 6.41589 27.5331 2.94922 21.2664 2.94922H18.7331C12.4664 2.94922 12.4664 6.43255 12.4664 9.21589V9.29922H12.0664C8.6164 9.29922 6.2664 10.0826 4.84974 11.6492C3.19974 13.4826 3.24974 15.9492 3.4164 17.6326L3.43307 17.7492L3.59974 19.4992C3.6164 19.5159 3.64974 19.5492 3.68307 19.5659C4.23307 19.9326 4.79974 20.2992 5.39974 20.6326C5.63307 20.7826 5.88307 20.9159 6.13307 21.0492C8.98307 22.6159 12.1164 23.6659 15.2997 24.1826C15.4497 25.7492 16.1331 27.5826 19.7831 27.5826C23.4331 27.5826 24.1497 25.7659 24.2664 24.1492C27.6664 23.5992 30.9497 22.4159 33.9164 20.6826C34.0164 20.6326 34.0831 20.5826 34.1664 20.5326C34.9331 20.0992 35.6497 19.6326 36.3497 19.1159C36.3831 19.0992 36.4164 19.0659 36.4331 19.0326L36.4997 18.4326L36.5831 17.6492C36.5997 17.5492 36.5997 17.4659 36.6164 17.3492C36.7497 15.6659 36.7164 13.3659 35.1497 11.6326ZM21.8164 23.0492C21.8164 24.8159 21.8164 25.0826 19.7664 25.0826C17.7164 25.0826 17.7164 24.7659 17.7164 23.0659V20.9659H21.8164V23.0492ZM14.8497 9.28255V9.21589C14.8497 6.38255 14.8497 5.33255 18.7331 5.33255H21.2664C25.1497 5.33255 25.1497 6.39922 25.1497 9.21589V9.29922H14.8497V9.28255Z" fill="#543CDA"/>
<path opacity="0.4" d="M34.1663 20.5C34.0829 20.55 33.9996 20.6 33.9163 20.65C30.9496 22.3833 27.6663 23.55 24.2663 24.1167C24.1329 25.7167 23.4329 27.55 19.7829 27.55C16.1329 27.55 15.4329 25.7333 15.2996 24.15C12.1163 23.65 8.98294 22.6 6.13294 21.0167C5.88294 20.8833 5.63294 20.75 5.39961 20.6C4.79961 20.2667 4.23294 19.9 3.68294 19.5333C3.64961 19.5167 3.61628 19.4833 3.59961 19.4667L4.61628 30.3167C4.96628 33.6333 6.33294 37.05 13.6663 37.05H26.3663C33.6996 37.05 35.0663 33.6333 35.4163 30.3L36.4663 19C36.4496 19.0333 36.4163 19.0667 36.3829 19.0833C35.6663 19.6 34.9329 20.0833 34.1663 20.5Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p3" title='Hosting' css='font-semibold my-4 mt-6' /></div>
<div><DynamicContent type="p" title='Use your current provider or choose Nexoris Cloud VPS with backups and security. No lock-in.' css='my-2' /></div>
</div>
</div>



<div className="content-padding card-surface my-16 py-18">
<div className="text-center sub-title">
<DynamicContent type="h2" title='Ways to work with us' />
<DynamicContent type="p" title='Choose how you want to work with us. We can deliver a fixed project, stay on to maintain and improve, or add hands to your team for a set period.'  />
</div>

<div className="content-padding card-surface grid grid-cols-1 sm:grid-cols-3 gap-10 p-2 mt-10">
<div className={`${isDark ? "darkModeBg" : "bg-white"} p-5 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M28.38 0H11.62C4.34 0 0 4.34 0 11.62V28.38C0 35.66 4.34 40 11.62 40H28.38C35.66 40 40 35.66 40 28.38V11.62C40 4.34 35.66 0 28.38 0Z" fill="#543CDA"/>
<path d="M32.6191 13.7402C32.6191 14.5602 31.9591 15.2402 31.1191 15.2402H20.6191C19.7991 15.2402 19.1191 14.5602 19.1191 13.7402C19.1191 12.9202 19.7991 12.2402 20.6191 12.2402H31.1191C31.9591 12.2402 32.6191 12.9202 32.6191 13.7402Z" fill="#543CDA"/>
<path d="M15.9391 11.7991L11.4391 16.2991C11.1391 16.5991 10.7591 16.7391 10.3791 16.7391C9.99914 16.7391 9.59914 16.5991 9.31914 16.2991L7.81914 14.7991C7.21914 14.2191 7.21914 13.2591 7.81914 12.6791C8.39914 12.0991 9.33914 12.0991 9.93914 12.6791L10.3791 13.1191L13.8191 9.67914C14.3991 9.09914 15.3391 9.09914 15.9391 9.67914C16.5191 10.2591 16.5191 11.2191 15.9391 11.7991Z" fill="#543CDA"/>
<path d="M32.6191 27.7402C32.6191 28.5602 31.9591 29.2402 31.1191 29.2402H20.6191C19.7991 29.2402 19.1191 28.5602 19.1191 27.7402C19.1191 26.9202 19.7991 26.2402 20.6191 26.2402H31.1191C31.9591 26.2402 32.6191 26.9202 32.6191 27.7402Z" fill="#543CDA"/>
<path d="M15.9391 25.7991L11.4391 30.2991C11.1391 30.5991 10.7591 30.7391 10.3791 30.7391C9.99914 30.7391 9.59914 30.5991 9.31914 30.2991L7.81914 28.7991C7.21914 28.2191 7.21914 27.2591 7.81914 26.6791C8.39914 26.0991 9.33914 26.0991 9.93914 26.6791L10.3791 27.1191L13.8191 23.6791C14.3991 23.0991 15.3391 23.0991 15.9391 23.6791C16.5191 24.2591 16.5191 25.2191 15.9391 25.7991Z" fill="#543CDA"/>
</svg>
</div>
<div><DynamicContent type="p3" title='Project delivery' css='font-semibold my-4 mt-6' /></div>
<div><DynamicContent type="p" title='MVP or a defined phase with fixed scope, timeline, and price. Good when you want a clear start and finish.' css='my-2' /></div>
</div>
<div className="bg-[#543CDA] p-5 rounded-3xl">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M36.6173 10.684V21.5173H3.33398V10.684C3.33398 6.63398 6.63398 3.33398 10.684 3.33398H29.2673C33.3173 3.33398 36.6173 6.63398 36.6173 10.684Z" fill="white"/>
<path d="M3.33398 21.5332V21.8665C3.33398 25.9332 6.63398 29.2165 10.684 29.2165H17.084C18.0007 29.2165 18.7507 29.9665 18.7507 30.8832V32.4999C18.7507 33.4165 18.0007 34.1665 17.084 34.1665H13.0507C12.3673 34.1665 11.8007 34.7332 11.8007 35.4165C11.8007 36.0999 12.3507 36.6665 13.0507 36.6665H26.9673C27.6507 36.6665 28.2173 36.0999 28.2173 35.4165C28.2173 34.7332 27.6507 34.1665 26.9673 34.1665H22.934C22.0173 34.1665 21.2673 33.4165 21.2673 32.4999V30.8832C21.2673 29.9665 22.0173 29.2165 22.934 29.2165H29.284C33.3507 29.2165 36.634 25.9165 36.634 21.8665V21.5332H3.33398Z" fill="white"/>
</svg>
</div>
<div><DynamicContent type="p3" title='Monthly care' css='font-semibold my-4 mt-6 text-gray-100' /></div>
<div>
<DynamicContent type="p" css='text-gray-100'> <>Ongoing updates, monitoring, and small improvements after launch. 
 <br /><DynamicContent type="link" title='See Website Maintenance & Support.' url='/website-maintenance' css="underline text-gray-100"  /> 
</>
</DynamicContent>
</div>
</div>
<div className={`${isDark ? "darkModeBg " : "bg-white "} p-5 rounded-3xl`}>
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
<div><DynamicContent type="p3" title='Team extension' css='font-semibold my-4 mt-6' /></div>
<div><DynamicContent type="p"> <>
Our specialists work with your team on agreed days
 <br /><DynamicContent type="link" title='See Product Design & Management.' url='/product-design' css="underline"  /> 
</>
</DynamicContent>
</div>
</div>
</div></div>





<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2 content-padding my-20">
<div className={`p-[1%] sm:p-[2%]`}>
<DynamicContent type="h2" title='Support levels - SLAs' />
<DynamicContent type="p" title='Clear response targets during support hours. We keep you updated until the issue is closed.'  />
<div className='my-12'><DynamicContent isLink={true} css='bg-[#543CDA] text-white' type="btn1" url='/request-a-proposal' title='Get a Proposal' teaser='Get a Proposal' icon='bg-[#4D3BAD] text-gray-100' />
</div>
</div>

  {support_level.map((src, i) => {
    const indigoIndexes = [1, 4]; // 👈 manually choose
    return (
      <div
        key={`support_level-${i}`}
        className={`p-[1%] sm:p-[2%] md:p-[3%] rounded-3xl ${
      indigoIndexes.includes(i)
        ? "bg-[#322483] text-white"
        : isDark ? "darkModeBg " : "bg-white "
    }`}
      >
        <div className="p-5 h-full flex flex-col">
          
<div className="w-[58px] space-y-2 shrink-0 mb-4" dangerouslySetInnerHTML={{ __html: src.src }} />
          <div className="space-y-2 mb-3 mt-5 font-bold">
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

<div className="flex justify-center mb-16">
<div className="rounded-full border border-[#543CDA] px-6 py-4 text-center">
<DynamicContent type="p"> <>
Support window: Mon – Fri, 08:00–18:00 WAT.
<br />
Channels: Ticket and email. After-hours cover available on request.
</>
</DynamicContent>
</div>
</div>


<div className="text-center my-14 sub-title">
<DynamicContent type="h2" title='Pricing and scope' />
<DynamicContent type="p" title='Clear terms before we start. After a short call, you’ll get a written plan with deliverables, timeline, milestones, and cost. '  />
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

<div className="text-center my-16 sub-title">
<DynamicContent type="h2" title='Handover and training' />
<DynamicContent type="p" title='You own everything. We hand things over clearly, show your team how to run it, and leave simple guides for daily use.'  />
</div>


<div className={`content-padding grid grid-cols-1 rounded-3xl sm:grid-cols-2 md:grid-cols-4 gap-4 items-stretch  py-6 px-3`}>
{hand_over.map((src, i) => (
<div key={`hand-over-${i}`} className={`mb-5 p-[1%] sm:p-[2%] md:p-[3%] rounded-3xl ${isDark ? " darkModeBg" : " bg-white"}`}>
<div className="p-5 h-full flex flex-col">
<div className="w-[58px] space-y-2 shrink-0 mb-4" dangerouslySetInnerHTML={{ __html: src.src }} />

<div className="space-y-2 mb-3 font-bold"><DynamicContent css={`font-bold`} type="p4" title={src.title || ``}  /></div>
<div className="space-y-2"><DynamicContent type="p" title={src.teaser || ``}  /></div>
</div>
</div>
))}
</div>


<div className="my-8 content-padding">
<DynamicContent type="h2" title='Success metrics' />
<DynamicContent type="p" title='We track these numbers with you after launch and set clear targets for each one.'  />
</div>


<div className="grid grid-cols-1 sm:grid-cols-5 gap-6 mt-10 content-padding">
  {success.map((blog, index) => (
    <div key={index} className={`${isDark ? "" : " border border-gray-200  "} rounded-lg overflow-hidden`}>
      
      {/* Fixed-height container */}
      <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
        {/* Floating tag */}
        <span className={`absolute top-4 left-4 z-3 bg-[#EAEAEA4D] text-white text-sm font-medium px-4 py-2 rounded-full border border-[#EAEAEA99]`}>
          {blog.title}
        </span>

        {/* Image fills container */}
        <DynamicContent
          type="img"
          src={blog.image}
          css="w-full h-full object-cover brightness-55"
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

<div className="text-center mt-30 sub-title">
<DynamicContent type="h2" title='Got questions? We’ve got answers' />
<DynamicContent type="p" title='Clear answers to the questions clients ask most.'  />
</div>
<div>
<Accordion items={faqItems} defaultOpenIndex={0} />
</div>
</div></>
);
}
