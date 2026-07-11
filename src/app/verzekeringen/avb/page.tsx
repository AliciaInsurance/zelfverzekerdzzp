import { notFound } from "next/navigation";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";
import { getInsuranceBySlug } from "@/content/insurance";
import { createPageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  const product = getInsuranceBySlug("avb");
  if (!product) return {};
  return createPageMetadata({
    title: "AVB voor zzp'ers",
    description: product.metaDescription,
    path: product.href,
  });
}

export default function AVBPage() {
  const product = getInsuranceBySlug("avb");
  if (!product) notFound();
  return <InsurancePageTemplate product={product} />;
}
