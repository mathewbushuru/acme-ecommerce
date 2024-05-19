import { Router } from "express";

import {
  postEmployeeSignupController,
  postEmployeeLoginController,
} from "../controllers/admin";

const router = Router();

router.post("/auth/signup", postEmployeeSignupController);
router.post("/auth/login", postEmployeeLoginController);

export default router;
