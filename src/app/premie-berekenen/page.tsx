import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { SitePremiumCalculator } from "@/components/SitePremiumCalculator";
import { siteConfig } from "@/content/site";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: `Premie berekenen | ${siteConfig.name}`,
  description:
    "Bereken een indicatieve maandpremie voor jouw beroep. Beschikbare zakelijke verzekeringen met premie inclusief assurantiebelasting.",
  path: "/premie-berekenen",
});

export default function PremieBerekenenPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${siteConfig.url}/` },
          {
            name: "Premie berekenen",
            url: `${siteConfig.url}/premie-berekenen`,
          },
        ])}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-soft-bg via-white to-blue/5 py-14 md:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-aqua/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue/10 blur-3xl" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight text-navy md:text-4xl lg:text-5xl">
              Bereken je indicatieve premie
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              Zoek je beroep en bekijk direct welke verzekeringen beschikbaar
              zijn, met een indicatieve maandpremie inclusief
              assurantiebelasting.
            </p>
          </div>
        </Container>
      </section>

      <Section background="white">
        <div className="mx-auto max-w-5xl">
          <SitePremiumCalculator ctaContent="premie-berekenen-page" />
        </div>
      </Section>

      <Section background="soft">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-xl font-semibold text-navy md:text-2xl">
            Goed om te weten
          </h2>
          <p className="text-muted leading-relaxed">
            De getoonde premies zijn indicatief voor jouw beroep. De definitieve
            premie wordt bepaald tijdens het afsluiten. De polisvoorwaarden zijn
            leidend.
          </p>
        </div>
      </Section>
    </>
  );
}
