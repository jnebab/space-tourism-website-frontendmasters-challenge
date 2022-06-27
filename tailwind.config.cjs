/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      dark: "#0B0D17",
      white: "#FFFFFF",
      neutral: "#D0D6F9",
    },
    letterSpacing: {
      wide: "0.146875rem",
      wider: "0.16875rem",
      widest: "0.295rem",
    },
    extend: {
      fontSize: {
        body: ["1.125rem", { lineHeight: "2rem" }],
        nav: ["1rem", { lineHeight: "1.2rem", letterSpacing: "2.7ch" }],
        sh2: ["0.875rem", { lineHeight: "1.05rem" }],
        sh1: ["1.75rem", { lineHeight: "2rem", letterSpacing: "2.35ch" }],
        "3.5xl": ["1.75rem", { lineHeight: "2.1rem", letterSpacing: "4.75ch" }],
        "4xl": ["2rem", { lineHeight: "2rem" }],
        "6xl": ["3.5rem", { lineHeight: "4rem" }],
        "8xl": ["6.25rem", { lineHeight: "7.1875rem" }],
        "2xxl": ["9.375rem", { lineHeight: "10.75rem" }],
      },
      fontFamily: {
        serif: [
          "Bellefair",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        sans: [
          "Barlow",
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        "sans-condensed": ["Barlow Condensed", "sans-serif"],
      },
      backgroundImage: {
        "h-mobile":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656220774/space-tourism/background-home-mobile_vb4zqv.jpg')",
        "h-tablet":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656220774/space-tourism/background-home-tablet_vewfls.jpg')",
        "h-desktop":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656220774/space-tourism/background-home-desktop_ahyjiq.jpg')",
        "d-mobile":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223078/space-tourism/background-destination-mobile_vcrry3.jpg')",
        "d-tablet":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223078/space-tourism/background-destination-tablet_om5oyo.jpg')",
        "d-desktop":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223078/space-tourism/background-destination-desktop_tajwdj.jpg')",
        "c-mobile":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223108/space-tourism/background-crew-mobile_tqvff7.jpg')",
        "c-tablet":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223108/space-tourism/background-crew-tablet_bpbkob.jpg')",
        "c-desktop":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223108/space-tourism/background-crew-desktop_unjotf.jpg')",
        "sl-mobile":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223137/space-tourism/background-technology-mobile_c43xed.jpg')",
        "sl-tablet":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223137/space-tourism/background-technology-tablet_lux7tj.jpg')",
        "sl-desktop":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223137/space-tourism/background-technology-desktop_zua5zh.jpg')",

        "space-port-portrait":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223139/space-tourism/image-spaceport-portrait_kxahme.jpg')",
        "space-port-landscape":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223139/space-tourism/image-spaceport-landscape_jnzpe9.jpg')",

        "launch-vehicle-portrait":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223139/space-tourism/image-spaceport-portrait_kxahme.jpg')",
        "launch-vehicle-landscape:":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223139/space-tourism/image-spaceport-portrait_kxahme.jpg')",

        "space-capsule-portrait":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223138/space-tourism/image-space-capsule-portrait_n4kdy1.jpg')",
        "space-capsule-landscape":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656223137/space-tourism/background-technology-desktop_zua5zh.jpg')",
      },
    },
  },
  plugins: [],
};
