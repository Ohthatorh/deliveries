import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        tableBg: "#262626",
        tableBorder: "#4D4D4D",
        paginationActive: "#363636",
        grey: "#8B8B8B",
      },
    },
  },
  plugins: [],
} satisfies Config;
