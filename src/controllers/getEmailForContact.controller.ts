import { Request, Response } from "express";
import { userModel } from "../models/User";
import { contact } from "./config/emailer";
import { contactInterface, userId } from "./interfaces/userInterface.controller";

export const getEmailContact = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const { email } = req.body

    try {
        
        if (id) {
                const user: userId | null = await userModel.findById(id);
                
                if (user) {
                    console.log("user dentro del if ", user)
                    const allEmail: contactInterface = {
                        _id: user?._id,
                        name: user?.name,
                        email: user?.email
                    }

                    contact(allEmail?.email, email)
                    return res.status(200).json(email);
                }
            }
            res.status(200).send("hola lucho")
        }catch (err) {
            res.status(500).send("El server crasheó papá")

    } 
    }

