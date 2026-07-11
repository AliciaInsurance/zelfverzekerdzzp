# ZelfverzekerdZZP

Moderne MVP-website voor zakelijke verzekeringen voor zzp'ers. Marketing- en SEO-platform dat bezoekers doorstuurt naar Alicia Direct.

**Belofte:** Slim verzekerd ondernemen. Zonder gedoe.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
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
npm run build
npm run start
```

## GitHub-publicatie

```bash
git init
git add .
git commit -m "Initial ZelfverzekerdZZP MVP"
git branch -M main
git remote add origin <GITHUB_REPOSITORY_URL>
git push -u origin main
```

## Deployen naar Vercel

1. Maak een GitHub-repository aan.
2. Push het project naar GitHub (zie hierboven).
3. Log in bij [Vercel](https://vercel.com).
4. Kies **Add New Project**.
5. Importeer de GitHub-repository.
6. Controleer dat Vercel Next.js herkent (geen extra build-configuratie nodig).
7. Voeg indien nodig toe:

   ```text
   NEXT_PUBLIC_SITE_URL=https://zelfverzekerdzzp.nl
   ```

8. Klik op **Deploy**.
9. Voeg daarna `zelfverzekerdzzp.nl` als custom domain toe.
10. Pas de DNS-records aan volgens de instructies van Vercel.

Elke push naar de `main`-branch activeert automatisch een nieuwe productiedeployment.

## Projectstructuur

```text
src/
  app/              # Next.js App Router pagina's
  components/       # Herbruikbare UI-componenten
  content/          # Hardcoded content (verzekeringen, beroepen, FAQ)
  lib/              # Utilities (metadata, UTM-links, JSON-LD)
public/             # Statische assets
```

## Environment variables

| Variable | Beschrijving | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL | `https://zelfverzekerdzzp.nl` |

## Pagina's

- `/` — Homepage
- `/verzekeringen` — Overzicht verzekeringen
- `/verzekeringen/avb` — AVB
- `/verzekeringen/beroepsaansprakelijkheid` — BAV
- `/verzekeringen/cyber` — Cyber
- `/beroepen` — Overzicht beroepen
- `/beroepen/consultant` — Consultant
- `/beroepen/it-specialist` — IT-specialist
- `/beroepen/accountant` — Accountant
- `/beroepen/projectmanager` — Projectmanager
- `/kennisbank` — Kennisbankoverzicht
- `/kennisbank/avb-of-bav` — Artikel AVB vs BAV
- `/over-ons` — Over ons
- `/disclaimer` — Disclaimer
- `/privacy` — Privacy

## Licentie

Proprietary — Alicia / ZelfverzekerdZZP
