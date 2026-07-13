# Roadmap — ZelfverzekerdZZP

## Wat nu gereed is (MVP v1)

### Platform

- [x] Next.js 16 + TypeScript + Tailwind CSS v4
- [x] 26 statische routes (SSG)
- [x] Responsive design (mobile + desktop)
- [x] GitHub-repo + Vercel-deployment pipeline
- [x] Sitemap, robots.txt, JSON-LD structured data
- [x] Centrale siteconfig + UTM-tracking

### Pagina's

- [x] Homepage (hero, trust bar, beroepen, featured producten, adviesdemo, FAQ, CTA)
- [x] Productcatalogus `/verzekeringen` met categorieblokken + filters
- [x] 9 productpagina's (dynamische `[slug]`-route)
- [x] 4 beroepspagina's + overzicht
- [x] Kennisbank (1 artikel + overzicht)
- [x] Over ons, disclaimer, privacy

### Productcatalogus

- [x] 9 producten in 5 categorieën
- [x] ProductCard + ProductCatalog componenten
- [x] InsurancePageTemplate met key risks, FAQ, CTA
- [x] Alle producten: CTA "Bereken premie"
- [x] Zakelijke reisverzekering (workation gemerged)

### Design

- [x] Merkkleuren, Inter-font, premium fintech-look
- [x] Herbruikbare componentbibliotheek (15+ componenten)
- [x] Header met mobile menu, footer met disclaimer

## Bekende tekortkomingen

### Inhoudelijk (validatie Alicia nodig)

- [ ] Disclaimertekst juridisch valideren (`disclaimer/page.tsx`)
- [ ] Privacy: analytics/cookie-beleid (tooling nog niet gekozen)
- [ ] Privacy: contactgegevens invullen
- [ ] Productdekkingen en uitsluitingen inhoudelijk reviewen per product
- [ ] AOV-, ORV- en ongevallen-specifieke voorwaarden valideren

### Functioneel

- [ ] Adviesdemo heeft geen echte advieslogica (bewust demo-state)
- [ ] Geen analytics (Plausible/GA4) geïmplementeerd
- [ ] Geen cookie consent banner
- [ ] Geen Open Graph-afbeeldingen per pagina
- [ ] Geen 404-pagina met merkstyling
- [ ] Geen favicon/logo als SVG in `/public` (alleen app/favicon.ico)

### SEO

- [ ] Beperkt aantal kennisbankartikelen (1 van plan)
- [ ] Beperkt aantal beroepspagina's (4 van plan)
- [ ] Geen hreflang (alleen NL)
- [ ] Geen blog/nieuws-sectie

## Eerstvolgende sprints

### Sprint 1: Inhoudelijke validatie

- Alicia productteam reviewt alle productteksten
- Juridisch team valideert disclaimer en privacy
- Contactgegevens en analytics-beleid invullen
- TODO's in code oplossen

### Sprint 2: SEO-uitbreiding

- 3–5 extra kennisbankartikelen (bijv. "AOV voor zzp'ers", "Cyberrisico's")
- Meer interne links tussen producten, beroepen en kennisbank
- Open Graph-afbeeldingen genereren
- Google Search Console koppelen

### Sprint 3: Productuitbreiding

- Extra producten toevoegen via `insurance.ts` (Crowdsurance, autoverzekering?)
- Productpagina's alleen toevoegen na inhoudelijke validatie
- Uitbreiden featured products op homepage

### Sprint 4: Beroepspagina's

- Meer beroepen (schilder, coach, fotograaf, etc.)
- Dynamische `[slug]`-route voor beroepen (zoals producten)
- Koppeling beroep → producten via `relatedProfessions`

### Sprint 5: Analytics & conversie

- Analytics tooling kiezen en implementeren (Plausible of GA4)
- Cookie consent banner (AVG-compliant)
- UTM-campaign monitoring
- A/B-testen op hero-CTA's en productcard-volgorde
- Heatmap/session recording overwegen

### Sprint 6: Conversieoptimalisatie

- Adviesdemo koppelen aan echte productlogica (indien gewenst)
- Exit-intent of sticky CTA op mobile
- Premie-indicatie widget (zonder prijs)
- Trust signals valideren (alleen echte data)

## Lange termijn

- Meertaligheid (EN voor expat-zzp'ers?)
- MDX-workflow voor kennisbank
- CMS-integratie (alleen als contentvolume groeit)
- Personalisatie op basis van beroep (URL-params)
- Integratie met Alicia API's (alleen na expliciete beslissing)
- A/B-testing framework
- Performance monitoring (Core Web Vitals dashboard)

## Versiehistorie

| Versie | Datum | Beschrijving |
|---|---|---|
| MVP v1 | Jul 2026 | Initiële site: 15 pagina's, 4 producten |
| MVP v1.1 | Jul 2026 | Productcatalogus: 9 producten, 5 categorieën, filters |
| MVP v1.2 | Jul 2026 | Content verrijking, unified CTA's, ORV-pagina, workation merge |
| Docs v1 | Jul 2026 | Projectdocumentatie voor multi-device development |
