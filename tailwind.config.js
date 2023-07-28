/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        shadz: '4px 6px 1px black',
      },
      colors: {
        neoblue: '#7df9ff',
        neogreen: '#2fff2f',
        neocard: '#ffb2ef',
        neotext: '#BAFca2',
        neobackground: 'rgba(246, 90, 79, 255)',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'font-spicy': 'var(--font-spicy)',
      },
    },
  },
  plugins: [],
};
