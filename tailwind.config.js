module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{html,js, jsx}",
    "./components/**/*.{html,js, jsx}",
    "./layout/**/*.{html,js, jsx}",
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
