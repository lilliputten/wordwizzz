import type { Config } from 'tailwindcss';
import tinycolor from 'tinycolor2';
import withMT from '@material-tailwind/react/utils/withMT';

import { TColor } from '@/core/types/generic';

const primaryColor = '#b22';
const orangeColor = '#fb1';

/** Color spreading helper */
function getColorSpread(id: string, color: string) {
  return {
    [`${id}-50`]: tinycolor(color).darken(45).toHexString(),
    [`${id}-100`]: tinycolor(color).darken(40).toHexString(),
    [`${id}-200`]: tinycolor(color).darken(30).toHexString(),
    [`${id}-300`]: tinycolor(color).darken(20).toHexString(),
    [`${id}-400`]: tinycolor(color).darken(10).toHexString(),
    [id]: color,
    [`${id}-500`]: color,
    [`${id}-600`]: tinycolor(color).lighten(10).toHexString(),
    [`${id}-700`]: tinycolor(color).lighten(20).toHexString(),
    [`${id}-800`]: tinycolor(color).lighten(30).toHexString(),
    [`${id}-900`]: tinycolor(color).lighten(40).toHexString(),
    [`${id}-950`]: tinycolor(color).lighten(45).toHexString(),
  } as Record<string, TColor>;
}

// Core app color definitions
const primaryColorSpread = getColorSpread('primary', primaryColor);
const orangeColorSpread = getColorSpread('orange', orangeColor);

const config: Config = {
  // @see https://tailwindcss.com/docs/dark-mode
  // darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* backgroundImage: {
       *   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
       *   'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
       * },
       */
      colors: {
        // primary: primaryColor,
        // orange: orangeColor,
        ...primaryColorSpread,
        ...orangeColorSpread,
      },
    },
  },
};

export default withMT(config);
