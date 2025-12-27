import type { Metadata } from 'next'
import DynamicContent, {Counter, DynamicIcon, ArrowLine, Accordion} from "@/components/cards"
import Home from "./home"


const faqItems = [
  {
    question: `Do we need to rebuild everything?
`,
    answer:
      `No. We keep what works, fix weak spots, and rebuild only when it’s the smarter choice.
`,
  },
  {
    question: `Can you work with our team and current vendors?
`,
    answer:
      `Yes. Clear roles, one shared tracker, simple communications so work keeps moving.
`,
  },
  {
    question: `How do you measure success and report progress?
`,
    answer:
      `We agree on 3–5 metrics, set a baseline, share weekly updates, and send a monthly one-pager. Dashboards are added when useful.
`,
  },
   {
    question: `What changes first: process or software?
`,
    answer:
     `Process first. We map the flow, remove waste, set standards, then adjust the tools to match.
`,
  },
   {
    question: `Can you improve our current site or app before a full rebuild?
`,
    answer:
      `Yes. We can speed things up, fix key flows, add small features, and stabilise infrastructure. If a rebuild is needed later, we plan it to avoid downtime.
`,
  },

     {
    question: `What happens after rollout?

`,
    answer:
      `After-launch care: monitoring, small fixes, training refreshers, and a monthly review so priorities stay clear.

`,
  },

     {
    question: `How do you price projects and retainers?

`,
    answer:
      `Projects are priced by scope and milestones after discovery. Ongoing care is a monthly plan with agreed hours and response targets. Taxes (e.g., VAT) are separate.

`,
  },
];

