# xSTUDENT

React + Vite frontend and Node.js + Express backend with MongoDB (Mongoose).
This is the base setup — project features will be added through GitHub Issues and Pull Requests.

## Tech Stack
- **Frontend:** React 19, Vite, React Router, Axios
- **Backend:** Node.js, Express 5, Mongoose, Helmet, CORS, Morgan, dotenv
- **Dev tools:** nodemon, oxlint

## Folder Structure
```text
├── frontend/        React + Vite app
│   └── src/{components,pages,services,hooks}
├── backend/         Express API
│   └── src/{controllers,models,routes,middleware,config,utils}
└── README.md
```

## Prerequisites
- Node.js 20+ and npm
- MongoDB (local or Atlas) — optional for now; the server starts without it

## Setup
```bash
# Backend
cd backend
npm install
cp .env.example .env
npm run dev

# Frontend (new terminal)
cd frontend
npm install
cp .env.example .env
npm run dev
```
Open http://localhost:5173 — the page shows whether the backend is reachable.

## Environment Variables
**backend/.env**
| Variable | Description |
|---|---|
| `PORT` | API port (default 5000) |
| `NODE_ENV` | `development` / `production` |
| `CLIENT_URL` | Frontend origin allowed by CORS |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret for signing tokens (when auth is added) |

**frontend/.env**
| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend base URL, e.g. `http://localhost:5000/api` |

`.env` files are git-ignored. Only `.env.example` is committed.

## API
| Method | Path | Description |
|---|---|---|
| GET | `/api/health` | API status + DB connection state |

## Contribution Workflow
Please read **[CONTRIBUTING.md](CONTRIBUTING.md)** before contributing — it covers setup, branching, commits, PRs and code review.

Issue → Assigned developer → Feature branch → Code changes → Tests → Pull Request → Review → Merge into `main`

Branch names:
- `feature/<issue-number>-short-description`
- `fix/<issue-number>-short-description`
- `docs/<issue-number>-short-description`
