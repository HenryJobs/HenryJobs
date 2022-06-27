import { User } from "../../models/User"

export interface allUserInterface {
    _id: string,
    firstName: string,
    lastName: string,
    UserTypes: string,
    email: string,
    password: string
};

export interface userInterface {
    _id: string,
    firstName: string,
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
    counterIngreso: number,
    banner: object

}

export interface businessIterface {

    _id: string,
    name: string,
    email: string,
    password: string,
    description: string,
    jobSummary: string,
    image: string,
    country: object,

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

}

export interface userId extends User {
    _id: string
};

export interface payloadInterface {
    _id: string;
    iat: number;
    exp: number;
};