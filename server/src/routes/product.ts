import { Router } from "express";

import {
  getAllProductsController,
  getProductByIdController,
  postCreateNewProductController,
  getAllProductCategoriesController,
  getProductCategoryByIdController,
} from "../controllers/product";

const router = Router();

router.get("/all", getAllProductsController);
router.get("/:productId", getProductByIdController);
router.post("/new", postCreateNewProductController);
router.get("/categories/all", getAllProductCategoriesController);
router.get("/categories/:categoryId", getProductCategoryByIdController);

export default router;
