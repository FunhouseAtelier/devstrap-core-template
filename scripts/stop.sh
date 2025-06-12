#!/bin/bash
# scripts/stop.sh — Kill backend, frontend, and Tailwind processes

echo "🛑 Stopping backend (uvicorn)..."
# pkill -f "uvicorn.*--reload"
pkill -f "uvicorn.*app.main:app"

echo "🛑 Stopping frontend (vite)..."
pkill -f "vite"

echo "🛑 Stopping Tailwind CLI watcher..."
pkill -f "tailwindcss.*--watch"

echo "✅ All known dev processes terminated."
