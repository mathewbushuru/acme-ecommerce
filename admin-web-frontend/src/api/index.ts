import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { type RootState } from "@/store/store";

import {
  type ProductType,
  type ProductCategoryType,
} from "@/types/product";
import {
  type AdminLoginRequestType,
  type AdminLoginSuccessfulResponseType,
} from "@/types/auth";

// const SERVER_URL = "https://acme-groceries-api.onrender.com";
const SERVER_URL = "http://localhost:5000";

console.log(`Connecting to server:  ${SERVER_URL}`);

const acmeAdminApi = createApi({
  reducerPath: "acmeAdminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    prepareHeaders: (headers, { getState }) => {
      // if token in redux store, use it for all authenticated requests
      const token = (getState() as RootState).adminAuth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getRoot: builder.query<string, void>({
      query: () => `/`,
    }),

    adminLogin: builder.mutation<
      AdminLoginSuccessfulResponseType,
      AdminLoginRequestType
    >({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: [],
    }),

    getAllProducts: builder.query<ProductType[], void>({
      query: () => `/products/all`,
    }),

    getProductBySkuNumber: builder.query<ProductType, string>({
      query: (skuNumber) => `/products/${skuNumber}`,
    }),

    getAllCategories: builder.query<ProductCategoryType[], void>({
      query: () => `/products/categories/all`,
    }),
  }),
});

export const {
  useGetRootQuery,
  useAdminLoginMutation,
  useGetAllProductsQuery,
  useGetProductBySkuNumberQuery,
  useGetAllCategoriesQuery,
} = acmeAdminApi;

export default acmeAdminApi;
