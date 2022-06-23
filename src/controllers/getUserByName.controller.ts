import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../models/User";
import { userId, userInterface } from "./interfaces/userInterface";

export const getUserByName = async (req: Request, res: Response, next: NextFunction) => {
    const { userName } = req.query

    if (userName) {

        const user: userId | null = await userModel.findOne({ userName: userName })

        if (user) {
            const allNames: userInterface = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                userName: user.userName,
                userTypes: user.userTypes,
                email: user.email,
                password: user.password
            }
            res.status(200).json(allNames)
        };
    };
};