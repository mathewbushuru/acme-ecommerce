export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  // jwtToken: string | null;
}

export type SignupRequestType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginRequestType = {
  email: string;
  password: string;
}

export type LoginSuccessResponseType = {
  message: string;
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  jwtToken: string ;
};

export type ServerErrorResponseType = {
  errorMessage: string;
};
