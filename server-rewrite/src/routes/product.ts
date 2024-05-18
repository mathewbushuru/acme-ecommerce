import { Router } from "express";

import { getAllProductsController } from "../controllers/product";

const router = Router();

router.get("/all", getAllProductsController);

export default router;
