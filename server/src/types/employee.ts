export interface EmployeeLoginRequestType {
    email: string;
    password: string;
}

export interface EmployeeLoginSuccessfulResponseType {
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

export interface EmployeeSignupRequestType {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isAdmin: boolean;
}
