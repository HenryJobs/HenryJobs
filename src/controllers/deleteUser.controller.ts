import { Request, Response } from "express";
import { userModel, User } from "../models/User";
import { userByNameInterface } from "./interfaces/userInterface";

export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        if (id) {
            const deleteById = await userModel.findOneAndDelete({ _id: id })

            if (deleteById) {
                const myDelete: userByNameInterface = {
                    _id: deleteById._id,
                    firstName: deleteById.firstName,
                    lastName: deleteById.lastName,
                    userName: deleteById.userName,
                    email: deleteById.email,
                    password: deleteById.password
                };

                return res.status(200).json(myDelete)
            };

            res.status(404).json({ msg: "User does not exist" })
        };
        
    } catch (error) {
        console.error(error)  
        res.status(500).json({ msg: "User ID not valid" })
    };
};