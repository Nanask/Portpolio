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
      keyframes: {
        shadowBox: {
          "0%": [
            { transform: "translateZ(0)" },
            {
              boxShadow: " 0 0 0 0 rgba(0, 0, 0, 0)",
            },
          ],
          "100%": [
            { transform: "translateZ(50px)" },
            {
              boxShadow: "0 0 20px 0px rgba(0, 0, 0, 0.35)",
            },
          ],
        },
      },
      animation: {
        shadowBox: "shadowbox 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      colors: {
        "bg-basic": "#e9d5a1",
        "bg-icon": "#040203",
        "bg-black": " #1f1f1f",
        icon: "#f8f5f4",
      },
      boxShadow: {
        "3xl": "0 0 20px 0 rgba(0,0,0,.35)",
      },
    },
    variants: {
      extend: {
        animation: ["hover"],
      },
    },
  },
  plugins: [],
};
