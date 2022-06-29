import { User } from "../../models/User"

export interface allUserInterface {
    _id: string,
    name: string,
    lastName: string,
    UserTypes: string,
    email: string,
    password: string
    premium: boolean
};

export interface userInterface {
    _id: string,
    name: string,
    lastName: string,
    userName: string,
    email: string, 
    password: string,
    profileImage: object,
    userTypes: number,
    technologies: string[],
    country: object,
    backFront: string,
    languages: string,
    otherstudies: string[],
    CurriculumCounter: number,
    counterIncome: number,
    workModality: string,
    banner: object
    premium: boolean

};

export interface businessIterface {
    _id: string,
    name: string,
    email: string,
    password: string,
    description: string,
    jobSummary: string,
    image: string,
    country: object,
    premium: boolean
}

export interface allBusinessInterface {
    _id: string,
    name: string,
    email: string,
    password: string,
    description: string,
    jobSummary: string,
    image: string,
    country: string
    profileImage: object,
    banner: object
    premium: boolean
};

export interface userId extends User {
    _id: string
};

export interface payloadInterface {
    _id: string;
    iat: number;
    exp: number;
};