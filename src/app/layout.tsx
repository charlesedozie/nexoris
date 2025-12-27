import type { Metadata } from "next";
import Script from "next/script";

import './globals.css';
//import { Poppins } from 'next/font/google'
import localFont from "next/font/local";
import { poppins } from "./fonts";

import { ThemeProvider } from 'next-themes';
import Footer from "@/components/footer"
import AccessibilityWidget from "@/components/AccessibilityWidget1"
import {BackToTopButton, ScrollToTop} from "@/components/cards";
//import { headers } from "next/headers";


// Metadata for head
export const metadata: Metadata = {
metadataBase: new URL("https://mygleen.com"),
title: "GLEEN",
description:
"GLEEN makes preparing for WAEC, NECO, JAMB and Post UTME easier - and yes, a lot more fun than cramming alone at midnight.",
keywords:
"betting reviews, sportsbook reviews, best betting sites, online betting, betting bonuses, sports betting, top bookmakers, betting site ratings, odds comparison",
manifest: "/manifest.json",
icons: {
icon: ["/favicon.ico", "/icons/icon-192x192.png"],
apple: "/icons/icon-192x192.png",
},
other: {
"mobile-web-app-capable": "yes",
},
openGraph: {
title: "BetVersed - Professional Bet Reviews",
description:
"Discover honest and in-depth reviews of top betting sites. Compare bonuses, odds, and features to find the best sportsbook for your winning bets!",
url: "https://mygleen.com",
siteName: "BetVersed",
images: [
{
url: "/apple-icon-114x114.png",
width: 114,
height: 114,
alt: "GLEEN",
},
],
locale: "en_US",
type: "website",
},
twitter: {
card: "summary_large_image",
site: "@myhandle",
title: "BetVersed",
description: "BetVersed betting reviews",
images: ["/logo.webp"],
},
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
//const hdrs = await headers();
//const pathname = hdrs.get("x-invoke-path") || "/";

//const spacedRoutes = ["/", "/about"];
//const applyMb = spacedRoutes.includes(pathname);

return (
<html lang="en" suppressHydrationWarning  className={poppins.className}><Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y1ZM9PF3N3"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y1ZM9PF3N3', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        
<body className={`antialiased min-h-screen text-base ${poppins.className}`}>
<ThemeProvider attribute="class" defaultTheme="light">
<div className="p-[1%]">
<main id="main-content">
{children}
</main>
<Footer />
<AccessibilityWidget />
<BackToTopButton />
</div>
</ThemeProvider>
</body>
</html>
);
}

