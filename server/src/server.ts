import app from "./app";

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Acme Groceries API (localhost MySQL) running on port ${port}`);
});
