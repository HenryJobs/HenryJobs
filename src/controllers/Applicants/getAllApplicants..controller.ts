import { Request, Response } from "express";
import { applicantsModel, Applicants } from "../../models/Applicants";
import { applicantsInterface } from "../interfaces/userInterface.controller";

export const getAllApplicant = async (_req: Request, res: Response) => {
    try {

        let applicant: Array<applicantsInterface> = await applicantsModel.find().populate("appUser")
        
        if(applicant){
            res.status(200).json(applicant)
        } 
    } catch(err){
        console.log(err)
    }
        
}