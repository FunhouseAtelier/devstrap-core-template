**GitHub Release Note for v0.1.0: DevStrap Core Template**

---

### 🎉 Initial Public Release: `v0.1.0`

The `devstrap-core-template` is the foundational starting point for all future DevStrap templates at Funhouse Atelier. This version includes a clean and fully functional frontend stack and lays the groundwork for modular backend expansion.

#### 🔊 Highlights
- Project structure divided into `/frontend` and `/backend`
- React 19 + React Router v7 (Data APIs ready)
- Tailwind CSS v4 integrated with full HMR support
- Vite for lightning-fast development
- TypeScript + ESLint preconfigured
- Logical paths and `@/` aliasing in both TS and imports

#### 🔧 Setup Instructions
See included `README.md` files in root and `/frontend` for full documentation.

#### 🔹 What’s Next
- `v0.2.0`: Add working FastAPI backend with Jinja2 rendering, environment loader, and dev server
- `v0.3.0`: Add authentication using FastAPI Users and React Router actions
- `v0.4.0+`: Connect Prisma + MongoDB, expand API coverage

---

### 🌎 Licensing
MIT License applies. See `LICENSE` file for details. To reflect this in your codebase, update your `/frontend/package.json` with the following fields:
```json
{
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/FunhouseAtelier/devstrap-core-template/frontend"
  }
}
```

### 💼 Issue Reporting
See `.github/ISSUE_TEMPLATE/` for bug reports and feature requests.

---

### 🌐 Repository Structure
```
/Work/WebDev/DevStrap/devstrap-core-template/
├── backend/       # FastAPI backend (placeholder)
├── frontend/      # Vite + React + Tailwind
├── README.md     # Full stack documentation
```

---

Published by **Funhouse Atelier** | devstrap v0.1.0 © 2025
