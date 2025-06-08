# DevStrap Frontend

This is the **React + Vite + Tailwind CSS** frontend of the DevStrap Core Template.

---

## 🚀 Tech Stack

- React 19
- React Router 7
- Vite 6
- Tailwind CSS 4
- PostCSS
- TypeScript
- HMR (Hot Module Reloading)

---

## 🔧 Setup Instructions

```bash
cd frontend
npm install
npm run dev
```

> Visit: `http://localhost:5173`

---

## 📁 Folder Structure

```
frontend/
├── public/             # Static assets
├── src/
│   ├── App.tsx         # Root React component
│   ├── main.tsx        # Entry point
│   └── index.css       # Tailwind directives
├── postcss.config.mjs  # PostCSS config
├── tailwind.config.ts  # Tailwind setup
└── vite.config.ts      # Vite config
```

---

## 🛠 Tailwind Setup

Tailwind is configured via:

- `postcss.config.mjs`
- `tailwind.config.ts`
- `index.css`

If classes like `bg-gray-500` don't work, ensure the following:

- `index.css` is correctly imported in `main.tsx`
- File extensions and paths match `tailwind.config.ts` `content` array
- `postcss.config.mjs` exports plugins correctly

---

MIT License • Funhouse Atelier
