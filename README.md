# Fanship

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
# fanship


## 新頁面撰寫步驟
1. 新增vue檔
    + src資料夾 -> views資料夾 -> 新增 "檔名.vue"
2. 建立路徑
    + 2-1. 開啟index.js
        + src資料夾 -> router資料夾 -> index.js
    + 2-2. 新增內容*2
        + (插入vue檔案) import 來源
        + (設定路徑) routes內新增資料 [ path + name + component ]