const our_process = [
{src:"01.", title:'Plan', teaser:'Understand goals, map key flows, set quick wins, agree what to measure'},
{src:"02.", title:'Test', teaser:'Pilot with a small group, collect feedback, adjust the approach'},
{src:"03.", title:'Build', teaser:'Connect systems, move data, deliver scoped features with clear docs'},
{src:"04.", title:'Launch', teaser:'Roll out in phases, train the team, track results, improve where needed'},
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


const engagement = [
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 3.33398L35 13.334M35 3.33398L25 13.334" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 36.666C12.7614 36.666 15 34.4274 15 31.666C15 28.9046 12.7614 26.666 10 26.666C7.23858 26.666 5 28.9046 5 31.666C5 34.4274 7.23858 36.666 10 36.666Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0007 8.33398H14.1673C10.9457 8.33398 8.33398 10.9457 8.33398 14.1673C8.33398 17.389 10.9457 20.0007 14.1673 20.0007H25.834C29.0557 20.0007 31.6673 22.6123 31.6673 25.834C31.6673 29.0557 29.0557 31.6673 25.834 31.6673H20.0007" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'Strategy & Roadmap', teaser:'Clear goals, quick wins, and a 3–6-month plan'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.7564 6.99307L6.70995 8.18022C5.06297 9.13562 4.23947 9.61334 3.78672 10.4081C3.33398 11.2028 3.33398 12.1706 3.33398 14.1061V27.7138C3.33398 30.257 3.33398 31.5287 3.90442 32.2363C4.284 32.7073 4.81592 33.0238 5.40398 33.1288C6.28775 33.2865 7.36978 32.6588 9.53377 31.4035C11.0033 30.551 12.4175 29.6657 14.1754 29.9058C14.9751 30.015 15.7378 30.3943 17.2633 31.1528L23.6198 34.3133C24.9947 34.997 25.0073 35 26.5363 35H30.0007C33.1433 35 34.7147 35 35.691 34.0022C36.6673 33.0043 36.6673 31.3982 36.6673 28.1862V16.9525C36.6673 13.7404 36.6673 12.1343 35.691 11.1365C34.7147 10.1386 33.1433 10.1386 30.0007 10.1386H26.5363C25.0073 10.1386 24.9947 10.1357 23.6198 9.452L18.0672 6.69105C15.7487 5.53829 14.5895 4.9619 13.3546 5.00195C12.1197 5.04202 10.9986 5.69237 8.7564 6.99307Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25 10.834V34.1673" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1.67 5"/>
<path d="M13.334 5.83398V29.1673" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1.67 5"/>
</svg>
`, title:'Process Mapping & Automation', teaser:'Remove waste; automate routine tasks'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.6667 18.334V16.6673C31.6667 10.3819 31.6667 7.23923 29.714 5.2866C27.7615 3.33398 24.6187 3.33398 18.3333 3.33398C12.0479 3.33398 8.90525 3.33398 6.95262 5.2866C5 7.23923 5 10.3819 5 16.6673V23.334C5 29.6193 5 32.7621 6.95262 34.7146C8.90525 36.6673 12.0479 36.6673 18.3333 36.6673" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34.9993 36.6673L32.1422 33.8102M33.0945 29.0483C33.0945 32.2042 30.5362 34.7625 27.3803 34.7625C24.2243 34.7625 21.666 32.2042 21.666 29.0483C21.666 25.8923 24.2243 23.334 27.3803 23.334C30.5362 23.334 33.0945 25.8923 33.0945 29.0483Z" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M11.666 11.666H24.9993M11.666 18.3327H18.3327" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'Systems Audit & Modernisation', teaser:'Review apps/integrations; retire what no longer helps'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3333 25C10.9695 25 5 22.7615 5 20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M31.6667 8.33398V19.1673M5 8.33398V31.6673C5 34.4288 10.9695 36.6673 18.3333 36.6673C18.6132 36.6673 18.891 36.6642 19.1667 36.6577" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M18.3333 13.334C25.6971 13.334 31.6667 11.0954 31.6667 8.33398C31.6667 5.57256 25.6971 3.33398 18.3333 3.33398C10.9695 3.33398 5 5.57256 5 8.33398C5 11.0954 10.9695 13.334 18.3333 13.334Z" stroke="white" strokeWidth="2.5"/>
<path d="M11.666 13.334V16.6673" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M11.666 25V28.3333" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M28.3327 27.7785V30.0007M28.3327 30.0007V32.2228M28.3327 30.0007H30.5548M28.3327 30.0007H26.1105M34.9993 30.0007C34.9993 33.6825 32.0145 36.6673 28.3327 36.6673C24.6508 36.6673 21.666 33.6825 21.666 30.0007C21.666 26.3188 24.6508 23.334 28.3327 23.334C32.0145 23.334 34.9993 26.3188 34.9993 30.0007Z" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
</svg>
`, title:'Data & Reporting', teaser:'Define metrics, clean data flows, build live dashboards'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.6673 20.0007C36.6673 10.7959 29.2053 3.33398 20.0007 3.33398C10.7959 3.33398 3.33398 10.7959 3.33398 20.0007C3.33398 29.2053 10.7959 36.6673 20.0007 36.6673C21.4035 36.6673 23.334 36.8612 23.334 35.0007C23.334 33.9857 22.806 33.2026 22.2817 32.4246C21.5143 31.2865 20.7545 30.1595 21.6673 28.334C22.7785 26.1118 24.6303 26.1118 27.4698 26.1118C28.8897 26.1118 30.5563 26.1118 32.5007 25.834C36.0023 25.3338 36.6673 23.1813 36.6673 20.0007Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M11.666 25.004L11.6805 25" stroke="#543CDA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.834 16.666C17.2147 16.666 18.334 15.5467 18.334 14.166C18.334 12.7853 17.2147 11.666 15.834 11.666C14.4533 11.666 13.334 12.7853 13.334 14.166C13.334 15.5467 14.4533 16.666 15.834 16.666Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M27.5 18.334C28.8807 18.334 30 17.2147 30 15.834C30 14.4533 28.8807 13.334 27.5 13.334C26.1193 13.334 25 14.4533 25 15.834C25 17.2147 26.1193 18.334 27.5 18.334Z" stroke="#543CDA" strokeWidth="2.5"/>
</svg>
`, title:'Product Design & Experience', teaser:'Map real needs; design simple flows/screens; test first'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.13 16.6662C29.1423 16.666 29.1548 16.666 29.1673 16.666C33.3095 16.666 36.6673 20.0238 36.6673 24.166C36.6673 28.3082 33.3095 31.666 29.1673 31.666H11.6673C7.06495 31.666 3.33398 27.935 3.33398 23.3327C3.33398 18.9998 6.64062 15.4395 10.868 15.0372M29.13 16.6662C29.1547 16.3916 29.1673 16.1136 29.1673 15.8327C29.1673 10.7701 25.0633 6.66602 20.0007 6.66602C15.2061 6.66602 11.2712 10.347 10.868 15.0372M29.13 16.6662C28.9595 18.5568 28.215 20.282 27.072 21.666M10.868 15.0372C11.1311 15.0121 11.3977 14.9993 11.6673 14.9993C13.5437 14.9993 15.2752 15.6195 16.6682 16.666" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'Cloud & Infrastructure', teaser:'Right-sized hosting; migrations; backups and monitoring'},
];

const support_level = [
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13.334V20.0007L22.5 22.5007" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M32.575 27.4223C35.3024 28.8949 36.666 29.6314 36.666 30.8333C36.666 32.0351 35.3024 32.7716 32.575 34.2443L30.7179 35.2473C28.6234 36.3783 27.5762 36.9438 27.0725 36.5326C25.8394 35.5256 27.7605 32.9268 28.2332 32.0061C28.7122 31.0733 28.7035 30.5764 28.2332 29.6604C27.7605 28.7398 25.8394 26.1409 27.0725 25.1339C27.5762 24.7228 28.6234 25.2883 30.7179 26.4193L32.575 27.4223Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M21.7108 36.5807C21.1487 36.638 20.578 36.6673 20.0007 36.6673C10.7959 36.6673 3.33398 29.2053 3.33398 20.0007C3.33398 10.7959 10.7959 3.33398 20.0007 3.33398C29.2053 3.33398 36.6673 10.7959 36.6673 20.0007C36.6673 21.1422 36.5525 22.257 36.334 23.334" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round"/>
</svg>
`, title:'Weekly check-ins', teaser:'Short call + written recap; one point of contact'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16602 12.5V22.5C4.16602 28.7853 4.16602 31.9282 6.11863 33.8807C8.07127 35.8333 11.2139 35.8333 17.4993 35.8333H23.3327M35.8327 18.3333V12.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.44783 8.85703L4.16602 12.4993H35.8327L33.7457 9.02107C32.3228 6.6497 31.6115 5.46402 30.4652 4.81502C29.319 4.16602 27.9362 4.16602 25.1708 4.16602H14.9222C12.216 4.16602 10.8629 4.16602 9.7329 4.79152C8.60293 5.41702 7.88457 6.5637 6.44783 8.85703Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 12.4993V4.16602" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.666 17.5H23.3327" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29.9993 21.666C26.7777 21.666 24.166 24.2287 24.166 27.3898C24.166 29.1973 24.8952 30.6028 26.3535 31.8582C27.3813 32.743 29.2517 34.6413 29.9993 35.8327C30.7848 34.665 32.6173 32.743 33.6452 31.8582C35.1035 30.6028 35.8327 29.1973 35.8327 27.3898C35.8327 24.2287 33.221 21.666 29.9993 21.666Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30 27.5H30.015" stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'Shared tracker', teaser:'Scope, tasks, owners, risks, decisions; acceptance criteria for every deliverable'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.9993 3.33398H16.666" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.66667 22.5007C6.66667 14.6766 13.0093 8.33398 20.8333 8.33398C24.7453 8.33398 28.287 9.91963 30.8507 12.4833M30.8507 12.4833C33.4143 15.047 35 18.5887 35 22.5007C35 30.3247 28.6573 36.6673 20.8333 36.6673H5M30.8507 12.4833L33.3333 10.0007" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.3333 31.666H5" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 26.666H5" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.834 22.4993L26.6673 16.666" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'Response times', teaser:'Urgent - same day; standard - 1–2 business days'},
// add more if needed
];


