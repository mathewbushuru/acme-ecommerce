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
    {
      firstName: "Matt",
      lastName: "Admin",
      email: "mattbw@test.com",
      hashedPassword: await hashPassword("781*admiN"),
      role: "administrator",
    },
    {
      firstName: "Matt",
      lastName: "Customer",
      email: "mattb@test.com",
      hashedPassword: await hashPassword("Tester123!"),
      role: "administrator",
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
      id: 100,
      imageUrl:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Fruits & Vegetables",
      id: 200,
      imageUrl:
        "https://images.unsplash.com/photo-1622921491193-345ffb510f6f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Pantry",
      id: 300,
      imageUrl:
        "https://images.unsplash.com/photo-1626607007733-d09228471d9f?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dairy & Eggs",
      id: 400,
      imageUrl:
        "https://images.unsplash.com/photo-1568405284653-65eca506b080?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Frozen",
      id: 500,
      imageUrl:
        "https://images.unsplash.com/photo-1530027613618-a3b5391592ca?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Bakery",
      id: 600,
      imageUrl:
        "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Deli & Ready Made Meals",
      id: 700,
      imageUrl:
        "https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Plant Based & Non Dairy",
      id: 800,
      imageUrl:
        "https://images.unsplash.com/photo-1585297099941-c912e47e20d2?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Health & Beauty",
      id: 900,
      imageUrl:
        "https://images.unsplash.com/photo-1595348020949-87cdfbb44174?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Baby Care",
      id: 1000,
      imageUrl:
        "https://images.unsplash.com/photo-1584839404042-8bc21d240e91?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Pet Care",
      id: 1100,
      imageUrl:
        "https://images.unsplash.com/photo-1608408891486-f5cade977d19?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Cleaning, Paper & Home",
      id: 1200,
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
      status: "active",
      vendorOrderingCode: "BB100",
      categoryId: 200,
      imageUrl:
        "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Meat Lasagna",
      sizeAndMeasurement: "907 grams",
      skuNumber: 5678,
      regularPrice: "11.69",
      specialPrice: "7.49",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "LSGN56789",
      categoryId: 100,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664472658489-8bb2cf572db1?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ancient Grains Bread",
      sizeAndMeasurement: "600 grams",
      skuNumber: 9876,
      regularPrice: "7.99",
      specialPrice: "3.99",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "AGR100",
      categoryId: 600,
      imageUrl:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Maple & Brown Sugar Flavour Oat Meal",
      sizeAndMeasurement: "12 pack",
      skuNumber: 8765,
      regularPrice: "4.79",
      specialPrice: "2.99",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "OAT100",
      categoryId: 300,
      imageUrl:
        "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Breakfast Cereal",
      sizeAndMeasurement: "850 grams",
      skuNumber: 7653,
      regularPrice: "12.49",
      specialPrice: "8.99",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "CER100",
      categoryId: 300,
      imageUrl:
        "https://images.unsplash.com/photo-1517456944721-229d38679dfa?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sea Salt &  Vinegar Potato Chips",
      sizeAndMeasurement: "200 grams",
      skuNumber: 6534,
      regularPrice: "5.49",
      specialPrice: "3.79",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "CH100",
      categoryId: 300,
      imageUrl:
        "https://images.unsplash.com/photo-1621447504864-d8686e12698c?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Coca-cola Soft Drinks",
      sizeAndMeasurement: "12 pack",
      skuNumber: 65345,
      regularPrice: "12.49",
      specialPrice: "8.69",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "COCA100",
      categoryId: 300,
      imageUrl:
        "https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Organic Chicken Breast",
      sizeAndMeasurement: "500 grams",
      skuNumber: 12345,
      regularPrice: "9.99",
      specialPrice: "6.99",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "CHICK100",
      categoryId: 100,
      imageUrl:
        "https://images.unsplash.com/photo-1641898378548-ac93da99786a?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Salmon Fillet",
      sizeAndMeasurement: "300 grams",
      skuNumber: 23456,
      regularPrice: "12.99",
      specialPrice: null,
      isOnSpecial: false,
      status: "active",
      vendorOrderingCode: "SALM200",
      categoryId: 100,
      imageUrl:
        "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Gala Apples",
      sizeAndMeasurement: "1 kg",
      skuNumber: 34567,
      regularPrice: "4.99",
      specialPrice: "3.49",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "APL100",
      categoryId: 200,
      imageUrl:
        "https://images.unsplash.com/photo-1502027198647-4f28359d9a17?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Carrots",
      sizeAndMeasurement: "1 kg",
      skuNumber: 45678,
      regularPrice: "2.99",
      specialPrice: "1.99",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "CRT200",
      categoryId: 200,
      imageUrl:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Whole Wheat Penne Pasta",
      sizeAndMeasurement: "500 grams",
      skuNumber: 56789,
      regularPrice: "3.49",
      specialPrice: "2.49",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "PSTA100",
      categoryId: 300,
      imageUrl:
        "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Organic Milk",
      sizeAndMeasurement: "1 liter",
      skuNumber: 67890,
      regularPrice: "2.99",
      specialPrice: "1.99",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "MLK100",
      categoryId: 400,
      imageUrl:
        "https://images.unsplash.com/photo-1635436338433-89747d0ca0ef?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Free-Range Eggs",
      sizeAndMeasurement: "12 pack",
      skuNumber: 78901,
      regularPrice: "4.49",
      specialPrice: "3.49",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "EGG100",
      categoryId: 400,
      imageUrl:
        "https://images.unsplash.com/photo-1652847504592-d0c4cfe0a6c7?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Frozen Mixed Berries",
      sizeAndMeasurement: "1 kg",
      skuNumber: 89012,
      regularPrice: "9.99",
      specialPrice: "7.99",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "FRZN100",
      categoryId: 500,
      imageUrl:
        "https://images.unsplash.com/photo-1466065478348-0b967011f8e0?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Frozen Peas",
      sizeAndMeasurement: "500 grams",
      skuNumber: 90123,
      regularPrice: "2.99",
      specialPrice: "1.99",
      isOnSpecial: true,
      status: "discontinued",
      vendorOrderingCode: "FRZN200",
      categoryId: 500,
      imageUrl:
        "https://images.unsplash.com/photo-1590685006710-2b478c69b26b?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sourdough Bread",
      sizeAndMeasurement: "800 grams",
      skuNumber: 123456,
      regularPrice: "5.99",
      specialPrice: "4.49",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "BRD100",
      categoryId: 600,
      imageUrl:
        "https://images.unsplash.com/photo-1591458736923-c06a260e3412?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Croissants",
      sizeAndMeasurement: "6 pack",
      skuNumber: 234567,
      regularPrice: "6.49",
      specialPrice: "4.99",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "CRS100",
      categoryId: 600,
      imageUrl:
        "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Chicken Caesar Salad",
      sizeAndMeasurement: "500 grams",
      skuNumber: 345678,
      regularPrice: "8.99",
      specialPrice: "6.99",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "SAL100",
      categoryId: 700,
      imageUrl:
        "https://images.unsplash.com/photo-1563897539633-7374c276c212?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Vegetable Stir Fry",
      sizeAndMeasurement: "600 grams",
      skuNumber: 456789,
      regularPrice: "7.99",
      specialPrice: null,
      isOnSpecial: false,
      status: "draft",
      vendorOrderingCode: "STF100",
      categoryId: 700,
      imageUrl: "/placeholder.svg",
    },
    {
      name: "Almond Milk",
      sizeAndMeasurement: "1 liter",
      skuNumber: 567890,
      regularPrice: "3.99",
      specialPrice: "2.99",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "ALM100",
      categoryId: 800,
      imageUrl:
        "https://images.unsplash.com/photo-1505576540771-be91e4753e0f?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Soy Yogurt",
      sizeAndMeasurement: "500 grams",
      skuNumber: 678901,
      regularPrice: "4.49",
      specialPrice: "3.49",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "SOY100",
      categoryId: 800,
      imageUrl:
        "https://images.unsplash.com/photo-1651256785590-6a200ecbf64a?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Shampoo",
      sizeAndMeasurement: "500 ml",
      skuNumber: 789012,
      regularPrice: "7.99",
      specialPrice: null,
      isOnSpecial: false,
      status: "draft",
      vendorOrderingCode: "SHMP100",
      categoryId: 900,
      imageUrl: "/placeholder.svg",
    },
    {
      name: "Body Lotion",
      sizeAndMeasurement: "400 ml",
      skuNumber: 890123,
      regularPrice: "8.99",
      specialPrice: "6.99",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "BDLT100",
      categoryId: 900,
      imageUrl:
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Baby Diapers",
      sizeAndMeasurement: "20 pack",
      skuNumber: 901234,
      regularPrice: "12.99",
      specialPrice: null,
      isOnSpecial: false,
      status: "draft",
      vendorOrderingCode: "DIAP100",
      categoryId: 1000,
      imageUrl: "/placeholder.svg",
    },
    {
      name: "Baby Soap",
      sizeAndMeasurement: "80 pack",
      skuNumber: 1234567,
      regularPrice: "5.99",
      specialPrice: "4.99",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "BW100",
      categoryId: 1000,
      imageUrl:
        "https://images.unsplash.com/photo-1582452721681-c56a89a8280a?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dog Food",
      sizeAndMeasurement: "5 kg",
      skuNumber: 2345678,
      regularPrice: "19.99",
      specialPrice: "17.99",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "DF100",
      categoryId: 1100,
      imageUrl:
        "https://images.unsplash.com/photo-1565674244283-993fb27a215f?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Cat Litter",
      sizeAndMeasurement: "10 kg",
      skuNumber: 3456789,
      regularPrice: "12.99",
      specialPrice: null,
      isOnSpecial: false,
      status: "draft",
      vendorOrderingCode: "CL100",
      categoryId: 1100,
      imageUrl: "/placeholder.svg",
    },
    {
      name: "Paper Towels",
      sizeAndMeasurement: "6 rolls",
      skuNumber: 4567890,
      regularPrice: "8.99",
      specialPrice: "6.99",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "PT100",
      categoryId: 1200,
      imageUrl:
        "https://images.unsplash.com/photo-1620778864482-5f20e3d9745a?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Laundry Detergent",
      sizeAndMeasurement: "2 liters",
      skuNumber: 5678901,
      regularPrice: "9.99",
      specialPrice: "7.99",
      isOnSpecial: true,
      status: "active",
      vendorOrderingCode: "LD100",
      categoryId: 1200,
      imageUrl:
        "https://images.unsplash.com/photo-1624372635282-b324bcdd4907?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  mockProductData.map(async (productData) => {
    await db.insert(product).values(productData);
  });
}
