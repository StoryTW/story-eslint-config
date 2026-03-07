import type { Linter } from 'eslint';

import type { ConfigOption } from '../types/types';

export function resolveConfig(
  baseConfig: Linter.Config,
  option: ConfigOption | undefined,
): Linter.Config | null {
  const resolved = option ?? true;

  if (resolved === false) {
    return null;
  }

  if (Array.isArray(resolved)) {
    const [, userOptions] = resolved;

    return {
      ...baseConfig,
      rules: {
        ...baseConfig.rules,
        ...userOptions?.rules,
      },
    };
  }

  return baseConfig;
}
