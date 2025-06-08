// @/frontend/vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import path from "path";

export default defineConfig(({ command }) => {
  // const isDev = command === "serve";

  return {
    plugins: [react(), tailwindcss()],
    // base: isDev ? "./" : "/static/",
    // server: isDev
    //   ? {
    //       proxy: {
    //         "/api": "http://localhost:8080",
    //       },
    //     }
    //   : undefined,
    // resolve: {
    //   alias: {
    //     "@": path.resolve(__dirname, "./src"),
    //   },
    // },
    // build: {
    //   outDir: "../backend/app/static", // <-- copy built files into backend
    //   emptyOutDir: true,
    //   sourcemap: isDev,
    // },
  };
});
