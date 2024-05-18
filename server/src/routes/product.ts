import { Router } from "express";

import {
  getAllProductsController,
  getProductByIdController,
  getAllProductCategoriesController,
  getProductCategoryByIdController,
} from "../controllers/product";

const router = Router();

router.get("/all", getAllProductsController);
router.get("/:productId", getProductByIdController);
router.get("/categories/all", getAllProductCategoriesController);
router.get("/categories/:categoryId", getProductCategoryByIdController);

export default router;
