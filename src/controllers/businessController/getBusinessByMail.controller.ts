import { Request, Response } from "express";
import { BusinessModel, Business } from "../../models/Bussiness";
import { businessId, businessInterface } from "../interfaces/businessInterface.controller";

export const getBusinessEmail = async (req: Request, res: Response) => {

    const { email } = req.query

    try {

        
        if(email){
            const businessEmail: businessId | null = await BusinessModel.findOne({email: email})
            if(businessEmail){
            const allEmail: businessInterface = {
                _id: businessEmail._id,
                name: businessEmail.name,
                email: businessEmail.email,
                password: businessEmail.password,
                description: businessEmail.description,
                jobSummary: businessEmail.jobSummary,
                image: businessEmail.image,
                country: businessEmail.country
            }
            return res.status(200).json(allEmail)
        }
    }
} catch(err){
    console.error(err)
}


}