import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

import type { Linter } from 'eslint';

export const importConfig: Linter.Config = {
  name: 'story/import',

  plugins: {
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

    'import/order': [
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

    'import/newline-after-import': ['warn', { count: 1 }],
  },
};
