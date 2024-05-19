import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

import * as userSchema from "./schemas/user";
import * as productSchema from "./schemas/product";

export const sql = postgres({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: process.env.PG_LOCALHOST === "true" ? undefined : "require",
  connection: {
    options:
      process.env.PG_LOCALHOST === "true"
        ? undefined
        : `project=${process.env.PG_ENDPOINT_ID}`,
  },
});

// export const sql = postgres(process.env.POSTGRES_CONNECTION_STRING!);

export async function logPostgresVersion() {
  const result = await sql`SELECT version()`;
  console.log(result);
}

const db = drizzle(sql, { schema: { ...userSchema, ...productSchema } });
export default db;
