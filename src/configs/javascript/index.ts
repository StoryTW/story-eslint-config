import type { Linter } from 'eslint';

import js from '@eslint/js';
import globals from 'globals';

export const javascriptConfig: Linter.Config[] = [
  {
    ...js.configs.recommended,

    name: 'story/javascript',

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },

    rules: {},
  },
];
