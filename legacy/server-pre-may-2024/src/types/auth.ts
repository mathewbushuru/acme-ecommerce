export interface LoginRequestType {
  email: string;
  password: string;
}

export interface LoginSuccessfulResponseType {
  message: string;
  jwtToken: string;
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

export interface SignupRequestType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
