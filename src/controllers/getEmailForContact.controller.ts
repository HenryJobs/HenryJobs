import { Request, Response } from "express";
import { userModel } from "../models/User";
import { contact } from "./config/emailer";
import { contactInterface, userId } from "./interfaces/userInterface.controller";

export const getEmailContact = async (req: Request, res: Response) => {
    
    const { email } = req.body;
    const { id } = req.params;

    try {

        const business = await userModel.findOne({email: email})

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
                contact(allEmail?.email, business?.email)
                return res.status(200).json(allEmail);
            }
        }
        res.status(404).send("Mail not found")

    } catch (err) {
        res.status(500).send("El server crasheó papá")
    }
};
