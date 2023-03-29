// db.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

export * from "./schema";

const pool = new Pool({
  connectionString: "postgres://user:pass@localhost:9876/db",
});

export const db = drizzle(pool);
