import app from "./app";
import { logPostgresVersion } from "./database/db";

import { createUser } from "./database/utils/user";

const port = process.env.PORT || 3001;

app.listen(port, async () => {
  console.log(`Acme Ecommerce API running on port ${port}`);
  await logPostgresVersion();

  // const result = await createUser({
  //   email: "oliver@twist.com",
  //   firstName: "Oliver",
  //   lastName: "Twist",
  //   hashedPassword: "dfvdfvdf",
  //   role: "employee",
  // });
  // console.log(result);
});
