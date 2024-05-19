import { eq } from "drizzle-orm";

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

  await seedUsers();
  await seedProductCategories();
  await seedProducts();

  console.log("Database successfully reset and seeded.");
}

async function seedUsers() {
  const mockUsersData: NewUserType[] = [
    {
      firstName: "Matt",
      lastName: "Bw",
      email: "matt@test.com",
      hashedPassword: await hashPassword("Tester123"),
      role: "administrator",
    },
    {
      firstName: "Oliver",
      lastName: "Twist",
      email: "oliver@test.com",
      hashedPassword: await hashPassword("Tester123"),
      role: "employee",
    },
    {
      firstName: "Rose",
      lastName: "Maylie",
      email: "rose@test.com",
      hashedPassword: await hashPassword("Tester123"),
      role: "customer",
    },
    {
      firstName: "Bill",
      lastName: "Sikes",
      email: "bill@test.com",
      hashedPassword: await hashPassword("Tester123"),
      role: "customer",
    },
    {
      firstName: "Noah",
      lastName: "Claypole",
      email: "noah@test.com",
      hashedPassword: await hashPassword("Tester123"),
      role: "customer",
    },
  ];

  mockUsersData.map(async (userData) => {
    await db.insert(user).values(userData);
  });
}

async function seedProductCategories() {
  const mockCategoriesData: NewProductCategoryType[] = [
    {
      name: "Meat & Seafood",
      imageUrl:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Fruits & Vegetables",
      imageUrl:
        "https://images.unsplash.com/photo-1622921491193-345ffb510f6f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dairy & Eggs",
      imageUrl:
        "https://images.unsplash.com/photo-1568405284653-65eca506b080?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Frozen",
      imageUrl:
        "https://images.unsplash.com/photo-1530027613618-a3b5391592ca?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Bakery",
      imageUrl:
        "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Deli & Ready Made Meals",
      imageUrl:
        "https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Plant Based & Non Dairy",
      imageUrl:
        "https://images.unsplash.com/photo-1585297099941-c912e47e20d2?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Pantry",
      imageUrl:
        "https://images.unsplash.com/photo-1626607007733-d09228471d9f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Health & Beauty",
      imageUrl:
        "https://images.unsplash.com/photo-1595348020949-87cdfbb44174?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Baby Care",
      imageUrl:
        "https://images.unsplash.com/photo-1584839404042-8bc21d240e91?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Pet Care",
      imageUrl:
        "https://images.unsplash.com/photo-1608408891486-f5cade977d19?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Cleaning, Paper & Home",
      imageUrl:
        "https://images.unsplash.com/photo-1624372646014-205ddf15eb9f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  mockCategoriesData.map(async (categoryData) => {
    await db.insert(productCategory).values(categoryData);
  });
}

async function seedProducts() {
  const mockProductData: NewProductType[] = [
    {
      name: "Fresh Blueberries",
      sizeAndMeasurement: "1 pint",
      skuNumber: 1234,
      regularPrice: "7.99",
      specialPrice: "3.99",
      isOnSpecial: true,
      vendorOrderingCode: "BB100",
      categoryId: (
        await db
          .select({ id: productCategory.id })
          .from(productCategory)
          .where(eq(productCategory.name, "Fruits & Vegetables"))
      )[0].id,
      imageUrl:
        "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Meat Lasagna",
      sizeAndMeasurement: "907 grams",
      skuNumber: 56789,
      regularPrice: "11.69",
      specialPrice: "7.49",
      isOnSpecial: true,
      vendorOrderingCode: "LSGN56789",
      categoryId: (
        await db
          .select({ id: productCategory.id })
          .from(productCategory)
          .where(eq(productCategory.name, "Meat & Seafood"))
      )[0].id,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664472658489-8bb2cf572db1?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ancient Grains Bread",
      sizeAndMeasurement: "600 grams",
      skuNumber: 987651,
      regularPrice: "7.99",
      specialPrice: "3.99",
      isOnSpecial: true,
      vendorOrderingCode: "AGR100",
      categoryId: (
        await db
          .select({ id: productCategory.id })
          .from(productCategory)
          .where(eq(productCategory.name, "Bakery"))
      )[0].id,
      imageUrl:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Maple & Brown Sugar Flavour Oat Meal",
      sizeAndMeasurement: "12 pack",
      skuNumber: 987652,
      regularPrice: "4.79",
      specialPrice: "2.99",
      isOnSpecial: true,
      vendorOrderingCode: "OAT100",
      categoryId: (
        await db
          .select({ id: productCategory.id })
          .from(productCategory)
          .where(eq(productCategory.name, "Pantry"))
      )[0].id,
      imageUrl:
        "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Breakfast Cereal",
      sizeAndMeasurement: "850 grams",
      skuNumber: 987653,
      regularPrice: "12.49",
      specialPrice: "8.99",
      isOnSpecial: true,
      vendorOrderingCode: "CER100",
      categoryId: (
        await db
          .select({ id: productCategory.id })
          .from(productCategory)
          .where(eq(productCategory.name, "Pantry"))
      )[0].id,
      imageUrl:
        "https://images.unsplash.com/photo-1517456944721-229d38679dfa?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sea Salt &  Vinegar Potato Chips",
      sizeAndMeasurement: "200 grams",
      skuNumber: 9876534,
      regularPrice: "5.49",
      specialPrice: "3.79",
      isOnSpecial: true,
      vendorOrderingCode: "CH100",
      categoryId: (
        await db
          .select({ id: productCategory.id })
          .from(productCategory)
          .where(eq(productCategory.name, "Pantry"))
      )[0].id,
      imageUrl:
        "https://images.unsplash.com/photo-1621447504864-d8686e12698c?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Coca-cola Soft Drinks",
      sizeAndMeasurement: "12 pack",
      skuNumber: 98765345,
      regularPrice: "12.49",
      specialPrice: "8.69",
      isOnSpecial: true,
      vendorOrderingCode: "COCA100",
      categoryId: (
        await db
          .select({ id: productCategory.id })
          .from(productCategory)
          .where(eq(productCategory.name, "Pantry"))
      )[0].id,
      imageUrl:
        "https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  mockProductData.map(async (productData) => {
    await db.insert(product).values(productData);
  });
}
