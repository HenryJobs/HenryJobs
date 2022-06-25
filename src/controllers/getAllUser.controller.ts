import { Request, Response, NextFunction } from "express";
import { User, userModel } from "../models/User";
import { allUserInterface } from "./interfaces/userInterface";

export const getAllUser = async (_: Request, res: Response, next: NextFunction) => {

    try {
    const allUsers: Array<User> = await userModel.find()

    if (allUsers) {
        const userMap: Array<allUserInterface> = allUsers.map((user: any) => {
            return ({
                _id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                userName: user.userName,
                UserTypes: user.UserTypes,
                email: user.email,
                password: user.password,
            });
        });

        res.status(200).json(userMap)

    } else {
        res.status(404).json("There is nothing here");
    } 

    } catch (error) {
    console.error(error)
    };
};
