import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../models/User";
import { userByNameInterface } from "./interfaces/userInterface";

export const getUserByName = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName } = req.query

    if (firstName || lastName) {

        const user: userByNameInterface = {}
        if (firstName) user.firstName = firstName
        if (lastName) user.lastName = lastName

        const names = await userModel.findOne(user)

        res.status(200).json(names)

    };

}