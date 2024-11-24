/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,yml}'],
	theme: {
        extend: {
          // using https://uicolors.app/create
          colors: {
            primary: {
              '50': '#f6faf3',
              '100': '#e9f5e3',
              '200': '#d3eac8',
              '300': '#afd89d',
              '400': '#82bd69',
              '500': '#61a146',
              '600': '#4c8435',
              '700': '#3d692c',
              '800': '#345427',
              '900': '#2b4522',
          },
          secondary: {
            '50': '#fbf6f5',
            '100': '#f6ecea',
            '200': '#f0dcd8',
            '300': '#e4c3bd',
            '400': '#d3a096',
            '500': '#ba7264',
            '600': '#aa6558',
            '700': '#8e5347',
            '800': '#77463d',
            '900': '#643f38',
        },
        accent: {
          '50': '#fefaec',
          '100': '#fbf0ca',
          '200': '#f7e190',
          '300': '#f2c94c',
          '400': '#f0b82f',
          '500': '#e99817',
          '600': '#ce7411',
          '700': '#ab5212',
          '800': '#8b4115',
          '900': '#723615',
      },
      
          },
          fontFamily: {
            sans: ['Open Sans', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
          },
          borderRadius: {
            'xl': '1rem',
            '2xl': '2rem',
          },
          boxShadow: {
            'lg-green': '0 10px 15px -3px rgba(34, 139, 34, 0.1), 0 4px 6px -2px rgba(34, 139, 34, 0.05)',
            '2xl-green': '0 25px 50px -12px rgba(34, 139, 34, 0.25)',
          },
        },
      },
      plugins: [
        require('@tailwindcss/typography'),
      ],

}
