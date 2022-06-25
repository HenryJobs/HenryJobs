import { Request, Response } from "express";
import { BusinessModel, Business } from "../../models/Bussiness";
import { sendMail } from "../config/emailer";

export const postBusiness = async (req: Request, res: Response) => {

    const { 
        name,
        email,
        password,
        description,
        jobSummary,
        image,
        country
    } = req.body

    try {

        const business = await BusinessModel.create({
            name,
            email,
            password,
            description,
            jobSummary,
            image,
            country
    });

    sendMail();

    res.status(201).json(business)

    } catch(err){
        console.error(err)
    }

}