import { Request, Response, NextFunction } from "express";

import { hashPassword } from "../lib/auth";
import { createEmployeeUser } from "../postgres-database/employee-utils";

import { type EmployeeSignupRequestType } from "../types/employee";

/**
 * @desc:       Sign up employee
 * @listens:    POST admin/auth/signup
 * @access:     public
 * @param {Request} req;
 * @param {Response} res;
 * @param {NextFunction} next;
 * @return {void}
 */
export const postEmployeeSignupController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const signupData = req.body as EmployeeSignupRequestType;

  if (!signupData.email) {
    const errorMessage = "Sign up error. Employee email is missing";
    console.error(errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!signupData.password) {
    const errorMessage = "Sign up error. Employee password is missing";
    console.error(errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!signupData.firstName || !signupData.lastName) {
    const errorMessage = "Sign up error. Employee name is missing";
    console.error(errorMessage);
    return res.status(400).json({ errorMessage });
  }

  const hashedPasswordReqDataPassword = await hashPassword(signupData.password);

  createEmployeeUser(
    signupData.email,
    hashedPasswordReqDataPassword,
    signupData.firstName,
    signupData.lastName,
    signupData.isAdmin
  )
    .then((createEmployeeUserResponse) => {
      if (createEmployeeUserResponse === null) {
        const errorMessage = "There was an error signing up, try again";
        return res.status(500).json({ errorMessage });
      }

      console.log("Employee sign up successful");
      const { hashedPassword, ...employeeDataWithoutPassword } =
        createEmployeeUserResponse;
      return res
        .status(201)
        .json({ message: "Signup successful", ...employeeDataWithoutPassword });
    })
    .catch((err) => next(err));
};
