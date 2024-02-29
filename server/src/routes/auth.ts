import { Router } from "express";

import { postSignupController } from "../controllers/auth";

const router = Router();

router.post("/signup", postSignupController);

router.post("/login", (req, res) => {
  res.send("Log in");
});

export default router;
