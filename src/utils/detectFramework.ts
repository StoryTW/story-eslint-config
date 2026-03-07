import fs from 'node:fs';
import path from 'node:path';

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
