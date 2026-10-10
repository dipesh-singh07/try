# Frontend (React + Vite)

## Setup
```bash
npm install
cp .env.example .env   # set VITE_API_URL
npm run dev            # http://localhost:5173
```

## Scripts
| Script | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Lint with oxlint |

## Structure
- `src/components/` – reusable UI components
- `src/pages/` – route-level pages
- `src/services/` – API calls (`api.js` reads `VITE_API_URL`)
- `src/hooks/` – custom React hooks

> Never put secrets in `VITE_*` variables — they are bundled into the browser code.
