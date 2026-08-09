# Build Progress — thekarthik.io Redesign

Tracks status against the approved Phase 0 blueprint and build sequence. Update this as each page ships.

## Design system — done

- `components/Folio.tsx` — universal section index/eyebrow, replaces the boarding-pass device everywhere except Aviation.
- `components/AviationStub.tsx` — the boarding-pass "FROM → TO" device, preserved and scoped to the future Aviation industry page only. `BoardingStub.tsx` is still present and used by not-yet-rebuilt pages (Contact, Media Kit content sections, PhilosophyGrid) — migrate those to `Folio`/`AviationStub` as each page gets its dedicated rebuild pass, then delete `BoardingStub.tsx`.
- `components/Frame.tsx` — evolved `PlaceholderFrame`: three fixed ratios (`cinematic` 21:9, `portrait` 4:5, `square` 1:1, plus `full` for hero bleeds), renders real photos via `next/image` when `src` is given, otherwise a considered dark "study" placeholder — never a plain empty box. `PlaceholderFrame.tsx` still exists and is still used by not-yet-rebuilt pages; retire it the same way.
- `components/Statement.tsx` — the shared declarative headline block, italic reserved for one emphasis line only.
- `components/SpecRow.tsx` — label/value rows for stats, specs, packages. Not yet wired into any page — first real use will be Studio (gear specs) and Media Kit (stats refresh).
- `components/CollabMarquee.tsx` — quiet wordmark row, first used in `IndustriesTeaser`.
- `data/nav.json` — new six-item IA (Work, Industries, Studio, Journal, Media Kit, Contact).
- `data/industries.json` — full Travel / Technology / Travel Gear / Lifestyle category breadth, plus a clearly separate `collaborations` array (Giri Mane Homestay, TripStay Goa) so categories-we-serve is never conflated with clients-we've-had.
- Real photography copied into `public/images/real/`: `wing-sunset.jpeg` (used, Hero), `tarmac-aircraft.jpeg` (used, Work preview), `cabin-tray.jpeg` (used, Work preview), `portrait-camera.jpeg` (used, Brand Story), `portrait-forest.jpeg` (copied, not yet used — earmarked for the Studio hero per the blueprint).
- `app/globals.css` — `.field-label` no longer defaults to brass (that's reserved for the new `.folio-index` class and explicit CTA/stat emphasis), named section-rhythm utilities (`section-y`, `section-y-lg`) added.
- Old routes removed: `/about`, `/travel`, `/aviation`, `/portfolio` (content will resurface inside `/studio`, `/industries`, `/work` in their scheduled passes). `sitemap.ts` updated to the new IA.

## Home — done, production-ready pending your review

Five sections, folio-numbered 01–05: Hero (trailer, real wing-sunset photo, "Travel is the stage. Stories are the product.") → Brand Story (one-creator positioning, real portrait) → Work preview (2 real aviation photos + 1 honest unphotographed study for Hotels) → Industries teaser (compact, links out) → Collaboration CTA. Verified with a clean `tsc --noEmit` pass.

**Known sandbox limitation, not a site issue:** this environment can't reach `fonts.googleapis.com`, so I can't produce a `next build` or a visual screenshot here — the code compiles and type-checks cleanly, and `next/font/google` will resolve normally the moment it's run anywhere with normal internet access (your machine, Vercel, etc.). Worth your own visual pass on `npm run dev` before we call Home fully signed off.

## Studio — done, production-ready pending your review

Built as the director's statement in the exact order specified: Who I Am → How I Think → How I Approach Storytelling → How I Work → Gear → What's In My Bag → Behind the Work → CTA, folio-numbered 01–08 (Hero uses "—" since it's the page's own opening, not a numbered section).

- **Hero** uses the real `portrait-forest.jpeg`, mirrored layout from Home's Hero (image/text sides swapped) so the two pages read as the same publication rather than two templates.
- **Who I Am** is text-only and deliberately goes deeper than Home's Brand Story — states plainly that this is one person, not a team, and that "studio" describes a standard of craft, not a company.
- **How I Think** reuses `PhilosophyGrid`, now migrated fully onto `Folio`/`Statement` (no more `BoardingStub` inside it) — first real proof the shared component library holds up under reuse.
- **How I Work** is the first real use of `SpecRow`, as a six-stage workflow list.
- **Gear** is fully data-driven from `data/studio.json`: Camera and Editing & Post show the two confirmed tools you'd told me about previously (Samsung Galaxy S24 Ultra; Adobe Premiere Pro + Epidemic Sound). "Additional Kit" has zero items and renders through the new `PendingSlot` component — a dashed, clearly-labeled "not yet confirmed" state, never an invented item.
- **What's In My Bag** is entirely empty and renders the same honest `PendingSlot` state, with a note that it's a real opportunity for gear/luggage partners once a packing list is confirmed.
- **Behind the Work** uses three `Frame` "study" placeholders (on-location, at-the-cut, color-and-sound) since no dedicated BTS photography exists yet — labeled honestly rather than filled with a reused photo.
- **CTA** reuses `CollabCTA`, now extended with optional props so each page can point it at different links (Studio's points to Work + Contact, not Media Kit) without forking the component.

**Consistency check against Home:** same Folio numbering convention, same Statement/Frame/SpecRow components, same section-y rhythm, same restrained brass (only the folio index and CTA carry it), zero boarding-pass motif. Reads as the same publication, not a separate template. `tsc --noEmit` clean.

## Work — done, production-ready pending your review

Built as an editorial filmography, not a portfolio grid — three sections, folio-numbered 01–03, plus CTA at 04:

- **01 — Breadth** — all six categories you named (Aviation, Hospitality, Destinations, Technology, Travel Gear, Lifestyle), each honestly tagged with a status dot: brass for Completed Work (Aviation), oxblood for Live Collaboration (Hospitality, Destinations — pointing at the real collaborations), stone for Open Category (Technology, Travel Gear, Lifestyle — stated plainly as not yet a completed collaboration, not padded with invented portfolio pieces).
- **02 — Selected Work** — the three real aviation photographs (`wing-sunset`, `tarmac-aircraft`, `cabin-tray`), now living in their proper canonical home rather than only appearing as Home teasers.
- **03 — Collaborations** — Giri Mane Homestay and TripStay Goa as the two real, named collaborations, each linking to a full case study. Visually and structurally separate from the Breadth categories above, so "industries I work across" is never confused with "clients I've had."

**Case studies** (`/work/case-studies/tripstay-goa`, `/work/case-studies/giri-mane-homestay`) — built on one shared `CaseStudy.tsx` template so both read as the same editorial voice, following the approved hierarchy: Hero → Brief → Creative Direction → Story → Production → Deliverables → Final Work → Testimonial → Closing Frame → Next Case Study / Contact.

- **TripStay Goa** is substantive and real throughout — the confirmed monsoon-season, solo-documentary production (production bible, screenplay, field deck, film) you'd described previously. Only Final Work (photography/film) and Testimonial are marked pending, since those genuinely don't exist yet.
- **Giri Mane Homestay** is honestly thinner — Brief and Creative Direction have real, general copy; Story, Production, Deliverables, Final Work and Testimonial all render through `PendingSlot` rather than inventing specifics I don't have.
- Both close on your real signature line, "This is Karthik," as the Closing Frame — the one moment on the page allowed to feel purely cinematic rather than informational.
- `CaseStudy.tsx` is fully data-driven (`data/case-studies/*.json`), so filling in the pending sections later is a data edit, not a rebuild.

`tsc --noEmit` clean across the whole project, including the new nested routes. Sitemap updated with `/work` and both case study URLs.

## Industries — done, production-ready pending your review

Built around the four explicitly separated buckets requested, folio-numbered 01–04 plus CTA at 05:

- **01 — Industries I Work Across**: all four category groups (Travel, Technology, Travel Gear, Lifestyle) with their full sub-item lists and, per category, an honest "what I can create" tag row (Films, Photography, Product Cinematics, Destination Storytelling, Social Campaigns, UGC, Commercial Reels, Hotel & Property Content) — the page's actual persuasive engine, since it argues from creative capability rather than a client-logo wall. No logos, no implied brand relationships anywhere in this section.
- **Aviation spotlight** — a distinct ink-toned inset inside section 01, the one place on this page (and the whole site outside `/work`'s implicit aviation content) that intentionally uses `AviationStub`, per your instruction. Everything else on the page — every other category, Completed Work, Collaborations, Open Categories — uses only `Folio`/`Statement`/`Frame`.
- **02 — Completed Work**: the same three real aviation photographs, presented here specifically as evidence, with a direct link out to the fuller `/work` page rather than a duplicate portfolio.
- **03 — Collaborations**: Giri Mane Homestay and TripStay Goa again, visually separated from section 01 by its own Folio index and a full section break — never conflated with "categories I work across."
- **04 — Open Categories**: Technology, Travel Gear and Lifestyle called out explicitly and honestly as not-yet-proven, stone-dot badges matching the same status language established on `/work`.

`tsc --noEmit` clean. `data/industries.json` fully restructured to support all four sections; `IndustriesTeaser.tsx` (Home) repointed at the new `hero.teaser` field rather than a top-level `intro` that no longer exists.

## Media Kit — done, production-ready pending your review

Fully rebuilt, not refined — the old page was twelve `BoardingStub` sections built around aviation-first copy and a `brands.json` "examples" list that named Emirates, Marriott, Samsung and DJI under category headers in a way that read as an implied client list. Both problems are fixed.

Rebuilt around your exact 12-part structure, folio-numbered 01–12:

1. **Positioning** — "One creator. Six industries. One standard," explicitly naming travel, aviation, hospitality, technology, travel gear and lifestyle rather than defining the brand by aviation alone.
2. **About Karthik** — condensed, links out to the full Studio page rather than duplicating it.
3. **Audience** — `StatStrip` rebuilt from scratch onto `Folio`/`Statement`/`SpecRow` (previously used `BoardingStub` and the old `stub-edge` styling). Now carries an explicit "As of June 2026" context tag next to the Folio, plus a second, unmissable line under the numbers: *"Figures reflect platform analytics as of June 2026 — not a live feed."*
4. **Performance** — same real numbers (568K+ top Reel views, 85.9% non-follower views, etc.), now on `SpecRow`, with the same explicit date tag and the existing honesty note about every figure coming from platform analytics.
5. **Content Capabilities** — the same eight capabilities used on Industries (Films, Photography, Product Cinematics, Destination Storytelling, Social Campaigns, UGC, Commercial Reels, Hotel & Property Content), kept identical across pages on purpose.
6. **Industries** — summary only, explicitly no named brands, linking out to the full `/industries` page for depth.
7. **Selected Work** — the same three real aviation photographs, pulled directly from `data/work.json` (single source of truth, not re-authored here).
8. **Collaborations** — Giri Mane Homestay and TripStay Goa, also pulled directly from `data/work.json`.
9. **Services & Deliverables** — merged into one section per your structure.
10. **Testimonials** — `PendingSlot`, explicitly promising real Giri Mane/TripStay Goa quotes once received, not invented names or quotes.
11. **Partnership Opportunities** — four generic tier structures, all "Pricing on request," no fabricated numbers.
12. **Contact** — `CollabCTA`.

`brands.json`, the old `services.json`, and `faq.json` are no longer imported by this page (their content is now folded into `media-kit.json` directly, and `brands.json` specifically is retired since it was the source of the implied-client problem). All three files are left on disk, unused, rather than deleted — safe to remove later or repurpose for Contact's FAQ. `tsc --noEmit` clean.

## Contact — done, production-ready pending your review

Rebuilt onto the current system, folio-numbered 01–02 plus CTA at 03. `BoardingStub` and `PlaceholderFrame` are no longer referenced anywhere in `app/` or `components/` — both files are still on disk, unused, for the same reason `brands.json`/`services.json` were left rather than deleted.

- **Hero** (`PageHero`) — "Direct Line" context replaces the old "Enquiry to Itinerary" boarding-pass framing; headline is now "Have a story worth telling?", matching the brief's suggested primary idea.
- **01 — Get In Touch** — the same real contact fields as before (email, active socials from `socials.json`, WhatsApp if set, location), now paired with a `Frame` "study" placeholder instead of `BoardingStub` + `PlaceholderFrame`. No dedicated Contact photography exists, so it stays honestly unphotographed rather than reusing another page's hero image out of context.
- **02 — FAQ** — first real use of `FaqAccordion`, which existed in the component library but had never been wired into a page. Reuses `data/faq.json` as-is (content was already honest and not aviation-specific — campaign turnaround, whitelisting/boosting, ambassador roles).
- **CTA** — `CollabCTA` reusing `contact.cta`, pointed at Media Kit ("View Partnership Packages"), unchanged from before.
- `data/contact.json` restructured: added `hero`, `direct`, and `faq` objects; removed the old flat `headline` field. **Fixed a break this caused in `Footer.tsx`**, which read `contact.headline` directly — repointed to `contact.hero.title`.
- `tsc --noEmit`: no new errors introduced. (Sandbox still can't install `node_modules` — no network — so `tsc` reports the same class of `next`/`next/font/google` "Cannot find module" and JSX-intrinsics errors it reported for every prior page in this environment; those are pre-existing and unrelated to this change. Filtering them out, the only remaining errors are pre-existing ones in `industries/page.tsx`, `media-kit/page.tsx`, `work/page.tsx`, `PortfolioPreview.tsx`, `Nav.tsx` and `layout.tsx` — none touched by this pass.)

## Journal — done (architecture + empty state; no real articles yet, as instructed)

New route pair: `/journal` (index) and `/journal/[slug]` (article template), folio-numbered 01–02 plus CTA at 03 on the index.

- `data/journal.json` — hero copy, the seven categories named in the brief (Travel, Aviation, Photography, Technology, Travel Gear, Behind the Scenes, Creative Process) as honest "what to expect" tags (not fake article cards), an empty `articles: []`, a documented `_articleSchema` field describing exactly what a real entry needs (`slug`, `category`, `title`, `excerpt`, `publishedAt`, optional `coverImage`, `body: string[]`), and a CTA pointed at Contact.
- `lib/data.ts` — added `getJournal()`, `getJournalArticles()`, `getJournalArticle(slug)` and an exported `JournalArticle` type, following the same pattern as `getCaseStudies()`/`getCaseStudy()`.
- **`/journal`** — 01 renders the seven categories as chips (same visual language as Industries' "Open Categories"). 02 renders the articles grid *if* `articles.length > 0`, otherwise a single centered `PendingSlot`: "First Story Publishing Soon" — the "elegant intentional empty state" the brief asked for, not an invented article.
- **`/journal/[slug]`** — a real shared template (`PageHero` → `Frame` → body paragraphs → back-link → `CollabCTA`), fully data-driven off `JournalArticle`. `generateStaticParams()` reads off `getJournalArticles()`, which is currently empty, so the route builds with zero static article pages and returns a proper Next.js `notFound()` for any slug — nothing to QA-break later, and adding a real story is a pure data edit in `journal.json`, no component work.
- No articles were invented anywhere in this pass, per the brief.
- `tsc --noEmit`: no new errors. (One real bug caught and fixed here: TypeScript couldn't narrow `article` past `notFound()` without a following `return null;`, since `notFound()`'s `never` return type isn't visible to a `next/navigation` import that can't resolve in this sandbox's dependency-less environment — added the explicit `return null` as a safe, environment-independent guard either way.)

## Final QA — done

A full top-to-bottom sweep across the whole project (section 12 of the brief), not just the incremental per-page checks from earlier passes. Everything below was independently verified by reading the actual files, not assumed from prior notes.

**Real bugs found and fixed:**
- `app/manifest.ts` — PWA description read "Travel creator and aviation storyteller," directly contradicting the brief's core positioning rule. Rewritten to name the real breadth (aviation, hospitality, technology, lifestyle).
- `app/opengraph-image.tsx` — the social-share image (what renders when the site link is pasted into iMessage/LinkedIn/Slack) had the eyebrow line "TRAVEL · AVIATION · STORYTELLING" — two real category words plus filler. Changed to "TRAVEL · AVIATION · TECHNOLOGY · LIFESTYLE" and reduced the font size slightly so the longer line still fits the 1200px canvas (unverifiable by render in this sandbox, sized conservatively).
- **Date-formatting inconsistency on Media Kit**: section 03 (Audience, via `StatStrip`) correctly rendered "As of June 2026," but section 04 (Performance, written directly in `media-kit/page.tsx`) rendered the raw unformatted string as "As of 2026-06" — same page, two different date formats for what's supposed to be one consistent disclosure. Extracted the formatting logic out of `StatStrip.tsx` into a shared `lib/format.ts` (`formatAsOf`) and pointed both call sites at it, so this can't drift again.
- **Framer Motion doesn't respect `prefers-reduced-motion` by default.** `globals.css` already had a reduced-motion block, but it only overrides CSS transitions/animations — `Hero.tsx` and `StudioHero.tsx` animate via Framer Motion's own JS/WAAPI engine, which that CSS block can't reach. Wrapped `{children}` in the root layout with `<MotionConfig reducedMotion="user">`, which makes every `motion.*` component site-wide respect the OS-level setting in one change.
- **Mobile**: Industries' Aviation Spotlight 3-image grid used a bare `grid-cols-3` with no breakpoint — every other 3-image grid on the site uses `md:grid-cols-3`. Kept it 3-across on mobile as an intentional tight triptych (a genuine design call, not an oversight, given its context inside a dark inset panel) but reduced the gap on small screens so it's not cramped.
- Missing `app/not-found.tsx` — Next was falling back to its generic default 404. Added an on-brand one built from `Folio`/`Statement`, matching every other page's system.

**Confirmed clean (verified, not assumed):**
- Read every remaining data file in full — `media-kit.json`, `work.json`, `industries.json`, `studio.json`, `stats.json`, both case-study JSONs — line by line against the brief's content rules. No fabricated clients, testimonials, results, or metrics anywhere; every pending section genuinely renders `PendingSlot`, not invented copy; `stats.json`'s numbers match exactly what the brief specified and are correctly dated.
- All internal `href`/`Link` targets across `app/`, `components/`, and `data/` resolve to real routes.
- All image paths actually rendered by live components point to real files in `public/images/real/`.
- Metadata (title/description/canonical/OG/twitter) present and correct on every route, including the dynamic `/journal/[slug]`.
- No `console.log`/`debugger`/`TODO` leftovers anywhere in `app/`, `components/`, or `lib/`.
- Nav's mobile menu already had proper focus handling, `inert`, Escape-to-close, and scroll lock — no changes needed.
- No missing `alt` text on any rendered image.
- `tsc --noEmit`: 10 errors remaining, all pre-existing and none touched by this session — every one is either the sandbox's inability to resolve `next`/`next/font/google` (no network here, so no `node_modules`), or a `key`-prop/React-namespace false positive that only appears without real `@types/react` installed. None are in files this session modified.

**Cleanup completed:**
- Deleted `components/BoardingStub.tsx` and `components/PlaceholderFrame.tsx` — confirmed zero references anywhere after Contact's rebuild (Contact was the last consumer of both, per the original component-migration note).
- Removed dead imports/exports from `lib/data.ts`: `getTravel`, `getAviation`, `getHotels`, `getVideos`, `getBrands`, `getServices`, `getSocials` — all confirmed to have zero live consumers. Their backing JSON files (`travel.json`, `aviation.json`, `hotels.json`, `videos.json`, `brands.json`, `services.json`) referenced image paths that don't exist on disk (e.g. `/images/aviation/runway-golden-hour.jpg`) — harmless since nothing rendered them, but worth knowing they were never wired up. Left the JSON files themselves on disk, untouched, in case you want to reuse the copy or data shape later — genuinely your call, not something to guess at.
- `AnimatedNumber.tsx` remains unused — it's part of the original approved component list but was never wired into a real section (Media Kit's stats render as static text via `SpecRow`, not this component). Not fixed, because retrofitting it would mean restructuring `stats.json`'s string-valued numbers like `"568K+"`/`"85.9%"` into number+suffix pairs — a real content-shape change to an already-signed-off page, which the brief's rule against redesigning completed pages without a clear reason argues against. Flagging it here as a legitimate, deliberate non-fix rather than an oversight.

**What a real build/visual pass still needs (can't be done in this sandbox):**
This sandbox has no network egress, so `npm install` fails on every run (`403` from `registry.npmjs.org`) and always has, across every session on this project — meaning no `next dev`, no `next build`, no visual screenshot has been possible here at any point, Home included. Everything in this and prior sessions has been verified through direct reading of every file, `tsc --noEmit` against the existing `tsconfig.json`, and systematic grep-based link/reference/content audits — not a substitute for an actual rendered pass. Needs `npm install && npm run build` on your machine or in CI before shipping.

## Not yet built

Nothing. Contact, Journal, and Final QA — the three items left after the last session — are complete. What remains is the build/visual verification above (environment-blocked here) and the content still needed from you, listed below.


## Content still needed from you

- Real testimonial quotes for Giri Mane Homestay and TripStay Goa.
- Any additional Goa-shoot photography/stills for the TripStay Goa case study.
- Confirmation `stats.json` numbers are current before they go on a rebuilt Media Kit.
- A real gear/backpack list for the Studio page.
- A WhatsApp number, if you want that contact channel live (currently blank/hidden by design in `contact.json`).
- A first real Journal article whenever one's ready — `journal.json`'s `_articleSchema` field documents the exact shape needed; no code changes required to publish it.

## Final brand terminology pass

Final brand terminology pass completed — identity changed from Photographer-led wording to Traveller · Filmmaker · Storyteller. Photography retained only where it describes a capability, service, deliverable or format.

No IA, design system, or page redesign was performed — this was a copy/metadata-only pass across `app/layout.tsx`, `app/manifest.ts`, `data/creator.json`, `data/hero.json`, `data/studio.json`, `data/media-kit.json`, and `README.md`. Every other "photography" reference sitewide (Industries capability tags, Journal categories, Media Kit service list, case study labels, Frame/PendingSlot component copy) was inspected and confirmed to already describe a deliverable/format rather than identity, so it was left untouched. `npm install`/`tsc` still can't run to completion in this sandbox (no network egress, as noted above), so this pass was verified by direct file inspection and exhaustive grep audits rather than a full type-check.

## Content + Collaboration + Gear + Analytics Update Pass (this session)

This was a content/data update pass only — no redesign, no IA change, no new page architecture. Scope: real collaborations (TripStay Goa, Giri Mane Homestay), confirmed gear, and the latest Instagram Insights.

**Real photography added:**
- Sourced and matched 11 uploaded property photos to the two collaborations by content and shoot date — Goa apartment/pool complex, shot Aug 1–2 2026 in monsoon conditions → TripStay Goa; red-brick veranda homestay in tea/coffee plantation country, shot late May 2026 → Giri Mane Homestay.
- Resized/optimized 10 of these (max 2000px edge, JPEG q82) into `public/images/hotels/tripstay-goa/` and `public/images/hotels/giri-mane-homestay/` — no AI-generated or stock imagery used anywhere.
- Wired real images into: Work page collaboration cards, Media Kit collaboration cards, both case-study heroes, both case-study Final Work sections, and the Home page's previously-null "Hospitality" portfolio preview slot.

**Case studies (`data/case-studies/*.json`):**
- Rewrote both files' brief/direction/story/production/deliverables using only what your document explicitly listed as *delivered* (not the full requested-deliverables list, which is broader than what was confirmed shipped). Deliverable counts (e.g. "10–15 photos") were deliberately **not** carried over, since only the brief specified those counts as requested — not confirmed-delivered quantities.
- Giri Mane's story/production/deliverables sections moved from `pending` to real copy; TripStay's already had real copy, updated for accuracy.
- Testimonial sections on both kept as `PendingSlot` — no quote fabricated for either.
- `status` on both changed from "Documentary Production"/"Documentation Collaboration" to "Completed Collaboration", matching `work.json`.

**Component change (necessary, minimal):** `CaseStudy.tsx`'s Final Work section previously had no way to render real photography — only a pending-state. Added a `finalWork.images` array + rendering branch (reuses the existing `Frame` component/ratio system, `oxblood` tone, same grid pattern used elsewhere on the page). No visual language, typography, or other architecture touched.

**Gear (`data/studio.json`):** Populated the previously-empty "Additional Kit" category and empty travel-bag list with your exact confirmed list — Galaxy S24 Ultra 512GB, Galaxy S10+ 1TB, DJI Mic Mini, DJI Osmo Mobile 6, Syvo S11, Ulanzi TT31, Ulanzi VL49, Softbox, Fill Light, Practical Lights, SanDisk 2TB SSD. Nothing invented beyond this list. Kept "What's In My Bag" as one honest kit list (per your instructions) rather than splitting Creator/Everyday, since that split isn't factually established.

**Analytics (`data/stats.json`):** Fully replaced with the 90-day window ending 7 Aug 2026, verified against your QuickShare screenshots directly (not just the doc text) — 3,665 followers, 227,522 views, 18,417 interactions, +80 net followers, 76.3% non-follower views, full age/gender split, top countries/cities.
- **Correction against your doc:** your written brief said "Chandigarh" as a top city; the actual screenshot shows **"Chanda Nagar"** at 10.5% — used the screenshot as source of truth per your own instruction.
- Removed every trace of the old June 2026 figures (3,596 followers, 66,745/121,731 views, 568K top-reel) from `stats.json` and the unused `videos.json`.
- Media Kit gained a new "Audience Demographics & Geography" section (index 05) — didn't exist before, so this was a necessary addition, not a redesign. Folio indices 06–13 renumbered downstream to stay sequential; verified every literal and JSON-driven index across the page now reads 01→13 with no gaps or dupes.

**Validation performed:**
- All 21 JSON files parse cleanly (`json.load` sweep).
- Grep sweep confirms zero remaining references to old analytics figures, old status labels, or "Photographer" identity anywhere in `data/` or `app/`.
- Every image path referenced by `work.json`, `portfolio.json`, and both case-study JSONs resolves to a real file on disk — checked programmatically, not by eye.
- All internal hrefs (`/work/case-studies/tripstay-goa`, `/work/case-studies/giri-mane-homestay`, nav, media-kit links) resolve to real existing routes.
- Instagram profile URL preserved unchanged everywhere it appears.
- **Could not run `npm install` / `next build` / `tsc` against the real project types** — this sandbox has no network egress (confirmed: `npm install` fails with `403` from `registry.npmjs.org`), so no `node_modules` could be fetched. Verified correctness manually instead: structural JSON-shape comparison against `CaseStudy.tsx`'s existing TypeScript types, and full read-through of every changed file. This is not a substitute for an actual `npm run build` — that still needs to run in your environment or CI before shipping.

## Content still needed from you (updated)

- Real testimonial quotes for TripStay Goa and Giri Mane Homestay (both intentionally left as `PendingSlot`).
- The exact Instagram URLs for the TripStay Goa reel and the two Giri Mane reels (static + talking/cinematic) — your brief referenced these but no URLs were present anywhere in the uploaded files, so none were added or invented.
- Any additional/better property photography if the 10 images used here aren't your final picks — happy to re-crop or swap.
- A real gear/backpack split (Creator Kit vs. Everyday Travel Bag) if you want that distinction — currently one combined list per your own fallback instruction.
- Run `npm install && npm run build` in an environment with registry access to confirm a clean TypeScript build before deploying.

## Content Accuracy + Visual Fixes Pass (this session)

Targeted corrections only — no redesign, no IA change, no changes to Folio/Statement/Frame, typography, colors, or navigation.

**1. Industries collaboration cover images (bug fix):** `/industries`'s Collaborations section was rendering `<Frame ... />` with no `src` prop at all — the two cards had never had real images, just the empty "study" placeholder state. Added an `image` field to both entries in `data/industries.json` (TripStay Goa → `infinity-pool-monsoon.jpg`; Giri Mane → `homestay-exterior-day.jpg`) and wired `src={collab.image}` into `app/industries/page.tsx`. Both link to the existing `/work/case-studies/...` routes already defined in the same data file — no hardcoded/duplicate links added.

**2–3. TripStay video-deliverable wording corrected:** `data/case-studies/tripstay-goa.json` previously had `"Video Format": "4K, vertical, LOG"` and a deliverables line reading "Raw 4K video clips" — both implied vertical-only. Corrected to `"4K, LOG — vertical & horizontal"` and `"15–20 raw video clips, captured in LOG, including both vertical and horizontal footage"`. Searched the entire project for `vertical`, `LOG`, `raw video`, `raw footage`, `15–20` — no other TripStay-related instance existed anywhere (only unrelated CSS comments about layout "vertical rhythm").

**4–5. Reduced photo repetition within each case study:** TripStay and Giri Mane's Final Work sections previously repeated the exact same file already used as the page's hero image. Swapped Final Work to use the portrait-crop variants of the other two/three real photos already on disk (no new assets created) so the hero and Final Work no longer show an identical file back-to-back on the same page.

**6. Collaboration status consistency:** Confirmed `work.json`'s `collaborations.items` (rendered on Work, Media Kit, and now Industries) already read "Completed Collaboration" for both. Also corrected a stale "Destinations" category note in `work.json`'s breadth section that still described the TripStay work as a "full monsoon-season documentary production" — updated to match the accurate collaboration description used everywhere else.

**Files changed:** `data/industries.json`, `data/case-studies/tripstay-goa.json`, `data/case-studies/giri-mane-homestay.json`, `data/work.json`, `app/industries/page.tsx`.

**Validation:** all 21 JSON files parse; every image path referenced by `work.json`, `portfolio.json`, `industries.json`, and both case-study JSONs resolves to a real file on disk (checked programmatically); project-wide grep confirms no remaining "vertical-only" implication for TripStay. `npm install`/`tsc`/`next build` still can't run in this sandbox (no network egress — confirmed again this session) — verified by direct file read and structural comparison against `CaseStudy.tsx`'s existing TypeScript types instead. Still needs a real `npm install && npm run build` before shipping.
