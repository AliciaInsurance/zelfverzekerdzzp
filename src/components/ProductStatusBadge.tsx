import { cn } from "@/lib/utils";
import type { ProductStatus } from "@/content/insurance";

const statusConfig: Record<
  ProductStatus,
  { label: string; className: string }
> = {
  direct: {
    label: "Direct afsluiten",
    className: "bg-aqua/10 text-aqua",
  },
  quote: {
    label: "Offerte",
    className: "bg-blue/10 text-blue",
  },
  "coming-soon": {
    label: "Binnenkort",
    className: "bg-navy/10 text-navy",
  },
};

type ProductStatusBadgeProps = {
  status: ProductStatus;
  className?: string;
};

export function ProductStatusBadge({ status, className }: ProductStatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium",
        config.className,
        className,
      )}
    >
      {config.label}
    </span>
  );
}
