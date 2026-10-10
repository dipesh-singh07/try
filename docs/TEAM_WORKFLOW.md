# xSTUDENT GitHub Team Collaboration Workflow

## 1. Team Composition & Role Distribution

| Member | Role | Assigned Focus Areas | Assigned Issues |
| :--- | :--- | :--- | :--- |
| **Prince Kumar** | **Team Lead** | Architecture, repo setup, dashboard summary, code reviews, deployment & documentation | #1, #5, #22, #23, #34, #35, #38, #40 |
| **Member 2** | **Frontend Engineer** | React layouts, Bootstrap UI, responsive forms, tables, route protection, student CRUD views | #2, #10, #16, #17, #18, #19, #20, #21, #25, #31, #32, #33, #37 |
| **Member 3** | **Backend Engineer** | Mongoose schemas, Student CRUD REST APIs, database queries, CORS, deployments | #3, #4, #11, #12, #13, #14, #15, #27, #29, #36, #39 |
| **Member 4** | **Security & Auth Engineer** | JWT authentication, user registration/login, role-based authorization, native fetch helper, API tests | #6, #7, #8, #9, #24, #26, #28, #30 |

---

## 2. Mandatory Rules

1. **No direct pushes to `main`**: All features, bug fixes, and refactoring must go through feature branches and Pull Requests.
2. **Pull Request Reviews**: Every Pull Request must be reviewed and approved by the Team Lead or designated peer before merging.
3. **At least 2 merged PRs per member**: Each team member must author and merge a minimum of two meaningful, tested PRs to fulfill college assignment requirements.
4. **Never commit `.env` or secrets**: Keep credentials local in `.env`. Ensure `.env.example` contains placeholders only.
5. **No Axios, no jQuery**: Use browser-native `fetch` API only. Use Bootstrap 5 classes and React state.

---

## 3. Step-by-Step Feature Workflow

### Step 1: Assign and Pick an Issue
1. Browse [GitHub Issues](https://github.com/princecherry9905/try/issues).
2. Assign yourself to the issue you are starting.

### Step 2: Create a Feature Branch
Always branch off the latest `main`:
```bash
git checkout main
git pull origin main
git checkout -b feature/issue-<number>-<short-description>
```
*Example:*
```bash
git checkout -b feature/issue-18-add-student-form
```

### Step 3: Implement & Test Locally
- Run frontend dev server: `cd frontend && npm run dev`
- Run backend dev server: `cd backend && npm run dev`
- Run frontend build to ensure clean compilation: `npm run build`

### Step 4: Commit with Descriptive Messages
Follow Conventional Commits:
```bash
git add .
git commit -m "feat(frontend): implement controlled add student form (fixes #18)"
```

### Step 5: Push Branch & Open Pull Request
```bash
git push -u origin feature/issue-<number>-<short-description>
```
Open a Pull Request on GitHub targeting `main`:
- Link the issue in description: `Closes #<number>`
- Add summary of changes and testing evidence.
- Request review from Team Lead or peer.

### Step 6: Code Review & Merge
1. Reviewer checks code against acceptance criteria.
2. Address any requested changes.
3. Once approved and checks pass, merge using **Squash and merge** or **Merge commit**.
4. Delete feature branch on GitHub and locally:
```bash
git checkout main
git pull origin main
git branch -d feature/issue-<number>-<short-description>
```
