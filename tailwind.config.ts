/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pirate: "#7f0622",
        politician: "#d62411",
        gold_digger: "#ff8426",
        taxi: "#ffd100",
        karen: "#ff2674",
        intern: "#430067",
        lawyer: "#234975",
        thief: "#68aed4",
        gamer: "#bfff3c",
        farmer: "#10d275",
      },
    },
  },
  plugins: [],
};