const platforms = [
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.13 16.6662C29.1423 16.666 29.1548 16.666 29.1673 16.666C33.3095 16.666 36.6673 20.0238 36.6673 24.166C36.6673 28.3082 33.3095 31.666 29.1673 31.666H11.6673C7.06495 31.666 3.33398 27.935 3.33398 23.3327C3.33398 18.9998 6.64062 15.4395 10.868 15.0372M29.13 16.6662C29.1547 16.3916 29.1673 16.1136 29.1673 15.8327C29.1673 10.7701 25.0633 6.66602 20.0007 6.66602C15.2061 6.66602 11.2712 10.347 10.868 15.0372M29.13 16.6662C28.9595 18.5568 28.215 20.282 27.072 21.666M10.868 15.0372C11.1311 15.0121 11.3977 14.9993 11.6673 14.9993C13.5437 14.9993 15.2752 15.6195 16.6682 16.666" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'Cloud & Hosting', teaser:'Stable setup with backups and monitoring'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.666 28.3327V21.666" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M20 28.3327V11.666" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M28.334 28.334V18.334" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M4.16602 19.9993C4.16602 12.5354 4.16602 8.8035 6.48475 6.48475C8.8035 4.16602 12.5354 4.16602 19.9993 4.16602C27.4632 4.16602 31.1952 4.16602 33.514 6.48475C35.8327 8.8035 35.8327 12.5354 35.8327 19.9993C35.8327 27.4632 35.8327 31.1952 33.514 33.514C31.1952 35.8327 27.4632 35.8327 19.9993 35.8327C12.5354 35.8327 8.8035 35.8327 6.48475 33.514C4.16602 31.1952 4.16602 27.4632 4.16602 19.9993Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
</svg>
`, title:'Data & Analytics', teaser:'Live dashboards; scheduled reports'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 15C15 17.7615 12.7614 20 10 20C7.23858 20 5 17.7615 5 15C5 12.2386 7.23858 10 10 10C12.7614 10 15 12.2386 15 15Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M35 30C35 32.7615 32.7615 35 30 35C27.2385 35 25 32.7615 25 30C25 27.2385 27.2385 25 30 25C32.7615 25 35 27.2385 35 30Z" stroke="#543CDA" strokeWidth="2.5"/>
<path d="M15 15H23.3333C26.476 15 28.0473 15 29.0237 15.9763C30 16.9527 30 18.524 30 21.6667V25" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 20.0007V36.6673M10 10.0007V3.33398" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'Automation & Workflow', teaser:'Rules that cut manual steps'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.8327 11.6673C30.8327 7.73895 30.8327 5.77477 29.6123 4.55437C28.3918 3.33398 26.4277 3.33398 22.4993 3.33398H17.4993C13.571 3.33398 11.6068 3.33398 10.3864 4.55437C9.16602 5.77477 9.16602 7.73895 9.16602 11.6673M30.8327 28.334C30.8327 32.2623 30.8327 34.2265 29.6123 35.447C28.3918 36.6673 26.4277 36.6673 22.4993 36.6673H17.4993C13.571 36.6673 11.6068 36.6673 10.3864 35.447C9.16602 34.2265 9.16602 32.2623 9.16602 28.334" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.3327 3.33398H16.666L17.4993 5.00065H22.4993L23.3327 3.33398Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25.8342 25.8326C25.8342 25.8326 31.6673 21.5365 31.6673 19.9993C31.6673 18.4621 25.834 14.166 25.834 14.166" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.1673 25.8327C14.1673 25.8327 8.334 21.5365 8.33398 19.9993C8.33397 18.4622 14.1673 14.166 14.1673 14.166" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'Integrations & APIs', teaser:'Apps that stay in sync'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.666 5V35" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M28.334 5V35" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M35 11.666H5" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M35 28.334H5" stroke="#543CDA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'Quality & Monitoring', teaser:'Tests, error logs, performance checks'},
{src:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21.6673V13.334H35V21.6673C35 27.9527 35 31.0955 33.0473 33.048C31.0948 35.0006 27.952 35.0007 21.6667 35.0007H18.3333C12.0479 35.0007 8.90525 35.0006 6.95262 33.048C5 31.0955 5 27.9527 5 21.6673Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 13.3333L6.4423 10.1282C7.5609 7.64245 8.12018 6.39958 9.25385 5.69978C10.3875 5 11.8417 5 14.75 5H25.25C28.1583 5 29.6125 5 30.7462 5.69978C31.8798 6.39958 32.4392 7.64245 33.5577 10.1282L35 13.3333" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M20 13.3333V5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M14.1673 22.4993H23.334C25.175 22.4993 26.6673 23.9917 26.6673 25.8327C26.6673 27.6737 25.175 29.166 23.334 29.166H21.6673M16.6673 19.166L13.334 22.4993L16.6673 25.8327" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
`, title:'Communication & Support', teaser:'Clear channels for requests and updates'},
];


