const defaultTheme = require("tailwindcss/defaultTheme");
// opacity value will be 1 if no opacity defined
function opacityCalculation(variable) {
  return ({ opacityValue }) => `hsla(var(${variable}), ${opacityValue || 1} )`;
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          cyan: opacityCalculation("--primary-cyan"),
          violet: opacityCalculation(" --primary-dark-violet"),
        },
        secondary: {
          red: opacityCalculation("--secondary-red"),
        },
        neutral: {
          gray: opacityCalculation("--neutral-gray"),
          "grayish-violet": opacityCalculation("--neutral-grayish-violet"),
          "dark-blue": opacityCalculation("--neutral-very-dark-blue"),
          "dark-violet": opacityCalculation("--neutral-very-dark-violet"),
          "bg" :opacityCalculation("--bg"),
        },
      },
      fontFamily: {
        mono: ["Poppins", ...defaultTheme.fontFamily.mono],
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
    },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
