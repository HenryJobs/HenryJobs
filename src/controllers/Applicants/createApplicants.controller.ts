import { Request, Response, NextFunction } from "express";
import { Applicants, applicantsModel } from "../../models/Applicants";

export const createApplicants =async (req: Request, res: Response) => {
    
    const { step, showStudent, showBusiness, appUser: _id } = req.body

    try {

        const applicants = await applicantsModel.create({
            appUser: _id,
            step, 
            showStudent, 
            showBusiness
        })

        res.status(200).json(applicants)

    } catch(err){
        console.error(err)
    }

}