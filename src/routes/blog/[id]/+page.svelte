<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const ARTICLES = [
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

  // ページパラメータ
  const articleId: string = data.id;

  // 対象エントリ
  const article = ARTICLES.find((a) => a.id === articleId);

  const title = article ? `${article.title}` : "キャラクターが見つかりません";
  const description = article
    ? article.description
    : "指定されたキャラクターは存在しません。トップページからお探しください。";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<section class="container mx-auto px-4 py-10">
  <h1 class="text-2xl font-bold mb-4">{title}</h1>
  <p class="text-sm text-gray-500 mb-4">{description}</p>
  <div class="prose">
    <p>{article?.content}</p>
  </div>
</section>
