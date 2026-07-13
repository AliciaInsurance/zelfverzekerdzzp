# ZelfverzekerdZZP

Moderne MVP-website voor zakelijke verzekeringen voor zzp'ers. Marketing- en SEO-platform dat bezoekers doorstuurt naar Alicia Direct.

**Belofte:** Slim verzekerd ondernemen. Zonder gedoe.

## Documentatie

Lees deze bestanden voordat je aan het project werkt (ook relevant voor Cursor Agents):

| Document | Inhoud |
|---|---|
| [AGENTS.md](./AGENTS.md) | Instructies voor AI-agents die aan dit project werken |
| [docs/PROJECT_CONTEXT.md](./docs/PROJECT_CONTEXT.md) | Architectuur, routes, stack, deployment |
| [docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md) | Kleuren, typografie, componentpatronen |
| [docs/CONTENT_RULES.md](./docs/CONTENT_RULES.md) | Tone of voice, SEO, juridische regels |
| [docs/ROADMAP.md](./docs/ROADMAP.md) | Status, TODO's, vervolgstappen |

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Button, Accordion, Sheet)
- lucide-react

## Lokaal starten

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Productiebuild testen

```bash
npm run lint
npm run build
npm run start
```

## GitHub

Repository: https://github.com/AliciaInsurance/zelfverzekerdzzp

```bash
git clone https://github.com/AliciaInsurance/zelfverzekerdzzp.git
cd zelfverzekerdzzp
npm install
npm run dev
```

## Deployen naar Vercel

1. Project is gekoppeld aan de GitHub-repository.
2. Elke push naar `main` activeert automatisch een deployment.
3. Environment variable (optioneel):

   ```text
   NEXT_PUBLIC_SITE_URL=https://zelfverzekerdzzp.nl
   ```

4. Custom domain: `zelfverzekerdzzp.nl` (DNS via Vercel).

## Projectstructuur

```text
src/
  app/              # Next.js App Router pagina's
  components/       # Herbruikbare UI-componenten
  content/          # Hardcoded content (verzekeringen, beroepen, FAQ)
  lib/              # Utilities (metadata, UTM-links, JSON-LD)
docs/               # Projectdocumentatie
public/             # Statische assets
```

## Environment variables

| Variable | Beschrijving | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL | `https://zelfverzekerdzzp.nl` |

## Pagina's

### Marketing
- `/` — Homepage
- `/over-ons` — Over ons
- `/disclaimer` — Disclaimer
- `/privacy` — Privacy

### Producten (9)
- `/verzekeringen` — Catalogus met filters
- `/verzekeringen/avb` — AVB
- `/verzekeringen/beroepsaansprakelijkheid` — BAV
- `/verzekeringen/cyber` — Cyber
- `/verzekeringen/aov` — AOV
- `/verzekeringen/rechtsbijstand` — Rechtsbijstand
- `/verzekeringen/ongevallen` — Ongevallen
- `/verzekeringen/zakelijke-spullen` — Zakelijke spullen
- `/verzekeringen/zakelijke-reis` — Zakelijke reisverzekering
- `/verzekeringen/orv` — ORV

### Beroepen (4)
- `/beroepen` — Overzicht
- `/beroepen/consultant`, `/it-specialist`, `/accountant`, `/projectmanager`

### Kennisbank
- `/kennisbank` — Overzicht
- `/kennisbank/avb-of-bav` — AVB vs BAV

## Licentie

Proprietary — Alicia / ZelfverzekerdZZP
