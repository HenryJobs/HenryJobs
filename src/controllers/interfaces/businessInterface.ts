import { Business } from "../../models/Bussiness";

export interface businessId extends Business{
    _id: string
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

}

export interface businessInterface {

    _id: string,
    name: string,
    email: string,
    password: string,
    description: string,
    jobSummary: string,
    image: string,
    country: string,
}