import type { ConfigOption } from './types.js';
import type { Linter } from 'eslint';

export function resolveConfig(
  baseConfig: Linter.Config,
  option: ConfigOption | undefined,
): Linter.Config | null {
  const resolved = option ?? true;

  if (resolved === false) {
    return null;
  }

  if (Array.isArray(resolved)) {
    const [enabled, userOptions] = resolved;

    if (!enabled) {
      return null;
    }

    return {
      ...baseConfig,
      rules: {
        ...baseConfig.rules,
        ...userOptions?.rules,
      },
      plugins: {
        ...baseConfig.plugins,
        ...userOptions?.plugins,
      },
    };
  }

  return baseConfig;
}
