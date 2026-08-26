import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/docs", "/docs/install", "/docs/usage", "/docs/checks", "/changelog", "/blog", "/blog/welcome-to-linsentry"]; return routes.map((route) => ({ url: `https://linsentry.dev${route}`, lastModified: new Date(), changeFrequency: "weekly", priority: route === "" ? 1 : 0.7 })); }
