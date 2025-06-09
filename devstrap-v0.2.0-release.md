# 📦 Changelog

## [v0.2.0] – 2025-06-08

### ✨ Added

- ✅ **Backend scaffold** with FastAPI + Uvicorn
- ✅ `/api/health` endpoint returns `{ "status": "ok" }`
- ✅ Dev server runs on `http://localhost:8080`
- ✅ `ApiStatus` React route to show backend health
- ✅ Frontend now builds into `/backend/app/static/`
- ✅ FastAPI serves React build and API from same server

### ⚙️ Changed

- 🛠 Updated frontend `vite.config.ts` to emit into backend
- 🛠 TSConfig and PostCSS tweaks to clean up build output
- 🛠 All server routes fallback to `index.html` (SPA support)

### 📁 Repo Maintenance

- ➕ Added `.gitignore` to backend (excludes `.venv`)
- 🧹 Stripped `node_modules` and `.venv` from zip uploads
- 📄 Added `backend/README.md` for local setup clarity

---

🚧 Next:  
v0.3.0 will introduce full-stack authentication, Jinja2 rendering, and Tailwind-based hybrid SSR views.

---
