import { Router } from "express";

import { getAllProductsController, getProductByIdController } from "../controllers/product";

const router = Router();

router.get("/all", getAllProductsController);
router.get("/:productId", getProductByIdController);

export default router;
