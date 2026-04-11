import reactRefresh from 'eslint-plugin-react-refresh';

import type { Linter } from 'eslint';

export const reactNextConfig: Linter.Config = {
  name: 'story/react/next',

  files: ['**/*.jsx', '**/*.tsx'],

  plugins: {
    'react-refresh': reactRefresh,
  },

  rules: {
    ...reactRefresh.configs.next.rules,
  },
};
