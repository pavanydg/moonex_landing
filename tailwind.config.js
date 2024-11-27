/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        p1: "#E4B40D",
        p2: "#F9D423",
        bg_p1: "#071624"
      },
      fontFamily: {
        'raleway': ['raleway', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}

