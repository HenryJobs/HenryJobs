import { Request, Response } from "express";
import { BusinessModel } from "../../models/Bussiness";

export const updateBusiness = async (req: Request, res: Response) => {

    const { id } = req.params
    const { 
        name,
        email,
        password,
        description,
        jobSummary,
        image,
        country } = req.body

        try {

            const business = await BusinessModel.findByIdAndUpdate({_id: id}, {
            name,
            email,
            password,
            description,
            jobSummary,
            image,
            country
            });

            res.status(201).json(business)

        } catch(err){
            console.error(err)
        }
}