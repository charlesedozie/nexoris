import { NextResponse } from "next/server";
export const dynamic = "force-static";
const SITE_URL = "https://nexoristech.com";

const staticPages = [
  "",
  "web-development",
  "about",
  "cloud-solutions",
  "mobile-app-development",
  "custom-software-solutions",
  "seo-content-marketing",
  "product-design",
  "digital-transformation",
  "website-maintenance",
  "request-a-proposal",
  "contact",
  "technical-audit",
  "insights",
  "careers",
  "privacy-policy",
  "terms-of-service",
  "cookie-policy",
];

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map((page) => {
        const url = `${SITE_URL}/${page}`;
        return `
        <url>
          <loc>${url}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
      })
      .join("")}
  </urlset>`;
}

export async function GET() {
  const sitemap = generateSiteMap();
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
