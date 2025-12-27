import DynamicContent, {Title, DBtn} from "@/components/cards"
import Header from "@/components/header"
//import LayoutHome from "@/components/homeLayout"


const success = [
{
title: "FAST",
teaser: "Faster work: shorter steps, fewer handoffs",
image: "/FAST.webp",
},
{
title: "COSTING",
teaser: "Lower costs: fewer errors, less rework",
image: "/COSTING.webp",
},
{
title: "WORKFLOW",
teaser: "Better customer experience: timely replies, easier journeys",
image: "/WORKFLOW.webp",
},
{
title: "ANALYTICS",
teaser: "Clear reports: key metrics in one place",
image: "/ANALYTICS.webp",
},
{
title: "TRANSPARENCY",
teaser: "Safer handover: documented steps, shared knowledge",
image: "/TRANSPARENCY.webp",
},
{
title: "SIMPLICITY",
teaser: "A trained team: simple guides and quick onboarding",
image: "/SIMPLICITY.webp",
},
];


export default function MainLayout({ children }: { children: React.ReactNode }) {
return (
<>
<div className="relative z-10">
<div className="card-surface">
<Header />
<div className=" mt-8">
<>
<div className="relative z-10">
<div className="flex items-center justify-center mt-3 mb-5 sm:mb-8 sm:mt-12">
<div className="w-fit">
<Title title={'Response within one business day.'} />
</div>
</div>
<div className="text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h1" title='Digital Transformation Consulting for faster, simpler work' />
<DynamicContent type="p4" title='We study how your team works today, remove bottlenecks, and automate key steps. We connect your systems, build what’s missing, and set up clear, trustworthy reporting.'  /></div>

<div className="my-8">
<div className="w-full flex flex-col sm:flex-row justify-center gap-4">
{/* RIGHT BUTTON — Explore Nexoris Cloud */}

<DynamicContent isLink={true} css='bg-[#543CDA] text-white' type="btn1" url='/request-a-proposal' title='Get a Proposal' teaser='Get a Proposal' icon='bg-[#4D3BAD] text-gray-100' />

<DBtn title='Request a Technical Audit' css1='bg-white text-black' css2='bg-[#141313] text-gray-100' iconcss1='bg-[#E6E8EC] text-gray-900' iconcss2='bg-[#141313] text-gray-200' url='/technical-audit' />
</div>
</div>
</div>
</>    
</div>
</div>
</div>





{children}
</>
);
}
