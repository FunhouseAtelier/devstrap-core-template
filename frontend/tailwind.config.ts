// @/frontend/tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  // purge: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
