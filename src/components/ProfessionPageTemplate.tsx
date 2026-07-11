import Link from "next/link";
import { Shield } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { DisclaimerBlock } from "@/components/DisclaimerBlock";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { products } from "@/content/insurance";
import type { Profession } from "@/content/professions";
import { siteConfig } from "@/content/site";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/json-ld";

type ProfessionPageTemplateProps = {
  profession: Profession;
};

export function ProfessionPageTemplate({
  profession,
}: ProfessionPageTemplateProps) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Beroepen", href: "/beroepen" },
    { label: profession.name },
  ];

  const recommendedProducts = products.filter((p) =>
    profession.recommendedInsurance.includes(p.shortTitle),
  );

  const jsonLdData = [
    breadcrumbJsonLd(
      breadcrumbs.map((b) => ({
        name: b.label,
        url: b.href
          ? `${siteConfig.url}${b.href}`
          : `${siteConfig.url}${profession.href}`,
      })),
    ),
    faqPageJsonLd(profession.faq),
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />

      <Hero title={profession.title} subtitle={profession.subtitle}>
        <CTAButton campaign={profession.campaign} />
      </Hero>

      <Section background="white">
        <Breadcrumbs items={breadcrumbs} />
        <p className="max-w-3xl text-muted leading-relaxed">
          {profession.description}
        </p>
      </Section>

      <Section background="soft">
        <h2 className="mb-6 text-2xl font-semibold text-navy">
          Belangrijkste risico&apos;s
        </h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {profession.risks.map((risk) => (
            <li
              key={risk}
              className="rounded-xl border border-navy/10 bg-white p-5 text-sm text-muted"
            >
              {risk}
            </li>
          ))}
        </ul>
      </Section>

      <Section background="white">
        <h2 className="mb-6 text-2xl font-semibold text-navy">
          Aanbevolen verzekeringen
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {recommendedProducts.map((product) => (
            <Link
              key={product.slug}
              href={product.href}
              className="group rounded-xl border border-navy/10 p-5 transition-all hover:border-blue/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue/10">
                <Shield className="h-4 w-4 text-blue" aria-hidden />
              </div>
              <h3 className="mb-1 font-semibold text-navy group-hover:text-blue">
                {product.shortTitle}
              </h3>
              <p className="text-sm text-muted">{product.shortDescription}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section background="soft">
        <h2 className="mb-4 text-2xl font-semibold text-navy">
          Praktijkvoorbeeld
        </h2>
        <div className="max-w-3xl rounded-xl border border-navy/10 bg-white p-6">
          <h3 className="mb-2 font-semibold text-navy">
            {profession.example.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            {profession.example.description}
          </p>
        </div>
      </Section>

      <Section background="white">
        <FAQ items={profession.faq} />
      </Section>

      <Section background="navy">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            Bereken je premie als {profession.name.toLowerCase()}
          </h2>
          <p className="mb-8 text-white/70">
            Vind de verzekeringen die passen bij jouw beroep en werkzaamheden.
          </p>
          <CTAButton
            campaign={profession.campaign}
            content="bottom-cta"
          />
        </div>
      </Section>

      <Section background="white" className="py-8">
        <DisclaimerBlock />
      </Section>
    </>
  );
}
