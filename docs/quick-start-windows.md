# Quick Start (Windows) – devstrap-core-template v1.0.0

Welcome to the **DevStrap Core Template**! This guide will walk you through cloning, setting up, running, testing, and deploying this project on **Windows**, assuming you will use **Git Bash** and **VS Code**.

---

## 🚀 Step 1: Clone the Template

1. Open VS Code.
2. Open **Git Bash** in your VS Code terminal.
3. Clone the public template repository:

```bash
git clone https://github.com/FunhouseAtelier/devstrap-core-template.git
```

4. **(Optional)** Rename the project folder.

```bash
mv devstrap-core-template <YOUR_PROJECT_NAME>
```

If this does not work in VS Code, try closing the folder you are in, then start a new terminal, navigate to the folder you were in (`/WebDev/`?), and run the command again.

5. In VS Code select `File > Open Folder...` and open the new project folder: `devstrap-core-template` by default. This is the folder all scripts are intended to be run from, and it contains the git repository for your fork of the project.

**(Optional)** If you changed the project folder name, you should change the default project name to yours in

- `backend/package.json`
- `frontend/package.json`
- `backend/fly.toml`

## 🎨 Step 2: Set Up the Frontend

Open a new terminal.

### 2.1 Install Node Dependencies

```bash
cd frontend
npm install --legacy-peer-deps
```

`--legacy-peer-deps` is a flag I'm using as a workaround until the `helmet` package officially supports React 19. It seems to work fine, despite the official lack of support.

### 2.2 Set Up Environment Variables

```bash
cp .env.example .env
```

This copies the `.env.example` file for the frontend to the actual `.env` file that will be used. For the Core edition you do not need to modify it, because no secrets are used, just accept the example defaults and you are good to go.

### 2.3 Start the Dev Server

This runs the Vite frontend server, which can be used to work on React code specifically without running the backend server for server-side routing.

```bash
npm run dev
```

Visit: `http://localhost:5173`

