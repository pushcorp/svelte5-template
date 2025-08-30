import { dev } from "$app/environment";

// 開発: CSR有効 → リンククリックでSPA遷移（フルリロードなし）。開発体験向上のため。このため$derivedの活用が必須。
// 本番: CSR無効 → リンククリックで毎回SSRフルリロード。SEO効果あり。
// 詳しくは https://svelte.dev/docs/kit/page-options を参照
export const csr = dev;
