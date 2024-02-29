// Third party imports
import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

// Routes imports
import testRoutes from "./routes/test";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Acme Groceries API" });
});

app.use("/test", testRoutes);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error);

  return res.status(500).json({
    errorMessage: error.message || "Something went wrong...",
    ...error,
  });
});

export default app;
