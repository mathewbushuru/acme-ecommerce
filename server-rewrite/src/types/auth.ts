import { type UserType, type NewUserType } from "../database/schemas/user";

export type LoginRequestType = {
  email: string;
  password: string;
  isAdminOrEmployee?: boolean;
};

export type LoginSuccessfulResponseType = Omit<UserType, "hashedPassword"> & {
  message: string;
  jwtToken: string;
};

export type SignupRequestType = Omit<NewUserType, "id" | "createdAt">;
