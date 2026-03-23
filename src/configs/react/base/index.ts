import reactHooks from 'eslint-plugin-react-hooks';
import reactXPlugin from 'eslint-plugin-react-x';

import type { Linter } from 'eslint';

export const reactBaseConfig: Linter.Config = {
  name: 'story/react/base',

  files: ['**/*.jsx', '**/*.tsx'],

  plugins: {
    'react-hooks': reactHooks,
    'react-x': reactXPlugin,
  },

  rules: {
    ...reactHooks.configs.recommended.rules,

    'react-hooks/exhaustive-deps': 'off',

    // react-x
    'react-x/no-missing-key': 'error',
  },
};
