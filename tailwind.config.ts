import { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const boxShadowBase = '0 4px 0 0';

const toyShadows = () => {
  const elements = {};
  const toIgnore = [
    'lightBlue',
    'warmGray',
    'trueGray',
    'coolGray',
    'blueGray',
  ];

  Object.keys(colors).forEach((color) => {
    if (toIgnore.includes(color)) return;

    Object.keys(colors[color]).forEach((value) => {
      elements[
        `toy-${color}-${value}`
      ] = `${boxShadowBase} ${colors[color][value]}`;
    });
  });

  return elements;
};

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand'],
      },
      boxShadow: {
        ...toyShadows(),
      },
    },
  },
  plugins: [],
} satisfies Config;
