import { Request, Response, NextFunction } from "express";

import db from "../database/db";
import { product, type ProductType } from "../database/schemas/product";

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
