# Thoroughbred Exports — Product Requirements Document

## Original Problem Statement
Build a complete, production-ready **static website** for **Thoroughbred Exports**, a Thane-based merchant export firm. The site must be deployable to **Bluehost shared hosting** (no Node.js, no Python backend). Content is provided by the user; PDFs will be dropped manually into `/pdfs/` on the server. Inspiration: <https://www.paramountexport.net/>.

## User-Confirmed Choices
- **Routing:** BrowserRouter + `.htaccess` (clean URLs like `/services`)
- **Logo:** User-supplied wordmark (`/images/logo.png`) — horizontal black + gold treatment
- **Contact form:** Web3Forms integration (user provides access key)
- **Photography:** 28 optimized user photos already in `/public/images/img_1..28.jpg`; 2 additional banana photos added as `img_29.jpg` and `img_30.jpg`. Photos need not be used mandatorily — sensible placement encouraged.

## Pages Delivered
1. **Home (`/`)** — Hero with tagline "Harnessing Trade Opportunities with Precision.", authentic collage featuring branded export cartons + banana plantation + grapes, snapshot strip (Countries / Categories / LCL·FCL / Response time), four value pillars (Clear Communication · Great Quality · Right Price · Timely Deliverance), two-vertical services split, "That's all we do." CTA.
2. **Services (`/services`)** — Hero, Fresh Produce bento grid (6 categories, asymmetric spans), Ingredients & Additives bento grid, 5-step process on dark section, contact CTA.
3. **Licenses (`/licenses`)** — 6 certificate-styled cards (IEC, APEDA, FIEO, Spices Board, FSSAI, MSME) with gold accents.
4. **Catalogues (`/catalogues`)** — 4 downloadable documents (Fresh Produce, Spices & Ingredients, Company Profile, Season Circular). Placeholder PDFs generated for testing.
5. **Contact (`/contact`)** — Split layout, atmospheric image + full contact details on left, Web3Forms-powered enquiry form on right with success/error states.

## Design System
- Palette: cream `#F6F4EB`, sand `#EFECE1`, dark `#1A201C`, brand green `#264635`, terracotta `#C45A44`, saffron `#DFA73D`, gold `#B89645`.
- Type: **Cormorant Garamond** (serif) for headings + **Outfit** (sans) for body — via Google Fonts.
- Textures: subtle SVG grain overlays on light and dark sections.
- Motion: Framer Motion fade-up + hover scale transitions.
- Accessibility: kebab-case `data-testid` on every interactive element.

## Deployment
- Build via `yarn build` — output in `frontend/build/` includes `index.html`, `.htaccess`, hashed JS/CSS, favicon, `/images/`, `/pdfs/`.
- User uploads the **contents** of `build/` into Bluehost `public_html/` (or subdomain folder). Full guide: `/app/DEPLOYMENT.md`.
- Central content file: `/app/frontend/src/data/site.js` — all copy, contact details, pillars, produce lists, licenses, catalogues, Web3Forms access key live here.

## Backend
None. This is a fully static site.

## Implementation Status (Feb 2026)
- [x] Design system generated via `design_agent_full_stack` → `/app/design_guidelines.json`
- [x] Google Fonts + Tailwind theme (brand colors, serif/sans families, grain utility)
- [x] Reusable layout: Navbar (with user logo), Footer (massive brandmark), Layout wrapper
- [x] All 5 pages implemented with Framer Motion, Lucide icons, Shadcn-agnostic styling
- [x] Web3Forms contact form (graceful error when access key missing)
- [x] `.htaccess` for React Router deep-link support on Apache/Bluehost
- [x] Placeholder PDFs generated so the Catalogues page has real downloads until user swaps them
- [x] Production `yarn build` verified — 130 kB gzipped JS, 11 kB gzipped CSS
- [x] Favicon derived from the logo icon
- [x] Testing agent verification (see `/app/test_reports/`)

## Backlog (P1 / P2)
- P1 — User adds real Web3Forms access key to `site.js`
- P1 — User drops real PDFs into `/public/pdfs/` (filenames listed in `site.js`)
- P2 — Optional: dedicated About / Our Story page with founder bio
- P2 — Optional: Google Maps embed on Contact page
- P2 — Optional: currency-aware price sheets, seasonal availability calendar

## Reference Files
- `/app/frontend/src/App.js` — router
- `/app/frontend/src/data/site.js` — central content
- `/app/frontend/src/components/layout/{Navbar,Footer,Layout}.jsx`
- `/app/frontend/src/pages/{Home,Services,Licenses,Catalogues,Contact}.jsx`
- `/app/frontend/public/{index.html,.htaccess,favicon.png,images/logo.png,pdfs/}`
- `/app/DEPLOYMENT.md` — Bluehost upload guide
- `/app/design_guidelines.json` — design system source of truth
