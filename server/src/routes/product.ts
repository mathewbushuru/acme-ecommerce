import { Router } from "express";

import { getAllCategories } from "../database/utils";

const router = Router();

router.get("/categories", async (req, res, next) => {
  const categories = await getAllCategories();
  return res.json({ categories });
});

export default router;
