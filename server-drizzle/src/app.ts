// Third party imports
import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "Acme Ecommerce API" });
});

// Error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error("[Global Error Handler:]", error);

  return res.status(500).json({
    errorMessage: error.message || "Something went wrong.",
    ...error,
  });
});

export default app;
