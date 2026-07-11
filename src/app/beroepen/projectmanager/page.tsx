import { notFound } from "next/navigation";
import { ProfessionPageTemplate } from "@/components/ProfessionPageTemplate";
import { getProfessionBySlug } from "@/content/professions";
import { createPageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  const profession = getProfessionBySlug("projectmanager");
  if (!profession) return {};
  return createPageMetadata({
    title: "Verzekeringen voor projectmanagers",
    description: profession.metaDescription,
    path: profession.href,
  });
}

export default function ProjectmanagerPage() {
  const profession = getProfessionBySlug("projectmanager");
  if (!profession) notFound();
  return <ProfessionPageTemplate profession={profession} />;
}
