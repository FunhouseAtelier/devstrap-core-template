// backend/tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/static/build/**/*.{jinja,j2,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
