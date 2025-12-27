"use client";

import { useState } from "react";
import {DynamicIcon, useDarkMode} from "@/components/cards"
import { usePathname } from "next/navigation";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";
import { RiTwitterXLine } from "react-icons/ri";
interface ShareMenuProps {
  url: string;
  title: string;
  hashtag?: string;
}

export default function ShareMenu({ url, title, hashtag }: ShareMenuProps) {
  const [open, setOpen] = useState(false);
const { isDark } = useDarkMode();
const pathname = usePathname();

  // Prevent SSR mismatch
  const cururl =
    typeof window !== "undefined"
      ? `${window.location.origin}${pathname}`
      : "";

  return (
    <div className="relative inline-block">
      {/* Popup ABOVE button */}
      {open && (
        <div className={`absolute bottom-full mb-3 right-0 p-4 rounded-lg flex gap-3 z-50 ${isDark ? " darkModeBg " : " bg-white "}`}>
          <FacebookShareButton url={cururl} hashtag={hashtag}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>

           {/* X Share Button */}
          <TwitterShareButton url={cururl} title={title}>
            {/* Custom X icon instead of Twitter */}
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <RiTwitterXLine className="text-white w-5 h-5" />
            </div>
          </TwitterShareButton>

          <WhatsappShareButton url={cururl} title={title} separator=" - ">
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>

          <LinkedinShareButton url={cururl} title={title}>
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
        </div>
      )}

      {/* Trigger button */}
      <button onClick={() => setOpen((p) => !p)} className={`${isDark ? " darkModeBg border-gray-800 " : " bg-gray-100 border-gray-400 "} flex items-center border gap-3 px-5 py-1.5 rounded-full transition pointer`}>
      <span><DynamicIcon name={`Send`} className="w-4 h-4 transition-transform roup-hover:translate-x-0.5" aria-hidden="true" /></span>
      <span className="text-sm font-medium">Share</span>
      </button>
    </div>
  );
}
