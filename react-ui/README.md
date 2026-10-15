# React UI sandbox — Kriativa Essência

This is an isolated React + TypeScript + Vite workspace for testing reusable UI components. It does **not** replace the existing static storefront at the repository root.

## Run locally

Use Node.js 22.12+ (Vite 8 requirement), then run:

```bash
cd react-ui
npm install
npm run dev
```

Check TypeScript and build the app:

```bash
npm run typecheck
npm run build
npm run preview
```

## Component and style paths

- `components/ui/testimonials-columns-1.tsx`: reusable TestimonialsColumn component.
- `src/demo.tsx`: responsive demo and clearly marked sample content.
- `src/App.tsx` and `src/main.tsx`: React app entry.
- `src/index.css`: global Tailwind CSS v4 import and theme variables.
- `components.json`: shadcn CLI aliases and configuration.
- `lib/utils.ts`: shared `cn()` utility.

The alias `@/` maps to this workspace root, so imports such as `@/components/ui/testimonials-columns-1` resolve consistently. Keeping reusable primitives in `components/ui` matches the configured shadcn alias and makes future CLI-added components land in a predictable place.

To add another shadcn component after installing dependencies, use `npx shadcn@latest add button` from this folder. The provided demo texts and stock portraits are for layout testing only; do not present them as genuine customer testimonials.
