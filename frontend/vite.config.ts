// frontend/vite.config.ts

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ command, mode }) => {
  // TODO: check which of the two options below is most appropriate for each conditional in the return value
  const isDev = command === "serve";
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss()],
    // base: isDev ? "./" : "/static/",
    base: "./",
    // define: {
    //   __API_BASE_URL__: JSON.stringify(env.VITE_API_BASE_URL),
    // },
    // server: isDev
    //   ? {
    //       proxy: {
    //         "/api": "http://localhost:8080",
    //       },
    //     }
    //   : undefined,
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "../backend/app/static",
      emptyOutDir: true,
      manifest: true,
      // sourcemap: isDev,
    },
  };
});
