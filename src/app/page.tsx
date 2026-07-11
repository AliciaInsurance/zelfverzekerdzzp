import Link from "next/link";
import { AdviceDemo } from "@/components/AdviceDemo";
import { CTAButton } from "@/components/CTAButton";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";
import { PackagePreview } from "@/components/PackagePreview";
import { ProfessionCard } from "@/components/ProfessionCard";
import { Section } from "@/components/Section";
import { TrustBar } from "@/components/TrustBar";
import { homepageFAQ } from "@/content/faq";
import { getFeaturedProducts } from "@/content/insurance";
import { professions } from "@/content/professions";
import { siteConfig } from "@/content/site";
import { faqPageJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: `${siteConfig.name} | Zakelijke verzekeringen voor zzp'ers`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <JsonLd data={faqPageJsonLd(homepageFAQ)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-soft-bg via-white to-blue/5 py-16 md:py-24">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-aqua/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-4 text-4xl font-semibold tracking-tight text-navy md:text-5xl lg:text-6xl">
                Slim verzekerd ondernemen. Zonder gedoe.
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-muted md:text-xl">
                Vind binnen enkele minuten de zakelijke verzekeringen die passen
                bij jouw werk als zzp&apos;er. Helder uitgelegd en digitaal
                geregeld.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTAButton campaign="homepage" content="hero-primary" />
                <CTAButton
                  campaign="homepage"
                  content="hero-secondary"
                  variant="secondary"
                  href="/verzekeringen"
                  external={false}
                  showArrow={false}
                >
                  Bekijk verzekeringen
                </CTAButton>
              </div>
            </div>
            <PackagePreview />
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* Zoek op beroep */}
      <Section background="white" id="beroepen">
        <div className="mb-10 text-center md:text-left">
          <h2 className="mb-3 text-2xl font-semibold text-navy md:text-3xl">
            Zoek op beroep
          </h2>
          <p className="text-muted">
            Ontdek welke verzekeringen passen bij jouw vakgebied.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {professions.map((profession) => (
            <ProfessionCard key={profession.slug} profession={profession} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/beroepen"
            className="text-sm font-medium text-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue rounded-sm"
          >
            Bekijk alle beroepen →
          </Link>
        </div>
      </Section>

      {/* Populaire verzekeringen */}
      <Section background="soft" id="verzekeringen">
        <div className="mb-10 text-center md:text-left">
          <h2 className="mb-3 text-2xl font-semibold text-navy md:text-3xl">
            Populaire verzekeringen
          </h2>
          <p className="text-muted">
            De meest gekozen verzekeringen voor zzp&apos;ers.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      {/* Adviesmodule demo */}
      <Section background="white" id="advies">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-navy md:text-3xl">
              Welke verzekering past bij jou?
            </h2>
            <p className="text-muted leading-relaxed">
              Vul je gegevens in en krijg een eerste indicatie van verzekeringen
              die relevant kunnen zijn voor jouw situatie.
            </p>
          </div>
          <AdviceDemo />
        </div>
      </Section>

      {/* Waarom ZelfverzekerdZZP */}
      <Section background="soft">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-navy md:text-3xl">
            Waarom ZelfverzekerdZZP
          </h2>
        </div>
        <FeatureGrid />
      </Section>

      {/* FAQ */}
      <Section background="white" id="faq">
        <div className="mx-auto max-w-3xl">
          <FAQ items={homepageFAQ} />
        </div>
      </Section>

      {/* Eind-CTA */}
      <Section background="navy">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            Klaar om zelfverzekerd te ondernemen?
          </h2>
          <p className="mb-8 text-white/70">
            Bereken binnen enkele minuten je premie en sluit digitaal af.
          </p>
          <CTAButton campaign="homepage" content="bottom-cta" />
        </div>
      </Section>
    </>
  );
}
