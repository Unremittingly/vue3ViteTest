module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        inherit: "inherit",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
        6: "6 6 0%",
        7: "7 7 0%",
        8: "8 8 0%",
      },
      backgroundImage: {
        // login: "url('/src/assets/images/login-bg.png')",
        login: "url('/src/assets/images/loginImg.png')",
        logo: "url('/src/assets/images/logo.png')",
        title: "url('/src/assets/images/title.png')",
      },
      colors: {
        primary: "#38a0ff",
        secondary: "#081f3d",
        gary: "#ebebeb",
      },
      height: {
        content: "calc(100vh - 144px)",
        calc_230: "calc(100vh - 230px)",
        700: "700px",
        60: "60px",
        451: "451px",
        515: "515px",
      },
      minHeight: {
        content: "calc(100vh - 60px)",
        20: "80px",
      },
      width: {
        "87.5%": "87.5%",
        1: "1px",
        464: "464px",
        "40%": "40%",
        486: "486px",
        462: "462px",
      },
      maxWidth: {
        1680: "1680px",
      },
      gap: {
        326: "326px",
      },
    },
  },
  plugins: [],
};
