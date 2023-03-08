// instant page
import 'instant.page';

// twind
import { install, injectGlobal } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
import presetTypography from '@twind/preset-typography';

install({
  presets: [presetAutoprefix(), presetTailwind(), presetTypography()],
  darkMode: 'class',
  hash: false,
  theme: {
    extend: {
      colors: ({ theme }) => ({
        // pri: theme('colors.orange'),
      }),
      fontFamily: ({ theme }) => ({
        sans: 'Raleway,'+ theme('fontFamily.sans'),
      }),
    },
  },
  rules: [
    ['bg-grid', { 'background-image': 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\' width=\'4\' height=\'4\'><rect x=\'0\' y=\'0\' width=\'2\' height=\'2\' fill=\'rgba(5,5,5,.33)\'></rect></svg>")', }],
    ['bg-close', { 'background-image': 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 10 10\' width=\'10\' height=\'10\'><g fill=\'rgba(255,255,255,.66)\' fill-rule=\'evenodd\'><polygon points=\'8 0 10 2 7 5 10 8 8 10 5 7 2 10 0 8 3 5 0 2 2 0 5 3\'></polygon></g></svg>")', }],
  ],
});

injectGlobal({
  '.nav.active': { 'box-shadow': 'inset 0 -2px white' },
  // '.prose p,.prose ul,.prose ol': { '@apply': 'mb-6 md:mb-8' },
  // '.prose ul': { '@apply': 'list-(disc inside)' },
  // '.prose ol': { '@apply': 'list-(decimal inside)' },
  // '.prose blockquote': { '@apply': 'mb-6 p-4 border-(l-4 gray-500 opacity-50) bg-(black opacity-5) md:mb-8' },
  // '.prose blockquote > p:last-child': { '@apply': 'mb-0' },
  '.prose img': { '@apply': 'mx-auto block' },
});