If you have not started the backend server yet (you shouldn't before you build) some of the functionality will be broken:

- `/api/health` will not work, it's a pure API endpoint, so backend is needed
- `/api-status` will render with an error status, because it polls the above API endpoint
- `/demo/rendering/server-side` will not work, it's a pure SSR route, so there is no React route component to render
- `/demo/rendering/hybrid` will only show the React part of the page, not the template it is meant to be contained in

You can test live updates by modifying:

- `frontend/src/routes/ClientSideRendering.tsx` (e.g., change the message to your own)
- or any file within `frontend/src/routes/`

As soon as you save the file the changes should be rendered in the browser.

### 2.4 Build the Static Assets

This will transpile all of the React code and export it to the backend for serving to browsers. You must do this at least once to enable the backend server to run with no errors (it looks for these files), so don't skip to the backend setup, but it is not necessary to build when only testing with the frontend development server (`http://localhost:5173`).

You should re-build whenever you have changed anything in the frontend code to ensure the backend serves the latest revision of your work, but if you only need to test React code you do not need to build before testing with the frontend development server, Vite will hot reload all of your changes after saving a file.

You may do this while running any of the development servers, just open a new terminal window to avoid stopping the server. Always do it before checking the backend server (`http://localhost:8080`) for any updates that combine frontend components with routes that exist on the backend (SSR or hybrid, not CSR). If your updates to React components are not showing on the backend server you probably need to run this again.

```bash
cd frontend
npm run build
```

---

## 🧱 Step 3: Set Up the Backend

Open a new terminal.

### 3.1 Create a Python Virtual Environment

```bash
cd backend
python -m venv .venv
```

> 🧠 Tip: If `python` isn't found, install Python 3.11+ from [python.org](https://www.python.org/) and make sure to check "Add to PATH".

#### Activating a Python Virtual Environment

```bash
source .venv/Scripts/activate
```

You will know it worked if you see `(.venv)` at the start of all future terminal prompts.

This terminal is now using the Python virtual environment, which is Python's solution to packaging extensions for the backend, similar to NPM in Node, but instead of installing into a `node_modules` folder it installs to a virtual environment folder, so running code directly in `backend/` like this always requires you to be in the virtual environment.

Note that any new terminals you create in VS Code will not automatically use this virtual environment, so you must do it for each terminal you want to use for direct `backend/` work. The helper scripts included in this project do it for you.

#### Deactivating a Python Virtual Environment

```bash
deactivate
```

You will know it worked if you **do not** see `(.venv)` at the start of all terminal prompts.

### 3.2 Install Python Requirements

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

This is analogous to `npm install` for Python, and `requirements.txt` is like the `dependencies` data in `package.json`.

### 3.3 Set Up Environment Variables

```bash
cp .env.example .env
```

This copies the `.env.example` file for the backend to the actual `.env` file that will be used. For the Core edition you do not need to modify it, because no secrets are used, just accept the example defaults and you are good to go.

### 3.4 Format Jinja2 Templates with djlint

#### Install the **DjLint extension** (author: monosans) for VS Code:

1. Open VS Code
2. Go to Extensions → Search for `djlint`
3. Install and restart extensions if asked

#### Install the **Better Jinja** (author: Samuel Colvin) for VS Code:

1. Open VS Code
2. Go to Extensions → Search for `jinja`
3. Install and restart extensions if asked

#### Configure VS Code for Syntax Highlighting

1. Search for "settings" in your VS Code settings (`Ctrl + ,`, control-comma).
2. Click "Edit in settings.json"
3. Merge in the config for syntax highlighting in Jinja templates:

```json
{
  "files.associations": {
    "*.jinja": "jinja-html",
    "*.jinja2": "jinja-html",
    "*.j2": "jinja-html"
  },
  "editor.formatOnSave": true,
  "djlint.format.enable": true
}
```

4. Save and close `settings.json`.

### 3.5 Run the Backend Server

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8080
```

Allow Python permission to host the development server.

Visit: `http://localhost:8080`

The frontend dev server at `http://localhost:5173` should now be completely functional. It proxies anything that needs to hit the backend with `localhost:8080` instead of `localhost:5173`. But you do not need to keep running the frontend server anymore if you don't want to, the backend server will cover it all, because you ran `npm run build` in the `frontend/` folder before you got here, didn't you?

### 3.6 Install the Tailwind CLI

Open another terminal.

```bash
cd backend
npm install
```

### 3.7 Run the Backend Tailwind Monitor

```bash
cd backend
echo "🔁 Watching ./app/templates/**/*.{jinja,j2,html} for Tailwind class changes..."
npx tailwindcss \
  -i ./app/static/css/tailwind.css \
  -o ./app/static/css/app.css \
  --content "./app/templates/**/*.{jinja,j2,html}" \
  --minify \
  --watch
```

This will start the Tailwind monitor necessary for live updates of Tailwind styling on the backend.

As always, the backend is server-side rendered, so the changes will not appear automatically in your browser when you save the file, you will need to reload the page. What the monitor does when you save a file with Tailwind utility classes is it quickly rebuilds a file called `app.css` that contains all of the styles you are using, and more importantly none of the Tailwind styles you are not using.

You don't need to run a Tailwind monitor on the frontend because Vite handles that for you. Eventually Vite will handle the backend monitoring too, in Emulsion, when the folder structure is unified.

Live reload is enabled. You can test rendering routes by modifying:

- `backend/app/routes/pages/demo/rendering/server-side.tsx`
- or any file within `backend/app/routes/`

---

## ✅ Step 4: Test Changes in Both Sides

Make sure both backend (`localhost:8080`) and frontend (`localhost:5173`) are running.

Try editing the Jinja2 page at:

```plaintext
backend/app/routes/pages/demo/rendering/server-side.jinja
```

and the corresponding React route:

```plaintext
frontend/src/routes/demo/rendering/ClientSideRendering.tsx
```

You’ll see changes appear live in the browser!

Remember that you will need to rebuild the frontend assets before they will be served by the backend at `localhost:8080`, which is the server that will be deployed, so you always build immediately before deploying as well.

```bash
cd frontend
npm run build
```

---

## 🚀 Step 5: Deploy to Production

### 5.1 Initialize Fly.io

If you haven’t already:

```bash
cd backend
fly auth login
fly launch  # follow the prompts
```

### 5.1 Deploy Backend to Fly.io

```bash
cd backend
fly deploy
```

The backend is served on port `8080` (already configured in `fly.toml`).

Wait for the new deployment to succeed. You should get a success response in the terminal and the process will end.

## 📦 Summary

You now have:

- Isolated Python virtualenv for backend
- Node-based Vite frontend with Tailwind CSS
- Live reload for both layers
- Easy local development and Fly.io production deployment

---

Happy hacking from **Funhouse Atelier**! 🎪

If you encounter bugs or want to suggest improvements, submit an issue or PR:
👉 [github.com/FunhouseAtelier/devstrap-core-template](https://github.com/FunhouseAtelier/devstrap-core-template)

---
