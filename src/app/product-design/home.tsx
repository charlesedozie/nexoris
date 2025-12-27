'use client'

import type { Metadata } from 'next'
import DynamicContent, {DynamicIcon, useDarkMode} from "@/components/cards"
import ScopeDRK from "@/components/scopedrk"
import ScopeWHT from "@/components/scopewht"
import ScopeSMWHT from "@/components/scopesmwht"




const our_process = [
{src:"01.", title:'Define goals', teaser:'Align on users, problems, scope, and success measures.'},
{src:"02.", title:'Discover insights', teaser:'Talk to users, review data, map key journeys.'},
{src:"03.", title:'Prototype & test', teaser:'Build a clickable demo, test with real people, fix friction'},
{src:"04.", title:'Design the interface', teaser:'Final screens and a reusable design system.'},
{src:"05.", title:'Plan the build', teaser:'Backlog, user stories, releases, and clear owners.'},
{src:"06.", title:'Launch & improve', teaser:'Deploy with monitoring; review results; plan next updates'},
];

const who_we_help = [
{src:"01.", title:'Launching a new product', teaser:[`Validate the idea quickly with prototypes and user checks`,`Define MVP, brand basics, and success metrics`,`Plan backlog, releases, and acceptance criteria
`]},
{src:"02.", title:'Revamping an existing product', teaser:[`Find friction in key journeys and remove it`,`Refresh the UI and design system without losing what works`,`Lift sign-ups, purchases, and retention with small, steady tests
`]},
{src:"03.", title:'Growing and scaling', teaser:[`Set up a design system and component library`,`
Align roadmap, owners, and delivery schedule`,`Add tracking, dashboards, and clear reporting
`]},
];

