import fs from 'node:fs';
import path from 'node:path';

import { ConfigOption } from './types';

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

export function detectFramework(root = process.cwd()) {
  try {
    const pkgPath = path.join(root, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

    const deps = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    };

    if (deps?.next) {
      return 'next';
    }

    if (deps?.vite) {
      return 'vite';
    }

    return 'unknown';
  } catch {
    return 'unknown';
  }
}
