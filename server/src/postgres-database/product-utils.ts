import sql from ".";

import { type dbCategoryType, type dbProductType } from "../types/database";

export async function getAllProductCategories() {
  try {
    const dbResponse = (await sql`
            SELECT
                    id, name,
                    imageurl as "imageUrl",
                    createdat as "createdAt",
                    updatedat as "updatedAt"
                FROM acme_categories;
        `) as unknown as dbCategoryType[];
    return dbResponse;
  } catch (error: any) {
    throw new Error(error.message || "Error fetching all categories");
  }
}

export async function getAllProducts() {
  try {
    const dbResponse = (await sql`
                SELECT
                        id, name, size, 
                        categoryid as "categoryId",
                        regularprice as "regularPrice",
                        specialprice as "specialPrice",
                        isonspecial as "isOnSpecial",
                        imageurl as "imageUrl",
                        createdat as "createdAt",
                        updatedat as "updatedAt"
                    FROM acme_products;
            `) as unknown as dbProductType[];
    return dbResponse;
  } catch (error: any) {
    throw new Error(error.message || "Error fetching all products");
  }
}
export async function getProductById(id: string) {
  try {
    const dbResponse = (await sql`
                SELECT
                        id, name, size, 
                        categoryid as "categoryId",
                        regularprice as "regularPrice",
                        specialprice as "specialPrice",
                        isonspecial as "isOnSpecial",
                        imageurl as "imageUrl",
                        createdat as "createdAt",
                        updatedat as "updatedAt"
                    FROM acme_products
                    WHERE id = ${id};
            `) as unknown as dbProductType[];
    return dbResponse[0];
  } catch (error: any) {
    throw new Error(error.message || "Error fetching product");
  }
}
