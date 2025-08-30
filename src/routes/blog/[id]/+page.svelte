<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  // サーバーからSSRで受け取った記事データ
  const article = data.article;

  const title = article ? `${article.title}` : "記事が見つかりません";
  const description = article
    ? article.description
    : "指定された記事は存在しません。トップページからお探しください。";
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
