# Svelte 5 Template

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

## 特徴

- html lang=ja 設定済み
- SSR対応（CSR=false）設定済み
- 必要なディレクトリ（src/lib内の components, constants, utils, types 等）があらかじめ作成されている
- API ルート作成済み
- VSCode の設定済み（Biome のフォーマッターを使用するetc）
- Cursor のルール記述済み

## 開発の準備

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
