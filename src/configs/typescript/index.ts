import tseslint from 'typescript-eslint';

import type { Linter } from 'eslint';

export const typescriptConfig: Linter.Config[] = [
  {
    name: 'story/typescript',

    files: ['**/*.ts', '**/*.tsx'],

    languageOptions: {
      parser: tseslint.parser,

      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },

    rules: {
      ...tseslint.configs.recommended.flat,
      // my rules
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];
