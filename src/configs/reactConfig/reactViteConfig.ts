import type { Linter } from 'eslint';
import reactRefresh from 'eslint-plugin-react-refresh';

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
