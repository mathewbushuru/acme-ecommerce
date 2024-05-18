import { Router } from "express";

import {
  getAllProductsController,
  getProductByIdController,
  getAllProductCategoriesController,
  getCategoryByIdController,
} from "../controllers/product";

const router = Router();

router.get("/all", getAllProductsController);
router.get("/:productId", getProductByIdController);
router.get("/categories/all", getAllProductCategoriesController);
router.get("/categories/:categoryId", getCategoryByIdController);

export default router;
