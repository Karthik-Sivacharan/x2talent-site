# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# X2Talent Landing Page

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Animation:** Three.js (X particle cloud), GSAP + ScrollTrigger (scroll reveals, parallax, marquee)
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Deployment:** Vercel

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Design Principles
- **Beauty-first** — every pixel matters
- **Real content** — no placeholder text
- **Brand consistency** — use design tokens (`--clay`, `--bg`, `--acid`, etc.)

## Project Structure
```
src/
  app/              # Next.js routes & global styles
  components/       # React components
    ui/             # shadcn/ui primitives
  lib/utils.ts      # cn() utility (shadcn)
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks (GSAP interactions)
public/
  images/           # Static images
  seo/              # Favicons, OG images
docs/
  research/         # Animation research & design references
```

## Key Components
- `hero-section.tsx` — Hero with X particle cloud animation
- `x-particle-cloud.tsx` — Three.js WebGL particle cloud forming an "X" shape
- `canvas-background.tsx` — Wavy wireframe background (currently hidden)
- `use-gsap-interactions.ts` — GSAP scroll animations, parallax, marquee
- `loader.tsx` — Page loader with GSAP progress animation

## Important Notes
- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end.
