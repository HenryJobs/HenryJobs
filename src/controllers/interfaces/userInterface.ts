import { User } from "../../models/User"

export interface allUserInterface {
    _id: string,
    firstName: string,
    lastName: string,
    UserTypes: string,
    image: string,
    email: string,
    password: string
};

export interface userInterface {
    _id: string,
    firstName: string,
    lastName: string,
    userName: string,
    userTypes: number,
    image: string,
    email: string,
    password: string
}

export interface userId extends User {
    _id: string
};