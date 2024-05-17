import db from "./db";
import { user, type NewUserType } from "./schemas/user";
import {
  category,
  type NewCategoryType,
  product,
  type NewProductType,
} from "./schemas/product";

const newUser: NewUserType = {
  firstName: "Matt",
  lastName: "B",
  email: "matt@test.com",
  hashedPassword: "Teter123",
};

const newCategory: NewCategoryType = {
  name: "Test Category",
};

const newProduct: NewProductType = {
  name: "Test product",
  skuNumber: 12345,
  regularPrice: "8.99",
  vendorOrderingCode: "GT789",
  categoryId: 1
};

export async function seedDatabase() {
  const returnUserValue = await db.insert(user).values(newUser).returning();
  console.log(returnUserValue);

  const returnCategoryValue = await db
    .insert(category)
    .values(newCategory)
    .returning();
  console.log(returnCategoryValue);

  const returnProductValue = await db
    .insert(product)
    .values(newProduct)
    .returning();
  console.log(returnProductValue);
}

// seedDatabase();
