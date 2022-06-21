import { Request, Response, NextFunction } from "express";
import { User, userModel } from "../models/User";
import { userInterface } from "./interfaces/userInter";

export const getAllUser = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const allUsers: Array<User> = await userModel.find()

    if (allUsers) {
        const userMap: Array<userInterface> = allUsers.map((user: any) => {
            return ({
                _id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password
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
