# Project

- This is a project template for Svelte 5 (runes), SvelteKit, TypeScript, Tailwind CSS, Shadcn UI (shadcn-svelte), Lucide Icons (@lucide/svelte), Svelte Sonner.
- This project aims to provide a starting point for building modern web applications using Svelte.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (Vite) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run start` | Run production server (`node build/index.js`) |
| `npm run check` | Svelte type check |
| `npm run check:watch` | Svelte type check (watch mode) |
| `npm run format` | Format with Biome |
| `npm run format:check` | Check formatting |
| `npm run lint` | Lint with Biome |
| `npm run lint:fix` | Lint and auto-fix |
| `npm run check:all` | Biome full check (format + lint) |
| `npm run check:all:fix` | Biome full check with auto-fix |

## Database

- uses PostgreSQL via Drizzle ORM
- Schema: `src/lib/db/schema.ts`

## Packages

- How to use Shadcn UI (shadcn-svelte): `docs/packages/shadcn-svelte.md`
- How to use Lucide Icons (@lucide/svelte): `docs/packages/lucide-svelte.md`
- How to use Svelte Sonner: `docs/packages/svelte-sonner.md`

## Project Structure

```
src/
├── app.html                          # HTML template (lang="ja")
├── app.css                           # Tailwind CSS theme (oklch colors, dark mode)
├── app.d.ts                          # Global TypeScript types
├── routes/                           # SvelteKit routes
│   ├── +layout.svelte                # Root layout (Toaster)
│   ├── +layout.ts                    # Page options (ssr, csr, prerender)
│   ├── +page.svelte                  # Home page
│   ├── +error.svelte                 # Error page
│   ├── [feature]/                    # Feature routes
│   │   ├── +page.svelte
│   │   └── +page.server.ts           # Server-side data loading
│   └── api/v1/                       # API routes
│       └── [resource]/+server.ts
└── lib/
    ├── components/ui/                # Shadcn UI components
    ├── constants/index.ts            # App-wide constants
    ├── db/schema.ts                  # Drizzle ORM schema
    ├── server/db/                    # Server-only DB client & queries
    ├── types/index.ts                # Shared type definitions
    ├── utils/main.ts                 # Utility functions
    └── utils.ts                      # Shadcn cn() helper, component type utilities
```

# Coding Style Guide

## General Principles

- Use Svelte 5 runes (`$props`, `$state`, `$derived`, `$effect`). Never use Svelte 4 patterns.
- Format with Biome
- Keep components small and focused. Extract reusable logic into `$lib`.
- Server-only code goes in `$lib/server/`. SvelteKit enforces this boundary.

## Naming

- **Files:** kebab-case (`user-profile.svelte`, `schema.ts`)
- **Components:** PascalCase exports (`Button`, `Input`)
- **Variables / functions:** camelCase (`userId`, `parse`)
- **Constants:** SCREAMING_SNAKE_CASE (`API_URL`, `MAX_RETRIES`)
- **Types / interfaces:** PascalCase (`User`, `PostStatus`)
- **DB columns:** snake_case in SQL, camelCase in TypeScript field names (`displayName` maps to `display_name`)

## Schema Definitions (Drizzle)

- Define all tables in `src/lib/db/schema.ts`.
- Use `uuid("id").defaultRandom().primaryKey()` for primary keys.
- Column naming: camelCase field name mapping to snake_case SQL column — e.g., `displayName: varchar("display_name", { length: 120 })`.

## Svelte 5 — runes only, no Svelte 4 syntax

* Props: `let { foo, bar = 0 }: Props = $props()` — never `export let foo`.
* Reactive state: `let count = $state(0)` — never plain `let` for reactive values.
* Derived: `const doubled = $derived(count * 2)` — never `$:` labels.
* Side effects: `$effect(() => { ... })` — never `$:` for effects.
* Event handlers: `onclick={handler}`, `onfocus={...}` — never `on:click`.
* Children/snippets: `{@render children()}` — never `<slot />`.
* Page store: `import { page } from "$app/state"` — never `$app/stores`.
* Note: CSR (client-side hydration) is enabled in both dev and prod across all routes. Reactive values still MUST go through `$derived` — using plain `let` for derived state is a Svelte 5 anti-pattern regardless of SSR/CSR config.
* Get page data in `+page.svelte` from server `+page.server.ts` like this:
```svelte
<!-- +page.svelte -->
<script lang="ts">
  import type { PageProps } from "./$types";
  let { data }: PageProps = $props();
  const { postId, postTitle } = $derived(data);
</script>
```
