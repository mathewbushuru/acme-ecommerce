import { Router } from "express";

import {
  getAllProductsController,
  getProductByIdController,
  getAllProductCategoriesController,
} from "../controllers/product";

const router = Router();

router.get("/all", getAllProductsController);
router.get("/:productId", getProductByIdController);
router.get("/categories/all", getAllProductCategoriesController);

export default router;
