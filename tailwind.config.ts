import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl': ['72px', '82px'],
      '8xl': ['96px', '106px'],
      '12xl': ['144px', '159px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'purple': '#452c63',
        'purple-bright': 'rgb(89,64,119)',
        'purple-op': 'rgba(69,44,99,0.305)',
        'black': '#131312',
        'black-op': 'rgba(19,19,18,0.4)',
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'menu': "url('assets/images/Umjetnicka-slika-sa-3-vrste-burgera.jpg')",
        'menu-darken': "url('assets/images/Umjetnicka-slika-sa-3-vrste-burgera-zatamljena-desktop.png')",
        'menu-darken-mobile': "url('assets/images/Umjetnicka-slika-sa-3-vrste-burgera-zatamljena.png')",
        'footer': "url('assets/images/sahara-noir-marble_enhanced.png')",
        'quartz': "url('assets/images/wave-iron-qaurtz.jpeg')",
        'image1': "url('assets/images/Pizza-jelovnik.jpg')",
        'image2': "url('assets/images/Plate-jelovnik.jpg')",
        'image3': "url('assets/images/Njoki-jelovnik.jpg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
} satisfies Config;
