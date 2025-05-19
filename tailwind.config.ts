import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: {
      center: true,
      maxWidth: "100%",
      padding: {
        DEFAULT: "24px",
        lg: "64px",
        xl: "64px",
      },
      screens: {
        md: "1024px",
        lg: "1360px",
        xl: "1920px",
      },
    },
    extend: {
      colors: {
        "background": "#FCF9F7",
        "background-dark": "#F8F5F2",
        "lines": "#F1EBE8",
        "primary-dark": "#581A2C",
        "primary-darker": "#4C1021",
        "ui-900": "#242424",
        "ui-800": "#333333",
        "ui-700": "#4A4A4A",
        "ui-600": "#555555",
        "ui-500": "#707070",
        "ui-400": "#999999",
        "ui-300": "#BABABA",
        "ui-200": "#DDDDDD",
        "ui-100": "#EEEEEE",
        "ui-050": "#F5F5F5",
      },
      animation: {
        sliding: "sliding 30s linear infinite",
        slide: "slide 25s infinite linear",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      transitionDuration: {
        "3000": "3s",
      },
      transitionProperty: {
        'height': 'height',
      },
      backgroundImage: {
        "banner-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
        "carousel-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.64) 100%)",
        "header-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%)",
        "video-controls":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)",
      },
      fontSize: {
        h1: [
          "40px",
          {
            lineHeight: "48px",
            letterSpacing: "0.16em",
            fontWeight: "500",
          },
        ],
        h2: [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "0.08em",
            fontWeight: "400",
          },
        ],
        h3: [
          "28px",
          {
            lineHeight: "40px",
            letterSpacing: "0.08em",
            fontWeight: "600",
          },
        ],
        h4: [
          "22px",
          {
            lineHeight: "32px",
            letterSpacing: "0.08em",
            fontWeight: "600",
          },
        ],
        h5: [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0.24em",
            fontWeight: "600",
          },
        ],
        h1Mobile: [
          "34px",
          {
            lineHeight: "40px",
            letterSpacing: "0.16em",
            fontWeight: "500",
          },
        ],
        h2Mobile: [
          "28px",
          {
            lineHeight: "32px",
            letterSpacing: "0.08em",
            fontWeight: "400",
          },
        ],
        h3Mobile: [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "0.08em",
            fontWeight: "600",
          },
        ],
        h4Mobile: [
          "20px",
          {
            lineHeight: "24px",
            letterSpacing: "0.08em",
            fontWeight: "600",
          },
        ],
        h5Mobile: [
          "12px",
          {
            lineHeight: "24px",
            letterSpacing: "0.24em",
            fontWeight: "600",
          },
        ],
        content: [
          "15px",
          {
            lineHeight: "24px",
            letterSpacing: "0.06em",
            fontWeight: "300",
          },
        ],
        contentMini: [
          "14px",
          {
            lineHeight: "24px",
            letterSpacing: "0.06em",
            fontWeight: "300",
          },
        ],
        legend: [
          "10px",
          {
            lineHeight: "16px",
            letterSpacing: "0.08em",
            fontWeight: "400",
          },
        ],
        caption: [
          "10px",
          {
            lineHeight: "16px",
            letterSpacing: "0.24em",
            fontWeight: "500",
          },
        ],
        button: [
          "11px",
          {
            lineHeight: "24px",
            letterSpacing: "0.24em",
            fontWeight: "500",
          },
        ],
      },
    },
  },
};
