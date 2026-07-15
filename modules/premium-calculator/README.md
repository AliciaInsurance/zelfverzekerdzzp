# Premium Calculator

Site-agnostische premiecalculator module voor Alicia D2C-websites.

## Bron van waarheid

Plaats altijd de actuele prijsdatabase als:

```text
modules/premium-calculator/pricing/pricing.csv
```

Een nieuw bestand vervangt volledig de bestaande dataset. Geen historie, geen incrementele updates.

Exacte bestandsnaam: `pricing.csv` (niet `pricing.csv.csv`).

### Kolommen

Verplicht: `profession_riskclass_id`, `profession_id`, `profession_name`, `product_name`, `base_price`, `percentage_adjustment`, `fixed_adjustment`, `insurance_tax_percentage`, `riskclass_name`.

Optioneel: `internal_name` — wordt door de module bewaard voor andere Alicia D2C-sites; de calculator op zelfverzekerdzzp.nl gebruikt dit veld niet in de UI.

## Genereren van de catalogus

```bash
npm run build:pricing
```

Dit valideert `pricing.csv` en schrijft `generated/catalog.json`. Bij validatiefouten faalt het proces.

`prebuild` / `predev` draaien dit automatisch.

## Publieke API

```ts
import {
  validatePricingCsv,
  buildCatalog,
  getAvailableQuotes,
  searchProfessions,
  formatEuro,
} from "../modules/premium-calculator/src";

import { PremiumCalculator } from "../modules/premium-calculator/src/react";
```

### React

```tsx
<PremiumCalculator
  catalog={catalog}
  products={optionalProductAllowList}
  ctaResolver={(quote, profession) => ({
    label: "Bekijk verzekering",
    href: "...",
    external: true,
  })}
  onProductSelected={(quote, profession) => { ... }}
/>
```

De module kent geen website-specifieke URL's, UTM's of productslugs. Die levert de host via `ctaResolver` en optionele productfilters.
