import DynamicContent, {Title, DBtn} from "@/components/cards"
import Header from "@/components/header"
import Home from "@/components/home"
import Article from "@/components/articleList1"
import Faq from "@/components/faq"
import { fetchAllArticles } from "@/utils/fetchArticles"


export default async function MainLayout({ children }: { children: React.ReactNode }) {
const articles = await fetchAllArticles()
if (!articles.length) { console.warn("[Page] No articles returned"); }
  
return (
<>
<div className="relative z-3">
<div className="card-surface">
<Header />
<div className="mb-70 mt-8">
<>
<div className={`relative z-4`}>
<div className="flex items-center justify-center mt-3 mb-5 sm:mb-8">
<Title title={'Trusted by '} counter='100' title2='+ Teams' />
</div>
<div className="text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h1" title='Websites, Apps, and Custom Software - Built for Performance, Security, and Growth'  /> 
</div>
<div className="my-8 text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="p4" title={`
We plan, design, and build digital products that perform. From improving user 
experience and SEO to providing ongoing support and management, 
we ensure your digital presence is built for growth.`}  />
</div>
<div className="mt-4 mb-8">
<div className="w-full flex flex-col sm:flex-row justify-center gap-4">
{/* RIGHT BUTTON — Explore Nexoris Cloud */}
<DynamicContent isLink={true} type="btn1" url='/request-a-proposal' title='Get a Proposal' teaser='Get a Proposal' icon='y' />



<DBtn title='Explore Nexoris Cloud' css1=' bg-white text-gray-900 ' css2=' darkModeBg  text-gray-100 ' iconcss1=' bg-[#F3F3F3] text-gray-900 ' iconcss2=' bg-gray-800 text-gray-200 ' url='/cloud-solutions' />
</div>
</div>
</div>
</>    
</div>
</div>

<div className="relative z-3 -mt-60 px-[10%] mb-10">
<div className="flex flex-col md:flex-row items-center justify-center gap-16 py-10">
  {/* CARD 1 */}
  <div className="w-full md:w-1/3 md:rotate-[-5deg]">
    <div className="bg-white p-4 rounded-3xl shadow-xl">

      {/* Browser dots */}
      <div className="flex gap-2 mb-3">
        <span className="w-3 h-3 bg-gray-200 rounded-full" />
        <span className="w-3 h-3 bg-gray-200 rounded-full" />
        <span className="w-3 h-3 bg-gray-200 rounded-full" />
      </div>

      {/* Image container */}
      <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
        <DynamicContent
          type="img"
          src="/mobile.webp"
          title="Mobile Applications"
          teaser="Top Service - Mobile Applications"
          isLink={true}
          url='/mobile-app-development'
        />
      </div>

      <p className="mt-4 text-center font-medium text-gray-800">
        Mobile Applications
      </p>
    </div>
  </div>


  {/* CARD 2 */}
  <div className="w-full md:w-1/3 mb-6">
    <div className="bg-white p-4 rounded-3xl shadow-xl">

      <div className="flex gap-2 mb-3">
        <span className="w-3 h-3 bg-gray-200 rounded-full" />
        <span className="w-3 h-3 bg-gray-200 rounded-full" />
        <span className="w-3 h-3 bg-gray-200 rounded-full" />
      </div>

      <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
        <DynamicContent
          type="img"
          src="/website.webp"
          title="Websites"
          teaser="Top Service - Websites"
          isLink={true}
          url='/web-development'
        />
      </div>

      <p className="mt-4 text-center font-medium text-gray-800">
        Websites
      </p>
    </div>
  </div>


  {/* CARD 3 */}
  <div className="w-full md:w-1/3 md:rotate-[5deg]">
    <div className="bg-white p-4 rounded-3xl shadow-xl">

      <div className="flex gap-2 mb-3">
        <span className="w-3 h-3 bg-gray-200 rounded-full" />
        <span className="w-3 h-3 bg-gray-200 rounded-full" />
        <span className="w-3 h-3 bg-gray-200 rounded-full" />
      </div>

      <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
        <DynamicContent
          type="img"
          src="/custom.webp"
          title="Custom Software"
          teaser="Top Service - Custom Software"
          isLink={true}
          url='/custom-software-solutions'
        />
      </div>

      <p className="mt-4 text-center font-medium text-gray-800">
        Custom Software
      </p>
    </div>
  </div>
</div>
</div>
</div>
<div>
<Home />
<div className="content-padding mt-18 mb-12"><Article
  articles={articles}
  itemCount={3}               // optional
/></div>
<div className="my-8 flex justify-center items-center"><DynamicContent isLink={true} css='bg-[#543CDA] text-white' type="btn1" url='/insights' title='More Indights' teaser='More Indights' iconcss='bg-[#4D3BAD] text-gray-100' icon='y' iconname="ArrowUpRight"/></div>
<div className="mt-20 text-center px-[1%] lg:px-[10%] xl:px-[16%] 2xl:px-[22%]">
<DynamicContent type="h2" title='Got questions? We’ve got answers' />
<DynamicContent type="p4" title='Everything you need to know about Nexoris Technologies. ' />
</div>
<div><Faq pageId="home" /></div>
</div>

</>
);
}
