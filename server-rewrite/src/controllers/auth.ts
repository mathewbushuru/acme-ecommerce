import { Request, Response, NextFunction } from "express";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";

import db from "../database/db";
import {
  user,
  type NewUserType,
  type UserType,
} from "../database/schemas/user";
import { hashPassword, checkUserPassword } from "../lib/auth";

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
    console.error(error);
    return res.status(500).json({ errorMessage });
  }
};

/**
 * @desc:       Log in (global) and generate JWT token
 * @listens:    POST /auth/login
 * @access:     public
 * @param {Request} req;
 * @param {Response} res;
 * @param {NextFunction} next;
 * @return {void}
 */
export const postLoginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  type LoginRequestType = {
    email: string;
    password: string;
    role?: UserType["role"];
  };

  const loginReqData = req.body as LoginRequestType;

  if (!loginReqData.email) {
    const errorMessage = "Sign in error. Email is missing.";
    console.error("[postLoginController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!loginReqData.password) {
    const errorMessage = "Sign in error. Password is missing.";
    console.error("[postLoginController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!loginReqData.role) {
    loginReqData.role = "customer";
  }

  try {
    const dbQueryResult = await db
      .select()
      .from(user)
      .where(eq(user.email, loginReqData.email));

    if (!dbQueryResult) {
      throw new Error("There was an error signing in.");
    }

    if (dbQueryResult.length === 0) {
      const errorMessage = `Sign in error, ${loginReqData.email} is not signed up.`;
      console.error("[postLoginController]: ", errorMessage);
      return res.status(401).json({ errorMessage });
    }

    const userData = dbQueryResult[0];

    const { hashedPassword, ...userDataWithoutPassword } = userData;

    const passwordMatches = await checkUserPassword(
      loginReqData.password,
      hashedPassword
    );

    if (!passwordMatches) {
      const errorMessage = "Sign in error, wrong password";
      console.error("[postLoginController]: ", errorMessage);
      return res.status(401).json({ errorMessage });
    }

    console.log(
      "[postLoginController]:",
      `[${loginReqData.email}]: Login successful`
    );

    const secondsBeforeTokenExpires = 1 * 60 * 60; // 1 hour
    const jwtToken = jwt.sign(
      { userId: userDataWithoutPassword.id },
      process.env.JWT_SECRET_KEY!,
      { algorithm: "HS256", expiresIn: secondsBeforeTokenExpires }
    );

    type LoginSuccessfulResponseType = Omit<UserType, "hashedPassword"> & {
      message: string;
      jwtToken: string;
    };

    const successfullLoginResponse: LoginSuccessfulResponseType = {
      ...userDataWithoutPassword,
      message: "Sign in successful.",
      jwtToken,
    };

    return res.json(successfullLoginResponse);
  } catch (error: any) {
    const errorMessage = error?.message || "There was an error signing in.";
    console.error("[postLoginController]: ", errorMessage);
    console.error(error);
    return res.status(500).json({ errorMessage });
  }
};