const ways_work_with_us = [
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#00B8D9"/>
<path d="M30.8002 18.5172C30.7695 18.4708 30.7289 18.4317 30.6812 18.403C30.6336 18.3742 30.5801 18.3563 30.5248 18.3508C30.4694 18.3452 30.4134 18.352 30.361 18.3708C30.3086 18.3895 30.261 18.4197 30.2217 18.4591L23.1511 25.5297C23.008 25.6569 22.8217 25.7246 22.6303 25.7188C22.439 25.713 22.257 25.6343 22.1218 25.4988C21.9866 25.3632 21.9084 25.1811 21.9032 24.9897C21.8979 24.7983 21.966 24.6122 22.0936 24.4694L30.7842 15.7797C30.8539 15.71 30.9092 15.6273 30.9469 15.5363C30.9846 15.4452 31.004 15.3476 31.004 15.2491C31.004 15.1506 30.9846 15.053 30.9469 14.9619C30.9092 14.8709 30.8539 14.7882 30.7842 14.7185C30.7145 14.6488 30.6318 14.5935 30.5408 14.5558C30.4497 14.5181 30.3521 14.4987 30.2536 14.4987C30.1551 14.4987 30.0575 14.5181 29.9664 14.5558C29.8754 14.5935 29.7927 14.6488 29.723 14.7185L28.4686 15.9738C26.6784 14.5757 24.4833 13.7955 22.2124 13.7501C19.9414 13.7048 17.7169 14.3968 15.8724 15.7224C14.0278 17.0479 12.6627 18.9357 11.9815 21.1026C11.3003 23.2695 11.3399 25.5988 12.0942 27.7413C12.1976 28.035 12.3893 28.2896 12.6431 28.4701C12.8969 28.6505 13.2003 28.748 13.5117 28.7491H30.487C30.7981 28.7493 31.1016 28.6528 31.3554 28.4729C31.6092 28.293 31.8008 28.0386 31.9036 27.745C32.4382 26.225 32.6167 24.6026 32.4254 23.0028C32.2341 21.4029 31.6781 19.8683 30.8002 18.5172ZM15.3849 25.6C15.4244 25.795 15.3849 25.9976 15.275 26.1634C15.1651 26.3292 14.9938 26.4446 14.7989 26.4841C14.7496 26.4942 14.6993 26.4992 14.6489 26.4991C14.476 26.4989 14.3086 26.4389 14.1748 26.3294C14.041 26.2199 13.9492 26.0676 13.9149 25.8982C13.6467 24.5779 13.7056 23.2121 14.0866 21.9199C14.4676 20.6277 15.159 19.4484 16.1006 18.4849C17.0421 17.5213 18.2052 16.8028 19.4882 16.3921C20.7713 15.9814 22.1353 15.8908 23.4614 16.1285C23.6572 16.1635 23.8311 16.2749 23.9447 16.4382C24.0584 16.6014 24.1026 16.8031 24.0675 16.9989C24.0325 17.1947 23.921 17.3686 23.7578 17.4823C23.5946 17.5959 23.3928 17.6401 23.197 17.605C22.1119 17.4108 20.9957 17.485 19.9458 17.8212C18.8959 18.1574 17.9443 18.7453 17.1738 19.5338C16.4034 20.3223 15.8376 21.2873 15.5257 22.3447C15.2139 23.4021 15.1655 24.5197 15.3849 25.6Z" fill="white"/>
</svg>`, title:'Fixed-Scope Project', teaser:`Defined outcome on an agreed budget. Strategy, design, and clean handover to engineers.`},
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#2ECC71"/>
<path d="M19.3751 13.375C19.3751 12.8558 19.529 12.3483 19.8175 11.9166C20.1059 11.485 20.5159 11.1485 20.9955 10.9498C21.4752 10.7511 22.003 10.6992 22.5122 10.8004C23.0214 10.9017 23.4891 11.1517 23.8562 11.5188C24.2233 11.886 24.4734 12.3537 24.5746 12.8629C24.6759 13.3721 24.6239 13.8999 24.4253 14.3795C24.2266 14.8592 23.8901 15.2692 23.4585 15.5576C23.0268 15.846 22.5193 16 22.0001 16C21.3039 16 20.6362 15.7234 20.1439 15.2312C19.6516 14.7389 19.3751 14.0712 19.3751 13.375ZM31.3376 18.6784C31.2692 18.3424 31.0857 18.0408 30.8187 17.8256C30.5517 17.6105 30.218 17.4953 29.8751 17.5H14.1251C13.7831 17.5 13.4514 17.6168 13.1849 17.8312C12.9184 18.0455 12.7332 18.3444 12.6599 18.6785C12.5866 19.0125 12.6296 19.3616 12.7818 19.6678C12.9341 19.974 13.1864 20.219 13.497 20.3622H13.5026L18.5548 22.5869L16.4998 30.3963C16.3429 30.755 16.3326 31.1609 16.471 31.5272C16.6094 31.8935 16.8855 32.1911 17.2404 32.3566C17.4387 32.4507 17.6555 32.4997 17.8751 32.5C18.1578 32.5004 18.435 32.4209 18.6745 32.2706C18.914 32.1203 19.1062 31.9054 19.2288 31.6506L22.0001 26.875L24.7732 31.6563C24.9457 32.0071 25.2483 32.2768 25.6167 32.4078C25.9851 32.5388 26.39 32.5208 26.7453 32.3576C27.1006 32.1945 27.3782 31.899 27.5189 31.5343C27.6596 31.1695 27.6523 30.7642 27.4985 30.4047L25.4435 22.5953L30.506 20.3678C30.8202 20.2278 31.0754 19.9821 31.2273 19.6735C31.3792 19.3649 31.4182 19.0128 31.3376 18.6784Z" fill="white"/>
</svg>
`, title:'Monthly Product Management', teaser:`Keep the roadmap moving - backlog, sprints, QA, and steady design updates.`},
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#543CDA"/>
<path d="M29.5 13.75H14.5C14.1022 13.75 13.7206 13.908 13.4393 14.1893C13.158 14.4706 13 14.8522 13 15.25V20.5C13 25.4425 15.3925 28.4378 17.3997 30.0803C19.5616 31.8484 21.7122 32.4484 21.8059 32.4738C21.9348 32.5088 22.0708 32.5088 22.1997 32.4738C22.2934 32.4484 24.4413 31.8484 26.6059 30.0803C28.6075 28.4378 31 25.4425 31 20.5V15.25C31 14.8522 30.842 14.4706 30.5607 14.1893C30.2794 13.908 29.8978 13.75 29.5 13.75ZM26.2825 20.2806L21.0325 25.5306C20.9628 25.6004 20.8801 25.6557 20.7891 25.6934C20.698 25.7312 20.6004 25.7506 20.5019 25.7506C20.4033 25.7506 20.3057 25.7312 20.2147 25.6934C20.1236 25.6557 20.0409 25.6004 19.9713 25.5306L17.7213 23.2806C17.5805 23.1399 17.5015 22.949 17.5015 22.75C17.5015 22.551 17.5805 22.3601 17.7213 22.2194C17.862 22.0786 18.0529 21.9996 18.2519 21.9996C18.4509 21.9996 18.6418 22.0786 18.7825 22.2194L20.5 23.9397L25.2194 19.2194C25.2891 19.1497 25.3718 19.0944 25.4628 19.0567C25.5539 19.019 25.6515 18.9996 25.75 18.9996C25.8485 18.9996 25.9461 19.019 26.0372 19.0567C26.1282 19.0944 26.2109 19.1497 26.2806 19.2194C26.3503 19.2891 26.4056 19.3718 26.4433 19.4628C26.481 19.5539 26.5004 19.6515 26.5004 19.75C26.5004 19.8485 26.481 19.9461 26.4433 20.0372C26.4056 20.1282 26.3503 20.2109 26.2806 20.2806H26.2825Z" fill="white"/>
</svg>

