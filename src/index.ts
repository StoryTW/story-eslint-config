import gitignore from 'eslint-config-flat-gitignore';

import {
  importConfig,
  javascriptConfig,
  reactBaseConfig,
  reactNextConfig,
  reactViteConfig,
  stylisticConfig,
  typescriptConfig,
} from './configs/index.js';
import { resolveConfig } from './utils.js';

import type { ConfigOption } from './types.js';
import type { Linter } from 'eslint';

export interface StoryOptions {
  framework: 'vite' | 'next' | 'none';
  stylistic?: ConfigOption;
  import?: ConfigOption;
  javascript?: ConfigOption;
  typescript?: ConfigOption;
  react?: ConfigOption;
}

export default function storyConfig(options: StoryOptions): Linter.Config[] {
  if (!options || !['vite', 'next', 'none'].includes(options.framework)) {
    throw new TypeError('storyConfig: framework must be "vite", "next" or "none".');
  }

  const configs: Linter.Config[] = [
    gitignore({ strict: false }),
    ...javascriptConfig.map((config) => resolveConfig(config, options.javascript)),
    ...typescriptConfig.map((config) => resolveConfig(config, options.typescript)),
    resolveConfig(stylisticConfig, options.stylistic),
    resolveConfig(importConfig, options.import),
  ].filter(Boolean) as Linter.Config[];

  if (options.react !== false) {
    const reactEnvMap: Record<StoryOptions['framework'], Linter.Config | null> = {
      vite: reactViteConfig,
      next: reactNextConfig,
      none: null,
    };

    const reactEnvConfig = reactEnvMap[options.framework];

    const reactConfigs: Linter.Config[] = [reactBaseConfig, reactEnvConfig].filter(
      (c): c is Linter.Config => Boolean(c),
    );

    const resolvedReactConfigs = reactConfigs
      .map((c) => resolveConfig(c, options.react))
      .filter((c): c is Linter.Config => Boolean(c));

    configs.push(...resolvedReactConfigs);

    if (options.framework === 'next' && resolvedReactConfigs.length > 0) {
      configs.push({
        name: 'story/react/next/ignores',
        ignores: ['**/.next/**', '**/out/**', '**/build/**', '**/next-env.d.ts'],
      });
    }
  }

  return configs;
}
