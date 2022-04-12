module.exports = {
  content: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      black: ["LeferiPoint-BlackA"],
      cafe: ["Cafe24Ssurround"],
      cafeAir: ["Cafe24SsurroundAir"],
    },
    extend: {
      width: {
        img: "40rem",
      },
      height: {
        img: "28rem",
        700: "700px",
        80: "80%",
      },
      keyframes: {
        slider: {
          "0%": {
            transform: "translateX(0px)",
          },
          "100%": {
            transform: "translateX(100px)",
          },
        },
        shadowBox: {
          "0%": [
            { transform: "translateZ(0px)" },
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
        slider: "slider",
      },
      colors: {
        "bg-basic": "#e9d5a1",
        "bg-icon": "#040203",
        "bg-black": " #1f1f1f",
        "dark-basic": "#efe1bd",
        "bg-nav": "#282c34",
        icon: "#f8f5f4",
      },
      boxShadow: {
        "3xl": "0 0 20px 0 rgba(0,0,0,.35)",
        "4xl": "0 25px 50px 0px rgba(0,0,0,.35) ",
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
