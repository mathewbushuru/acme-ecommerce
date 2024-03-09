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
