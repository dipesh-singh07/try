# Contributing to xSTUDENT

Thanks for contributing! This guide explains how our team works on xSTUDENT — from picking an issue to getting your Pull Request merged. Please read it fully before your first contribution.

---

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Prerequisites](#prerequisites)
4. [Local Setup](#local-setup)
5. [Environment Variables](#environment-variables)
6. [Running the Project](#running-the-project)
7. [Contribution Workflow](#contribution-workflow)
8. [Branch Naming](#branch-naming)
9. [Commit Messages](#commit-messages)
10. [Pull Request Guidelines](#pull-request-guidelines)
11. [Code Review & Merge](#code-review--merge)
12. [Coding Standards](#coding-standards)
13. [Issue Labels](#issue-labels)
14. [Reporting Bugs & Requesting Features](#reporting-bugs--requesting-features)
15. [Security Rules](#security-rules)
16. [Getting Help](#getting-help)

---

## Tech Stack

| Layer | Tools |
|---|---|
| Frontend | React 19, Vite, React Router, Axios |
| Backend | Node.js, Express 5, Mongoose |
| Database | MongoDB |
| Backend middleware | Helmet, CORS, Morgan, dotenv |
| Dev tools | nodemon, oxlint |
| Package manager | npm |

---

## Project Structure

```text
xSTUDENT/
├── frontend/                 React + Vite app
│   ├── src/
│   │   ├── components/       Reusable UI components
│   │   ├── pages/            Route-level pages
│   │   ├── services/         API calls (all requests go through services/api.js)
│   │   ├── hooks/            Custom React hooks
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── .env.example
│
├── backend/                  Express API
│   ├── src/
│   │   ├── config/           Database connection and config
│   │   ├── controllers/      Request handling / business logic
│   │   ├── models/           Mongoose schemas
│   │   ├── routes/           Route definitions only
│   │   ├── middleware/       Error handling, auth, validation
│   │   ├── utils/            Shared helper functions
│   │   └── server.js         App entry point
│   └── .env.example
│
├── README.md
└── CONTRIBUTING.md
```

**Where should my code go?**
- A new API endpoint → `routes/` (path) + `controllers/` (logic) + `models/` (if it stores data).
- A new screen → `pages/`; pieces reused across screens → `components/`.
- Any call to the backend → a function in `services/`, never `axios`/`fetch` directly inside a component.

---

## Prerequisites

- **Node.js 20+** and **npm** — check with `node -v` and `npm -v`
- **Git**
- **MongoDB** — local install or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
- A GitHub account

---

## Local Setup

### Team members (with write access)
```bash
git clone https://github.com/princecherry9905/xSTUDENT.git
cd xSTUDENT
```

### Outside contributors
1. Click **Fork** on GitHub.
2. Clone your fork and add the main repo as `upstream`:
```bash
git clone https://github.com/<your-username>/xSTUDENT.git
cd xSTUDENT
git remote add upstream https://github.com/princecherry9905/xSTUDENT.git
```

### Install dependencies
```bash
cd backend && npm install
cd ../frontend && npm install
```

---

## Environment Variables

Copy the example files and fill in your own values:
```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

**backend/.env**
| Variable | Description | Example |
|---|---|---|
| `PORT` | API port | `5000` |
| `NODE_ENV` | Environment | `development` |
| `CLIENT_URL` | Frontend URL allowed by CORS | `http://localhost:5173` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/xstudent` |
| `JWT_SECRET` | Secret for signing tokens | any long random string |

**frontend/.env**
| Variable | Description | Example |
|---|---|---|
| `VITE_API_URL` | Backend base URL | `http://localhost:5000/api` |

> ⚠️ `.env` files are git-ignored. **Never commit them.** If you add a new variable, add it (with a placeholder value) to the matching `.env.example` and document it here and in the README.

---

## Running the Project

Use two terminals:
```bash
# Terminal 1 – backend (http://localhost:5000)
cd backend
npm run dev

# Terminal 2 – frontend (http://localhost:5173)
cd frontend
npm run dev
```
Open http://localhost:5173 — the home page shows whether the backend is reachable. You can also check http://localhost:5000/api/health.

### Available scripts
| Folder | Command | What it does |
|---|---|---|
| backend | `npm run dev` | Start API with auto-restart (nodemon) |
| backend | `npm start` | Start API with node |
| frontend | `npm run dev` | Start Vite dev server |
| frontend | `npm run build` | Production build |
| frontend | `npm run preview` | Preview production build |
| frontend | `npm run lint` | Lint the frontend code |

---

## Contribution Workflow

```text
Issue → Assigned → Branch → Code → Test → Pull Request → Review → Merge into main
```

1. **Find an issue** in the [Issues tab](https://github.com/princecherry9905/xSTUDENT/issues). Look for `good first issue` if you're new.
2. **Ask to be assigned** by commenting on the issue. Don't start work until the Team Lead assigns it to you — this avoids two people doing the same task.
3. **Sync with `main`** before you start:
   ```bash
   git checkout main
   git pull origin main          # forks: git pull upstream main
   ```
4. **Create a branch** (see [Branch Naming](#branch-naming)):
   ```bash
   git checkout -b feature/12-student-login-page
   ```
5. **Write your code.** Keep changes focused on the issue — one issue per branch, one branch per PR.
6. **Test locally:** run the app, check your feature works, and run `npm run lint` / `npm run build` in `frontend`.
7. **Commit** with a clear message (see [Commit Messages](#commit-messages)).
8. **Push** your branch:
   ```bash
   git push -u origin feature/12-student-login-page
   ```
9. **Open a Pull Request** into `main` and fill in the PR description.
10. **Address review comments** by pushing more commits to the same branch.
11. The Team Lead **merges** the PR once it is approved.

> 🚫 Never push directly to `main`. All changes go through a Pull Request.

### Keeping your branch up to date
If `main` has moved ahead while you were working:
```bash
git checkout main
git pull origin main
git checkout feature/12-student-login-page
git merge main
# fix any conflicts, then commit and push
```

---

## Branch Naming

Format: `type/<issue-number>-short-description` (lowercase, words separated by `-`)

| Type | Use for | Example |
|---|---|---|
| `feature/` | New features | `feature/12-student-login-page` |
| `fix/` | Bug fixes | `fix/27-navbar-overlap-mobile` |
| `docs/` | Documentation only | `docs/31-update-api-docs` |
| `refactor/` | Code cleanup without behaviour change | `refactor/40-split-auth-controller` |
| `test/` | Adding or fixing tests | `test/45-auth-api-tests` |
| `chore/` | Tooling, dependencies, config | `chore/50-add-prettier` |

---

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):
```text
<type>: <short summary in present tense>
```

| Type | Meaning |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation changes |
| `style` | Formatting only (no logic change) |
| `refactor` | Code restructuring |
| `test` | Adding/updating tests |
| `chore` | Build, tooling, dependencies |

**Good:**
```text
feat: add student registration form
fix: show error when login API fails
docs: add setup steps for MongoDB Atlas
```
**Bad:** `update`, `changes`, `final code`, `fixed stuff`

Tips: keep the summary under ~70 characters, make small commits that each do one thing, and reference the issue in the PR (not necessarily in every commit).

---

## Pull Request Guidelines

**PR title:** same style as commit messages, e.g. `feat: add student registration form`

**PR description should include:**
```markdown
## Summary
What does this PR do and why?

## Related Issue
Closes #12

## Changes
- Added RegisterPage component
- Added POST /api/students endpoint

## How to Test
1. Run backend and frontend
2. Go to /register and submit the form
3. Check the new student appears in the database

## Screenshots (for UI changes)

## Checklist
- [ ] Code runs locally without errors
- [ ] `npm run lint` passes (frontend)
- [ ] `npm run build` passes (frontend)
- [ ] No `.env`, secrets or `node_modules` committed
- [ ] New env variables added to `.env.example`
- [ ] Docs/README updated if needed
```

Writing `Closes #12` automatically closes the issue when the PR is merged.

**Keep PRs small.** A PR that changes 100–300 lines gets reviewed quickly; a PR that changes 2,000 lines will sit waiting.

---

## Code Review & Merge

- Every PR needs **at least one approval** (from the Team Lead or an assigned reviewer) before merging.
- Reviewers check: does it solve the issue, does it run, is it readable, does it follow the structure, are there any secrets or debug code left.
- Be respectful in reviews — comment on the code, not the person. Explain *why* when asking for changes.
- As an author, reply to every comment (fix it, or explain why not) and re-request review after updating.
- Only the **Team Lead** merges into `main`. We use **Squash and merge** to keep history clean.
- After merge, delete your branch and pull the latest `main` before starting the next issue.

---

## Coding Standards

### General
- Use **ES6+ JavaScript** (`const`/`let`, arrow functions, `async/await`, ES modules `import/export`).
- Use meaningful names: `getStudentById`, not `getData2`.
- No unused variables, commented-out code, or `console.log` left for debugging.
- Keep functions small and focused on one job.

### Frontend
- Components: **PascalCase** files (`StudentCard.jsx`). Hooks: start with `use` (`useStudents.js`).
- All API calls go through `src/services/`. Read the API URL only from `import.meta.env.VITE_API_URL`.
- Every data-loading screen must handle **loading**, **error** and **empty** states.
- Validate forms before submitting and show clear error messages to the user.
- No buttons or links that do nothing.

### Backend
- Routes only map URLs to controllers — business logic goes in **controllers** (or utils).
- Validate request input before using it.
- Always return consistent JSON:
  ```json
  { "success": true, "data": { } }
  { "success": false, "message": "Student not found" }
  ```
- Use correct HTTP status codes: `200` OK, `201` Created, `400` Bad Request, `401` Unauthorized, `403` Forbidden, `404` Not Found, `500` Server Error.
- Pass errors to `next(err)` so the shared error handler formats them.
- Read secrets and config only from `process.env`.

### Dependencies
- Don't add a new npm package without a good reason — mention it in the PR description.
- Install in the correct folder (`frontend/` or `backend/`) and commit the updated `package.json` **and** `package-lock.json`.

---

## Issue Labels

| Label | Meaning |
|---|---|
| `frontend` | React / UI work |
| `backend` | API / database work |
| `bug` | Something is broken |
| `enhancement` | New feature or improvement |
| `documentation` | Docs changes |
| `testing` | Tests |
| `good first issue` | Small, beginner-friendly task |
| `help wanted` | Extra attention needed |
| `priority: high` / `priority: low` | Urgency |

---

## Reporting Bugs & Requesting Features

**Bug report** — open an issue with:
- What happened and what you expected
- Steps to reproduce
- Screenshots / error messages (browser console or terminal)
- Your OS, browser and Node version

**Feature request** — open an issue with:
- The problem you want to solve
- Your proposed solution
- Any alternatives you considered

Search existing issues first to avoid duplicates.

---

## Security Rules

- ❌ Never commit `.env` files, passwords, API keys, database URLs or JWT secrets.
- ❌ Never put secrets in `VITE_*` variables — everything in the frontend is visible to users.
- ❌ Never commit `node_modules/` or `dist/`.
- ✅ If you accidentally commit a secret, tell the Team Lead immediately — the secret must be changed (rotated), not just deleted from the code.
- ✅ Found a security problem? Report it privately to the Team Lead instead of opening a public issue.

---

## Getting Help

- Stuck on an issue? Comment on the issue or ask in your PR — it's okay to open a **Draft PR** early to get feedback.
- Questions about setup or the project? Contact the Team Lead: [@princecherry9905](https://github.com/princecherry9905).

Happy coding! 🚀
