export type ProductSuccessfulResponseType = {
  id: string; // to be converted to number in BE
  skuNumber: string; // to be converted to number in BE
  name: string;
  description: string | null;
  sizeAndMeasurement: string | null;
  imageUrl: string | null;
  createdAt: Date | null;
  categoryId: number | null;
  regularPrice: string;
  specialPrice: string | null;
  isOnSpecial: boolean | null;
  vendorId: number | null;
  vendorOrderingCode: string;
  status: "draft" | "active" | "discontinued" | null;
};

export type NewProductType = {
  skuNumber: string; // to be converted to number in BE
  name: string;
  regularPrice: string;
  vendorOrderingCode: string;
  id?: string | undefined; // created by database on insert, and is number in BE
  description?: string | null | undefined;
  sizeAndMeasurement?: string | null | undefined;
  imageUrl?: string | null | undefined;
  createdAt?: string | null | undefined; // to be converted to Date in BE
  categoryId?: string | null | undefined; // to be converted to number in BE
  specialPrice?: string | null | undefined;
  isOnSpecial?: string | null | undefined; // 'true'/'false' - to be converted to boolean in BE
  vendorId?: string | null | undefined; // to be converted to number in BE
  status?: "draft" | "active" | "discontinued" | null | undefined;
};

export type ProductCategoryType = {
  id: string; // to be converted to number in BE
  name: string;
  imageUrl: string | null;
  createdAt: Date | null;
};

export type NewProductCategoryType = {
  name: string;
  id?: string | undefined; // created by database on insert, and is number in BE
  imageUrl?: string | null | undefined;
  createdAt?: Date | null | undefined;
}
