import sql from ".";

import { type SignupRequestType } from "../types/auth";
import { type dbUserType } from "../types/database";

export async function createUser(
  email: SignupRequestType["email"],
  hashedPassword: SignupRequestType["password"],
  firstName: SignupRequestType["firstName"],
  lastName: SignupRequestType["lastName"]
) {
  try {
    const dbResponse = await sql`
            INSERT INTO acme_users (email, hashedPassword, firstName, lastName)
                VALUES (${email}, ${hashedPassword}, ${firstName}, ${lastName});
        `;
    return getUserByEmail(email);
  } catch (error: any) {
    console.error(error);
    let customErrorMessage: undefined | string;
    if (error.message && error.message.startsWith("duplicate")) {
      customErrorMessage =
        "Oh no, this email is unavailable! Please try a different address.";
    }
    throw new Error(customErrorMessage || "Sign up error, try again");
  }
}

export async function getUserByEmail(email: string) {
  try {
    const dbResponse = (await sql`
        SELECT 
                id, email, 
                hashedpassword AS "hashedPassword", 
                firstname as "firstName", 
                lastname as "lastName", 
                createdat as "createdAt", 
                updatedat as "updatedAt"
            FROM acme_users WHERE email = ${email};
    `) as unknown as dbUserType[];
    let user: dbUserType | null;
    if (dbResponse.length > 0) {
      user = dbResponse[0];
    } else {
      user = null;
    }
    return user;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message || "Error getting user with this email");
  }
}

export async function getUserById(id: number) {
  try {
    const dbResponse = (await sql`
        SELECT 
                id, email, 
                hashedpassword AS "hashedPassword", 
                firstname as "firstName", 
                lastname as "lastName", 
                createdat as "createdAt", 
                updatedat as "updatedAt"
            FROM acme_users WHERE id = ${id};
    `) as unknown as dbUserType[];
    let user: dbUserType | null;
    if (dbResponse.length > 0) {
      user = dbResponse[0];
    } else {
      user = null;
    }
    return user;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message || "Error getting user");
  }
}
