"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function FancyThemeToggle() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

// Prevent hydration mismatch
useEffect(() => setMounted(true), []);
if (!mounted) return null;
const isDark = theme === "dark";
return (
<>
<button
onClick={() => setTheme(isDark ? "light" : "dark")}
aria-label="Toggle theme"
className={`flex pointer items-center gap-2 p-2 rounded-full border ${isDark ? "border-gray-900" : "border-gray-300"} transition`}
>
<Sun
className={`w-8 h-8 p-1 rounded-full transition-opacity ${isDark ? "opacity-50 bg-gray-800 text-white" : "opacity-100 bg-[#543CDA] text-white"}
`}
/>
<Moon
className={`w-8 h-8 p-1 rounded-full transition-opacity ${isDark ? "opacity-100 bg-[#543CDA] text-white" : "opacity-50 text-gray-900"
}`}
/>
</button>
</>
);
}
