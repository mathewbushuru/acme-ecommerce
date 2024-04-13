import { Router } from "express";

import { postEmployeeSignupController } from "../controllers/admin";

const router = Router();

router.post("/auth/signup", postEmployeeSignupController);

router.post("/auth/login", async (req, res, next) => {
  return res.json({ message: "Sign in" });
});

export default router;
