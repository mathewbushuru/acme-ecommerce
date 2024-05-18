import { Router } from "express";

import { postSignupController } from "../controllers/auth";

const router = Router();

router.post("/signup", postSignupController);

export default router;
