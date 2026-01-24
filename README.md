## Crypto Portfolio & Watchlist

Modern React + TypeScript app for portfolio viewing and a live CoinGecko-powered watchlist. Light theme, responsive layout, and clean separation between data (hooks), UI (components), and layout.

### Quick start

- Install: `npm install`
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`

### Tech stack

- Framework: React 19, TypeScript, Vite (rolldown-based build)
- State: TanStack React Query for server state; memoized selectors for derived totals
- Routing: react-router-dom v7
- Styling: Tailwind CSS v4 + custom tokens; Rubik font; clsx for class merges
- Data: CoinGecko markets API (via Vite dev proxy at `/coingecko`)
- Charts: Recharts
- Numbers: decimal.js for precise P&L math

### Project structure (high level)

- `src/api`: API clients (CoinGecko)
- `src/data`: static metadata (watchlist tags/notes)
- `src/hooks`: data + business logic (`useDashboardData`, `useWatchlist`)
- `src/components`: presentational components (tables, header, layout pieces)
- `src/layouts`: shared layout shell with responsive sidebar
- `src/pages`: routed pages (Portfolio, Watchlist)

### Features

- Portfolio dashboard: live prices, holdings, P&L, stale/error badges, responsive table
- Watchlist: CoinGecko markets feed, search + tag filters, sticky first column, graceful fallbacks
- Light theme with Rubik, responsive sidebar and tables, mobile-friendly horizontal scroll
- Price flash feedback (up/down) without unnecessary re-renders

### Architecture decisions

- **Server state with React Query:** caching, refetch intervals, and stale flags keep UI consistent and handle partial failures gracefully.
- **Separation of concerns:** pages wire hooks to presentational components; hooks own data fetching/derivations; components stay logic-light.
- **Precision math:** decimal.js for P&L avoids floating-point drift.
- **Dev proxy for CoinGecko:** `/coingecko` proxy in `vite.config.ts` sidesteps browser CORS locally; production would need a server relay or proper CORS.
- **Responsive-first tables:** tables degrade gracefully on small screens (hide non-critical columns, allow horizontal scroll, sticky key columns).

### State strategy

- React Query keys per resource (`wallet`, `prices`, `watchlist-markets`) with `staleTime` tuned (e.g., 15–30s) to reduce thrash.
- Derived values memoized (balances, P&L, filters) to avoid recomputation and jitter.
- Error and stale states surfaced to the UI (badges, retry buttons) instead of silent failures.

### Trade-offs and rationale

- **Client-side CoinGecko:** simple and fast to ship; for production, add a lightweight backend proxy with rate-limit handling and caching to protect API quotas.
- **Mock wallet data:** current portfolio holdings come from a mock source; a real app would persist wallets/server-side and secure user auth.
- **No global error boundary/toasts yet:** inline errors are shown, but a global boundary + telemetry would harden production readiness.
- **Animations kept minimal:** avoided heavy animation libs for price flash to prevent render thrash and keep the UI crisp.

### Running & scripts

- `npm run dev` — start Vite dev server (uses dev proxy for CoinGecko)
- `npm run build` — type-check then bundle
- `npm run preview` — preview production build
- `npm run lint` — ESLint over the repo

### API & environment

- CoinGecko endpoints used:
  - `/api/v3/coins/markets` for watchlist rows
  - `/api/v3/simple/price` for portfolio pricing
- Dev CORS: via Vite proxy path `/coingecko`. No `.env` required for the mock/demo setup.

### Testing approach (what to add next)

- Unit tests for P&L math and derived totals (using vitest + testing-library).
- Hook tests for `useWatchlist` filtering and stale/error handling.
- Integration smoke for routing and key flows (portfolio load, watchlist search/filter).

### Performance & resilience notes

- Cached queries with gentle refetch intervals to avoid rate limits and UI flicker.
- Skeletons + stale badges to keep perceived performance high under slow networks.
- Defensive fallbacks for external images to avoid broken avatars in the watchlist.

### Accessibility & responsiveness

- Keyboard-focusable controls and clear hover/focus states via Tailwind tokens.
- Tables are horizontally scrollable on small screens; non-critical columns hide on narrow breakpoints.
- Sticky first column and header backgrounds kept in sync to prevent visual seams.

### What we would improve with more time

1. Real auth + persisted portfolios (CRUD, multiple wallets) with a backend proxy for CoinGecko.
2. Comprehensive test suite (unit + integration) and CI.
3. Observability: error boundary, logging, metrics, and user-facing toasts.
4. Accessibility audits and motion-reduction toggles.
5. Deploy pipeline (e.g., Vercel/Netlify) with preview environments.
