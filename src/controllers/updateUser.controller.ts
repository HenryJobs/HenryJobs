import { Request, Response } from "express";
import { userModel } from "../models/User";
import { userInterface } from "./interfaces/userInterface.controller";

export const updateUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { firstName, lastName, userName, email, password, premium } = req.body;

    try {
        const updated: userInterface | null = await userModel.findByIdAndUpdate({ _id: id }, {
            firstName,
            lastName,
            userName,
            email,
            password,
            premium
        });

        res.status(200).json(updated)

    } catch (error) {
        console.error(error)
    };
};