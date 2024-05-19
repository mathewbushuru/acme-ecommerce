import { Router, Request, Response, NextFunction } from "express";

import { seedDatabase } from "../database/seed";

const router = Router();

router.post(
  "/reset-database",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await seedDatabase();
      const message = "Database successfully reset and seeded.";
      console.log("[Admin reset-database-route]:", message);
      return res.json({ message });
    } catch (error) {
      const errorMessage = "Something went wrong, try again.";
      console.error("[Admin reset-database-route]:", errorMessage);
      console.error(error);
      return res.status(500).json({ errorMessage });
    }
  }
);

export default router;
