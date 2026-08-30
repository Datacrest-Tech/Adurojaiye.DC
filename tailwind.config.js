/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Deep corporate navy — used for the navbar, footer and full-bleed
        // dark sections. Distinctly blue (not black), matching the tone of
        // the firm's own branding.
        ink: {
          DEFAULT: "#0B1F3A",
          light: "#142B4D",
          deep: "#242A2D",
        },
        // The site's primary blue — used for buttons, links, active states,
        // and highlight accents on both light and dark backgrounds.
        accent: {
          DEFAULT: "#155FCC",
          light: "#4B8CE0",
          dark: "#0C3E8C",
        },
        // Pure white — the base background colour across the site.
        paper: "#FFFFFF",
        slate: {
          soft: "#66748C",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      backgroundImage: {
        "ledger-lines":
          "repeating-linear-gradient(180deg, transparent, transparent 39px, rgba(21,95,204,0.08) 40px)",
      },
    },
  },
  plugins: [],
};
