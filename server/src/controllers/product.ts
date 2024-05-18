import { Request, Response, NextFunction } from "express";
import { eq } from "drizzle-orm";

import db from "../database/db";
import {
  product,
  type ProductType,
  category,
  type CategoryType,
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
 * @desc:       Get product by id
 * @listens:    POST /products/:productId
 * @access:     public
 * @param {Request} req;
 * @param {Response} res;
 * @param {NextFunction} next;
 * @return {void}
 */
export const getProductByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { productId: productIdString } = req.params;

  const productIdNumber = Number(productIdString);
  if (isNaN(productIdNumber)) {
    const errorMessage = "Product Id must be a valid number.";
    console.error("[getProductByIdController]: ", errorMessage);
    return res.status(400).json({ errorMessage });
  }

  try {
    const dbQueryResult = await db
      .select()
      .from(product)
      .where(eq(product.id, productIdNumber));

    if (dbQueryResult === undefined) {
      const errorMessage = "There was an error fetching this product.";
      console.error("[getProductByIdController]: ", errorMessage);
      return res.status(500).json({ errorMessage });
    }

    if (dbQueryResult.length === 0) {
      const errorMessage = `Product with Id ${productIdNumber} was not found.`;
      console.error("[getProductByIdController]: ", errorMessage);
      return res.status(404).json({ errorMessage });
    }

    const productData: ProductType = dbQueryResult[0];

    return res.json(productData);
  } catch (error: any) {
    const errorMessage = "There was an error fetching this product.";
    console.error("[getProductByIdController]: ", errorMessage);
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
    const dbQueryResult = await db.select().from(category);

    if (dbQueryResult === undefined) {
      const errorMessage = "There was an error fetching all categories.";
      console.error("[getAllProductCategoriesController]: ", errorMessage);
      return res.status(500).json({ errorMessage });
    }

    const allCategoriesArr: CategoryType[] = dbQueryResult;

    return res.json(allCategoriesArr);
  } catch (error: any) {
    const errorMessage = "There was an error fetching all categories.";
    console.error("[getAllProductCategoriesController]: ", errorMessage);
    console.error(error);
    return res.status(500).json({ errorMessage });
  }
};

/**
 * @desc:       Get category by id
 * @listens:    POST /products/categories/:categoryId
 * @access:     public
 * @param {Request} req;
 * @param {Response} res;
 * @param {NextFunction} next;
 * @return {void}
 */
export const getCategoryByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { categoryId: categoryIdString } = req.params;
  
    const categoryIdNumber = Number(categoryIdString);
    if (isNaN(categoryIdNumber)) {
      const errorMessage = "Category Id must be a valid number.";
      console.error("[getCategoryByIdController]: ", errorMessage);
      return res.status(400).json({ errorMessage });
    }
  
    try {
      const dbQueryResult = await db
        .select()
        .from(category)
        .where(eq(category.id, categoryIdNumber));
  
      if (dbQueryResult === undefined) {
        const errorMessage = "There was an error fetching this category.";
        console.error("[getCategoryByIdController]: ", errorMessage);
        return res.status(500).json({ errorMessage });
      }
  
      if (dbQueryResult.length === 0) {
        const errorMessage = `Category with Id ${categoryIdNumber} was not found.`;
        console.error("[getCategoryByIdController]: ", errorMessage);
        return res.status(404).json({ errorMessage });
      }
  
      const categoryData: CategoryType = dbQueryResult[0];
  
      return res.json(categoryData);
    } catch (error: any) {
      const errorMessage = "There was an error fetching this category.";
      console.error("[getCategoryByIdController]: ", errorMessage);
      console.error(error);
      return res.status(500).json({ errorMessage });
    }
  };
