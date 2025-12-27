import DynamicContent, {DBtn, Title} from "@/components/cards"
import Header from "@/components/header"
//import LayoutHome from "@/components/homeLayout"
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
<Title title={'Trusted by '} title2="+ Teams" counter="100" />
</div>
<div className="text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h1" title='Contact Nexoris'  /> 
</div>
<div className="mb-8 text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="p4" title={`Tell us about your project or support needs. We’ll connect you with the right person.`}  />
</div>
<div className="mt-4 mb-8">
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
