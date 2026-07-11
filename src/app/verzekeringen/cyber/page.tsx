import { notFound } from "next/navigation";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";
import { getInsuranceBySlug } from "@/content/insurance";
import { createPageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  const product = getInsuranceBySlug("cyber");
  if (!product) return {};
  return createPageMetadata({
    title: "Cyberverzekering voor zzp'ers",
    description: product.metaDescription,
    path: product.href,
  });
}

export default function CyberPage() {
  const product = getInsuranceBySlug("cyber");
  if (!product) notFound();
  return <InsurancePageTemplate product={product} />;
}
