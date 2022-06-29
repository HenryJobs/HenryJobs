import { Request, Response } from "express";
import { BusinessModel } from "../../models/Bussiness";
import { businessInterface } from "../interfaces/businessInterface.controller";

export const getBusinessById = async (req: Request, res: Response) => {
    
    const { id } = req.params

    try{
        if(id){
            
            let businessId = await BusinessModel.findOne({ _id: id })
            if(businessId){

                const allId: businessInterface = {

                    _id: businessId._id,
                    name: businessId.name,
                    email: businessId.email,
                    password: businessId.password,
                    description: businessId.description,
                    jobSummary: businessId.jobSummary,
                    image: businessId.image,
                    country: businessId.country
                }

                return res.status(200).json(allId)
            }
            res.status(404).json({msg: "Business does not exist"})
        }
    } catch(err){
        console.error(err)
        res.status(500).json({ msg: "Business ID not valid" })
    }
}