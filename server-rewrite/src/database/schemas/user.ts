import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

/**
 * user table
 */

// table definition
export const user = pgTable("acme_user", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  hashedPassword: text("hashed_password").notNull(),
  firstName: varchar("first_name", {length: 256}).notNull(),
  lastName: varchar("last_name", {length: 256}).notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
