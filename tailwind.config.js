/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "var(--poppins)",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primaryColor: "var(--primaryColor)",
        secondColor: "var(--secondColor)",
        thirdColor: "var(--thirdColor)",
        paraGraphColor: "var(--paraGraphColor)",
        whites: "var(--whites)",
        blacks: "var(--blacks)",
      },
    },
  },
  plugins: [],
};
