import db from "../db";
import { user, type NewUserType } from "../schemas/user";

export async function createUser(userData: NewUserType) {
  try {
    const result = await db.insert(user).values(userData).returning();

    if (!result || result.length === 0) {
      throw new Error("Error creating user, try again.");
    }

    return result[0];
  } catch (error) {
    console.log("[database/utils/user createUser()]:", error);
    throw new Error("Error creating user, try again.");
  }
}
