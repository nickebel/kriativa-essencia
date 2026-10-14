# React testimonials component (isolated demo)

This folder is a standalone Vite + React + TypeScript demo. It is kept separate from the current public Kriativa Essência site, which is still served as static HTML from the repository root.

## Run locally

Requires Node.js 20.19+.

```bash
cd react-app
npm install
npm run dev
```

Create a production build with `npm run build`; preview it with `npm run preview`.

## Structure

- `src/components/ui/testimonials-columns-1.tsx`: reusable animated column component.
- `src/App.tsx`: example layout and sample data.
- `src/index.css`: Tailwind CSS v4 import and shadcn-style CSS tokens.
- `components.json`: shadcn/ui CLI configuration.
- `vite.config.ts` and the TypeScript configs: Vite, TypeScript, and the `@/*` alias.

### Why `src/components/ui`?

This is the conventional shadcn/ui component directory for a Vite app whose `@/*` alias points to `src/*). The alias and `components.json` both map `@/components/ui` to this folder, so imports and future components added by the shadcn CLI stay consistent.

The provided component did not compile as written because its prop type referenced a `testimonials` variable that only existed in the demo file. This implementation uses a standalone `Testimonial` type, handles reduced-motion preferences, and uses Unsplash image URLs for its example avatars.

## If creating the stack from scratch

```bash
npm create vite@latest react-app -- --template react-ts
cd react-app
npm install
npm install tailwindcss @tailwindcss/vite motion
npx shadcn@latest init
```

When starting from a different project, follow the official [shadcn/ui Vite guide](https://ui.shadcn.com/docs/installation/vite) and confirm that the `@/*` alias targets `src/*`.

## Before public use

All names, roles, and review copy in `src/App.tsx` are example content supplied to demonstrate the layout, not verified customer endorsements. Replace them with real reviews that you have permission to publish.

This demo is not yet wired into the root GitHub Pages homepage. The existing static site remains unchanged; a deliberate integration/build deployment step is needed before the React app appears on the public site.
