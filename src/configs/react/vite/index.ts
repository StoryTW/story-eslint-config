import reactRefresh from 'eslint-plugin-react-refresh';

import type { Linter } from 'eslint';

export const reactViteConfig: Linter.Config = {
  name: 'story/react/vite',

  files: ['**/*.jsx', '**/*.tsx'],

  plugins: {
    'react-refresh': reactRefresh,
  },

  rules: {
    ...reactRefresh.configs.vite.rules,
  },
};
