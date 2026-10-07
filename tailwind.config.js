/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          maroon: "#5c0612",
          "maroon-dark": "#3b0007",
          "maroon-light": "#7c0a19",
          gold: "#d4af37",
          "gold-light": "#f8e5a1",
          "gold-dark": "#aa820a",
          cream: "#fdfbf7",
          "cream-dark": "#f4eedd",
          rose: "#c2415c",
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', '"Poppins"', 'sans-serif']
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.4)',
        'gold-inner': 'inset 0 0 15px rgba(212, 175, 55, 0.3)',
        'card-royal': '0 10px 30px -5px rgba(60, 5, 15, 0.5), 0 0 0 1px rgba(212, 175, 55, 0.4)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #bf953f 0%, #fcf6ba 25%, #b38728 50%, #fbf5b7 75%, #aa771c 100%)',
        'maroon-gradient': 'linear-gradient(180deg, #7c0a19 0%, #4a030c 100%)',
        'dark-overlay': 'linear-gradient(180deg, rgba(20, 3, 6, 0.4) 0%, rgba(15, 2, 4, 0.85) 100%)',
      }
    },
  },
  plugins: [],
}
