# X2Talent

High-craft design recruiting. Live at **https://x2talent.vercel.app**

## Setup

```bash
git clone https://github.com/Karthik-Sivacharan/x2talent-site.git
cd x2talent-site
npm install
npm run dev
```

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui + Tailwind CSS v4
- **Animation:** Three.js (particle cloud), GSAP + ScrollTrigger
- **Deployment:** Vercel (auto-deploys on push to `master`)

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint check |
| `npm run typecheck` | TypeScript check |
| `npm run check` | Lint + typecheck + build |

## Project Structure

```
src/
  app/              # Next.js routes & global styles
  components/       # React components
    ui/             # shadcn/ui primitives
  lib/utils.ts      # cn() utility
  hooks/            # Custom React hooks (GSAP interactions)
  types/            # TypeScript interfaces
public/
  images/           # Static images
  seo/              # Favicons, OG images
docs/
  research/         # Animation research & design references
```

## AI Agent Usage

This repo includes `CLAUDE.md` and `AGENTS.md` for use with [Claude Code](https://docs.anthropic.com/en/docs/claude-code). Just open the project and start working — the agent instructions are picked up automatically.

```bash
claude
```

## Code Style

- TypeScript strict, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, mobile-first responsive
- 2-space indentation
