import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { createUser } from "../database/utils";
import { hashPassword, checkUserPassword } from "../lib/auth";

export interface SignupRequestType {
  email: string;
  password: string;
}

/**
 * @desc:       Sign up user
 * @listens:    POST /auth/signup
 * @access:     public
 * @param:      req, res, next
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

  const hashedReqDataPassword = await hashPassword(signupReqData.password);

  createUser(signupReqData.email, hashedReqDataPassword)
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
