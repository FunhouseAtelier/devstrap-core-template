# backend/app/main.py

import os
from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.templating import Jinja2Templates
from starlette.requests import Request
from pathlib import Path
from operator import itemgetter

from app.utils.manifest import load_manifest, parse_manifest_entry

app = FastAPI()

# Jinja templates
templates = Jinja2Templates(directory=Path(__file__).parent / "templates")

# Serve static files (vite build output)
app.mount("/static", StaticFiles(directory="app/static", html=False), name="static")
# static_dir = os.path.join(os.path.dirname(__file__), "static")
# app.mount("/assets", StaticFiles(directory=os.path.join(static_dir, "assets")), name="assets")

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

@app.get("/ssr", response_class=HTMLResponse)
def render_ssr(request: Request):
    return templates.TemplateResponse("ssr.html", {"request": request, "user": "Visitor"})

@app.get("/csr", response_class=HTMLResponse)
def render_csr(request: Request):
    asset_file_map = parse_manifest_entry("index.html")
    js_filename, css_filename = itemgetter("js", "css")(asset_file_map)
    return templates.TemplateResponse("csr.html", {
        "request": request,
        "js_bundle": js_filename,
        "css_bundle": css_filename,
    })

@app.get("/hybrid", response_class=HTMLResponse)
def hybrid_page(request: Request):
    asset_file_map = parse_manifest_entry("index.html")
    js_filename, css_filename = itemgetter("js", "css")(asset_file_map)
    return templates.TemplateResponse("hybrid.html", {
        "request": request,
        "js_bundle": js_filename,
        "css_bundle": css_filename,
    })

# Serve index.html for all other non-API routes
@app.get("/{full_path:path}", response_class=HTMLResponse)
async def serve_spa(full_path: str, request: Request):
    print(f"Fallback triggered for: {full_path}")
    if full_path.startswith("api/") or full_path.startswith("static/"):
        raise HTTPException(status_code=404)
    return templates.TemplateResponse("csr.html", {"request": request})
# @app.get("/{full_path:path}")
# async def serve_react_app(full_path: str):
#     # Let /api/... return 404
#     if full_path.startswith("api/"):
#         raise HTTPException(status_code=404, detail="API route not found")

#     # Serve React app
#     index_path = os.path.join(static_dir, "index.html")
#     if os.path.exists(index_path):
#         return FileResponse(index_path)
#     raise HTTPException(status_code=404, detail="Static index.html not found")
