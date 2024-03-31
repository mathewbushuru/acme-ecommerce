import postgres from "postgres";

const sql = postgres({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: 5432,
  ssl: process.env.PG_LOCALHOST === "true" ? undefined : "require",
  connection: {
    options:
      process.env.PG_LOCALHOST === "true"
        ? undefined
        : `project=${process.env.PG_ENDPOINT_ID}`,
  },
});

export async function logPostgresVersion() {
  const result = await sql`SELECT version()`;
  console.log(result);
}

export default sql;
