module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        128: "48rem",
        "1080p": "1080px",
      },
      maxWidth: {
        "1080p": "1920px",
      },
    },
  },
  plugins: [],
};
