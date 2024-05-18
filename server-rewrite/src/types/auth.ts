import { type UserType, type NewUserType } from "../database/schemas/user";

export type LoginRequestType = {
  email: string;
  password: string;
  role: UserType["role"];
};

export type LoginSuccessfulResponseType = Omit<UserType, "hashedPassword"> & {
  message: string;
  jwtToken: string;
};