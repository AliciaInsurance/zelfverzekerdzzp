import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  ogType = "website",
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
