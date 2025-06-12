#!/bin/bash
# scripts/dev.sh — Run backend, frontend, and Tailwind in parallel

echo "▶ Starting backend (FastAPI)..."
cd backend
source .venv/bin/activate
uvicorn app.main:app --reload --host 0.0.0.0 --port 8080 &
BACKEND_PID=$!
cd ..

echo "▶ Starting styles monitor (Tailwind)..."
cd backend
npx tailwindcss -i ./app/static/css/tailwind.css \
  -o ./app/static/css/app.css \
  --content './app/templates/**/*.{jinja,j2,html}' \
  --watch --verbose &
TAILWIND_PID=$!
cd ..

echo "▶ Starting frontend (Vite)..."
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo "✅ Dev servers started."