`, title:'Design Sprint', teaser:`Test a big idea fast with a clickable prototype and short user checks. Decide with evidence`},
{src:`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#F4B400"/>
<path d="M25.75 20.4998C25.75 21.5381 25.4421 22.5532 24.8652 23.4165C24.2884 24.2799 23.4684 24.9528 22.5091 25.3501C21.5498 25.7475 20.4942 25.8515 19.4758 25.6489C18.4574 25.4463 17.5219 24.9463 16.7877 24.2121C16.0535 23.4779 15.5535 22.5424 15.3509 21.524C15.1483 20.5056 15.2523 19.45 15.6497 18.4907C16.047 17.5314 16.7199 16.7114 17.5833 16.1346C18.4466 15.5577 19.4617 15.2498 20.5 15.2498C21.8924 15.2498 23.2278 15.8029 24.2123 16.7875C25.1969 17.772 25.75 19.1074 25.75 20.4998ZM31.5307 31.5304C31.461 31.6001 31.3783 31.6554 31.2872 31.6932C31.1962 31.7309 31.0986 31.7504 31 31.7504C30.9015 31.7504 30.8039 31.7309 30.7128 31.6932C30.6218 31.6554 30.5391 31.6001 30.4694 31.5304L25.7763 26.8363C24.1442 28.1941 22.0515 28.8705 19.9335 28.7247C17.8154 28.5789 15.8351 27.6222 14.4045 26.0536C12.9738 24.485 12.203 22.4252 12.2522 20.3027C12.3015 18.1803 13.1671 16.1585 14.6689 14.6579C16.1708 13.1574 18.1934 12.2936 20.3159 12.2462C22.4384 12.1988 24.4975 12.9715 26.0648 14.4035C27.6322 15.8356 28.5871 17.8167 28.731 19.9349C28.8749 22.053 28.1968 24.1451 26.8375 25.776L31.5307 30.4691C31.6004 30.5388 31.6557 30.6215 31.6934 30.7126C31.7312 30.8036 31.7506 30.9012 31.7506 30.9998C31.7506 31.0983 31.7312 31.1959 31.6934 31.287C31.6557 31.378 31.6004 31.4607 31.5307 31.5304ZM20.5 27.2498C21.8351 27.2498 23.1401 26.8539 24.2501 26.1122C25.3602 25.3705 26.2253 24.3163 26.7362 23.0829C27.2471 21.8495 27.3808 20.4923 27.1203 19.1829C26.8599 17.8735 26.217 16.6708 25.273 15.7268C24.329 14.7828 23.1263 14.1399 21.8169 13.8795C20.5075 13.619 19.1503 13.7527 17.9169 14.2636C16.6835 14.7745 15.6293 15.6396 14.8876 16.7497C14.1459 17.8597 13.75 19.1647 13.75 20.4998C13.752 22.2894 14.4638 24.0051 15.7293 25.2706C16.9947 26.536 18.7104 27.2478 20.5 27.2498Z" fill="white"/>
</svg>
`, title:'Post-Launch Support', teaser:`Updates, fixes, and monitoring. Urgent tickets same day; standard within 1–2 business days.`},
];

const build_launch = [
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.3491 6.56617C34.1658 12.0162 29.1824 19.1328 24.4324 23.7828C23.7491 19.4828 20.3158 16.1162 15.9824 15.5162C20.6491 10.7495 27.8158 5.6995 33.2824 3.4995C34.2491 3.13283 35.2158 3.41617 35.8158 4.01617C36.4491 4.6495 36.7491 5.5995 36.3491 6.56617Z" fill="white"/>
<path opacity="0.4" d="M24.4326 23.7842C23.5992 24.6009 22.7659 25.3509 21.9659 25.9842L18.6826 28.6176C18.2659 28.9176 17.8492 29.1676 17.3826 29.3676C17.3826 29.0509 17.3492 28.7342 17.3159 28.4009C17.1326 27.0176 16.4992 25.7009 15.3826 24.5842C14.2326 23.4509 12.8659 22.8009 11.4492 22.6176C11.1159 22.5842 10.7659 22.5676 10.4492 22.5842C10.6326 22.0676 10.9159 21.5842 11.2659 21.1842L13.8659 17.9009C14.4826 17.1176 15.1992 16.3176 15.9826 15.5176C20.3159 16.1176 23.7492 19.4842 24.4326 23.7842Z" fill="white"/>
<path d="M17.3836 29.366C17.3836 31.1994 16.6836 32.9494 15.3503 34.266C14.3336 35.2994 12.9669 35.9994 11.3003 36.1994L7.21693 36.6494C4.98359 36.8994 3.06693 34.9827 3.31693 32.7327L3.76693 28.6327C4.16693 24.9827 7.21693 22.6494 10.4503 22.5827C10.7669 22.566 11.1169 22.5827 11.4503 22.616C12.8669 22.7994 14.2336 23.4494 15.3836 24.5827C16.5003 25.6994 17.1336 27.016 17.3169 28.3994C17.3503 28.7327 17.3836 29.0494 17.3836 29.366Z" fill="white"/>
</svg>`, title:'Design package', teaser:`Figma links with specs for all states and breakpoints • Export-ready icons/images • Design tokens with usage notes`},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M36.6673 13.334V26.984C36.6673 33.0507 33.0507 36.6673 26.984 36.6673H13.0173C6.95065 36.6673 3.33398 33.0507 3.33398 26.984V13.3507L36.6673 13.334Z" fill="white"/>
<path d="M15.0009 29.5834C14.8176 29.5834 14.6176 29.5334 14.4509 29.45C13.1676 28.8 12.0676 27.8334 11.2676 26.6334C10.6009 25.6334 10.6009 24.35 11.2676 23.35C12.0676 22.15 13.1676 21.1834 14.4509 20.55C15.0676 20.2334 15.8176 20.5 16.1342 21.1167C16.4509 21.7334 16.2009 22.4834 15.5676 22.8C14.6676 23.25 13.9009 23.9334 13.3509 24.7667C13.2509 24.9167 13.2509 25.1167 13.3509 25.2834C13.9009 26.1167 14.6676 26.8 15.5676 27.25C16.1842 27.5667 16.4342 28.3167 16.1342 28.9334C15.9009 29.3334 15.4509 29.5834 15.0009 29.5834Z" fill="white"/>
<path d="M25.3494 29.584C24.8827 29.584 24.4494 29.334 24.2327 28.9007C23.9161 28.284 24.1661 27.534 24.7994 27.2174C25.6994 26.7673 26.4661 26.084 27.0161 25.2507C27.1161 25.1007 27.1161 24.9007 27.0161 24.734C26.4661 23.9007 25.6994 23.2174 24.7994 22.7673C24.1827 22.4507 23.9327 21.7007 24.2327 21.084C24.5494 20.4673 25.2994 20.2174 25.9161 20.5174C27.1994 21.1674 28.2994 22.134 29.0994 23.334C29.7661 24.334 29.7661 25.6174 29.0994 26.6174C28.2994 27.8174 27.1994 28.784 25.9161 29.4173C25.7161 29.534 25.5327 29.584 25.3494 29.584Z" fill="white"/>
<path d="M36.6673 13.0173V13.334L3.33398 13.3507V13.0173C3.33398 6.95065 6.95065 3.33398 13.0173 3.33398H26.984C33.0507 3.33398 36.6673 6.95065 36.6673 13.0173Z" fill="white"/>
</svg>
`, title:'Build plan', teaser:`Groomed backlog and Prioritized first two sprints with owners and dates • API contracts with sample payloads`},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.1169 11.583C35.0503 7.96634 32.0336 4.94968 28.4169 3.88301C25.6669 3.08301 23.7669 3.14968 22.4503 4.13301C20.8669 5.31634 20.6836 7.44968 20.6836 8.96634V13.1163C20.6836 17.2163 22.5503 19.2997 26.2169 19.2997H31.0003C32.5003 19.2997 34.6503 19.1163 35.8336 17.533C36.8503 16.233 36.9336 14.333 36.1169 11.583Z" fill="white"/>
<path opacity="0.4" d="M31.517 22.2659C31.0837 21.7659 30.4503 21.4826 29.8003 21.4826H23.8337C20.9003 21.4826 18.517 19.0993 18.517 16.1659V10.1993C18.517 9.54927 18.2337 8.91594 17.7337 8.48261C17.2503 8.04927 16.5837 7.84927 15.9503 7.93261C12.0337 8.43261 8.43365 10.5826 6.08365 13.8159C3.71699 17.0659 2.85032 21.0326 3.60032 24.9993C4.68365 30.7326 9.26699 35.3159 15.017 36.3993C15.9337 36.5826 16.8503 36.6659 17.767 36.6659C20.7837 36.6659 23.7003 35.7326 26.1837 33.9159C29.417 31.5659 31.567 27.9659 32.067 24.0493C32.1503 23.3993 31.9503 22.7493 31.517 22.2659Z" fill="white"/>
</svg>
`, title:'Quality & release', teaser:`Test cases and QA checklist • Launch plan with owners and rollback steps • Analytics plan (dashboards, error monitoring)`},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.334 23.75C35.4051 23.75 37.084 22.0711 37.084 20C37.084 17.9289 35.4051 16.25 33.334 16.25C31.2629 16.25 29.584 17.9289 29.584 20C29.584 22.0711 31.2629 23.75 33.334 23.75Z" fill="white"/>
<path d="M33.334 10.416C35.4051 10.416 37.084 8.73708 37.084 6.66602C37.084 4.59495 35.4051 2.91602 33.334 2.91602C31.2629 2.91602 29.584 4.59495 29.584 6.66602C29.584 8.73708 31.2629 10.416 33.334 10.416Z" fill="white"/>
<path d="M33.334 37.084C35.4051 37.084 37.084 35.4051 37.084 33.334C37.084 31.2629 35.4051 29.584 33.334 29.584C31.2629 29.584 29.584 31.2629 29.584 33.334C29.584 35.4051 31.2629 37.084 33.334 37.084Z" fill="white"/>
<path d="M6.66602 23.75C8.73708 23.75 10.416 22.0711 10.416 20C10.416 17.9289 8.73708 16.25 6.66602 16.25C4.59495 16.25 2.91602 17.9289 2.91602 20C2.91602 22.0711 4.59495 23.75 6.66602 23.75Z" fill="white"/>
<path opacity="0.4" d="M31.6673 21.2493C32.3507 21.2493 32.9173 20.6827 32.9173 19.9993C32.9173 19.316 32.3507 18.7493 31.6673 18.7493H19.584V11.666C19.584 9.03268 20.7007 7.91602 23.334 7.91602H31.6673C32.3507 7.91602 32.9173 7.34935 32.9173 6.66602C32.9173 5.98268 32.3507 5.41602 31.6673 5.41602H23.334C19.3007 5.41602 17.084 7.63268 17.084 11.666V18.7493H8.33398C7.65065 18.7493 7.08398 19.316 7.08398 19.9993C7.08398 20.6827 7.65065 21.2493 8.33398 21.2493H17.084V28.3327C17.084 32.366 19.3007 34.5827 23.334 34.5827H31.6673C32.3507 34.5827 32.9173 34.016 32.9173 33.3327C32.9173 32.6493 32.3507 32.0827 31.6673 32.0827H23.334C20.7007 32.0827 19.584 30.966 19.584 28.3327V21.2493H31.6673Z" fill="white"/>
</svg>
`, title:'Access & setup', teaser:`Environment list and config keys (no secrets in files) • Account map with roles and permissions`},
];




const success = [
{
title: "EFFICIENCY",
teaser: "Faster time to market, fewer reworks",
image: "/efficiency.webp",
},
{
title: "COLLABORATION",
teaser: "Clear handover to engineering, shorter build cycles",
image: "/COLLABORATION.webp",
},
{
title: "IMPACT",
teaser: "Higher adoption and better conversion from day one",
image: "/impact.webp",
},
{
title: "USABILITY",
teaser: "Consistent UI that lowers support issues",
image: "/USABILITY.webp",
},
{
title: "CLARITY",
teaser: "A roadmap you can share with your team and stakeholders",
image: "/clarity.webp",
},
{
title: "ACCOUNTABILITY",
teaser: "Honest reporting so you always know what’s next",
image: "/ACCOUNTABILITY.webp",
},
];


const engineered = [
{src:"/speed.webp", title:'NVMe speed', teaser:'NVMe-powered servers keep pages quick on any device.'},
{src:"/access.webp", title:'Reliable uptime', teaser:'99.9% target with clear status updates.'},
{src:"/secure.webp", title:'Straight pricing', teaser:'Simple plans and domain fees. No hidden charges'},
{src:"/search.webp", title:'Free migration', teaser:'We move your site carefully and test before go-live.'},
// add more if needed
];

const what_you_get = [
{src:"/speed.webp", title:'Strong foundations', teaser:'Fast, indexable, structured site that search engines and people trust'},
{src:"/access.webp", title:'Content that answers', teaser:'Clear, scannable pages designed around real questions and intent'},
{src:"/secure.webp", title:'Credible authority', teaser:'Coverage and links you’ll be proud to show your legal and brand teams'},
{src:"/search.webp", title:'Conversion clarity', teaser:'Forms, CTAs, and navigation that remove friction and lift completion rates'},
// add more if needed
];

const services = [
{src:"/speed.webp", title:'Technical SEO', teaser:[`Foundation & performance: Crawl/index fixes, Core Web Vitals, sitemaps/canonicals, modern frameworks, international setup`, `On-page optimization: Intent mapping per page, titles/headings/meta`, `Migrations: Pre/post-launch checks, redirect maps, rollback plan`]},
{src:"/access.webp", title:'Content Writing', teaser:[`Clear & actionable: Research-backed articles, landing pages, and service pages that deliver direct answers`,`Trust signals: Named authors, expert review, citations, “Reviewed on” dates`,`Strategic briefs: Intent, outline, and measurement plan for every piece`]},
{src:"/secure.webp", title:'Digital PR', teaser:[`Link earning: Expert commentary, data-led stories, useful tools/resources`,`Brand mention reclaim: Turn unlinked mentions into quality backlinks`,`Policy: No link farms, no paid links, no PBNs`]},
{src:"/search.webp", title:'UX & Conversion', teaser:[`Frictionless pages: Fast, readable, mobile-first layouts; form and CTA improvements`,`Testing: Copy and navigation experiments to raise CTR and completion rates`]},
{src:"/search.webp", title:[`Local: Location hubs, service-area pages, Google Business Profile setup/tracking, NAP consistency, simple reviews ops`,`International: Clear URL structure, correct hreflang/canonicals, region-specific keywords and copy`]},
// add more if needed
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


const what_we_measure = [
{src:"/speed.webp", title:'Business results', teaser:[`Qualified leads from search: +20–40% in 3–6 months`,`Pipeline influenced by search: 25–50%`,`Organic CAC: 10–30% lower in 6–12 months
`]},
{src:"/access.webp", title:'SEO performance', teaser:[`Non-brand clicks: +25–60% in 3–9 months`,`Share of voice on priority keywords: +5–15 points/quarter`,`Top-3 rankings on key pages: quarterly lift (from baseline)`]},
{src:"/secure.webp", title:'Site health & quality', teaser:[`Core Web Vitals : ≥95% URLs passing — LCP ≤2.5s, INP <200ms, CLS ≤0.1`,`Index coverage: ≥95% priority pages indexed; zero critical errors`,`CTR: +1–3 points within 60 days of on-page updates`]},
{src:"/search.webp", title:'Reporting', teaser:'Dashboard: daily updates • Weekly: quick wins & fixes • Monthly: results + next 30 days • Quarterly: next 90-day plan'},
];


export default function SEOHome() {
const { isDark } = useDarkMode();
return (
  <>
  
<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-10 content-padding">
  {success.map((blog, index) => (
    <div key={index} className={`${isDark ? "" : "border border-gray-200 "}  rounded-lg overflow-hidden`}>
      
      {/* Fixed-height container */}
      <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
        {/* Floating tag */}
        <span className="absolute top-4 left-4 z-1 bg-[#EAEAEA4D] text-white text-sm font-medium px-4 py-2 rounded-full border border-gray-400">
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
        <div className="absolute bottom-0 left-0 right-0 z-1 bg-gradient-to-t from-black/80 to-transparent p-4">
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



<div className="mb-10 mt-14 content-padding">
<DynamicContent type="h2" title='Scope & Deliverables' />
<DynamicContent type="p" title='Everything needed to plan, validate, design, and manage delivery - plus optional brand work when required.'  />
</div>






<div className='content-padding hidden sm:block'>
<div className='flex items-center justify-center'>
{isDark ? <ScopeDRK /> : <ScopeWHT />}  
</div>
</div>


<div className='content-padding sm:hidden'>
<div className='flex items-center justify-center'>
{isDark ? 'SM DRK' : <ScopeSMWHT />}  
</div>
</div>














<div className='mt-6'>
<div className='content-padding my-18'>
<div className='border border-[#543CDA] p-6 rounded-2xl'>
<DynamicContent type="p"> <>
Need deeper build work? See {" "} <DynamicContent type="link" title='Custom Software Solutions.' url='/custom-software-solutions' css="underline font-semibold"  />  Need steady care after launch? <DynamicContent type="link" title='See Website Maintenance & Support.' url='/website-maintenance' css="underline font-semibold"  /> Need hosting or migration?  {" "}<br /><DynamicContent type="link" title='See Cloud Solutions ' url='/custom-software-solutions' css="underline font-semibold"  />
 </>
</DynamicContent>
</div>
</div>















<div className="grid grid-cols-1 sm:grid-cols-[38%_58%] gap-10 content-padding">
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

<div><DynamicContent type="h2" title='How We Work' css='font-bold mt-8' /></div>
<DynamicContent type="p" title='A simple path with visible progress at each step.' />
<div className='mt-6'>
 <DynamicContent isLink={true} css='bg-[#543CDA] text-white' type="btn1" url='/request-a-proposal' title='Get a Proposal' teaser='Get a Proposal' icon='bg-[#4D3BAD] text-gray-100' /></div>
</div>
</div>
<div>




<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{our_process.map((item, i) => (
<div key={i} className="rounded-xl md:[&:last-child:nth-child(odd)]:col-span-2
">
<div className={`${isDark ? "darkModeBg " : "border border-gray-200 "} flex w-full max-w-5xl items-stretch gap-6  rounded-2xl p-5`}>
{/* First div — size fits content */}
<div className="flex items-center justify-center text-[#543CDA] text-4xl font-bold">
{item.src}
</div>

{/* Second div — fills remaining space */}
<div className="flex-1 flex-col">
<DynamicContent type="p3" title={item.title} css='font-bold mb-2' />
<DynamicContent type="p" title={item.teaser} /></div></div>
</div>))}</div></div></div>





<div className="my-18 text-center content-padding">
<DynamicContent type="h2" title='Who We Help' />
<DynamicContent type="p3" title='Founders, product leads, and operations teams - whether launching, fixing, or scaling.'  />
</div>









<div className="grid grid-cols-1 sm:grid-cols-3 gap-10 content-padding">
    <div className="flex h-full">
  <div className="w-full flex flex-col h-full">
    {/* Top dark strip (fixed height) */}
    <div className="h-16 rounded-t-3xl bg-gradient-to-r from-black to-zinc-900" />

    {/* Overlapping content (fills remaining height) */}
     <div className={`${isDark ? "darkModeBg -mt-6 relative z-10 flex-1 border border-gray-700 rounded-t-3xl border-t border-t-purple-700 p-6 flex flex-col" : "-mt-6 relative z-10 flex-1 border border-gray-200 rounded-t-3xl bg-white border-t border-t-purple-200 p-6 flex flex-col"} `}>
      {/* Icon */}
      <div className="mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">
   <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 17.1088V10H32.5V17.1088C32.5 22.4002 32.5 25.0458 30.8728 26.6895C29.2457 28.3333 26.6267 28.3333 21.3888 28.3333H18.6112C13.3733 28.3333 10.7544 28.3333 9.12718 26.6895C7.5 25.0458 7.5 22.4002 7.5 17.1088Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 10.0007L8.70192 7.43655C9.63408 5.44795 10.1002 4.45365 11.0449 3.89382C11.9896 3.33398 13.2014 3.33398 15.625 3.33398H24.375C26.7987 3.33398 28.0103 3.33398 28.9552 3.89382C29.8998 4.45365 30.366 5.44795 31.298 7.43655L32.5 10.0007" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M17.5 15H22.5" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M20.0007 32.5V36.6667M20.0007 32.5H11.6673M20.0007 32.5H28.334M11.6673 32.5H7.50065C5.19947 32.5 3.33398 34.3655 3.33398 36.6667M11.6673 32.5V36.6667M28.334 32.5H32.5007C34.8018 32.5 36.6673 34.3655 36.6673 36.6667M28.334 32.5V36.6667" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


        </div>
      </div>

      {/* Title */}
<DynamicContent
type="p4"
title={who_we_help[0].title}
css="mb-4 text-lg font-semibold"
/>

{/* Content grows naturally but cards stay equal height */}
<ul className="list-disc pl-6 space-y-2 p-base-res">
      {(who_we_help[0].teaser).map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
</ul>
    </div>
  </div>
</div>



<div className="flex h-full">
  <div className="w-full flex flex-col h-full">
<div className="h-16 rounded-t-3xl bg-gradient-to-b from-[#543CDA] to-[#880286]" />



    {/* Overlapping content (fills remaining height) */}
    <div className={`${isDark ? "darkModeBg -mt-6 relative z-10 flex-1 border border-gray-700 rounded-t-3xl border-t border-t-purple-700 p-6 flex flex-col" : "-mt-6 relative z-10 flex-1 border border-gray-200 rounded-t-3xl bg-white border-t border-t-purple-200 p-6 flex flex-col"} `}>
      
      {/* Icon */}
      <div className="mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9993 11.666H24.9993C30.499 11.666 33.2488 11.666 34.9575 13.3746C36.666 15.0831 36.666 17.833 36.666 23.3327V24.9993C36.666 30.499 36.666 33.2488 34.9575 34.9575C33.2488 36.666 30.499 36.666 24.9993 36.666H23.3327C17.833 36.666 15.0831 36.666 13.3746 34.9575C11.666 33.2488 11.666 30.499 11.666 24.9993V14.9993" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.33398 11.666H8.33398" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M11.666 8.33398V3.33398" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
</svg>


        </div>
      </div>

      {/* Title */}
<DynamicContent
type="p4"
title={who_we_help[1].title}
css="mb-4 text-lg font-semibold"
/>

{/* Content grows naturally but cards stay equal height */}
<ul className="list-disc pl-6 space-y-2 p-base-res">
      {(who_we_help[1].teaser).map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
</ul>
</div>
</div>
</div>

<div className="flex h-full">
  <div className="w-full flex flex-col h-full">
    {/* Top dark strip (fixed height) */}
    <div className="h-16 rounded-t-3xl bg-gradient-to-r from-black to-zinc-900" />

    {/* Overlapping content (fills remaining height) */}
    <div className={`${isDark ? "darkModeBg -mt-6 relative z-10 flex-1 border border-gray-700 rounded-t-3xl border-t border-t-purple-700 p-6 flex flex-col" : "-mt-6 relative z-10 flex-1 border border-gray-200 rounded-t-3xl bg-white border-t border-t-purple-200 p-6 flex flex-col"} `}>
      {/* Icon */}
      <div className="mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66602 13.334C6.66602 8.61993 6.66602 6.26292 8.3397 4.79845C10.0134 3.33398 12.7071 3.33398 18.0945 3.33398H21.9042C27.2915 3.33398 29.9853 3.33398 31.659 4.79845C33.3327 6.26292 33.3327 8.61993 33.3327 13.334V28.334H6.66602V13.334Z" stroke="#543CDA" strokeWidth="2.5" strokeLinejoin="round"/>
<path d="M5 28.334H35" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M17.8312 9.27582C19.8815 8.98197 23.279 9.09952 20.4672 11.9205C16.9525 15.4466 11.6807 23.3809 17.8312 20.7362C23.9819 18.0917 26.6182 19.8547 23.9822 22.4994" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 28.334V35.0007" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M8.33398 36.6673L13.334 28.334" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M31.666 36.6673L26.666 28.334" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
</svg>


        </div>
      </div>

{/* Title */}
<DynamicContent
type="p4"
title={who_we_help[2].title}
css="mb-4 text-lg font-semibold"
/>

{/* Content grows naturally but cards stay equal height */}
<ul className="list-disc pl-6 space-y-2 p-base-res">
      {(who_we_help[2].teaser).map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
</ul>
</div>
</div>
</div>
</div> 




<div className="text-center my-18 mb-10 sub-title">
<DynamicContent type="h2" title='Ways to Work With Us' />
<DynamicContent type="p" title='Pick a model that fits your pace and budget. All options include a named product lead, weekly check-ins, and clear reports.'  />
</div>




<div className={`px-[1%] md:px-[6%] grid grid-cols-1 rounded-3xl sm:grid-cols-2 md:grid-cols-4 gap-4 items-stretch  py-6 px-3`}>
{ways_work_with_us.map((src, i) => (
<div key={`enginnered88-${i}`} className={`${isDark ? "darkModeBg " : " bg-white "} mb-5 p-[1%] sm:p-[2%] md:p-[3%] rounded-3xl`}>
<div className="p-5 h-full flex flex-col">
<div className="w-[58px] space-y-2 shrink-0 mb-4" dangerouslySetInnerHTML={{ __html: src.src }} />
<div className="space-y-2 mb-3 font-bold"><DynamicContent css={`font-bold`} type="p4" title={src.title || ``}  /></div>
<div className="space-y-2"><DynamicContent type="p" title={src.teaser || ``}  /></div>
</div>
</div>
))}
</div>





<div className='py-[6%] px-[4%] footerBg rounded-3xl text-white my-[4%]'>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-center">
{/* Text */}
<div>
<div className="mb-4">
<DynamicContent type="h2" title="Build & Launch Handover" />
</div>
<DynamicContent type="p" title='Everything your engineers need to start the same day - clearly named and versioned in Figma (and a shared folder if you prefer).'  />
</div>
{/* Line */}
<div className="hidden sm:block w-full border-t border-t-gray-800"></div>
</div>




<div className={`grid grid-cols-1 rounded-3xl sm:grid-cols-4 gap-8 items-stretch my-6`}>
{build_launch.map((src, i) => (
<div key={`ourprocess-${i}`} className={`mb-5 py-6 px-3 bg-[#464067] rounded-3xl`}>
<div className="p-5 h-full flex flex-col">
<div className="w-[58px] space-y-2 shrink-0 mb-4" dangerouslySetInnerHTML={{ __html: src.src }} />

<div className="space-y-2 mt-5 mb-3 font-bold"><DynamicContent css='font-semibold' type="p3" title={src.title || ``}  /></div>
<div className="space-y-2"><DynamicContent type="p" title={src.teaser || ``}  /></div>
</div>
</div>
))}
</div>

