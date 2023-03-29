// db.ts
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: "postgres://user:pass@localhost:9876/db",
});

(async () => {
  await migrate(drizzle(pool), { migrationsFolder: "./migrations" });
})();
