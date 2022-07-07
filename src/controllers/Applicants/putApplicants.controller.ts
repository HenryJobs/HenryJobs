import { Request, Response, NextFunction } from "express";
import { Applicants, applicantsModel } from "../../models/Applicants";
import { applicantsInterface } from "../interfaces/userInterface.controller";

export const putApplicants = async (req: Request, res: Response) => {

    const { id } = req.params
    const { step, showStudent, showBusiness } = req.body
    
    try {

        

        let applicants = await applicantsModel.updateOne({_id: id}, {
            $addToSet: { applicants: { step, showStudent, showBusiness } } 
        }, {upsert: true})

        res.status(200).json(applicants)

    } catch(err){
        console.error(err)
    }
    
}