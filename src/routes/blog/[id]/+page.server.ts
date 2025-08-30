import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

type Article = {
  id: string;
  title: string;
  description: string;
  content: string;
};

// 記事データ（デモ用）
const ARTICLES: Article[] = [
  {
    id: "1",
    title: "記事1",
    description: "記事1の概要",
    content: "記事1の内容",
  },
  {
    id: "2",
    title: "記事2",
    description: "記事2の概要",
    content: "記事2の内容",
  },
];

export const load: PageServerLoad = async ({ params }) => {
  // ページパラメータから記事IDを取得
  const articleId = params.id;
  if (!articleId) {
    error(404, "記事が見つかりません");
  }

  // 対象の記事を検索
  const article = ARTICLES.find((a) => a.id === articleId);
  if (!article) {
    error(404, "記事が見つかりません");
  }

  // SSRで記事データを返す
  return { article };
};
