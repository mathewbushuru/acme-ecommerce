export interface dbCategoryType {
  id: number;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface dbEmployeeUserType {
  id: number;
  email: string;
  hashedPassword: string;
  firstName: string;
  lastName: string;
  isAdmin: number;
  createdAt: string;
  updatedAt: string;
}

export interface dbProductType {
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

export interface dbUserType {
  id: number;
  email: string;
  hashedPassword: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}
