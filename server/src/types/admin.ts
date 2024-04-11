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
    isAdmin: string;
    createdAt: string;
    updatedAt: string;
}

export interface AdminSignupRequestType {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
