import { Router } from "express";

import {
  getAllProductsController,
  getProductBySkuNumberController,
  postCreateNewProductController,
  getAllProductCategoriesController,
  getProductCategoryByIdController,
  postCreateNewProductCategoryController,
} from "../controllers/product";

const router = Router();

router.get("/all", getAllProductsController);
router.get("/:skuNumber", getProductBySkuNumberController);
router.post("/new", postCreateNewProductController);
router.get("/categories/all", getAllProductCategoriesController);
router.get("/categories/:categoryId", getProductCategoryByIdController);
router.post("/categories/new", postCreateNewProductCategoryController);

export default router;
