/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      ssm: "360px", // Small screens (e.g., Extra small smartphones)
      xsm: "500px", // Small screens (e.g., small smartphones)
      sm: "640px", // Small screens (e.g., normal smartphones)
      md: "768px", // Medium screens (e.g., tablets)
      lg: "1024px", // Large screens (e.g., small laptops)
      xl: "1280px", // Extra-large screens (e.g., desktops)
      xlg: "1300px", // Large screens (e.g., normal laptops)
    },
    extend: {
      fontSize: {
        lg: "1rem",
        xl: "1.125rem",
        "2xl": "1.25rem",
        xsm: [
          "2rem",
          {
            lineHeight: "2.2rem",
          },
        ],
      },

      fontFamily: {
        nunito: ["Nunito"],
      },
      backgroundImage: {
        FooterBg: "url('/assets/images/Footer.webp')",
        MobileFooterBg: "url('/assets/images/FooterMobile.webp')",
        DesktopHomeBanner: "url('/assets/images/HomePage/home-banner.webp')",
        HomeContactUs: "url('/assets/images/HomePage/ContactUs.svg')",
        lines: "linear-gradient(90deg,transparent,#fff,transparent)",
        priceline:
          "linear-gradient(149deg, rgba(24, 24, 24, 0.00) 0%, #60AAF6 51.04%, rgba(24, 24, 24, 0.00) 100%)",
        activebg: "url('/Group 51405.svg')",
        ring1: "url('/assets/images/HomePage/ChooseUs/ring.svg')",
      },
      colors: {
        primary: "#60AAF6",
        black: {
          overlay: "hsl(0, 0%, 0%, 0.75)",
        },
      },
      keyframes: {
        "rotate-0": { transform: "rotate(0)" },
        "rotate-180": { transform: "rotate(180deg)" },
      },
      animation: {
        "spin-slow": "rotate-0 2s linear, rotate-180 2s linear",
      },
      dropShadow: {
        primary: "0 4px 15px rgba(0,0,0,.07)",
        tablet: "0px 4px 50px rgba(0, 0, 0, 0.07)",
      },
    },
    variants: {
      extend: {
        display: ["even", "odd"], // Enable odd and even variants for the display property
        translate: ["odd", "even"], // Enable odd and even variants for the translate property
      },
    },
  },
  plugins: [],
};
