# thekarthik.io

The digital media kit for Karthik Thiramdas — traveller, filmmaker and
storyteller. Built as a fast, JSON-driven Next.js site with no CMS and no
database: every editable fact on the site lives in a plain JSON file in
`/data`.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS for styling, tokens defined in `tailwind.config.ts` and `app/globals.css`
- Framer Motion for the hero reveal and scroll-triggered stat counters
- Zero backend, zero auth, zero CMS — content is JSON, deploys are static

## Design system

- **Palette** — ink (`#0B0D0F`), paper (`#F4F0E6`), brass (`#B8945A`),
  oxblood (`#7A2A2E`), stone (`#8A8578`). Warm, editorial, restrained.
- **Type** — Fraunces (display serif) for headlines, Instrument Sans for
  body copy, IBM Plex Mono for the small uppercase "field labels" used
  throughout as data/caption typography.
- **Signature element** — the `BoardingStub` component. Every section on
  the site is framed as a leg of one continuous itinerary: a sequence
  number, a FROM field, and a TO field, styled like a boarding pass stub.
  It's the one motif repeated everywhere, tying the aviation subject
  matter directly into the site's own navigation and structure.

## Content: how to update the site every Sunday

All dynamic content lives in `/data/*.json`. To publish new content, edit
the relevant file, commit, and push — no code changes required.

| File | What it controls |
|---|---|
| `creator.json` | Name, titles, bio, brand story, mission, philosophy pillars |
| `hero.json` | Homepage hero headline, subtext, and CTA buttons |
| `stats.json` | Instagram stats: followers, views, reach, demographics, growth notes |
| `portfolio.json` | Selected-work photography grid on the homepage & portfolio page |
| `travel.json` | Destination films / travel portfolio page |
| `aviation.json` | Aviation portfolio page + list of airlines flown |
| `hotels.json` | Hotels portfolio grid on the portfolio page |
| `media-kit.json` | Everything on `/media-kit`: reasons brands partner, deliverables, workflow, packages, testimonials |
| `brands.json` | Brand collaboration category cards |
| `services.json` | "What I create" list |
| `faq.json` | FAQ accordion on the media kit page |
| `contact.json` | Email, WhatsApp, location, and the shared collaboration CTA copy |
| `socials.json` | Instagram/YouTube/LinkedIn — only platforms with a non-empty `url` render anywhere on the site |
| `videos.json` | Reel/video references (thumbnail + Instagram URL) |

### TODO — items marked but not yet filled in

These are wired up in the code and JSON so they'll appear automatically the moment you add the real value — no code changes needed:

- **`socials.json`** — `YouTube` and `LinkedIn` have empty `url` values. Fill in `handle` + `url` for each to make them appear in the footer, About page, and Contact page.
- **`contact.json`** — `whatsapp` is empty. Add your number in international format (e.g. `+919876543210`) to enable the WhatsApp link on the Contact page.
- **All photography** — every image slot across the site (`portfolio.json`, `travel.json`, `aviation.json`, `hotels.json`) currently renders as a labeled placeholder frame. `PlaceholderFrame` now accepts a `src` prop — pass the real `/images/...` path from the JSON and it renders via `next/image` (lazy-loaded, proper alt text) automatically, same frame and aspect ratio.

### Weekly workflow (~10 minutes)

1. Export Instagram insights and update the numbers in `stats.json`.
2. Add any newly visited destinations to `travel.json` (and drop the still
   into `/public/images/travel/`).
3. Add new airlines/hotels flown or reviewed to `aviation.json`.
4. Add new portfolio images to `portfolio.json` and `/public/images/portfolio/`.
5. `git add -A && git commit -m "weekly update" && git push`
6. Vercel deploys automatically on push to `main`.

## Images

Every JSON entry that references a photo (e.g. `"image": "/images/portfolio/sunrise-35000ft.jpg"`)
currently renders as an elegant placeholder frame (`components/PlaceholderFrame.tsx`)
so the site is fully navigable before real photography is in place. To swap
in a real photo:

1. Drop the file into `/public/images/<section>/<name>.jpg`.
2. Pass that path as the `src` prop on the corresponding `<PlaceholderFrame ... />`
   (e.g. `<PlaceholderFrame src={item.image} caption={item.caption} ... />`).
   It automatically switches to rendering the real photo via `next/image`
   (lazy-loaded, correct alt text) — same frame, same aspect ratio, no other
   changes needed.

## Deployment & SEO files

These are auto-detected by Next.js — no manual `<head>` wiring needed:

| File | Purpose |
|---|---|
| `app/icon.tsx` | Favicon (64×64), generated on-brand (ink bg, brass monogram) |
| `app/apple-icon.tsx` | iOS home-screen icon (180×180) |
| `app/opengraph-image.tsx` | Social share preview image, pulls name/title/location from `creator.json` |
| `app/manifest.ts` | Web app manifest (installable, theme color) |
| `app/sitemap.ts` | `/sitemap.xml` — lists all 7 routes |
| `app/robots.ts` | `/robots.txt` — allows all crawlers, points to the sitemap |

Every page also has a canonical URL and per-page Open Graph metadata. The homepage carries a `Person` JSON-LD schema built from `creator.json`, `contact.json`, and `socials.json`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Note: the first `npm run build` needs internet
access once to download the Google Fonts (Fraunces, Instrument Sans, IBM
Plex Mono) — this is normal for `next/font/google` and will work fine on
Vercel or any machine with a normal internet connection.

## Deployment

Push to a GitHub repo and import it into Vercel — zero configuration
required. Every push to `main` redeploys automatically.
