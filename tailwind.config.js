module.exports = {
     purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
     darkMode: false, // or 'media' or 'class'
     theme: {
          fontFamily: {
               joe: ["Josefin Sans", "sans-serif"],
               pac: ["Pacifico", "cursive"],
               lato: ["Lato", "sans-serif"],
               src: ["Source Sans Pro", "sans-serif"],
               pop: ["Poppins", "sans-serif"],
          },
          extend: {},
     },
     variants: {
          extend: {},
     },
     plugins: [],
};
