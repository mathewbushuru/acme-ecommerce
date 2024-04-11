import { Router } from "express";

const router = Router();

router.post("/auth/signup", async (req, res, next) => {
    return res.json({ message: "Register" });
  });

router.post("/auth/login", async (req, res, next) => {
  return res.json({ message: "Sign in" });
});

export default router;
