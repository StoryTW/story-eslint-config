import nextPlugin from '@next/eslint-plugin-next';
import reactRefresh from 'eslint-plugin-react-refresh';

import type { Linter } from 'eslint';

export const reactNextConfig: Linter.Config = {
  name: 'story/react/next',

  files: ['**/*.{js,jsx,ts,tsx}'],

  plugins: {
    '@next/next': nextPlugin,
    'react-refresh': reactRefresh,
  },

  rules: {
    ...nextPlugin.configs['core-web-vitals'].rules,
    ...reactRefresh.configs.next.rules,
  },
};
