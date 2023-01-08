module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#544AF4",
        secondary: "#63f861ff",
        darkMode: "#171717",
        lightMode: "#F1F5F9",
      },
      maxHeight: {
        128: "48rem",
        "1080p": "1080px",
      },
      maxWidth: {
        "1080p": "1920px",
      },
      minHeight: {
        movil: "550px",
      },
    },
  },
  plugins: [],
};
