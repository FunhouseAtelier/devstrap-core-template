# DevStrap Core Backend

This folder contains the FastAPI-based backend for the DevStrap Core Template.

## 🚀 Features

- FastAPI server with API + static file support
- Serves Vite-built frontend assets from `/app/static`
- Hybrid-ready (will support Jinja2 rendering in future versions)
- Full CORS configuration for local development
- Ready to deploy to Fly.io

## 📁 Folder Structure

```
backend/
├── app/
│   ├── main.py            # FastAPI app
│   └── static/            # Built frontend (from Vite)
├── .venv/                 # Python virtual environment (ignored by Git)
└── requirements.txt       # Python dependencies
```

## 🧪 API Testing

Health check endpoint:

```
GET /api/health
→ { "status": "ok" }
```

React SPA route fallback:

```
GET /any-client-route
→ Serves index.html from static folder
```

## 🛠️ Local Dev Commands

Set up virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start dev server:

```bash
uvicorn app.main:app --reload --port 8080
```

> Make sure you've run `npm run build` in `/frontend` and copied the output to `backend/app/static/`
