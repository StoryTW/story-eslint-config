import reactHooks from 'eslint-plugin-react-hooks';
import reactXPlugin from 'eslint-plugin-react-x';

import type { Linter } from 'eslint';

const reactHooksConfig = reactHooks.configs.flat.recommended;

export const reactBaseConfig: Linter.Config = {
  name: 'story/react/base',

  files: ['**/*.jsx', '**/*.tsx'],

  plugins: {
    ...reactHooksConfig.plugins,
    'react-x': reactXPlugin,
  },

  rules: {
    ...reactHooksConfig.rules,

    'react-hooks/exhaustive-deps': 'off',

    // react-x
    'react-x/no-missing-key': 'error',
  },
};
