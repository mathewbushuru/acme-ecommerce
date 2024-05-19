import { Router } from "express";

import {
  getAllProductCategories,
  getAllProducts,
  getProductById,
} from "../postgres-database/product-utils";

const router = Router();

router.get("/categories", async (req, res, next) => {
  const allCategories = await getAllProductCategories();
  return res.json({ allCategories });
});

router.get("/all", async (req, res, next) => {
  const allProducts = await getAllProducts();
  return res.json({ allProducts });
});

router.get("/:productId", async (req, res, next) => {
  const { productId } = req.params;
  const productData = await getProductById(productId);

  if(!productData){
    const errorMessage = `Product with sku number ${productId} not in database.`;
    return res.status(404).json({errorMessage});
  }

  return res.json({ productData });
});

export default router;
