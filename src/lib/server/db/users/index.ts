// 例
// import { eq } from "drizzle-orm";
// import { users } from "$lib/db/schema";
// import { db } from "$lib/server/db/db";

// ユーザーをIDで取得する関数
// export async function fetchUserById(userId: string, dbClient: DbClient = db): Promise<UserRecord | null> {
//   const normalizedUserId = userId.trim();

//   if (!normalizedUserId) {
//     throw new Error("ユーザーIDが無効です。");
//   }

//   const [row] = await dbClient
//     .select()
//     .from(users)
//     .where(eq(users.id, normalizedUserId))
//     .limit(1);

//   return row ?? null;
// }
