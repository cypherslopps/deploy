const { blackA, green, mauve, violet } = require('@radix-ui/colors');
const { colors } = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        ss: "300px",
        xxs: "375px",
        xs: "425px",
        "md-md": "734px",
        "md-lg": "992px",
        xl: "1200px"
      },
      fontFamily: {
        sans: ["open sans hebrew", ...fontFamily.sans]
      },
      width: {
        supportItemBox: "calc(( 100% / 7) - (400px / 7 * 6))",
        iphoneAccessoriesHeroImage: "calc(100% - 300px - 60px)",
        iphoneAccessoriesHeroImageLaptop: "calc(100% - 240px - 60px)"
      },
      colors: {
        ...blackA,
        ...green,
        ...mauve,
        ...violet,
        ...colors,
        app: {
          border: "#ddd",
          "border-light": "#d4d4d4",
          "border-dark": "rgba(101, 101, 101, 0.5)",
          text: "#222",
          "text-dark": "#1d1d1d",
          "text-dark-7": "#14141f",
          "text-dark-8": "#333",
          "text-dark-9": "#1d1d1f"
        },
        gradient: {
          "grey": "linear-gradient(180deg, #fbfbfd 0px, #f2f2f2 350px)",
          "gallery-overlay": "linear-gradient(0deg, #000000aa, #00000000)",
          "istore-care": "linear-gradient(180deg,rgba(255,255,255,0) 0,#f5f5f5)",
          "istore-care-sm": "linear-gradient(180deg,rgba(255,255,255,0) 0,#f5f5f5)"
        },
        grey: {
          50: "#fafafa",
          70: "#f1f1f1",
          100: "#fbfbfd",
          200: "#f2f2f2",
          250: "#f5f5f7",
          300: "#f5f5f5",
          350: "#f6f6f6",
          360: "#f7f7f7",
          370: "#f8f8f8",
          400: "#eee",
          500: "#86868b",
          700: "#515151",
          800: "#555",
          820: "#888888",
          830: "#777",
          850: "#999",
          900: "#666666"
        },
        primary: {
          300: "#1a5876",
          400: "#004567",
          450: "#004466",
          460: "#004467",
          500: "#004567",
          550: "#064869",
          600: "#003e5d",
          700: "#003752",
          800: "#003048",
          900: "#00293e"
        },
        accent: {
          400: "#fa9d04",
          500: "#ff9f0a",
          600: "#ed6e36"
        },
        tertiary: {
          500: "#046"
        },
        secondary: {
          300: "#0071e3",
          500: "#06c",
          600: "#08c"
        },
        facebook: "#4267B2",
      },
      fontSize: {
        md: [".97rem", "1.5rem"],
        "1.4xl": ["1.4em", "1.5"],
        "4.4xl": ["40px", "2.6rem"],
        "4.5xl": ["2.5rem", "2.7rem"],
        "4.7xl": ["2.7rem", "2.7rem"],
        "5.2xl": ["3.2rem", "1.09"],
        "5.5xl": ["54px", "1.08349"],
        "6.4xl": ["64px", "1.08349"],
        "6.6xl": ["66px", "1.09"],
        "2.2xl": ["26px", "1.16667"]
      },
      opacity: {
        15: .15,
        85: .85
      },
      gridTemplateColumns: {
        cartBasket: "4rem 1fr 6.5rem"
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
        "2.5xl": "18px"
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
      boxShadow: {
        mobileNav: "0 .3em .1em rgba(150,150,150,0.05)",
        iKColors: "inset .5px .5px 2px -1px #333",
        productColors: "inset 0 2px 5px #00000030, inset 0 -1px 1px #ffffff40"
      }
    },
  },
  plugins: [],
}