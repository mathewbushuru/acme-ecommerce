import sql from ".";

import { type EmployeeSignupRequestType } from "../types/employee";
import { type dbEmployeeUserType } from "../types/database";

export async function createEmployeeUser(
  email: EmployeeSignupRequestType["email"],
  hashedPassword: EmployeeSignupRequestType["password"],
  firstName: EmployeeSignupRequestType["firstName"],
  lastName: EmployeeSignupRequestType["lastName"],
  isAdmin: EmployeeSignupRequestType["isAdmin"]
) {
  try {
    const dbResponse = await sql`
      INSERT INTO acme_employees 
        (email, hashedpassword, firstname, lastname, isadmin)
      VALUES
        (${email}, ${hashedPassword}, ${firstName}, ${lastName},
        ${isAdmin ? 1 : 0});
    `;
    return getEmployeeByEmail(email);
  } catch (error: any) {
    let customErrorMessage: undefined | string;
    if (error.message && error.message.startsWith("duplicate")) {
      customErrorMessage =
        "Oh no this email is unavailable! Try a different address.";
    }
    throw new Error(customErrorMessage || "Sign up error, try again later");
  }
}

export async function getEmployeeByEmail(email: string) {
  try {
    const dbResponse = (await sql`
        SELECT
            id, email,
            hashedpassword as "hashedPassword",
            firstname as "firstName",
            lastname as "lastName",
            isadmin as "isAdmin",
            createdat as "createdAt",
            updatedat as "updatedAt"
        FROM acme_employees where email = ${email};
    `) as unknown as dbEmployeeUserType[];
    let user: dbEmployeeUserType | null;
    if (dbResponse.length > 0) {
      user = dbResponse[0];
    } else {
      user = null;
    }
    return user;
  } catch (error: any) {
    throw new Error(error.message || "Error getting employee  with this email");
  }
}
