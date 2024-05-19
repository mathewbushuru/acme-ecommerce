import { type Config } from "drizzle-kit";

const drizzleConfig = {
  schema: "./src/database/schemas/*",
  out: "./src/database/sql-scripts/",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_CONNECTION_STRING!
  }
} satisfies Config;

export default drizzleConfig;
