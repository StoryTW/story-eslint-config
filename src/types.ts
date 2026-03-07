import type { Linter } from 'eslint';

export type ConfigOption
  = | boolean
    | [
      boolean,
      {
        rules?: Linter.RulesRecord
        plugins?: Record<string, any>
      },
    ];
