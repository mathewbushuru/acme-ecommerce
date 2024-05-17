import app from "./app";

const port = process.env.PORT || 3001;

app.listen(port, async () => {
  console.log(`Acme Ecommerce API running on port ${port}`);
});
