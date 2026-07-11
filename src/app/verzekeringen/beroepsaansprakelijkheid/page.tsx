import { notFound } from "next/navigation";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";
import { getInsuranceBySlug } from "@/content/insurance";
import { createPageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  const product = getInsuranceBySlug("beroepsaansprakelijkheid");
  if (!product) return {};
  return createPageMetadata({
    title: "Beroepsaansprakelijkheidsverzekering zzp",
    description: product.metaDescription,
    path: product.href,
  });
}

export default function BAVPage() {
  const product = getInsuranceBySlug("beroepsaansprakelijkheid");
  if (!product) notFound();
  return <InsurancePageTemplate product={product} />;
}
