import dbPool from ".";
import { type SignupRequestType } from "../controllers/auth";

interface dbUserType {
  id: number;
  email: string;
  hashedPassword: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

interface dbCategoryType {
  id: number;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export async function createUser(
  email: SignupRequestType["email"],
  hashedPassword: SignupRequestType["password"],
  firstName: SignupRequestType["firstName"],
  lastName: SignupRequestType["lastName"]
) {
  try {
    const response: any = await dbPool.query(
      `INSERT INTO acme_users (
            email, hashedPassword, firstName, lastName
        ) VALUES (?, ?, ?, ?)`,
      [email, hashedPassword, firstName, lastName]
    );
    const id = response[0].insertId;
    return getUserById(id);
  } catch (error: any) {
    console.error(error);
    let customErrorMessage: undefined | string;
    if (
      error.message &&
      (error.code == "ER_DUP_ENTRY" ||
        error.message.startsWith("Duplicate entry"))
    ) {
      customErrorMessage =
        "Oh no, this email is unavailable! Please try a different address.";
    }
    throw new Error(customErrorMessage || "Sign up error, try again.");
  }
}

export async function getUserById(id: number) {
  try {
    const dbResponse = await dbPool.query(
      `SELECT * FROM acme_users WHERE id=?;`,
      [id]
    );
    const usersArr = dbResponse[0] as unknown as dbUserType[];
    let user: dbUserType | null;
    if (usersArr.length > 0) {
      user = usersArr[0];
    } else {
      user = null;
    }
    return user;
  } catch (error: any) {
    throw new Error(error.message || "Error getting user");
  }
}

export async function getUserByEmail(email: string) {
  try {
    const dbResponse: any = await dbPool.query(
      `SELECT * FROM acme_users WHERE email=?`,
      [email]
    );
    const usersArr = dbResponse[0] as unknown as dbUserType[];
    let user: dbUserType | null;
    if (usersArr.length > 0) {
      user = usersArr[0];
    } else {
      user = null;
    }
    return user;
  } catch (error: any) {
    throw new Error(error.message || "Error getting user with this email");
  }
}

export async function getAllCategories() {
  try {
    const dbResponse:any = await dbPool.query(
      `SELECT * FROM acme_categories;`
    );
    const categoriesArr = dbResponse[0] as unknown as dbCategoryType[];
    return categoriesArr;
  } catch (error:any) {
    throw new Error(error.message || "Error fetching all categories");
  }
}
