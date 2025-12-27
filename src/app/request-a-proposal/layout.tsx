import DynamicContent, {Counter, Title} from "@/components/cards"
import Header from "@/components/header"
export default function MainLayout({ children }: { children: React.ReactNode }) {

return (
<>
<div className="relative z-10">
<div className="card-surface">
<Header />
<div className="mt-8">
<>
<div className="relative z-10">
<div className="flex items-center justify-center mt-3 mb-5 sm:mb-8 sm:mt-12">
<Title title={'Trusted by '} counter='100' title2='+ Teams' />  
</div>
<div className="text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h1" title='Get a Tailored Proposal'  /> 
</div>
<div className="mb-8 text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="p3" title={`Tell us about your project. We’ll come back with the best approach, timeline, and investment, usually after a quick discovery call.`}  />
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
