export interface categoryType {
  id: number;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetAllCategoriesResponseType {
  allCategories: categoryType[];
}

export interface productType {
  id: number;
  name: string;
  categoryId: number;
  regularPrice: number;
  specialPrice: number;
  isOnSpecial: number;
  size: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetAllProductsResponseType {
  allProducts: productType[];
}
