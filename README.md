# Svelte 5 Template

(English guide is below)

## Svelte 5 テンプレート 概要

Svelte 5 のテンプレートプロジェクトです。

このプロジェクトは、Svelte 5 / SvelteKit を利用してすぐに新規プロジェクトを始められることを目的に作成されました。

以下を採用しています:

- SvelteKit（クライアント／サーバーのフレームワーク）
- Tailwind CSS（スタイリング）
- [Shadcn UI](https://www.shadcn-svelte.com/)（shadcn-svelte、UI コンポーネント）
- [Lucide Icons](https://lucide.dev/guide/packages/lucide-svelte)（@lucide/svelte、アイコン）
- [Zod](https://zod.dev/)（スキーマバリデーション）
- [Biome](https://biomejs.dev/)（Lint とフォーマット）

## はじめに

### 対応する Node.js のインストール

```bash
nvm install 20.19.0
nvm use 20.19.0
```

（上記は一例です。実際の対応バージョンは `package.json` を参照してください）
（nvm は Node のバージョンマネージャーです。n や nodebrew 等を使っても構いません）

### 開発サーバーの起動

```bash
npm install
npm run dev
```

### 表示言語（英語／日本語）

`src/app.html` の `lang` 属性を変更するとサイトの表示言語を切り替えられます。

デフォルトは日本語です。

```html
<html lang="ja">
```

英語にしたい場合は次のように変更してください。

```html
<html lang="en">
```

## Svelte 5 Template Overview

This project is created to start a new project quickly using Svelte 5 / SvelteKit.

Svelte 5 template project that:

- uses SvelteKit as framework for client and server.
- uses Tailwind CSS for styling.
- uses [Shadcn UI](https://www.shadcn-svelte.com/) (shadcn-svelte) for UI components.
- uses [Lucide Icons](https://lucide.dev/guide/packages/lucide-svelte) (@lucide/svelte) for icons.
- uses [Zod](https://zod.dev/) for schema validation.
- uses [Biome](https://biomejs.dev/) for linting and formatting.

## Getting Started

### Install a compatible Node.js version

```bash
nvm install 20.19.0
nvm use 20.19.0
```

(This is an example. See the compatible version in `package.json`.)
(nvm is a Node version manager. You can use any other manager like n or nodebrew.)

### Start the development server

```bash
npm install
npm run dev
```

### English / Japanese

In `src/app.html`, you can change the language of the website by changing the `lang` attribute.

Default is Japanese.

```html
<html lang="ja">
```

So change it like this if you want English.

```html
<html lang="en">
```
