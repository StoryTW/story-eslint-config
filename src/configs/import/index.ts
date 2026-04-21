import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import importXPlugin from 'eslint-plugin-import-x';
import unusedImports from 'eslint-plugin-unused-imports';

import type { Linter } from 'eslint';

export const importConfig: Linter.Config = {
  name: 'story/import',

  plugins: {
    'unused-imports': unusedImports,
    'import-x': importXPlugin,
  },
  settings: {
    'import-x/resolver-next': [
      createTypeScriptImportResolver(),
    ],
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

    'import-x/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'index', 'sibling', 'type'],
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: '@/**', group: 'internal', position: 'after' },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        distinctGroup: false,
      },
    ],

    'import-x/newline-after-import': ['warn', { count: 1 }],
  },
};
