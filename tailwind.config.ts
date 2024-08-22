import type { Config } from 'tailwindcss';
// import flowbite from 'flowbite/plugin';

// @ts-ignore: No typings
// import withMT from '@material-tailwind/html/utils/withMT';
import withMT from '@material-tailwind/react/utils/withMT';

// @see https://material-tailwind.com/docs/react/guide/next

// @see https://tailwindcss.com/docs/adding-custom-styles
// @see https://tailwindcss.com/docs/theme

const config: Config = {
  // @see https://tailwindcss.com/docs/dark-mode
  // darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    // './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  colors: {
    blue: '#1fb6ff',
    purple: '#7e5bef',
    pink: '#ff49db',
    orange: '#ff7849',
    green: '#13ce66',
    yellow: '#ffc82c',
    'gray-dark': '#273444',
    gray: '#8492a6',
    'gray-light': '#d3dce6',
    'app-red': '#b23',
  },
  plugins: [
    // @see https://flowbite.com/docs/getting-started/quickstart
    // flowbite,
  ],
};

export default withMT(config);
