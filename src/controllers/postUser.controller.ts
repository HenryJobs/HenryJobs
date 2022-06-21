import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../models/User";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const { firstName, lastName, userName, email, password } = req.body;

    try {
        const user = await userModel.create({
            firstName,
            lastName,
            userName,
            email,
            password
        });

        res.status(201).json(user)

    } catch (error) {
        console.error(error)       
    };
};