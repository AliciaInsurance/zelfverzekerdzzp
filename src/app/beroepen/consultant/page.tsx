import { notFound } from "next/navigation";
import { ProfessionPageTemplate } from "@/components/ProfessionPageTemplate";
import { getProfessionBySlug } from "@/content/professions";
import { createPageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  const profession = getProfessionBySlug("consultant");
  if (!profession) return {};
  return createPageMetadata({
    title: "Verzekeringen voor consultants",
    description: profession.metaDescription,
    path: profession.href,
  });
}

export default function ConsultantPage() {
  const profession = getProfessionBySlug("consultant");
  if (!profession) notFound();
  return <ProfessionPageTemplate profession={profession} />;
}
