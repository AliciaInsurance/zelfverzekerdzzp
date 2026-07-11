import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy",
  description:
    "Privacyverklaring van ZelfverzekerdZZP. Hoe wij omgaan met jouw gegevens.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section background="white" className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy" },
          ]}
        />
        <h1 className="mb-6 text-3xl font-semibold text-navy">
          Privacyverklaring
        </h1>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            ZelfverzekerdZZP respecteert je privacy en gaat zorgvuldig om met
            persoonsgegevens. Deze privacyverklaring beschrijft hoe wij omgaan
            met gegevens op onze website.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-navy">
            Welke gegevens verzamelen wij?
          </h2>
          <p>
            Deze website is een informatieplatform. Wij verzamelen geen
            persoonsgegevens via formulieren op deze site. Wanneer je doorklikt
            naar Alicia Direct, geldt het privacybeleid van Alicia voor het
            verwerken van je gegevens.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-navy">
            Analytische gegevens
          </h2>
          <p>
            {/* TODO: Beschrijf analytics/cookies zodra tooling is gekozen */}
            Wij kunnen anonieme gebruiksstatistieken verzamelen om onze website
            te verbeteren. Hierbij worden geen persoonsgegevens verwerkt die
            direct tot een individu herleidbaar zijn.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-navy">
            Doorgifte aan Alicia
          </h2>
          <p>
            Wanneer je via onze website doorklikt naar Alicia Direct om een
            premie te berekenen of een verzekering af te sluiten, verlaat je
            onze website. De verwerking van je gegevens geschiedt dan onder
            verantwoordelijkheid van Alicia.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-navy">Contact</h2>
          <p>
            {/* TODO: Voeg contactgegevens toe zodra beschikbaar */}
            Voor vragen over privacy kun je contact opnemen via Alicia.
          </p>
        </div>
      </div>
    </Section>
  );
}
