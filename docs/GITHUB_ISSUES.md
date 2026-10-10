# Exactly 40 GitHub Issues for xSTUDENT

Repository: [https://github.com/princecherry9905/try](https://github.com/princecherry9905/try)

---

### Issue #1: Initialize GitHub repository and main branch
- **Problem / scope:** Create the xSTUDENT repository, protect main where available, and define collaboration rules.
- **Acceptance criteria:** Repository exists; main is the integration branch; no feature work is pushed directly to main.
- **Suggested owner:** Team Lead (Prince Kumar)
- **Priority:** High
- **Labels:** `setup`, `documentation`

### Issue #2: Create React + Vite frontend
- **Problem / scope:** Initialize the frontend with React and Vite, working scripts, and clean starter files.
- **Acceptance criteria:** npm install and npm run dev work; npm run build succeeds; starter UI renders.
- **Suggested owner:** Frontend member
- **Priority:** High
- **Labels:** `frontend`, `setup`

### Issue #3: Create Express backend
- **Problem / scope:** Initialize backend package and server entry point.
- **Acceptance criteria:** Server starts with npm run dev; JSON requests work; scripts are documented.
- **Suggested owner:** Backend member
- **Priority:** High
- **Labels:** `backend`, `setup`

### Issue #4: Configure MongoDB Atlas and Mongoose
- **Problem / scope:** Create database connection module driven by MONGO_URI.
- **Acceptance criteria:** Connection succeeds with valid credentials; failure is reported clearly; no URI is hardcoded.
- **Suggested owner:** Backend member
- **Priority:** High
- **Labels:** `backend`, `database`

### Issue #5: Add environment examples and gitignore
- **Problem / scope:** Add root/frontend/backend ignore rules and .env.example templates.
- **Acceptance criteria:** Secrets and node_modules are ignored; examples contain placeholders only.
- **Suggested owner:** Team Lead (Prince Kumar)
- **Priority:** High
- **Labels:** `setup`, `security`

### Issue #6: Create User model and registration API
- **Problem / scope:** Implement user schema, validation, and public registration.
- **Acceptance criteria:** Valid user registers; invalid fields fail; email uniqueness is enforced; role defaults to User.
- **Suggested owner:** Auth member
- **Priority:** High
- **Labels:** `backend`, `authentication`

### Issue #7: Implement password hashing and login API
- **Problem / scope:** Use bcryptjs and JWT for credential verification.
- **Acceptance criteria:** Passwords are never stored in plain text; invalid credentials return 401; successful login returns expected data.
- **Suggested owner:** Auth member
- **Priority:** High
- **Labels:** `backend`, `authentication`, `security`

### Issue #8: Implement JWT authentication middleware
- **Problem / scope:** Verify bearer tokens and attach authenticated user to request.
- **Acceptance criteria:** Missing, malformed, and expired tokens are rejected with correct status codes.
- **Suggested owner:** Auth member
- **Priority:** High
- **Labels:** `backend`, `authentication`

### Issue #9: Implement Admin authorization middleware
- **Problem / scope:** Enforce Admin-only operations on backend routes.
- **Acceptance criteria:** Non-admin cannot perform protected mutations; public registration cannot assign Admin.
- **Suggested owner:** Auth member
- **Priority:** High
- **Labels:** `backend`, `security`

### Issue #10: Build React login/register/logout flows
- **Problem / scope:** Create controlled forms and connect them to auth endpoints using fetch.
- **Acceptance criteria:** Validation, loading, errors, successful navigation, and logout work.
- **Suggested owner:** Frontend member
- **Priority:** High
- **Labels:** `frontend`, `authentication`

### Issue #11: Create Student Mongoose model
- **Problem / scope:** Add required student fields, validation, timestamps, and uniqueness rules.
- **Acceptance criteria:** Fields match assignment; duplicate rollNo/email are rejected; invalid data fails safely.
- **Suggested owner:** Backend member
- **Priority:** High
- **Labels:** `backend`, `database`

### Issue #12: Implement GET student list and detail APIs
- **Problem / scope:** Create authenticated list and single-record endpoints.
- **Acceptance criteria:** Admin/User can retrieve records; malformed IDs and missing records return clear errors.
- **Suggested owner:** Backend member
- **Priority:** High
- **Labels:** `backend`, `api`

### Issue #13: Implement Admin-only student creation
- **Problem / scope:** Create POST /api/students with validation.
- **Acceptance criteria:** Admin can create valid records; User gets 403; duplicate records are rejected.
- **Suggested owner:** Backend member
- **Priority:** High
- **Labels:** `backend`, `crud`

### Issue #14: Implement Admin-only student update
- **Problem / scope:** Create PUT /api/students/:id.
- **Acceptance criteria:** Admin can update valid fields; User is forbidden; missing records return 404.
- **Suggested owner:** Backend member
- **Priority:** High
- **Labels:** `backend`, `crud`

### Issue #15: Implement Admin-only student deletion
- **Problem / scope:** Create DELETE /api/students/:id.
- **Acceptance criteria:** Admin can delete existing record; User is forbidden; missing record returns 404.
- **Suggested owner:** Backend member
- **Priority:** High
- **Labels:** `backend`, `crud`

### Issue #16: Build shared application layout
- **Problem / scope:** Create sidebar, navbar, content layout, and responsive shell.
- **Acceptance criteria:** Layout is consistent across authenticated pages and adapts to mobile.
- **Suggested owner:** Frontend member
- **Priority:** Medium
- **Labels:** `frontend`, `ui`

### Issue #17: Build student list and fetch integration
- **Problem / scope:** Render records from the real API in a responsive table.
- **Acceptance criteria:** Loading, success, empty, and API error states are present; no fake production data.
- **Suggested owner:** Frontend member
- **Priority:** High
- **Labels:** `frontend`, `crud`

### Issue #18: Build controlled Add Student form
- **Problem / scope:** Implement form fields, validation, and POST integration.
- **Acceptance criteria:** Admin can submit valid records; errors are shown accessibly; duplicate errors are understandable.
- **Suggested owner:** Frontend member
- **Priority:** High
- **Labels:** `frontend`, `crud`

### Issue #19: Build Edit Student and Details pages
- **Problem / scope:** Fetch one record, prefill edit form, and display details.
- **Acceptance criteria:** Detail route works; edit saves through PUT; loading and not-found states work.
- **Suggested owner:** Frontend member
- **Priority:** High
- **Labels:** `frontend`, `crud`

### Issue #20: Add search and filters
- **Problem / scope:** Support search by name, roll number, or email; optional course/semester filters.
- **Acceptance criteria:** Search and filters work with real data and can be cleared.
- **Suggested owner:** Frontend member
- **Priority:** Medium
- **Labels:** `frontend`, `crud`

### Issue #21: Configure React Router and protected routes
- **Problem / scope:** Add routes and authentication-aware redirects.
- **Acceptance criteria:** Required routes render; unauthenticated users are redirected; unknown routes show 404.
- **Suggested owner:** Frontend member
- **Priority:** High
- **Labels:** `frontend`, `routing`

### Issue #22: Build dashboard summary cards
- **Problem / scope:** Create overview cards and recent students section.
- **Acceptance criteria:** Dashboard structure is responsive and role-aware.
- **Suggested owner:** Team Lead (Prince Kumar)
- **Priority:** Medium
- **Labels:** `frontend`, `dashboard`

### Issue #23: Connect dashboard to real data
- **Problem / scope:** Use API-derived counts and recent records.
- **Acceptance criteria:** Counts match database data; API failures are visible; no misleading hardcoded stats.
- **Suggested owner:** Team Lead (Prince Kumar)
- **Priority:** Medium
- **Labels:** `frontend`, `backend`

### Issue #24: Build profile/current-user page
- **Problem / scope:** Display authenticated user information and role.
- **Acceptance criteria:** Data comes from authenticated API/context; no password is displayed.
- **Suggested owner:** Auth member
- **Priority:** Medium
- **Labels:** `frontend`, `authentication`

### Issue #25: Standardize validation and feedback
- **Problem / scope:** Add consistent client-side validation, alerts/toasts, and field errors.
- **Acceptance criteria:** Forms give clear feedback; server validation remains authoritative.
- **Suggested owner:** Frontend member
- **Priority:** Medium
- **Labels:** `frontend`, `ux`

### Issue #26: Create reusable native-fetch API helper
- **Problem / scope:** Centralize base URL, headers, token handling, JSON parsing, and errors.
- **Acceptance criteria:** No Axios dependency; request code is reused; failed HTTP responses throw useful errors.
- **Suggested owner:** Auth member
- **Priority:** High
- **Labels:** `frontend`, `api`

### Issue #27: Configure CORS for local and deployed origins
- **Problem / scope:** Restrict allowed origin based on environment configuration.
- **Acceptance criteria:** Frontend origin works; unexpected origins are not broadly allowed in production.
- **Suggested owner:** Backend member
- **Priority:** High
- **Labels:** `backend`, `security`

### Issue #28: Verify frontend and backend role enforcement
- **Problem / scope:** Test Admin/User UI and API permissions together.
- **Acceptance criteria:** User cannot bypass permissions by manually calling mutation endpoints.
- **Suggested owner:** Auth member
- **Priority:** High
- **Labels:** `security`, `testing`

### Issue #29: Add centralized errors and health endpoint
- **Problem / scope:** Implement error middleware, 404 handling, and GET /api/health.
- **Acceptance criteria:** Responses are consistent; health endpoint returns service status; production errors avoid leaking secrets.
- **Suggested owner:** Backend member
- **Priority:** High
- **Labels:** `backend`, `testing`

### Issue #30: Test edge cases and authorization failures
- **Problem / scope:** Test invalid IDs, duplicates, invalid fields, missing records, and expired tokens.
- **Acceptance criteria:** Expected HTTP codes and messages are verified and documented.
- **Suggested owner:** Auth member
- **Priority:** High
- **Labels:** `testing`, `security`

### Issue #31: Improve responsive mobile/tablet layout
- **Problem / scope:** Review dashboard, table, sidebar, and forms at narrow widths.
- **Acceptance criteria:** No horizontal overflow on key pages; controls remain usable on mobile.
- **Suggested owner:** Frontend member
- **Priority:** Medium
- **Labels:** `frontend`, `ui`

### Issue #32: Improve accessibility and keyboard support
- **Problem / scope:** Add labels, semantic headings, focus states, and accessible dialogs.
- **Acceptance criteria:** Inputs have labels; keyboard navigation works; contrast is readable.
- **Suggested owner:** Frontend member
- **Priority:** Medium
- **Labels:** `frontend`, `accessibility`

### Issue #33: Add delete confirmation and notifications
- **Problem / scope:** Require confirmation before deletion and report operation result.
- **Acceptance criteria:** Accidental deletion is prevented; success/error messages reflect server outcome.
- **Suggested owner:** Frontend member
- **Priority:** Medium
- **Labels:** `frontend`, `ux`

### Issue #34: Remove debug code and console warnings
- **Problem / scope:** Review unused files, logs, warnings, and inconsistent naming.
- **Acceptance criteria:** Production code has no avoidable warnings or debug secrets.
- **Suggested owner:** Team Lead (Prince Kumar)
- **Priority:** Medium
- **Labels:** `quality`

### Issue #35: Final UI and usability review
- **Problem / scope:** Polish spacing, empty states, table density, responsive behavior, and consistency.
- **Acceptance criteria:** All main screens use a consistent design; no broken links or obvious layout defects.
- **Suggested owner:** Team Lead (Prince Kumar)
- **Priority:** Medium
- **Labels:** `frontend`, `ux`

### Issue #36: Test authentication and CRUD APIs
- **Problem / scope:** Run repeatable API checks for auth and student endpoints.
- **Acceptance criteria:** All core success and failure cases pass; results are recorded without claiming unrun tests.
- **Suggested owner:** Backend member
- **Priority:** High
- **Labels:** `testing`, `backend`

### Issue #37: Verify production frontend build
- **Problem / scope:** Run npm run build and resolve compilation failures.
- **Acceptance criteria:** Production build succeeds and assets are generated correctly.
- **Suggested owner:** Frontend member
- **Priority:** High
- **Labels:** `testing`, `frontend`

### Issue #38: Complete root README and screenshots
- **Problem / scope:** Document features, stack, team, API, setup, env variables, screenshots, and deployment links.
- **Acceptance criteria:** A new developer can follow setup; placeholders are clearly identified; screenshots are genuine.
- **Suggested owner:** Team Lead (Prince Kumar)
- **Priority:** High
- **Labels:** `documentation`

### Issue #39: Deploy backend and connect Atlas
- **Problem / scope:** Deploy backend to a supported host and configure production env vars.
- **Acceptance criteria:** Health endpoint works; CORS and DB connection are verified; secrets remain host-side.
- **Suggested owner:** Backend member
- **Priority:** High
- **Labels:** `deployment`, `backend`

### Issue #40: Deploy frontend and final end-to-end check
- **Problem / scope:** Deploy frontend to Vercel and configure VITE_API_URL.
- **Acceptance criteria:** Live frontend communicates with deployed backend; auth, CRUD permissions, and key routes are tested.
- **Suggested owner:** Team Lead (Prince Kumar)
- **Priority:** High
- **Labels:** `deployment`, `frontend`
