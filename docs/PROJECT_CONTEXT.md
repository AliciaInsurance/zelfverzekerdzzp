# Projectcontext — ZelfverzekerdZZP

## Doel en positionering

**ZelfverzekerdZZP** is een modern digitaal acquisitiekanaal voor zakelijke verzekeringen voor zzp'ers. Het is een marketing- en SEO-platform dat bezoekers informeert en doorstuurt naar **Alicia Direct** voor premieberekening en afsluiten.

- **Belofte:** Slim verzekerd ondernemen. Zonder gedoe.
- **Initiatief van:** Alicia
- **Domein:** https://zelfverzekerdzzp.nl
- **Primaire funnel:** https://direct.alicia.insure

De site is geen polisadministratie, geen adviseursplatform en geen CMS. Alle content is hardcoded in TypeScript-datafiles.

## Doelgroep

- Zelfstandigen (zzp'ers) in Nederland
- Kennismakers die orienteren op zakelijke verzekeringen
- Bezoekers per beroep (consultant, IT, accountant, projectmanager)
- MT/demo-publiek en SEO-verkeer

## Tech stack

| Technologie | Versie / detail |
|---|---|
| Next.js | 16.x (App Router) |
| React | 19.x |
| TypeScript | 5.x |
| Tailwind CSS | v4 (`@theme inline`) |
| UI | shadcn/ui-patronen (Button, Accordion, Sheet) |
| Iconen | lucide-react |
| Font | Inter (Google Fonts) |
| Hosting | Vercel (statisch/SSG) |
| Broncode | GitHub (`AliciaInsurance/zelfverzekerdzzp`) |

Geen database, geen CMS, geen externe API's, geen auth.

## Architectuur

```text
modules/
  premium-calculator/     # Site-agnostische premiecalculator (CSV, kernlogica, React UI)
src/
  app/                    # Next.js routes (pages, layout, sitemap, robots)
  components/             # UI-componenten en paginatemplates
    ui/                   # shadcn/ui-primitieven
  content/                # Alle tekstuele content (TypeScript)
  lib/                    # Utilities (metadata, UTM, JSON-LD, cn, calculator-adapter)
public/                   # Statische assets
docs/                     # Projectdocumentatie (dit bestand e.d.)
```

### Rendering

- Alle pagina's zijn statisch gegenereerd (SSG).
- Productpagina's via dynamische route `/verzekeringen/[slug]` met `generateStaticParams()`.
- Client components alleen voor: `Header`/`MobileNavigation`, `SitePremiumCalculator`, `ProductCatalog`.

### Templates

| Template | Gebruik |
|---|---|
| `InsurancePageTemplate` | Alle productpagina's |
| `ProfessionPageTemplate` | Alle beroepspagina's |
| `Hero` + `Section` + `Container` | Pagina-opbouw |
| `ProductCatalog` | `/verzekeringen` met categoriefilters |

## Routes

### Marketing

| Route | Beschrijving |
|---|---|
| `/` | Homepage (hero, trust bar, beroepen, featured producten, premiecalculator, FAQ) |
| `/premie-berekenen` | Premiecalculator (beroep zoeken → beschikbare producten + indicatieve premie) |
| `/over-ons` | Over ZelfverzekerdZZP / Alicia |
| `/disclaimer` | Juridische disclaimer |
| `/privacy` | Privacyverklaring |

### Producten

| Route | Product |
|---|---|
| `/verzekeringen` | Catalogus met categorieblokken + filters |
| `/verzekeringen/avb` | AVB |
| `/verzekeringen/beroepsaansprakelijkheid` | BAV |
| `/verzekeringen/cyber` | Cyber |
| `/verzekeringen/aov` | AOV |
| `/verzekeringen/rechtsbijstand` | Rechtsbijstand |
| `/verzekeringen/ongevallen` | Ongevallen |
| `/verzekeringen/zakelijke-spullen` | Zakelijke spullen |
| `/verzekeringen/zakelijke-reis` | Zakelijke reisverzekering (incl. remote/workation) |
| `/verzekeringen/orv` | ORV |

### Beroepen

| Route | Beroep |
|---|---|
| `/beroepen` | Overzicht |
| `/beroepen/consultant` | Consultant |
| `/beroepen/it-specialist` | IT-specialist |
| `/beroepen/accountant` | Accountant |
| `/beroepen/projectmanager` | Projectmanager |

### Kennisbank

| Route | Artikel |
|---|---|
| `/kennisbank` | Overzicht |
| `/kennisbank/avb-of-bav` | AVB vs BAV |

### SEO

| Route | Functie |
|---|---|
| `/sitemap.xml` | Dynamische sitemap |
| `/robots.txt` | Robots-configuratie |

## Content- en dataarchitectuur

### Productcatalogus (`src/content/insurance.ts`)

9 producten in 5 categorieën:

1. **Aansprakelijkheid** — AVB, BAV
2. **Inkomen & gezondheid** — AOV, Ongevallen, ORV
3. **Cyber & juridisch** — Cyber, Rechtsbijstand
4. **Bedrijfsmiddelen** — Zakelijke spullen
5. **Reizen & mobiliteit** — Zakelijke reisverzekering

Elk product heeft: slug, titels, categorie, beschrijvingen, keyRisks, CTA-campaign, relatedProfessions, volledige pagina-content (whatIs, covered, notCovered, examples, faq, metaDescription).

Helpers: `getProductBySlug`, `getProductsWithPages`, `getProductsByCategory`, `getFeaturedProducts`, `getProductsForProfession`.

### Overige contentfiles

- `professions.ts` — 4 beroepen met risico's, aanbevolen producten, voorbeelden
- `faq.ts` — Homepage FAQ + why-us features + trust bar
- `knowledge.ts` — Kennisbankartikelen
- `navigation.ts` — Header/footer links + footer disclaimer
- `site.ts` — Centrale siteconfig

## CTA-flow naar Alicia Direct

Alle primaire CTA's linken naar `https://direct.alicia.insure` via `buildDirectUrl()`:

```ts
utm_source=zelfverzekerdzzp
utm_medium=website
utm_campaign=<pagina/product>   // bijv. avb, homepage, consultant
utm_content=<optioneel>         // bijv. hero, bottom-cta
```

Component: `CTAButton` — opent in nieuw tabblad (`target="_blank"`).

Standaard CTA-tekst: **Bereken premie**.

## SEO-implementatie

- `createPageMetadata()` — title, description, canonical, Open Graph, Twitter
- JSON-LD: Organization, WebSite, BreadcrumbList, FAQPage, Article, Service
- Semantische headings, breadcrumbs, interne links
- `metadataBase` via `siteConfig.url`

## Deployment

### GitHub

- Repo: https://github.com/AliciaInsurance/zelfverzekerdzzp
- Branch: `main`

### Vercel

1. Project gekoppeld aan GitHub-repo
2. Framework: Next.js (automatisch gedetecteerd)
3. Build: `npm run build`
4. Env var: `NEXT_PUBLIC_SITE_URL=https://zelfverzekerdzzp.nl`
5. Custom domain: `zelfverzekerdzzp.nl`
6. Elke push naar `main` → productiedeployment

### Lokaal

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # productiebuild testen
npm run lint     # ESLint
```

## Gemaakte keuzes en rationale

| Keuze | Rationale |
|---|---|
| TypeScript-datafiles i.p.v. CMS | Simpel, versioneerbaar, AI-vriendelijk uitbreidbaar |
| Dynamische `[slug]`-route voor producten | Eén template, schaalbaar naar N producten |
| Statische generatie | Snel, goedkoop op Vercel, geen server nodig |
| Centrale UTM-helper | Consistente tracking, eenvoudig aanpasbaar |
| Premies alleen via modular calculator | Indicatieve premies uit gevalideerde `pricing.csv`; CTA naar Alicia Direct |
| "Zakelijke reisverzekering" i.p.v. "Workation" | SEO + klantbegrip; workation als secundaire uitleg |
| Execution-only taalgebruik | Geen "advies"-CTA's; Alicia is geen adviseur |
| shadcn/ui handmatig | Geen CLI-afhankelijkheid; minimale set componenten |

## Openstaande TODO's in code

- `src/app/disclaimer/page.tsx` — disclaimertekst valideren met juridisch team Alicia
- `src/app/privacy/page.tsx` — analytics/cookies beschrijven zodra tooling gekozen is
- `src/app/privacy/page.tsx` — contactgegevens toevoegen

Zie `docs/ROADMAP.md` voor bredere vervolgstappen.
