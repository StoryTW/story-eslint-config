import type { Linter } from 'eslint';

export const reactNextConfig: Linter.Config = {
  name: 'story/react/next',

  files: ['**/*.jsx', '**/*.tsx'],

  rules: {},
};
