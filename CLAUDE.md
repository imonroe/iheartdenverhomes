# CLAUDE.md — iheartdenverhomes

This is the website for **Emily Chaney**, Denver real estate agent at MHM Homes. The site is migrating from WordPress to a Next.js app deployable via GitHub.

## Git workflow

- All work goes on **`emilys-branch`** — commit and push there, never directly to `main`.
- Use descriptive commit messages.

## Tech stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript 5
- **Styling:** Single global stylesheet (`app/globals.css`) using CSS custom properties — no Tailwind, no CSS modules
- **Fonts:** Inter (sans-serif) + Cormorant Garamond (serif), loaded via `next/font/google`
- **Deployment:** Docker (multi-stage, Node 20 Alpine) + CapRover (`captain-definition` config)
- `next.config.ts` sets `output: "standalone"` for the Docker build

## Project structure

```
app/                  # Next.js App Router pages
  page.tsx            # Home
  layout.tsx          # Root layout (Nav + Footer wrapped around every page)
  globals.css         # All shared styles
  about/
  before-after/
  buyers/
  contact/
  listings/
  neighborhoods/
  northwest-denver-guide/
  sellers/
  the-looks/
components/
  Nav.tsx             # Fixed top nav, client component (uses usePathname)
  Footer.tsx          # Site footer
public/               # Static assets served by Next.js (images live here)
img/                  # Original image files (source copies, not served directly)
html/                 # Original HTML design mockups — reference only, not served
```

## Design system

All colors are defined as CSS variables in `globals.css`:

| Variable   | Value     | Usage                  |
|------------|-----------|------------------------|
| `--red`    | `#a70d2a` | Primary accent, CTAs   |
| `--cream`  | `#FAF7F3` | Alt section backgrounds |
| `--sand`   | `#EDE8DF` | Borders, subtle fills  |
| `--dark`   | `#1A1A1A` | Body text, dark sections |
| `--mid`    | `#5A5A5A` | Secondary text         |
| `--light`  | `#8A8A8A` | Tertiary / labels      |
| `--gold`   | `#C17C74` | Eyebrow labels, stars  |

Typography: `Cormorant Garamond` for headings/display (`.serif` class), `Inter` for body. Headings default to `font-weight: 300` (light).

Button classes: `.btn-primary`, `.btn-secondary`, `.btn-outline`

Section layout classes: `.section`, `.section-alt`, `.section-header`, `.page-hero`, `.section-eyebrow`, `.section-title`, `.section-subtitle`

## Key content details

- **Agent:** Emily Chaney, 20+ years Denver market experience, brokerage: MHM Homes
- **Instagram:** @emheartsdenver
- **Focus areas:** Buyers, sellers, Denver neighborhoods (Cherry Creek, Wash Park, LoHi, Highlands, Congress Park, RiNo, Northwest Denver)
- The `html/` directory contains the original design mockups — useful as reference when adding new sections or pages

## Common commands

```bash
npm run dev      # Local dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint check
```
