import { Request, Response } from "express";
import { userModel } from "../models/User";
import { sendEmailWarning } from "./config/emailer";
import { contactInterface, userId } from "./interfaces/userInterface.controller";

export const getEmailWarning = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
        if (id) {
            const user: userId | null = await userModel.findById(id);

            if (user) {
                console.log("user dentro del if ", user)
                const allEmail: contactInterface = {
                    _id: user?._id,
                    name: user?.name,
                    lastName: user?.lastName,
                    email: user?.email
                }

                sendEmailWarning(allEmail?.email, allEmail?.name)
                return res.status(200).json(allEmail);
            }
        }

        res.status(404).send("Mail not found")

    } catch (err) {
        res.status(500).send("El server crasheó papá")
    }
};
