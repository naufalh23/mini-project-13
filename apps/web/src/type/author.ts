export interface IUserReg {
    name: string
    email: string
    password: string
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserState {
    id: number;
    name: string;
    email: string;
    role: string;
    avatar: string;
}