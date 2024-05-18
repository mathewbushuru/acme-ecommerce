import { Request, Response, NextFunction } from "express";

import db from "../database/db";
import {
  user,
  type NewUserType,
  type UserType,
} from "../database/schemas/user";
import { hashPassword } from "../lib/auth";

/**
 * @desc:       Sign up (global)
 * @listens:    POST /auth/signup
 * @access:     public
 * @param {Request} req;
 * @param {Response} res;
 * @param {NextFunction} next;
 * @return {void}
 */

export const postSignupController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const signupReqData = req.body as Omit<NewUserType, "hashedPassword"> & {
    password: string;
  };

  if (!signupReqData.email) {
    const errorMessage = "Sign up error. Email is missing.";
    console.error("[postSignupController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!signupReqData.password) {
    const errorMessage = "Sign up error. Password is missing.";
    console.error("[postSignupController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!signupReqData.firstName || !signupReqData.lastName) {
    const errorMessage = "Sign up error. Name is missing.";
    console.error("[postSignupController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }

  const hashedPassword = await hashPassword(signupReqData.password);

  const signupData: NewUserType = {
    email: signupReqData.email,
    hashedPassword,
    firstName: signupReqData.firstName,
    lastName: signupReqData.lastName,
    role: !signupReqData.role ? "customer" : signupReqData.role,
  };

  try {
    const dbQueryResult = await db.insert(user).values(signupData).returning();

    if (!dbQueryResult || dbQueryResult.length === 0) {
      throw new Error("There was an error signing up, try again.");
    }

    const { hashedPassword, ...dataWithoutPassword } = dbQueryResult[0];
    const responseData: Omit<UserType, "hashedPassword"> = dataWithoutPassword;

    console.log(
      `[postSignupController]: Signup successful (${responseData.email})`
    );
    return res
      .status(201)
      .json({ message: "Signup successful.", ...responseData });
  } catch (error: any) {
    let customErrorMessage: undefined | string;
    if (error.message && error.message.startsWith("duplicate")) {
      customErrorMessage =
        "Oh no this email is unavailable! Try a different address.";
    }
    const errorMessage =
      customErrorMessage || "There was an error signing up, try again.";
    console.error("[postSignupController]: ", errorMessage);
    return res.status(500).json({ errorMessage });
  }
};
