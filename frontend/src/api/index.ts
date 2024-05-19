import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { type RootState } from "@/store/store";
import {
  type LoginRequestType,
  type LoginSuccessResponseType,
  type SignupRequestType,
  type SignupResponseType,
} from "@/types/auth";
import {
  type ProductType,
  type CategoryType,
} from "@/types/product";

const SERVER_URL = "https://acme-groceries-api.onrender.com";
// const SERVER_URL = "http://localhost:5000";

console.log(`Connecting to server: ${SERVER_URL}`);

const acmeApi = createApi({
  reducerPath: "acmeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    prepareHeaders: (headers, { getState }) => {
      // if token is in redux store, use it for all authenticated requests
      const token = (getState() as RootState).auth.token;
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
    login: builder.mutation<LoginSuccessResponseType, LoginRequestType>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: [],
    }),
    signup: builder.mutation<SignupResponseType, SignupRequestType>({
      query: (signupData) => ({
        url: "/auth/signup",
        method: "POST",
        body: signupData,
      }),
      invalidatesTags: [],
    }),
    getAllProductCategories: builder.query<CategoryType[], void>({
      query: () => `/products/categories/all`,
    }),
    getAllProducts: builder.query<ProductType[], void>({
      query: () => `/products/all`,
    }),
  }),
});

export const {
  useGetRootQuery,
  useLoginMutation,
  useSignupMutation,
  useGetAllProductCategoriesQuery,
  useGetAllProductsQuery,
} = acmeApi;

export default acmeApi;
