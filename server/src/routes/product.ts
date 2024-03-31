import { Router } from "express";

import { getAllProductCategories, getAllProducts } from "../mysql-database/utils";

const router = Router();

router.get("/categories", async (req, res, next) => {
  const allCategories = await getAllProductCategories();
  return res.json({ allCategories });
});

router.get("/all", async (req, res, next) => {
  const allProducts = await getAllProducts();
  return res.json({ allProducts });
});

export default router;
