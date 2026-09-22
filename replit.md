# Aavansh Loan Services

A responsive loan services website for Indian residents, offering a clear application journey, support content, and a borrower dashboard for tracking an active loan.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/loan-services/src/App.tsx` — routed public pages, dashboard, and local interactions
- `artifacts/loan-services/src/index.css` — Aavansh visual theme, responsive layout, and motion
- `artifacts/loan-services/vite.config.ts` — Vite artifact configuration and preview routing

## Architecture decisions

- The first release is frontend-only, using local state for the eligibility flow, dashboard mock data, document feedback, FAQ accordions, and support submission.
- Wouter provides the lightweight route shell so all public pages and the dashboard work within the root artifact path.
- The visual system pairs deep teal, warm ivory, and saffron accents to make the financial product feel calm, legible, and memorable.

## Product

- Landing page for loans up to ₹40,000 with eligibility CTA
- Loan process, About, FAQ, and Support pages
- Borrower dashboard with application status, repayment schedule, outstanding balance, document actions, and support link
- Responsive navigation and accessible form feedback across desktop and mobile

## User preferences

No additional preferences recorded.

## Gotchas

- The web workflow supplies `PORT` and `BASE_PATH`; use the managed artifact workflow rather than running Vite at the workspace root.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
