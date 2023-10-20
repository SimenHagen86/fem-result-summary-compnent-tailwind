/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ' p-lightred': 'hsl(0, 100%, 67%)',
      'p-Orangeyyellow': 'hsl(39, 100%, 56%)',
      'p-Greenteal': 'hsl(166, 100%, 37%)',
      'p-Cobaltblue': 'hsl(234, 85%, 45%)',
      'g-Lightslateblue': 'hsl(252, 100%, 67%)',
      'g-Lightroyalblue': 'hsl(241, 81%, 54%)',
      'g2-violetblue ': 'hsla(256, 72%, 46%, 1)',
      'g2-Persianblue': 'hsla(241, 72%, 46%, 0)',
      ' White': 'hsl(0, 0%, 100%)',
      Paleblue: 'hsl(221, 100%, 96%)',

      Lightlavender: 'hsl(241, 100%, 89%)',

      Darkgrayblue: 'hsl(224, 30%, 27%)',
    },
    extend: {},
  },
  plugins: [],
}
