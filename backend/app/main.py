# @/backend/app/main.py

from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

# Serve static files (vite build output)
static_dir = os.path.join(os.path.dirname(__file__), "static")
app.mount("/assets", StaticFiles(directory=os.path.join(static_dir, "assets")), name="assets")

# CORS for frontend dev, if needed
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

# Health check endpoint
@app.get("/api/health")
def health_check():
    return {"status": "ok"}

# Serve index.html for all other non-API routes
@app.get("/{full_path:path}")
async def serve_react_app(full_path: str):
    # Let /api/... return 404
    if full_path.startswith("api/"):
        raise HTTPException(status_code=404, detail="API route not found")

    # Serve React app
    index_path = os.path.join(static_dir, "index.html")
    if os.path.exists(index_path):
        return FileResponse(index_path)
    raise HTTPException(status_code=404, detail="Static index.html not found")