const ways_work_with_us = [
{src:"01.", title:'Fixed-Scope Project', teaser:`Defined outcome on an agreed budget. Strategy, design, and clean handover to engineers.`},
{src:"02.", title:'Monthly Product Management', teaser:`Keep the roadmap moving - backlog, sprints, QA, and steady design updates.`},
{src:"03.", title:'Design Sprint', teaser:`Test a big idea fast with a clickable prototype and short user checks. Decide with evidence`},
{src:"03.", title:'Post-Launch Support', teaser:`Updates, fixes, and monitoring. Urgent tickets same day; standard within 1–2 business days.`},
];

const build_launch = [
{src:"01.", title:'Design package', teaser:`Figma links with specs for all states and breakpoints • Export-ready icons/images • Design tokens with usage notes`},
{src:"02.", title:'Build plan', teaser:`Groomed backlog and Prioritized first two sprints with owners and dates • API contracts with sample payloads`},
{src:"03.", title:'Quality & release', teaser:`Test cases and QA checklist • Launch plan with owners and rollback steps • Analytics plan (dashboards, error monitoring)`},
{src:"03.", title:'Access & setup', teaser:`Environment list and config keys (no secrets in files) • Account map with roles and permissions`},
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

export default function Digital() {
  const gapSize = 24 // px gap between dot and lines
return (
  <><Home />
<div className="text-center mt-24 sub-title">
<DynamicContent type="h2" title='Got questions? We’ve got answers' />
<DynamicContent type="p3" title='Straight answers to common questions.'  />
</div>
<div>
<Accordion items={faqItems} defaultOpenIndex={0} />
</div>
</>
);
}
