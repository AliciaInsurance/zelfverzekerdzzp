# Contentregels — ZelfverzekerdZZP

## Tone of voice

| Eigenschap | Toelichting |
|---|---|
| Helder | Korte zinnen, geen jargon |
| Deskundig | Correcte verzekeringsterminologie, maar uitgelegd |
| Direct | Geen omwegen, geen marketingtaal |
| Betrouwbaar | Geen overdreven claims |
| Toegankelijk | Consumentgericht, niet juridisch |
| Rustig | Niet schreeuwerig, geen urgency-tricks |

### Belofte

**Slim verzekerd ondernemen. Zonder gedoe.**

### Vermijd

- Klassieke assurantiekantoor-taal ("uiteraard", "wij staan voor u klaar")
- Absolute claims ("altijd gedekt", "100% zeker")
- Het woord **advies** in CTA's of beloftes (Alicia is execution-only)
- Schreeuwerige sales-taal ("Nu actie!", "Beperkte tijd!")
- Fictieve social proof ("10.000+ tevreden klanten")

## Schrijfregels

### Algemeen

- Schrijf in het **Nederlands**, tweede persoon enkelvoud ("je/jij").
- Houd teksten **compact** — liever 2 korte alinea's dan 1 lange.
- Gebruik **actieve taal** ("Bereken je premie" i.p.v. "Premie kan berekend worden").
- Benoem risico's en relevantie; verzin geen productdetails.

### Productcontent

- Formuleer dekkingen als **"doorgaans wel/niet verzekerd"** — geen garanties.
- Voeg toe: *"De polisvoorwaarden zijn leidend"* waar passend.
- Geen specifieke **prijzen**, **limieten** (€-bedragen) of **eigen risico's** tenzij inhoudelijk gevalideerd door Alicia.
- Geen **verzekeraarsnamen** of **polisnummers** verzinnen.
- Praktijkvoorbeelden: realistisch, kort, geen extreme scenario's.

### CTA's

| Context | Tekst |
|---|---|
| Primair (extern) | Bereken premie |
| Secundair (intern) | Bekijk verzekeringen, Meer info, Bekijk beroepen |
| Package preview | Bekijk (niet "Bekijk advies") |

Alle externe CTA's → Alicia Direct via `CTAButton`.

## SEO-richtlijnen

### Metadata per pagina

- Unieke `title` en `description` via `createPageMetadata()`.
- Canonical URL via `siteConfig.url` + pad.
- Open Graph + Twitter cards.

### Titelformaat

```text
[Paginatitel] | ZelfverzekerdZZP
```

Voorbeelden:

- `AVB voor zzp'ers | ZelfverzekerdZZP`
- `Zakelijke verzekeringen voor zzp'ers | ZelfverzekerdZZP`

### Structured data

- Organization + WebSite (layout)
- FAQPage (pagina's met FAQ)
- BreadcrumbList (product- en beroepspagina's)
- Article (kennisbank)
- Service (productpagina's)

Geen Review- of Rating-schema zonder echte reviews.

### Interne links

- Productpagina's linken naar gerelateerde kennisbankartikelen.
- Beroepspagina's linken naar aanbevolen producten.
- Catalogus linkt naar individuele productpagina's.

### Keywords

- Primair: "zzp verzekering", "zakelijke verzekering zzp'er"
- Per product: "[productnaam] zzp'er" (bijv. "AVB voor zzp'ers")
- Per beroep: "verzekeringen voor [beroep]"

## Juridische disclaimers

### Standaard disclaimer (footer + productpagina's)

> ZelfverzekerdZZP is een initiatief van Alicia. De informatie op deze website is algemeen van aard en geen persoonlijk advies. Aan deze informatie kunnen geen rechten worden ontleend. De polisvoorwaarden van de betreffende verzekering zijn leidend.

### Per pagina

- `DisclaimerBlock`-component op product- en beroepspagina's.
- Volledige disclaimer op `/disclaimer`.
- Privacy op `/privacy`.

### Execution-only

De site biedt **geen persoonlijk verzekeringsadvies**. De adviesdemo op de homepage is expliciet een indicatie:

> "Dit is een algemene indicatie en geen persoonlijk verzekeringsadvies."

## Verboden content

| Categorie | Regel |
|---|---|
| Prijzen | Geen premiebedragen, "vanaf € X", kortingen |
| Dekkingen | Geen specifieke limieten zonder validatie |
| Garanties | Geen "100% gedekt", "volledige bescherming" |
| Klantenaantallen | Geen "X zzp'ers verzekerd", tevredenheidspercentages |
| Reviews | Geen fictieve testimonials of quotes |
| Keurmerken | Geen logo's of badges die niet bestaan |
| Verzekeraars | Geen fictieve partners of underwriters |
| Wettelijke claims | Alleen als aantoonbaar correct |

## Alicia-content als referentie

### Toegestaan

- Productcategorieën en -namen raadplegen
- Algemene dekking/uitsluiting-structuur begrijpen
- Terminologie en uitlegpatronen overnemen (niet kopiëren)
- Referenties: https://your.alicia.insure, https://direct.alicia.insure, Knab/Alicia-partnerpagina's

### Niet toegestaan

- Teksten letterlijk kopiëren
- Knab-specifieke content overnemen (kortingen, app-referenties)
- Specifieke prijzen, limieten of voorwaarden uit partnerpagina's overnemen zonder validatie
- Statistieken (klanttevredenheid, aantallen) overnemen

### Bij twijfel

1. Formuleer algemener ("doorgaans", "kan relevant zijn")
2. Verwijs naar polisvoorwaarden
3. Plaats een `TODO`-markering in content of code
4. Laat inhoud valideren door Alicia product/juridisch team

## Content toevoegen

### Nieuw product

1. Voeg `Product`-object toe in `src/content/insurance.ts`
2. Zet `hasProductPage: true` en `href: "/verzekeringen/[slug]"`
3. Vul alle verplichte velden (zie bestaande producten als template)
4. Route wordt automatisch gegenereerd via `[slug]/page.tsx`
5. Sitemap pakt het automatisch op

### Nieuw beroep

1. Voeg `Profession`-object toe in `src/content/professions.ts`
2. Maak route `src/app/beroepen/[slug]/page.tsx` of individuele pagina
3. Update `relatedProfessions` op relevante producten

### Nieuw kennisbankartikel

1. Voeg `KnowledgeArticle` toe in `src/content/knowledge.ts`
2. Maak route in `src/app/kennisbank/[slug]/page.tsx`
