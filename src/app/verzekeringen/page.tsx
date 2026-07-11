import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { Hero } from "@/components/Hero";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Section } from "@/components/Section";
import { productCategories, products } from "@/content/insurance";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Zakelijke verzekeringen voor zzp'ers",
  description:
    "Volledig overzicht van zakelijke verzekeringen voor zzp'ers: aansprakelijkheid, inkomen, cyber, bedrijfsmiddelen en reizen.",
  path: "/verzekeringen",
});

export default function VerzekeringenPage() {
  return (
    <>
      <Hero
        title="Zakelijke verzekeringen voor zzp'ers"
        subtitle="Ontdek welke verzekeringen relevant kunnen zijn voor jouw werk als zelfstandige. Helder uitgelegd, zonder ingewikkelde verzekeringstaal."
      >
        <CTAButton campaign="verzekeringen" />
      </Hero>

      <Section background="white">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Verzekeringen" },
          ]}
        />

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => {
            const count = products.filter((p) => p.category === category.slug).length;
            return (
              <div
                key={category.slug}
                className="rounded-xl border border-navy/10 bg-soft-bg p-5"
              >
                <h2 className="mb-1 font-semibold text-navy">{category.title}</h2>
                <p className="mb-2 text-sm text-muted">{category.description}</p>
                <p className="text-xs text-muted">{count} producten</p>
              </div>
            );
          })}
        </div>

        <ProductCatalog products={products} />

        <p className="mt-10 text-sm text-muted">
          Op zoek naar verzekeringen op basis van je beroep?{" "}
          <Link
            href="/beroepen"
            className="inline-flex items-center gap-1 font-medium text-blue hover:underline"
          >
            Bekijk beroepen
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </p>
      </Section>
    </>
  );
}
