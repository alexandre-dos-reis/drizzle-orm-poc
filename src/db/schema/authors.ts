import { pgTable, serial, text, varchar, uuid } from "drizzle-orm/pg-core";

export const authorsTable = pgTable("authors", {
  id: uuid("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
});
