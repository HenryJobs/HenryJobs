import { User } from "../../models/User"

export interface allUserInterface {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string
};

export interface userInterface {
    _id: string,
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string
}

export interface userId extends User {
    _id: string
};