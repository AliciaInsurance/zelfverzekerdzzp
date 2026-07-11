import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { knowledgeArticles } from "@/content/knowledge";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Kennisbank",
  description:
    "Praktische artikelen over zakelijke verzekeringen voor zzp'ers. Heldere uitleg over AVB, BAV en meer.",
  path: "/kennisbank",
});

export default function KennisbankPage() {
  return (
    <>
      <Hero
        title="Kennisbank"
        subtitle="Praktische artikelen over verzekeringen voor zzp'ers. Heldere uitleg, zonder ingewikkelde verzekeringstaal."
      />

      <Section background="white">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Kennisbank" },
          ]}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {knowledgeArticles.map((article) => (
            <Link
              key={article.slug}
              href={article.href}
              className="group rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:border-blue/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
            >
              <h2 className="mb-2 text-lg font-semibold text-navy group-hover:text-blue">
                {article.title}
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {article.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs text-muted">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {article.readingTime} leestijd
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-blue">
                  Lees artikel
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
