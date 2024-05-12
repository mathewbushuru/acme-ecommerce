export interface ProductSuccessfulResponseType {
  id: string;
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
  id: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}
