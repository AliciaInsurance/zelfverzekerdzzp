import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Disclaimer",
  description:
    "Disclaimer van ZelfverzekerdZZP. Algemene informatie over verzekeringen, geen persoonlijk advies.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <Section background="white" className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Disclaimer" },
          ]}
        />
        <h1 className="mb-6 text-3xl font-semibold text-navy">Disclaimer</h1>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            De informatie op de website van ZelfverzekerdZZP is uitsluitend
            bedoeld als algemene orientatie over zakelijke verzekeringen voor
            zelfstandigen.
          </p>
          <p>
            De getoonde informatie vormt geen persoonlijk verzekeringsadvies.
            Aan de informatie op deze website kunnen geen rechten worden
            ontleend.
          </p>
          <p>
            ZelfverzekerdZZP is een initiatief van Alicia. Verzekeringen worden
            aangeboden via het platform van Alicia. De polisvoorwaarden van de
            betreffende verzekering zijn altijd leidend.
          </p>
          <p>
            Hoewel wij streven naar correcte en actuele informatie, kunnen wij
            niet garanderen dat alle informatie te allen tijde volledig of
            foutloos is. Controleer altijd de actuele polisvoorwaarden en
            productinformatie bij afsluiten.
          </p>
          <p>
            ZelfverzekerdZZP is niet aansprakelijk voor schade die voortvloeit
            uit het gebruik van de informatie op deze website of uit
            beslissingen die op basis van deze informatie zijn genomen.
          </p>
          {/* TODO: Valideer disclaimertekst met juridisch team Alicia */}
        </div>
      </div>
    </Section>
  );
}
