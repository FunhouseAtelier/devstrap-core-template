# DevStrap Core Template

**Full-stack web app starter template** built with:

- ⚛️ React + Vite + Tailwind CSS (frontend)
- 🐍 FastAPI + Jinja2 (backend)
- 🌍 Fly.io-ready deployment setup
- 📁 `/frontend` and `/backend` folder separation
- 🎯 Auth and database integration planned for next version

---

## 📁 Folder Structure

```
devstrap-core-template/
├── frontend/     # Vite + React + Tailwind
├── backend/      # FastAPI + Jinja2 (static SSR + API)
└── README.md     # You are here
```

---

## ⚙️ Tech Stack

### Frontend

- React 19
- React Router 7
- Vite 6
- Tailwind CSS 4
- PostCSS
- TypeScript

See: `frontend/README.md`

---

### Backend

- FastAPI
- Jinja2 templates
- Uvicorn dev server
- Python 3.11+
- `.venv/` local Python virtual environment

See: `backend/README.md`

---

## 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/YOUR_USERNAME/devstrap-core-template.git
cd devstrap-core-template
```

### 1. Start Frontend

```bash
cd frontend
npm install
npm run dev
```

> Open: `http://localhost:5173`

### 2. Start Backend

```bash
cd ../backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8080
```

> Open: `http://localhost:8080`

---

## 🌐 Dev URLs

| Service   | URL                   |
|-----------|------------------------|
| Frontend  | http://localhost:5173 |
| Backend   | http://localhost:8080 |
| API Base  | http://localhost:8080/api |

---

## 🧪 Testing Tips

- Tailwind classes should hot-reload
- Vite dev console will show HMR updates
- API endpoints are live at `localhost:8080`

---

## 🧠 Philosophy

> Build fast, learn faster.  
> **DevStrap** is a launchpad—not a framework. Extend it, remix it, make it yours.

---

MIT License • Funhouse Atelier
