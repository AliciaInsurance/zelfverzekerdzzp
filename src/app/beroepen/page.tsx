import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { Hero } from "@/components/Hero";
import { ProfessionCard } from "@/components/ProfessionCard";
import { Section } from "@/components/Section";
import { professions } from "@/content/professions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Verzekeringen per beroep",
  description:
    "Ontdek welke zakelijke verzekeringen passen bij jouw beroep als zzp'er. Van consultant tot IT-specialist.",
  path: "/beroepen",
});

export default function BeroepenPage() {
  return (
    <>
      <Hero
        title="Verzekeringen per beroep"
        subtitle="Elk beroep heeft andere risico's. Vind de verzekeringen die passen bij jouw vakgebied."
      >
        <CTAButton campaign="beroepen" />
      </Hero>

      <Section background="white">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Beroepen" },
          ]}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {professions.map((profession) => (
            <ProfessionCard key={profession.slug} profession={profession} />
          ))}
        </div>
      </Section>
    </>
  );
}
