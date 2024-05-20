import { Request, Response, NextFunction } from "express";
import { eq } from "drizzle-orm";

import db from "../database/db";
import {
  product,
  type ProductType,
  type NewProductType,
  productCategory,
  type ProductCategoryType,
  type NewProductCategoryType,
} from "../database/schemas/product";

/**
 * @desc:       Get all products
 * @listens:    POST /products/all
 * @access:     public
 * @param {Request} req;
 * @param {Response} res;
 * @param {NextFunction} next;
 * @return {void}
 */
export const getAllProductsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dbQueryResult = await db.select().from(product);

    if (dbQueryResult === undefined) {
      const errorMessage = "There was an error fetching all products.";
      console.error("[getAllProductsController]: ", errorMessage);
      return res.status(500).json({ errorMessage });
    }

    const allProductsArr: ProductType[] = dbQueryResult;

    return res.json(allProductsArr);
  } catch (error: any) {
    const errorMessage = "There was an error fetching all products.";
    console.error("[getAllProductsController]: ", errorMessage);
    console.error(error);
    return res.status(500).json({ errorMessage });
  }
};

/**
 * @desc:       Get product by sku number
 * @listens:    POST /products/:skuNumber
 * @access:     public
 * @param {Request} req;
 * @param {Response} res;
 * @param {NextFunction} next;
 * @return {void}
 */
