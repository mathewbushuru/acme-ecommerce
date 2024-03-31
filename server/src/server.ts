import app from "./app";
import { logPostgresVersion } from "./postgres-database";

const port = process.env.PORT || 3001;

app.listen(port, async () => {
  console.log(`Acme Groceries API running on port ${port}`);
  await logPostgresVersion()
});