</div>





<div className="py-15 my-22 card-surface">
<div className="my-10 sub-title text-center">
<DynamicContent type="h2" title='Quality, Compliance & Reporting' />
<DynamicContent type="p3" title='We track the numbers that matter and keep you informed with simple, useful updates.'  />
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-10 p-2 mt-10 content-padding">
<div className={`${isDark ? "darkModeBg " : "bg-white "}  p-8 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1578 28.334C5.88408 12.084 14.7719 4.89648 20 3.33398C25.2282 4.89648 34.116 12.084 27.8422 28.334C26.8948 27.8132 24 26.7715 20 26.7715C16 26.7715 13.1052 27.8132 12.1578 28.334Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.3327 14.9993C23.3327 13.1584 21.8403 11.666 19.9993 11.666C18.1583 11.666 16.666 13.1584 16.666 14.9993C16.666 16.8403 18.1583 18.3327 19.9993 18.3327C21.8403 18.3327 23.3327 16.8403 23.3327 14.9993Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M29.166 25.93C31.5695 26.152 34.5123 26.8043 36.635 28.334C36.635 28.334 37.5067 20.1077 29.9993 18.334" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.834 25.93C8.43055 26.152 5.48758 26.8043 3.36495 28.334C3.36495 28.334 2.49323 20.1077 10.0006 18.334" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.834 31.666C15.834 31.666 16.5284 35.8327 20.0007 36.666C23.4728 35.8327 24.1673 31.666 24.1673 31.666" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
<div className='mt-6'><DynamicContent type="p3" title='Best fit' css='font-semibold my-4' /></div>
<div>
<ul className="list-disc pl-6 space-y-2 p-base-res">
<li>Product or service businesses with a clear market</li>
<li>Teams ready to implement - we can run end-to-end or partner with in-house</li>
<li>Single-market or multi-location brands needing technical + content + PR in one lane</li>
</ul>
</div>
</div>
<div className="bg-[#543CDA] text-white p-8 rounded-3xl">
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.4993 21.6667L28.3327 15M23.3327 25C23.3327 26.841 21.8403 28.3333 19.9993 28.3333C18.1583 28.3333 16.666 26.841 16.666 25C16.666 23.159 18.1583 21.6667 19.9993 21.6667C21.8403 21.6667 23.3327 23.159 23.3327 25Z" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M10 20C10 14.4771 14.4771 10 20 10C21.8215 10 23.5292 10.487 25 11.3378" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M4.16602 19.9994C4.16602 12.5354 4.16602 8.8035 6.48475 6.48475C8.8035 4.16602 12.5354 4.16602 19.9994 4.16602C27.4633 4.16602 31.1953 4.16602 33.5139 6.48475C35.8328 8.8035 35.8327 12.5354 35.8327 19.9994C35.8327 27.4633 35.8328 31.1953 33.5139 33.5139C31.1953 35.8328 27.4633 35.8327 19.9994 35.8327C12.5354 35.8327 8.8035 35.8328 6.48475 33.5139C4.16602 31.1953 4.16602 27.4633 4.16602 19.9994Z" stroke="white" strokeWidth="2.5"/>
</svg>
</div>
<div className='mt-6'><DynamicContent type="p3" title='What it delivers' css='font-semibold my-4' /></div>
<div>
<ul className="list-disc pl-6 space-y-3">
<li>Higher-quality traffic: more high-intent visitors and qualified leads</li>
<li>Bigger share of results: snippets, maps, and answer engines</li>
<li>Lower acquisition cost: compounding gains over time</li>
<li>Actionable reporting: decisions you can use the same day</li>
</ul>
</div>
</div>
<div className={`${isDark ? "darkModeBg " : "bg-white "}  p-8 rounded-3xl`}>
<div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.002 10C21.7574 10 23.4819 10.4621 25.002 11.3398C26.5222 12.2174 27.7845 13.4798 28.6624 15C29.54 16.5202 30.002 18.2447 30.002 20C30.002 21.7553 29.54 23.4798 28.6624 25C27.7845 26.5202 26.5222 27.7825 25.002 28.6603C23.4819 29.538 21.7574 30 20.002 30C18.2467 30 16.5222 29.538 15.002 28.6603C13.4818 27.7825 12.2195 26.5202 11.3418 25L20.002 20V10Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
<div className='mt-6'><DynamicContent type="p3" title='Timeline' css='font-semibold my-4' /></div>
<div>
<ul className="list-disc pl-6 space-y-3">
<li>Days 1–60: Fix critical technical issues, tighten on-page, improve internal links, publish first pieces, tune GBP</li>
<li>Months 3–6: Non-brand clicks rise, first quality links land, key pages climb</li>
<li>Months 6–12: Topical authority takes hold; steadier organic pipeline and lower CAC</li>
</ul>
</div>
</div>
</div>
<div className="flex justify-center mt-10">
<div className='border border-[#543CDA] rounded-3xl px-6 py-4'>
Want traffic and qualified leads to grow alongside product wins? Pair with SEO & Content Marketing.
</div>
</div>
</div>




<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2 content-padding my-18">
  {/* Child 2 */}
<div className="flex-1 flex flex-col items-center justify-center">
<DynamicContent type="img" src='/what-we-need.webp' css="h-auto w-auto" teaser={`What we need from you`} />
</div>
{/* Child 1 */}
<div className="flex-1 flex-col flex justify-center rounded-lg p-6">
<div><DynamicContent type="h2" title='What we need from you' />
<DynamicContent type="p4" title='To start and stay on track, we’ll need:'  /></div>  
<ul className="list-disc blue-list pl-6 space-y-6 mt-10">
<li>One contact person who can approve work </li>
<li>
A small review group (max 3 people)</li>
<li>
3–5 users or frontline staff for short interviews (if research is in scope) </li>
<li>
A technical contact for API/release questions (if applicable)
</li>
<li>
Viewer access to analytics, or permission to set up tracking
</li>
<li>
Brand files (logo, colours, fonts) and any writing style notes
</li>
<li>
Any legal or compliance rules we must follow
</li>
<li>
Feedback on drafts within 2 business days
</li>
</ul> 
</div>
</div>


{isDark ? " " : <div className="flex-1 flex flex-col items-center justify-center my-16 px-[1%] md:px-[6%]">
<DynamicContent type="img" src='/line.webp' css="none" teaser={`divider`} />
</div>}



<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 content-padding my-18">
{/* Child 1 */}
<div className='sm:hidden'><DynamicContent type="img" src='/working-rules.webp' css="h-auto w-auto" teaser={`Working rules & response times`} /></div>
<div className="flex-1 flex-col flex justify-center rounded-lg p-6">
<div><DynamicContent type="h2" title='Working rules & response times' />
<DynamicContent type="p4" title='Simple, practical rules so everyone knows what to expect:'  /></div>  
<ul className="blue-list pl-6 space-y-6 mt-10">
<li>Weekly check-in (20–30 mins); we skip if there’s nothing to review</li>
<li>
Shared tracker for tasks, decisions, and files</li>
<li>
Each task has clear acceptance notes before work starts </li>
<li>
We reply during Mon–Fri, 09:00–18:00 WAT
 </li>
 <li>
Typical reply time: within 1 business day; mark urgent issues clearly and we prioritise them</li>
<li>
If scope changes, we confirm time and cost before proceeding</li>
<li>
Least-access security: no passwords in files; share credentials via your password tool</li>
<li>
We use staging or sample data; production data only with written approval</li>
</ul> 
</div>

{/* Child 2 */}
<div className='hidden sm:block'>
<div className="flex-1 flex flex-col items-center justify-center">
<DynamicContent type="img" src='/working-rules.webp' css="h-auto w-auto" teaser={`Working rules & response times`} />
</div></div>
</div>
</div>


</>
);
}
