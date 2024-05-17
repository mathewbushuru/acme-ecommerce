import app from "./app";
import { logPostgresVersion } from "./database/db";

const port = process.env.PORT || 3001;

app.listen(port, async () => {
  console.log(`Acme Ecommerce API running on port ${port}`);
  await logPostgresVersion();
});