export const getProductBySkuNumberController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { skuNumber: skuNumberString } = req.params;

  const skuNumberAsNumber = Number(skuNumberString);
  if (isNaN(skuNumberAsNumber)) {
    const errorMessage = "Sku number must be a valid number.";
    console.error("[getProductBySkuNumberController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }

  try {
    const dbQueryResult = await db
      .select()
      .from(product)
      .where(eq(product.skuNumber, skuNumberAsNumber));

    if (dbQueryResult === undefined) {
      const errorMessage = "There was an error fetching this product.";
      console.error("[getProductBySkuNumberController]: ", errorMessage);
      return res.status(500).json({ errorMessage });
    }

    if (dbQueryResult.length === 0) {
      const errorMessage = `Product with sku number ${skuNumberAsNumber} was not found.`;
      console.error("[getProductBySkuNumberController]: ", errorMessage);
      return res.status(404).json({ errorMessage });
    }

    const productData: ProductType = dbQueryResult[0];

    return res.json(productData);
  } catch (error: any) {
    const errorMessage = "There was an error fetching this product.";
    console.error("[getProductBySkuNumberController]: ", errorMessage);
    console.error(error);
    return res.status(500).json({ errorMessage });
  }
};

/**
 * @desc:       Create new product
 * @listens:    POST /products/new
 * @access:     public
 * @param {Request} req;
 * @param {Response} res;
 * @param {NextFunction} next;
 * @return {void}
 */
export const postCreateNewProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const requestData = req.body as NewProductType;

  if (!requestData.skuNumber) {
    const errorMessage = "Product creation error, sku number is missing.";
    console.error("[postCreateNewProductController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }

  const skuNumberStringAsNumber = Number(requestData.skuNumber);
  if (isNaN(skuNumberStringAsNumber)) {
    const errorMessage = "Sku number must be a valid number.";
    console.error("[postCreateNewProductController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }
  requestData.skuNumber = skuNumberStringAsNumber;

  if (!requestData.name) {
    const errorMessage = "Product creation error, product name is missing.";
    console.error("[postCreateNewProductController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!requestData.categoryId) {
    const errorMessage =
      "Product creation error, product category id is missing.";
    console.error("[postCreateNewProductController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!requestData.regularPrice) {
    const errorMessage =
      "Product creation error, product regular price is missing.";
    console.error("[postCreateNewProductController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!requestData.vendorOrderingCode) {
    const errorMessage =
      "Product creation error, product vendor code is missing.";
    console.error("[postCreateNewProductController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!requestData.status) {
    requestData.status = "draft";
  }

  try {
    const dbQueryResult = await db
      .insert(product)
      .values(requestData)
      .returning();

    if (!dbQueryResult || dbQueryResult.length === 0) {
      throw new Error("There was an error creating the product, try again.");
    }

    const createdProductData = dbQueryResult[0];

    const responseData: ProductType & {
      message: string;
    } = {
      message: `${createdProductData.name} product successfully created.`,
      ...createdProductData,
    };

    console.log("[postCreateNewProductController]:", responseData.message);

    return res.json(responseData);
  } catch (error: any) {
    let customErrorMessage: string | undefined;

    if (
      error.message &&
      error.message ===
        'duplicate key value violates unique constraint "acme_product_sku_number_unique"'
    ) {
      customErrorMessage = `Product creation error, sku number ${requestData.skuNumber} already in system.`;
    }

    if (
      error.message &&
      error.message ===
        'insert or update on table "acme_product" violates foreign key constraint "acme_product_category_id_acme_product_category_id_fk"'
    ) {
      customErrorMessage = `Product creation error, Category id ${requestData.categoryId} not in system.`;
    }

    const errorMessage =
      customErrorMessage ||
      "There was an error creating the product, try again.";
    console.error("[postCreateNewProductController]: ", errorMessage);
    console.error(error);
    return res.status(500).json({ errorMessage });
  }
};

/**
 * @desc:       Get all product categories
 * @listens:    POST /products/categories/all
 * @access:     public
 * @param {Request} req;
 * @param {Response} res;
 * @param {NextFunction} next;
 * @return {void}
 */
export const getAllProductCategoriesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dbQueryResult = await db
      .select()
      .from(productCategory)
      .orderBy(productCategory.id);

    if (dbQueryResult === undefined) {
      const errorMessage =
        "There was an error fetching all product categories.";
      console.error("[getAllProductCategoriesController]: ", errorMessage);
      return res.status(500).json({ errorMessage });
    }

    const allProductCategoriesArr: ProductCategoryType[] = dbQueryResult;

    return res.json(allProductCategoriesArr);
  } catch (error: any) {
    const errorMessage = "There was an error fetching all categories.";
    console.error("[getAllProductCategoriesController]: ", errorMessage);
    console.error(error);
    return res.status(500).json({ errorMessage });
  }
};

/**
 * @desc:       Get product category by id
 * @listens:    POST /products/categories/:categoryId
 * @access:     public
 * @param {Request} req;
 * @param {Response} res;
 * @param {NextFunction} next;
 * @return {void}
 */
export const getProductCategoryByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { categoryId: categoryIdString } = req.params;

  const categoryIdNumber = Number(categoryIdString);
  if (isNaN(categoryIdNumber)) {
    const errorMessage = "Category Id must be a valid number.";
    console.error("[getProductCategoryByIdController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }

  try {
    const dbQueryResult = await db
      .select()
      .from(productCategory)
      .where(eq(productCategory.id, categoryIdNumber));

    if (dbQueryResult === undefined) {
      const errorMessage = "There was an error fetching this product category.";
      console.error("[getProductCategoryByIdController]: ", errorMessage);
      return res.status(500).json({ errorMessage });
    }

    if (dbQueryResult.length === 0) {
      const errorMessage = `Product category with Id ${categoryIdNumber} was not found.`;
      console.error("[getProductCategoryByIdController]: ", errorMessage);
      return res.status(404).json({ errorMessage });
    }

    const categoryData: ProductCategoryType = dbQueryResult[0];

    return res.json(categoryData);
  } catch (error: any) {
    const errorMessage = "There was an error fetching this category.";
    console.error("[getProductCategoryByIdController]: ", errorMessage);
    console.error(error);
    return res.status(500).json({ errorMessage });
  }
};

/**
 * @desc:       Create new product category
 * @listens:    POST /products/categories/new
 * @access:     public
 * @param {Request} req;
 * @param {Response} res;
 * @param {NextFunction} next;
 * @return {void}
 */
export const postCreateNewProductCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const requestData = req.body as NewProductCategoryType;

  if (!requestData.id) {
    const errorMessage = "Product creation error, product category id is missing.";
    console.error("[postCreateNewProductController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }

  if (!requestData.name) {
    const errorMessage = "Product creation error, product category name is missing.";
    console.error("[postCreateNewProductController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }

  try {
    const dbQueryResult = await db
      .insert(productCategory)
      .values(requestData)
      .returning();

    if (!dbQueryResult || dbQueryResult.length === 0) {
      throw new Error("There was an error creating the category, try again.");
    }

    const createdCategoryData = dbQueryResult[0];

    const responseData: ProductCategoryType & {
      message: string;
    } = {
      message: `${createdCategoryData.name} category successfully created.`,
      ...createdCategoryData,
    };

    console.log(
      "[postCreateNewProductCategoryController]:",
      responseData.message
    );

    return res.json(responseData);
  } catch (error: any) {
    const errorMessage = "There was an error creating the category, try again.";
    console.error("[postCreateNewProductCategoryController]: ", errorMessage);
    console.error(error);
    return res.status(500).json({ errorMessage });
  }
};
