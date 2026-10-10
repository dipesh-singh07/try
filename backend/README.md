# Backend (Node.js + Express)

## Setup
```bash
npm install
cp .env.example .env   # fill in your values
npm run dev            # http://localhost:5000
```

## Scripts
| Script | What it does |
|---|---|
| `npm run dev` | Start with nodemon (auto-restart) |
| `npm start` | Start with node |

## Structure
- `src/config/` – database connection
- `src/routes/` – route definitions only
- `src/controllers/` – request handling logic
- `src/models/` – Mongoose models
- `src/middleware/` – 404 + error handlers
- `src/utils/` – shared helpers

## Endpoints
| Method | Path | Description |
|---|---|---|
| GET | `/api/health` | API status and database connection state |
