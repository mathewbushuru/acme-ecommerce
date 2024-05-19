export type AdminUser = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: "administrator" | "employee" | "customer" | null;
  createdAt: Date | null;
};

export type AdminLoginRequestType = {
  email: string;
  password: string;
  role?: AdminUser["role"];
};

export type AdminLoginSuccessfulResponseType = {
  message: string;
  jwtToken: string;
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: AdminUser["role"];
  createdAt: Date | null;
};
