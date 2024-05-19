import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { createUser, getUserByEmail } from "../postgres-database/user-utils";
import { hashPassword, checkUserPassword } from "../lib/auth";

import {
  type LoginRequestType,
  type SignupRequestType,
  type LoginSuccessfulResponseType,
} from "../types/auth";

/**
 * @desc:       Sign up user
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
  const signupReqData = req.body as SignupRequestType;

  if (!signupReqData.email) {
    const errorMessage = "Sign up error. Email is missing.";
    console.error(errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!signupReqData.password) {
    const errorMessage = "Sign up error. Password is missing";
    console.error(errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!signupReqData.firstName || !signupReqData.lastName) {
    const errorMessage = "Sign up error. Name is missing";
    console.error(errorMessage);
    return res.status(400).json({ errorMessage });
  }

  const hashedReqDataPassword = await hashPassword(signupReqData.password);

  createUser(
    signupReqData.email,
    hashedReqDataPassword,
    signupReqData.firstName,
    signupReqData.lastName
  )
    .then((createUserResponse) => {
      if (createUserResponse === null) {
        const errorMessage = "There was an error signing up, try again";
        return res.status(500).json({ errorMessage });
      }

      console.log("Sign up successful");
      const { hashedPassword, ...userDataWithoutPassword } = createUserResponse;
      return res
        .status(201)
        .json({ message: "Sign up successful", ...userDataWithoutPassword });
    })
    .catch((err) => next(err));
};

/**
 * @desc:       Log in user and generate JWT token
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
  const loginReqData = req.body as LoginRequestType;

  if (!loginReqData.email) {
    const errorMessage = "Sign in error, email is missing.";
    console.error(errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!loginReqData.password) {
    const errorMessage = "Sign in error, password is missing";
    console.error(errorMessage);
    return res.status(400).json({ errorMessage });
  }

  const userData = await getUserByEmail(loginReqData.email);

  if (!userData) {
    const errorMessage = "Sign in error, no such user.";
    return res.status(401).json({ errorMessage });
  }

  const { hashedPassword, ...userDataWithoutPassword } = userData;

  const passwordMatches = await checkUserPassword(
    loginReqData.password,
    hashedPassword
  );

  if (!passwordMatches) {
    const errorMessage = "Sign in error, wrong password";
    return res.status(401).json({ errorMessage });
  }

  console.log("Log in successful");

  const secondsBeforeTokenExpires = 24 * 60 * 60; // 1 day
  const jwtToken = jwt.sign(
    { userId: userDataWithoutPassword.id },
    process.env.JWT_SECRET_KEY!,
    { algorithm: "HS256", expiresIn: secondsBeforeTokenExpires }
  );

  const successfullLoginResponse: LoginSuccessfulResponseType = {
    ...userDataWithoutPassword,
    message: "Sign in successful",
    jwtToken,
  };

  return res.json(successfullLoginResponse);
};
