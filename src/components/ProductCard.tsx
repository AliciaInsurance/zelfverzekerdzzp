import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import type { Product } from "@/content/insurance";

type ProductCardProps = {
  product: Product;
  showCta?: boolean;
};

export function ProductCard({ product, showCta = true }: ProductCardProps) {
  const canLinkToPage = product.hasProductPage;

  return (
    <article className="flex h-full flex-col rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue/10 to-aqua/10">
        <Shield className="h-5 w-5 text-blue" aria-hidden />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-navy">
        {canLinkToPage ? (
          <Link
            href={product.href}
            className="transition-colors hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue rounded-sm"
          >
            {product.shortTitle}
          </Link>
        ) : (
          product.shortTitle
        )}
      </h3>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
        {product.shortDescription}
      </p>

      <div className="mb-4 rounded-lg bg-soft-bg p-3">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          Wanneer relevant?
        </p>
        <p className="mt-1 text-sm text-navy">{product.whenRelevant}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {canLinkToPage && (
          <Link
            href={product.href}
            className="inline-flex items-center gap-1 text-sm font-medium text-blue transition-colors hover:text-blue/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue rounded-sm"
          >
            Meer info
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
        {showCta && (
          <CTAButton
            campaign={product.directUrlCampaign}
            variant="outline"
            size="sm"
            showArrow={false}
            className="ml-auto"
          >
            Bereken premie
          </CTAButton>
        )}
      </div>
    </article>
  );
}

/** @deprecated Use ProductCard */
export const InsuranceCard = ProductCard;
