'use client'

import React from "react";
import {Title} from "@/components/headerMobile"
import { usePathname } from "next/navigation";

export default function LayoutHome() {
const pathname = usePathname();
// List of paths that should apply the style
const pagesWithMargin = ["/", "/about", "/web-development"];
// Check if current path matches any item in the list
const applyMb = pagesWithMargin.includes(pathname);


return (<div className={applyMb ? "mb-70" : ""}><Title /></div>);
}

