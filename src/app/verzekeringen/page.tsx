import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { Hero } from "@/components/Hero";
import { InsuranceCard } from "@/components/InsuranceCard";
import { Section } from "@/components/Section";
import { getInsurancePages } from "@/content/insurance";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Zakelijke verzekeringen voor zzp'ers",
  description:
    "Overzicht van zakelijke verzekeringen voor zzp'ers: AVB, BAV, cyberverzekering en meer. Heldere uitleg en digitaal afsluiten.",
  path: "/verzekeringen",
});

export default function VerzekeringenPage() {
  const products = getInsurancePages();

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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <InsuranceCard key={product.slug} product={product} />
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
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
