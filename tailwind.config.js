module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./layout/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        myRed: "#FF5F5F",
        gradTop: "#FF8686",
        gradBottom: "#FF4747",
        softBg: "#FFF3F3",
      },
      width: {
        s: "1px",
      },
    },
  },
  plugins: [],
}
