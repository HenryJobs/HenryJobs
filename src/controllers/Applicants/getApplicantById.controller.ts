import { Request, Response } from "express";
import { applicantsModel, Applicants } from "../../models/Applicants";

export const getApplicantById = async (req: Request, res: Response) => {
    try {

        const { id } = req.params


            let applicant: null | Applicants;
            
            if(id){
                applicant = await applicantsModel.findById(id).populate("appUser")
                res.status(200).json(applicant)
        }
    } catch(err){
        console.log(err)
    }
        
}