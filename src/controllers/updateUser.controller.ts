import { Request, Response } from "express";
import { userModel, User } from "../models/User";

export const updateUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { name, lastName, userName, email, password, workModality } = req.body;

    try {
        const updated: any = await userModel.findByIdAndUpdate({ _id: id }, {
            name,
            lastName,
            userName,
            email,
            password,
            workModality
        });

        res.status(200).json(updated)

    } catch (error) {
        console.error(error)
    };
};