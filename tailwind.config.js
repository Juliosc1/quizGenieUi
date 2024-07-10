/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        quad: ['Questrial', 'sans-serif']
      },
      colors: {
        //basic_color: "#ECEEF3",
        basic_color: "#E4E4E7",
        primary_color: "#4F46E5",
        secondary_color: "#2C3D8F",
        secondary_color_hover: "#3D50A3",
        success_color: "#2E7D32",
        success_color_hover: "#266429",
        warning_color: "#937006",
        text_color: "#0f172a",
        text_color_gray:"#545869",
        /* text_color_gray:"#595959", */
        color_gray: "#f6f6f7",
        color_white: "#ffffff",
        'primary': {
          100: "#D9E7F8",
          200: "#B3CEF1",
          300: "#8CB5EA",
          400: "#659CE3",
          500: "#0461CF",
          600: "#0451B0",
          700: "#034491",
          800: "#023872",
          900: "#012B53", 
        },

        'basic': {
          50: "#f6f6f7",
          100: "#efeff0",
          200: "#e1e2e4",
          300: "#cecfd3",
          400: "#b9bac0",
          500: "#a1a1aa",
          600: "#91919a",
          700: "#7d7d85",
          800: "#66666d",
          900: "#55555a",
          950: "#323234",
        }
      },
    },
  },
  plugins: [],
};
