/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        orange: {
          100: "#FBFCF1",
          200: "#FDD298",
        },
        yellow: {
          200: "#F7E179",
        },
        blue: {
          100: "#EDFFFF",
          200: "#96D4E5",
        },
        green: {
          200: "#418A35",
        },
        pink: {
          100: "#ffece6",
          200: "#F19E94",
        },
      },
      fontSize: {
        md: "1rem",
      },
      boxShadow: {
        pink: "10px 10px 0px 0px #F19E94",
        orange: "-5px -5px 0px 0px #FDD298",
      },
    },
  },
  plugins: [],
};
