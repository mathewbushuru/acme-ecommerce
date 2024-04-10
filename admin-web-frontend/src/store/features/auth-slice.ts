import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { AdminUser } from "@/types/auth";
import { localStorageHelpers } from "@/lib/utils";

type AuthState = {
  user: AdminUser | null;
  token: string | null;
};

const initialState: AuthState = {
  user: null,
  token: localStorageHelpers.getToken(),
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: AdminUser; token: string }>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorageHelpers.setToken(action.payload.token);
    },
    clearCredentials: (state) => {
      localStorageHelpers.removeToken();
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, clearCredentials } = adminAuthSlice.actions;

const adminAuthReducer = adminAuthSlice.reducer;
export default adminAuthReducer;
