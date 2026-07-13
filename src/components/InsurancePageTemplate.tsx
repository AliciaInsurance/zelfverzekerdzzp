import Link from "next/link";
import { Check, X } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { DisclaimerBlock } from "@/components/DisclaimerBlock";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import type { Product } from "@/content/insurance";
import { siteConfig } from "@/content/site";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/json-ld";

type InsurancePageTemplateProps = {
  product: Product;
};

export function InsurancePageTemplate({ product }: InsurancePageTemplateProps) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Verzekeringen", href: "/verzekeringen" },
    { label: product.shortTitle },
  ];

  const jsonLdData = [
    serviceJsonLd({
      name: product.title,
      description: product.metaDescription,
      url: `${siteConfig.url}${product.href}`,
    }),
    breadcrumbJsonLd(
      breadcrumbs.map((b) => ({
        name: b.label,
        url: b.href ? `${siteConfig.url}${b.href}` : `${siteConfig.url}${product.href}`,
      })),
    ),
    ...(product.faq.length > 0 ? [faqPageJsonLd(product.faq)] : []),
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />

      <Hero title={product.title} subtitle={product.subtitle}>
        <CTAButton campaign={product.directUrlCampaign} content="hero">
          Bereken premie
        </CTAButton>
      </Hero>

      <Section background="white">
        <Breadcrumbs items={breadcrumbs} />

        <div className="max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold text-navy">
            Wat is deze verzekering?
          </h2>
          <p className="text-muted leading-relaxed">{product.whatIs}</p>
        </div>
      </Section>

      {product.keyRisks.length > 0 && (
        <Section background="soft">
          <h2 className="mb-4 text-2xl font-semibold text-navy">
            Belangrijkste risico&apos;s
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {product.keyRisks.map((risk) => (
              <li
                key={risk}
                className="rounded-lg border border-navy/10 bg-white p-4 text-sm text-muted"
              >
                {risk}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {product.covered.length > 0 && product.notCovered.length > 0 && (
        <Section background="white">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-semibold text-navy">
                Wat is doorgaans wel verzekerd?
              </h2>
              <ul className="space-y-3">
                {product.covered.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-aqua" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-semibold text-navy">
                Wat is doorgaans niet verzekerd?
              </h2>
              <ul className="space-y-3">
                {product.notCovered.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      )}

      {product.whenRelevantDetail.length > 0 && (
        <Section background="soft">
          <h2 className="mb-4 text-2xl font-semibold text-navy">
            Wanneer kan deze verzekering relevant zijn?
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {product.whenRelevantDetail.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-lg border border-navy/10 bg-white p-4 text-sm text-muted"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {product.examples.length > 0 && (
        <Section background="white">
          <h2 className="mb-6 text-2xl font-semibold text-navy">
            Praktijkvoorbeelden
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {product.examples.map((example) => (
              <div
                key={example}
                className="rounded-xl border border-navy/10 bg-soft-bg p-5 text-sm leading-relaxed text-muted"
              >
                {example}
              </div>
            ))}
          </div>
        </Section>
      )}

      {product.forWhom.length > 0 && (
        <Section background="soft">
          <h2 className="mb-4 text-2xl font-semibold text-navy">
            Voor welke zzp&apos;ers relevant?
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {product.forWhom.map((item) => (
              <li
                key={item}
                className="rounded-lg bg-white px-4 py-3 text-sm text-navy"
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {product.faq.length > 0 && (
        <Section background="white">
          <FAQ items={product.faq} />
        </Section>
      )}

      <Section background="navy">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            Bereken je premie voor {product.shortTitle}
          </h2>
          <p className="mb-8 text-white/70">
            Vind binnen enkele minuten de verzekering die past bij jouw
            situatie als zzp&apos;er.
          </p>
          <CTAButton
            campaign={product.directUrlCampaign}
            content="bottom-cta"
          >
            Bereken premie
          </CTAButton>
        </div>
      </Section>

      <Section background="white" className="py-8">
        <DisclaimerBlock />
        {(product.slug === "avb" || product.slug === "beroepsaansprakelijkheid") && (
          <p className="mt-4 text-sm text-muted">
            Meer weten over het verschil tussen AVB en BAV?{" "}
            <Link
              href="/kennisbank/avb-of-bav"
              className="text-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue rounded-sm"
            >
              Lees ons kennisbankartikel
            </Link>
            .
          </p>
        )}
      </Section>
    </>
  );
}
