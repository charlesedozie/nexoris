import DynamicContent, {Title, DBtn} from "@/components/cards"
import Header from "@/components/header"
export default function MainLayout({ children }: { children: React.ReactNode }) {

return (
<>
<div className="relative z-10">
<div className="card-surface">
<Header />
<div className="mb-70 mt-8">
<>
<div className="relative z-10">
<div className="flex items-center justify-center mt-3 mb-5 sm:mb-8 sm:mt-12">
<div className="w-fit">
<Title title={'Web Development'} />
</div>
</div>
<div className="text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h1" title='Websites & E-commerce That Load Fast, Rank Well, and Convert '  />
<DynamicContent type="p4" title='We design and build modern sites with speed, accessibility, and SEO at their core. We keep them steady with proactive improvements. '  /></div>

<div className="my-8">
<div className="w-full flex flex-col sm:flex-row justify-center gap-4">
{/* RIGHT BUTTON — Explore Nexoris Cloud */}
<DynamicContent isLink={true} css='bg-[#543CDA] text-white' type="btn1" url='https://www.nexoriscloud.com/domains' section='true' title='See plans on Nexoris Cloud' teaser='See plans on Nexoris Cloud' icon='bg-[#4D3BAD] text-gray-100' />

<DBtn title='Request a Technical Audit' css1='bg-white text-black' css2='bg-[#141313] text-gray-100' iconcss1='bg-[#E6E8EC] text-gray-900' iconcss2='bg-[#141313] text-gray-200' url='/technical-audit' />
</div>

<DynamicContent type="p4" title='Typical LCP ≤ 2.5s • WCAG 2.2 AA targets' css='text-center font-bold my-10' />
</div>
</div>
</>    
</div>
</div>
<div className="relative z-20 -mt-60 px-[1%] sm:px-[5%] md:px-[10%] flex justify-center mb-10">
<div className="bg-white rounded-3xl border border-gray-300 p-6 pt-15 flex justify-center items-center shadow-lg">
<DynamicContent
type="img"
src="/web-development.webp"
title="Web Development"
teaser="Web Development"
css="rounded-3xl w-full h-full sm:object-cover object-contain" />
</div>
</div>
</div>





{children}
</>
);
}
