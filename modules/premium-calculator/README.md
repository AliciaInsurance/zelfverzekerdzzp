# Premium Calculator

Site-agnostische premiecalculator module voor Alicia D2C-websites.

## Bron van waarheid

Plaats altijd de actuele prijsdatabase als:

```text
modules/premium-calculator/pricing/pricing.csv
```

Een nieuw bestand vervangt volledig de bestaande dataset. Geen historie, geen incrementele updates.

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
