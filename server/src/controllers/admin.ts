import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { hashPassword, checkUserPassword } from "../lib/auth";
import {
  createEmployeeUser,
  getEmployeeByEmail,
} from "../postgres-database/employee-utils";
import {
  type EmployeeSignupRequestType,
  type EmployeeLoginRequestType,
  type EmployeeLoginSuccessfulResponseType,
} from "../types/employee";

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

      console.log(`[${signupData.email}]: Employee sign up successful`);
      const { hashedPassword, ...employeeDataWithoutPassword } =
        createEmployeeUserResponse;
      return res
        .status(201)
        .json({ message: "Signup successful", ...employeeDataWithoutPassword });
    })
    .catch((err) => next(err));
};

/**
 * @desc:       Log in employee and generate JWT token
 * @listens:    POST admin/auth/login
 * @access:     public
 * @param {Request} req;
 * @param {Response} res;
 * @param {NextFunction} next;
 * @return {void}
 */
export const postEmployeeLoginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const loginReqData = req.body as EmployeeLoginRequestType;

  if (!loginReqData.email) {
    const errorMessage = "Sign in error, employee email is missing";
    console.error(errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!loginReqData.password) {
    const errorMessage = "Sign in error, employee password is missing";
    console.error(errorMessage);
    return res.status(400).json({ errorMessage });
  }

  const employeeData = await getEmployeeByEmail(loginReqData.email);

  if (employeeData === null) {
    const errorMessage = "Sign in error, no such employee.";
    return res.status(401).json({ errorMessage });
  }

  const { hashedPassword, ...employeeDataWithoutPassword } = employeeData;

  const passwordMatches = await checkUserPassword(
    loginReqData.password,
    hashedPassword
  );

  if (!passwordMatches) {
    const errorMessage = "Sign error, wrong password";
    console.error(errorMessage);
    return res.status(401).json({ errorMessage });
  }

  console.log(`[${loginReqData.email}]: Employee login successful`);

  const secondsBeforeTokenExpires = 1 * 60 * 60; // 1 hour
  const jwtToken = jwt.sign(
    { employeeId: employeeDataWithoutPassword.id },
    process.env.JWT_SECRET_KEY!,
    { algorithm: "HS256", expiresIn: secondsBeforeTokenExpires }
  );

  const successfullLoginResponse: EmployeeLoginSuccessfulResponseType = {
    ...employeeDataWithoutPassword,
    isAdmin: employeeDataWithoutPassword.isAdmin === 1,
    message: "Employee sign in successful",
    jwtToken,
  };

  return res.json(successfullLoginResponse);
};
