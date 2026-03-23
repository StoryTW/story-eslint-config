import type { ConfigOption } from './types';
import type { Linter } from 'eslint';

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
import { detectFramework, resolveConfig } from './utils.js';

export interface StoryOptions {
  stylistic?: ConfigOption;
  import?: ConfigOption;
  javascript?: ConfigOption;
  typescript?: ConfigOption;
  react?: ConfigOption;
}

export default function storyConfig(options: StoryOptions = {}): Linter.Config[] {
  const configs: Linter.Config[] = [
    gitignore({ strict: false }),
    ...javascriptConfig,
    ...typescriptConfig,
    resolveConfig(stylisticConfig, options.stylistic),
    resolveConfig(importConfig, options.import),
  ].filter(Boolean) as Linter.Config[];

  if (options.react !== false) {
    const framework = detectFramework();

    const reactEnvMap: Record<string, Linter.Config | null> = {
      vite: reactViteConfig,
      next: reactNextConfig,
    };

    const reactEnvConfig = reactEnvMap[framework] ?? null;

    const reactConfigs: Linter.Config[] = [reactBaseConfig, reactEnvConfig].filter(
      (c): c is Linter.Config => Boolean(c),
    );

    configs.push(
      ...(reactConfigs
        .map((c) => resolveConfig(c, options.react))
        .filter(Boolean) as Linter.Config[]),
    );
  }

  return configs;
}
