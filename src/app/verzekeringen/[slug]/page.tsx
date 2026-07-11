import { notFound } from "next/navigation";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";
import { getProductBySlug, getProductsWithPages } from "@/content/insurance";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProductsWithPages().map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const titleMap: Record<string, string> = {
    avb: "AVB voor zzp'ers",
    beroepsaansprakelijkheid: "Beroepsaansprakelijkheidsverzekering zzp",
    cyber: "Cyberverzekering voor zzp'ers",
    aov: "AOV voor zzp'ers",
    rechtsbijstand: "Rechtsbijstandverzekering voor zzp'ers",
    ongevallen: "Ongevallenverzekering voor zzp'ers",
    "zakelijke-spullen": "Verzekering zakelijke spullen voor zzp'ers",
    "zakelijke-reis": "Zakelijke reisverzekering voor zzp'ers",
  };

  return createPageMetadata({
    title: titleMap[slug] ?? product.title,
    description: product.metaDescription,
    path: product.href,
  });
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || !product.hasProductPage) notFound();
  return <InsurancePageTemplate product={product} />;
}
