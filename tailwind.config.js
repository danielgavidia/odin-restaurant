/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
     theme: {
          extend: {
               fontFamily: {
                    space: ['Space Mono', 'monospace'],
                    nunito: ['Nunito Sans', 'sans-serif'],
                    comfortaa: ['Comfortaa', 'cursive'],
                    playfair: ['Playfair', 'serif']
               }
          },
     },
     plugins: [],
}

