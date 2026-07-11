import { CTAButton } from "@/components/CTAButton";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Over ons",
  description:
    "ZelfverzekerdZZP is een modern digitaal verzekeringsplatform voor zelfstandigen, powered by Alicia.",
  path: "/over-ons",
});

export default function OverOnsPage() {
  return (
    <>
      <Hero
        title="Over ZelfverzekerdZZP"
        subtitle="Een modern digitaal verzekeringsplatform speciaal voor zelfstandigen."
      />

      <Section background="white">
        <div className="mx-auto max-w-3xl space-y-6 text-muted leading-relaxed">
          <p>
            <strong className="text-navy">ZelfverzekerdZZP</strong> helpt
            zelfstandigen om snel en helder inzicht te krijgen in zakelijke
            verzekeringen die relevant kunnen zijn voor hun werk.
          </p>
          <p>
            Wij geloven dat verzekeren niet ingewikkeld hoeft te zijn. Geen
            jargon, geen eindeloos papierwerk — wel duidelijke uitleg en een
            digitaal proces dat past bij hoe zzp&apos;ers vandaag ondernemen.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-navy">
            Powered by Alicia
          </h2>
          <p>
            ZelfverzekerdZZP is een initiatief van{" "}
            <strong className="text-navy">{siteConfig.parentCompany}</strong>.
            Via Alicia Direct kun je online een premie berekenen en
            verzekeringen afsluiten — volledig digitaal.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-navy">
            Onze belofte
          </h2>
          <p className="text-lg font-medium text-navy">
            {siteConfig.tagline}
          </p>
        </div>
      </Section>

      <Section background="soft">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-semibold text-navy">
            Klaar om te beginnen?
          </h2>
          <CTAButton campaign="over-ons" />
        </div>
      </Section>
    </>
  );
}
