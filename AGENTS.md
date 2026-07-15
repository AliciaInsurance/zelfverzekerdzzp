# AGENTS.md — ZelfverzekerdZZP

Instructies voor elke Cursor Agent die aan dit project werkt.

## Eerst lezen

Voordat je wijzigingen maakt, lees:

1. `docs/PROJECT_CONTEXT.md` — architectuur, routes, deployment
2. `docs/DESIGN_SYSTEM.md` — visuele stijl en componentpatronen
3. `docs/CONTENT_RULES.md` — tone of voice, juridische grenzen, SEO
4. `docs/ROADMAP.md` — status, TODO's, vervolgstappen

## Projectdoel

Marketing- en SEO-platform voor **ZelfverzekerdZZP**. Bezoekers worden via CTA's doorgestuurd naar **Alicia Direct** (`https://direct.alicia.insure`). Geen database, geen CMS, geen externe API's.

## Werkwijze

### Hergebruik eerst

- Bestaande componenten en templates gebruiken; geen duplicatie.
- Productpagina's: `InsurancePageTemplate` + data in `src/content/insurance.ts`.
- Beroepspagina's: `ProfessionPageTemplate` + data in `src/content/professions.ts`.
- Nieuwe producten: voeg een `Product`-object toe in `insurance.ts`; route `/verzekeringen/[slug]` genereert automatisch een pagina als `hasProductPage: true`.
- CTA's: altijd via `CTAButton` + `buildDirectUrl()` in `src/lib/direct-url.ts`.

### Content

- Nieuwe content **alleen** in `src/content/*.ts` — nooit hardcoded in pagina-componenten tenzij eenmalig.
- Geen lorem ipsum, geen fictieve prijzen, dekkingen, limieten, klantenaantallen, reviews of garanties.
- Alicia/Knab-content mag als **referentie**; nooit letterlijk kopiëren.
- Bij twijfel: `TODO`-markering + algemene formulering ("doorgaans", "afhankelijk van polisvoorwaarden").
- Vermijd het woord **advies** in CTA's (Alicia is execution-only). Gebruik "Bereken premie", "Meer info", "Bekijk".

### Styling

- Behoud bestaande visuele stijl (zie `docs/DESIGN_SYSTEM.md`).
- Tailwind v4 met merkkleuren via CSS-variabelen (`navy`, `blue`, `aqua`, `soft-bg`, `muted`).
- Geen stockfoto's, geen klassieke verzekerings-look.
- Inter-font via `next/font/google` in `layout.tsx`.

### Technisch

- Stack: Next.js 16 App Router, TypeScript, Tailwind CSS v4, shadcn/ui-patronen, lucide-react.
- **Geen onnodige dependencies** toevoegen zonder expliciete vraag.
- Client components (`"use client"`) alleen waar interactie nodig is (menu, adviesdemo, catalogusfilters).
- Alicia Direct-links openen in **nieuw tabblad** (`CTAButton` doet dit al).

### Kwaliteitscontrole (verplicht)

Na elke substantiële wijziging:

```bash
npm run lint
npm run build
```

Los alle fouten op voordat je werk als gereed presenteert. Geen commits tenzij de gebruiker dat vraagt.

### SEO

- Metadata via `createPageMetadata()` in `src/lib/metadata.ts`.
- JSON-LD via helpers in `src/lib/json-ld.ts` + `JsonLd`-component.
- Sitemap en robots in `src/app/sitemap.ts` en `robots.ts`.
- Canonical URL via `siteConfig.url` (`NEXT_PUBLIC_SITE_URL`).

## Belangrijke bestanden

| Pad | Doel |
|---|---|
| `src/content/insurance.ts` | Productcatalogus (9 producten, 5 categorieën) |
| `src/content/professions.ts` | Beroepen |
| `src/content/faq.ts` | Homepage FAQ + why-us |
| `src/content/knowledge.ts` | Kennisbankartikelen |
| `src/content/navigation.ts` | Header/footer navigatie |
| `src/content/site.ts` | Siteconfig (naam, URL, tagline) |
| `src/lib/direct-url.ts` | UTM-links naar Alicia Direct |
| `src/components/InsurancePageTemplate.tsx` | Productpagina-layout |
| `src/components/ProductCatalog.tsx` | Filterbare catalogus (client) |
| `modules/premium-calculator/` | Herbruikbare premiecalculator (CSV + kern + React) |
| `src/lib/premium-calculator/adapter.ts` | Site-adapter (CTA/UTM naar Alicia Direct) |
| `src/components/SitePremiumCalculator.tsx` | Website-wrapper voor de calculator |

## Deployment

- Repository: `https://github.com/AliciaInsurance/zelfverzekerdzzp`
- Branch: `main` → automatische Vercel-deployment
- Env: `NEXT_PUBLIC_SITE_URL=https://zelfverzekerdzzp.nl`

## Next.js-versie

Dit project gebruikt Next.js 16. Raadpleeg `node_modules/next/dist/docs/` bij twijfel over API's — conventies kunnen afwijken van oudere versies.
