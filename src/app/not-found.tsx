'use client';

import Header from "@/components/header"
import DynamicContent, {useDarkMode} from "@/components/cards"

export default function NotFound() {
const { isDark } = useDarkMode();

return (  <>
  <div className="card-surface">
  <Header />

  
<div className="flex flex-col items-center justify-center mt-[30%] sm:mt-[10%] gap-4">
<div className="text-center">
<DynamicContent type="h1" title='404 - Page Not Found' />
</div>
<DynamicContent isLink={true} css={`${isDark ? " darkModeBg text-gray-200 " : " bg-white "}`} type="btn1" url='/' bicon='y' biconcss={`${isDark ? " darkModeBg text-gray-200 " : " darkModeBg text-white "}`}  biconname='ArrowLeft' title='Return to home' teaser='Go to home' />
</div></div></>
);
}