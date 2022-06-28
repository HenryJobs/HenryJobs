import { Request, Response } from "express";
import { BusinessModel } from "../../models/Bussiness";
import { businessId, businessInterface } from "../interfaces/businessInterface.controller";

export const getBusinessByName = async (req: Request, res: Response) => {

    const { name } = req.query

    if(name){

        const business: businessId | null = await BusinessModel.findOne({ name: name })

        try{

        

        if(business) {

            const allNames: businessInterface = {

                _id: business._id,
                name: business.name,
                email: business.email,
                password: business.password,
                description: business.description,
                jobSummary: business.jobSummary,
                image: business.image,
                country: business.country
            }

            return res.status(200).json(allNames)

        } 
    } catch (err){
            console.error(err)
            res.status(500).json({ msg: "Business ID not valid" })
        }

    }

}