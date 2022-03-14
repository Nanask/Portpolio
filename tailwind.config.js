module.exports = {
  content: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      black: ["LeferiPoint-BlackA"],
      bold: ["LeferiBaseType-BoldA"],
      regular: ["LeferiBaseType-RegularA"],
      special: ["LeferiPoint-SpecialA"],
    },
    extend: {
      colors: {
        "bg-basic": "#e9d5a1",
        "bg-icon": "#040203",
        "bg-black": " #1f1f1f",
        icon: "#f8f5f4",
      },
      boxShadow: {
        "3xl": "0px 0px 20px #000;",
      },
    },
  },
  plugins: [],
};
