import { notFound } from "next/navigation";
import { ProfessionPageTemplate } from "@/components/ProfessionPageTemplate";
import { getProfessionBySlug } from "@/content/professions";
import { createPageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  const profession = getProfessionBySlug("accountant");
  if (!profession) return {};
  return createPageMetadata({
    title: "Verzekeringen voor accountants",
    description: profession.metaDescription,
    path: profession.href,
  });
}

export default function AccountantPage() {
  const profession = getProfessionBySlug("accountant");
  if (!profession) notFound();
  return <ProfessionPageTemplate profession={profession} />;
}
