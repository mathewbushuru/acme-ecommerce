export interface ProductSuccessfulResponseType {
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

export interface ProductCategoryType {
  id: number;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}
