import { notFound } from "next/navigation";
import { ProfessionPageTemplate } from "@/components/ProfessionPageTemplate";
import { getProfessionBySlug } from "@/content/professions";
import { createPageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  const profession = getProfessionBySlug("it-specialist");
  if (!profession) return {};
  return createPageMetadata({
    title: "Verzekeringen voor IT-specialisten",
    description: profession.metaDescription,
    path: profession.href,
  });
}

export default function ITSpecialistPage() {
  const profession = getProfessionBySlug("it-specialist");
  if (!profession) notFound();
  return <ProfessionPageTemplate profession={profession} />;
}
