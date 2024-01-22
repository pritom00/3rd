/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        tomato: "#ff4240",
        gray: {
          "100": "#131318",
          "200": "rgba(19, 19, 24, 0.6)",
          "300": "rgba(19, 19, 24, 0.2)",
          "400": "rgba(19, 19, 24, 0.1)",
          "500": "rgba(19, 19, 24, 0.4)",
          "600": "rgba(19, 19, 24, 0.3)",
          "700": "rgba(19, 19, 24, 0.03)",
          "800": "rgba(255, 255, 255, 0.8)",
          "900": "rgba(255, 255, 255, 0.6)",
          "1000": "rgba(19, 19, 24, 0.5)",
        },
        yellowgreen: "rgba(188, 237, 109, 0.1)",
        khaki: "rgba(253, 221, 95, 0.1)",
        cornflowerblue: "rgba(98, 156, 243, 0.1)",
        "dark-02": "#424247",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "9xl": "28px",
      "5xl": "24px",
      lg: "18px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
