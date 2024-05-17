import db from "./db";
import { user, type NewUserType } from "./schemas/user";
import {
  category,
  type NewCategoryType,
  product,
  type NewProductType,
} from "./schemas/product";

export async function seedDatabase() {
  await db.delete(user);
  await db.delete(product);
  await db.delete(category);

  const newUser: NewUserType = {
    firstName: "Matt",
    lastName: "B",
    email: "matt@test.com",
    hashedPassword: "Tester123",
  };
  const returnUserValue = await db.insert(user).values(newUser).returning();
  console.log(returnUserValue);

  const newCategory: NewCategoryType = {
    name: "Test Category",
  };
  const returnCategoryValue = await db
    .insert(category)
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
