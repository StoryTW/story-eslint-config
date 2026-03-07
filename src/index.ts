import type { Linter } from 'eslint';
import gitignore from 'eslint-config-flat-gitignore';

import { importConfig } from './configs/importConfig/importConfig';
import { javascriptConfig } from './configs/javascriptConfig/javascriptConfig';
import { reactBaseConfig } from './configs/reactConfig/reactBaseConfig';
import { reactNextConfig } from './configs/reactConfig/reactNextConfig';
import { reactViteConfig } from './configs/reactConfig/reactViteConfig';
import { stylisticConfig } from './configs/stylisticConfig/stylisticConfig';
import { typescriptConfig } from './configs/typescriptConfig/typescriptConfig';
import type { ConfigOption } from './types/types';
import { detectFramework } from './utils/detectFramework';
import { resolveConfig } from './utils/resolver';

export interface StoryOptions {
  stylistic?: ConfigOption
  import?: ConfigOption
  javascript?: ConfigOption
  typescript?: ConfigOption
  react?: ConfigOption
}

export default function storyConfig(options: StoryOptions = {}) {
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
