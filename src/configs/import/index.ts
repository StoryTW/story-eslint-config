import type { Linter } from 'eslint';

import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

export const importConfig: Linter.Config = {
  name: 'story/import',

  plugins: {
    'simple-import-sort': simpleImportSort,
    'unused-imports': unusedImports,
    import: importPlugin,
  },

  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],

    // ------- //
    // [OFF AUTODELETE UNUSED IMPORTS]
    // ------- //
    // 'unused-imports/no-unused-imports': 'warn',

    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^\\u0000'], // side effect imports
          ['\\u0000$'], // all type imports
          ['^react', '^react-dom'], // react
          ['^@?\\w'], // external packages
          ['^@/'], // internal aliases
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // parent imports
          ['^\\./(?=.*/)', '^\\.(?!/?$)', '^\\./?$'], // local imports
          ['^.+\\.(css|scss|sass)$'], // styles
        ],
      },
    ],

    'simple-import-sort/exports': 'warn',

    'import/newline-after-import': ['warn', { count: 1 }],
  },
};
