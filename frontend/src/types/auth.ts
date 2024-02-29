export interface User {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  jwtToken: string | null;
}

export type SignupRequestType = {
  email: string;
  password: string;
};

export type LoginSuccessResponseType = {
  message: string;
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  jwtToken: string | null;
};

export type ServerErrorResponseType = {
  errorMessage: string;
};
