import db from "./db";
import { user, type NewUserType } from "./schemas/user";
import {
  productCategory,
  type NewProductCategoryType,
  product,
  type NewProductType,
} from "./schemas/product";
import { hashPassword } from "../lib/auth";

export async function seedDatabase() {
  await db.delete(user);
  await db.delete(product);
  await db.delete(productCategory);

  const newUser: NewUserType = {
    firstName: "Matt",
    lastName: "B",
    email: "matt@test.com",
    hashedPassword: await hashPassword("Tester123"),
  };
  const returnUserValue = await db.insert(user).values(newUser).returning();
  console.log(returnUserValue);

  const newCategory: NewProductCategoryType = {
    name: "Test Category",
  };
  const returnCategoryValue = await db
    .insert(productCategory)
    .values(newCategory)
    .returning();
  console.log(returnCategoryValue);

  const newProduct: NewProductType = {
    name: "Test product",
    skuNumber: 12345,
    regularPrice: "8.99",
    vendorOrderingCode: "GT789",
    categoryId: returnCategoryValue[0].id,
  };
  const returnProductValue = await db
    .insert(product)
    .values(newProduct)
    .returning();
  console.log(returnProductValue);
}
