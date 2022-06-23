import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../models/User";
import { sendMail } from './config/emailer'

export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const { firstName, lastName, userName, email, password, image } = req.body;

    try {
        const user = await userModel.create({ 
            firstName,
            lastName,
            userName,
            image,
            email,
            password,
        });

        sendMail();

        res.status(201).json(user)

    } catch (error) {
        console.error(error)       
    };
};