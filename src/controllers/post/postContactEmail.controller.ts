import { Request, Response } from "express";
import { Post, } from "../../models/Post";
import { userModel } from "../../models/User";

export const getEmailContact = async (req: Request, res: Response) => {

    const { email, name, firstName, lastName} = req.body

    try {

        const emailContact = await userModel.findOne({email: email})

        

    } catch(err){
        console.error(err)
    }

}