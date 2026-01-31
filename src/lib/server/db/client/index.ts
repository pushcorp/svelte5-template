// 例（Drizzle ORMとTursoを利用する場合）
// import { createClient } from "@libsql/client";
// import { drizzle } from "drizzle-orm/libsql";
// import { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from "$env/static/private";

// DBクライアント作成
// const turso = createClient({
//   url: TURSO_DATABASE_URL,
//   authToken: TURSO_AUTH_TOKEN,
// });
// export const db = drizzle(turso);
