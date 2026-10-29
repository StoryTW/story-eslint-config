# @storytw/eslint-config
![eslint](https://img.shields.io/badge/eslint-config-blue)

## 📌 Требования

Node.js ≥ 24

ESLint 10.x

## 🚀 Быстрый старт
1. Установите пакет:  

```sh
npm install --save-dev @storytw/eslint-config

# или

pnpm add -D @storytw/eslint-config

# или

yarn add -D @storytw/eslint-config
```

2. В `eslint.config.ts` импортируйте конфиг

```sh
import storyConfig from '@storytw/eslint-config';

export default storyConfig({ framework: 'vite' });
```


## 📝 Скрипты для линтинга

Пример добавления в `package.json`:

```sh
{
  "scripts": {
    "lint": "eslint . --ext .js,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.ts,.tsx --fix"
  }
}
```

## 📦 Настройка папки .vscode -> settings.json 

```sh
{
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "typescript.d.ts"
  ]
}
```
## 🔨 Расширение конфига

### Фреймворк

Конфиг предназначен для фронтенда и использует браузерные глобальные переменные.
Поле `framework` обязательно: выберите `'vite'`, `'next'` или `'none'`. Автоопределения нет.
По умолчанию React включён.

```ts
import storyConfig from '@storytw/eslint-config';

export default storyConfig({
  framework: 'vite',
});
```

- `framework: 'vite'` подключает дополнительные настройки Vite.
- `framework: 'next'` подключает правила Next.js из `@next/eslint-plugin-next` (Core Web Vitals) и настройки Fast Refresh. При включённом React из проверки исключаются `.next`, `out`, `build` и `next-env.d.ts`, в том числе во вложенных проектах.
- `framework: 'none'` оставляет общие React-правила без настроек Next/Vite.
- `react: false` отключает все React-блоки. Поле `framework` остаётся обязательным; используйте `'none'`, если React не нужен.

При переходе со старой версии замените `storyConfig()` на вызов с явным `framework`.

Для Next.js достаточно указать `framework: 'next'` — отдельно устанавливать `eslint-config-next` не нужно:

```ts
import storyConfig from '@storytw/eslint-config';

export default storyConfig({ framework: 'next' });
```

### Правила и плагины

```sh
import storyConfig from '@storytw/eslint-config';

// Пример
export default storyConfig({
  framework: 'none',
  react: false, // отключение правил и плагинов для react (так же работает и для остальных: typescript/javascript/stylistic/import)
  typescript: [
    true,
    {
      plugins: pluginName,
      rules: {
        'your-rule': 'off',
      },
    },
  ],
});
```
