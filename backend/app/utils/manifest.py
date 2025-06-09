# backend/app/utils/manifest.py

import json
from pathlib import Path
from typing import Optional, Dict

def load_manifest(static_dir: Path = Path(__file__).resolve().parent.parent / "static/.vite") -> Dict:
    manifest_path = static_dir / "manifest.json"
    if not manifest_path.exists():
        raise FileNotFoundError(f"Manifest file not found: {manifest_path}")
    with manifest_path.open("r", encoding="utf-8") as f:
        return json.load(f)

def parse_manifest_entry(entry_name: str) -> Dict[str, Optional[str]]:
    manifest = load_manifest()
    entry = manifest.get(entry_name)
    if not entry:
        raise ValueError(f"No entry named '{entry_name}' found in manifest.")
    return {
        "js": entry.get("file"),
        "css": entry.get("css", [None])[0]
    }
