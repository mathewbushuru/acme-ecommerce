import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { type RootState } from "@/store/store";
import {
  type LoginRequestType,
  type LoginSuccessResponseType,
} from "@/types/auth";

const SERVER_URL = "https://acme-groceries-api.onrender.com";
// const SERVER_URL = "http://localhost:5000";

console.log(`Connected to server: ${SERVER_URL}`);

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
  }),
});

export const { useGetRootQuery, useLoginMutation } = acmeApi;

export default acmeApi;
