# Design system — ZelfverzekerdZZP

Premium fintech/insurtech-uitstraling. Clean, modern, betrouwbaar — geen klassiek assurantiekantoor.

## Kleuren

Gedefinieerd in `src/app/globals.css` als CSS-variabelen en Tailwind-tokens:

| Token | Hex | Gebruik |
|---|---|---|
| `navy` | `#0B1F3A` | Headings, footer, dark sections, primary text accent |
| `blue` | `#2563EB` | Primary CTA, links, hover states |
| `aqua` | `#14B8A6` | Accent, check icons, gradient highlights |
| `soft-bg` | `#F8FAFC` | Alternating section backgrounds, card highlights |
| `text` / `foreground` | `#111827` | Body text |
| `muted` | `#6B7280` | Secondary text, labels |
| `background` | `#FFFFFF` | Page background |

### Gradients

- Hero/decoratie: `from-soft-bg via-white to-blue/5`
- Logo/icon badges: `from-blue to-aqua`
- Card icon backgrounds: `from-blue/10 to-aqua/10`

### Contrast

- Voldoende contrast navy/blue op wit en aqua op navy.
- Focus states: `focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2`

## Typografie

- **Font:** Inter (`next/font/google`, variable `--font-inter`)
- **Body:** `text-sm` tot `text-base`, `leading-relaxed`
- **Headings:** `font-semibold`, `tracking-tight`
  - H1 (hero): `text-4xl md:text-5xl lg:text-6xl`
  - H2 (section): `text-2xl md:text-3xl`
  - H3 (card): `text-lg`
- **Labels:** `text-xs font-medium uppercase tracking-wide text-muted`

## Spacing en layout

- **Container:** `max-w-6xl`, padding `px-4 sm:px-6 lg:px-8`
- **Section:** `py-16 md:py-20`
- **Card padding:** `p-5` tot `p-6`
- **Grid gaps:** `gap-4` tot `gap-6`
- **Border radius:** cards `rounded-xl`, buttons `rounded-lg`, pills `rounded-full`

## Componentpatronen

### Buttons (`src/components/ui/button.tsx`)

Varianten:

| Variant | Gebruik |
|---|---|
| `default` | Primary CTA (blue bg, white text) |
| `secondary` | Secondary actions (white bg, border) |
| `outline` | Card CTA's, subtiele acties |
| `ghost` | Icon buttons (hamburger menu) |
| `link` | Inline text links |

Sizes: `default` (h-11), `sm` (h-9), `lg` (h-12).

CTA's via `CTAButton` — niet direct `<Button>` voor externe links.

### Cards

- Border: `border border-navy/10`
- Shadow: `shadow-sm`, hover: `shadow-md`
- Background: `bg-white`
- Hover border accent: `hover:border-blue/30` (clickable cards)
- Icon badge: 40×40px rounded-lg met gradient background

### Sections

Alternerend patroon op pagina's:

1. Hero (gradient background)
2. White section
3. Soft-bg section
4. White section
5. Navy CTA section (witte tekst)
6. White disclaimer section

`Section`-component accepteert `background`: `"white" | "soft" | "navy"`.

### Hero

- Gradient background met blur-decoratie (absolute positioned circles)
- Max-width content: `max-w-3xl`
- CTA's in flex row met gap

### FAQ

- Radix Accordion
- Border-bottom per item
- ChevronDown icon met rotate on open

### Breadcrumbs

- ChevronRight separators
- Last item: `font-medium text-navy`, `aria-current="page"`

### Header

- Sticky, `backdrop-blur`, border-bottom
- Desktop: horizontal nav + CTA
- Mobile: Sheet (slide-in menu)

### Footer

- Navy background, white text
- 3-koloms grid + disclaimer block

## Responsive gedrag

- **Mobile first:** single column → `sm:` 2 cols → `lg:` 3-4 cols
- **Navigation:** hamburger onder `md:` breakpoint
- **Hero:** stacked op mobile, side-by-side op `lg:` (homepage package preview)
- **Catalog filters:** flex-wrap pills, touch-friendly tap targets
- **Typography:** fluid scaling via responsive text classes

## Merkrichtlijnen

### Wel

- Veel witruimte
- Heldere typografische hiërarchie
- Subtiele borders en zachte gradients
- Rustige lijniconen (lucide-react)
- Duidelijke CTA's ("Bereken premie")
- Abstracte UI-elementen (PackagePreview card)
- Consumentgerichte, compacte taal
- "Doorgaans verzekerd" / "afhankelijk van polisvoorwaarden"

### Niet

- Stockfoto's of handenschuddende zakenmensen
- Illustraties of clip-art
- Schreeuwerige kleuren of drukke achtergronden
- Klassieke verzekerings-template look
- WordPress-achtige layouts
- Fictieve klantreviews of keurmerken
- Concrete prijzen of limieten op de site
- Het woord "advies" in CTA's
- Donkere mode (niet geïmplementeerd)

## Voorbeelden

### Goede card

```tsx
<article className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm">
  <h3 className="text-lg font-semibold text-navy">Titel</h3>
  <p className="text-sm text-muted">Beschrijving</p>
</article>
```

### Goede CTA-sectie

```tsx
<Section background="navy">
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-2xl font-semibold text-white">Titel</h2>
    <p className="text-white/70">Subtitel</p>
    <CTAButton campaign="pagina">Bereken premie</CTAButton>
  </div>
</Section>
```

### Vermijd

```tsx
// ❌ Hardcoded Alicia URL
<a href="https://direct.alicia.insure">Klik hier</a>

// ❌ Inline styling buiten Tailwind tokens
<div style={{ color: '#FF0000' }}>

// ❌ Nieuwe kleur buiten design system
<div className="bg-purple-500">
```
