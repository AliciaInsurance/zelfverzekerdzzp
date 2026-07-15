import catalogJson from "../../../modules/premium-calculator/generated/catalog.json";
import type {
  PremiumQuote,
  PricingCatalog,
  Profession,
} from "../../../modules/premium-calculator/src/types";
import { buildDirectUrl } from "@/lib/direct-url";

/**
 * Maps CSV product_name values to Alicia Direct UTM campaign slugs.
 * Host-specific — not part of the premium-calculator module.
 */
export const csvProductToCampaign: Record<string, string> = {
  Bedrijfsaansprakelijkheidsverzekering: "avb",
  Beroepsaansprakelijkheidsverzekering: "beroepsaansprakelijkheid",
  Cyberverzekering: "cyber",
  Rechtsbijstandsverzekering: "rechtsbijstand",
  Ongevallenverzekering: "ongevallen",
  "Zakelijke spullen": "zakelijke-spullen",
  Zakenreisverzekering: "zakelijke-reis",
};

export const pricingCatalog = catalogJson as PricingCatalog;

export function resolvePremiumCta(
  quote: PremiumQuote,
  _profession: Profession,
  content = "premium-calculator",
) {
  const campaign =
    csvProductToCampaign[quote.productName] ?? "premium-calculator";

  return {
    label: "Bekijk verzekering",
    href: buildDirectUrl(campaign, content),
    external: true as const,
  };
}
