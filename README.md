# @story/eslint-config
![eslint](https://img.shields.io/badge/eslint-config-blue)

## 📌 Требования

Node.js ≥ 20

ESLint ≥ 9


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

export default storyConfig();
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
  "editor.tabSize": 2,
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
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
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

```sh
import storyConfig from '@storytw/eslint-config';

// Пример
export default storyConfig({
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
