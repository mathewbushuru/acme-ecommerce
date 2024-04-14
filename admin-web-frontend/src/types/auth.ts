export interface AdminUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AdminLoginRequestType {
  email: string;
  password: string;
}

export interface AdminLoginSuccessfulResponseType {
  message: string;
  jwtToken: string;
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}
