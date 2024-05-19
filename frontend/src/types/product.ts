export interface CategoryType {
  id: number;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductType {
  id: number;
  name: string;
  categoryId: number;
  regularPrice: number;
  specialPrice: number;
  isOnSpecial: number;
  sizeAndMeasurement: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}
