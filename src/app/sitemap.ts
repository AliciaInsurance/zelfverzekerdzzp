import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { products } from "@/content/insurance";
import { professions } from "@/content/professions";
import { knowledgeArticles } from "@/content/knowledge";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/verzekeringen",
    "/premie-berekenen",
    "/beroepen",
    "/kennisbank",
    "/over-ons",
    "/disclaimer",
    "/privacy",
  ];

  const routes: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  products
    .filter((p) => p.hasProductPage)
    .forEach((product) => {
      routes.push({
        url: `${siteConfig.url}${product.href}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    });

  professions.forEach((profession) => {
    routes.push({
      url: `${siteConfig.url}${profession.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  knowledgeArticles.forEach((article) => {
    routes.push({
      url: `${siteConfig.url}${article.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return routes;
}
