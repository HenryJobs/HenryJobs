import { Request, Response } from "express";
import { Business, BusinessModel } from "../../models/Bussiness";
import { allBusinessInterface } from "../interfaces/businessInterface";

export const getAllBusiness = async(req: Request, res: Response) => {

    try {
        const allBusiness: Array<Business> = await BusinessModel.find()

        if(allBusiness) {
            const businessMap: Array<allBusinessInterface> = allBusiness.map((el: any) => {
                return ({
                    _id: el.id,
                    name:el.name,
                    email: el.email,
                    password: el.password,
                    description: el.description,
                    jobSummary: el.jobSummary,
                    image: el.image,
                    country: el.country
                })
            })

            res.status(200).json(businessMap)

        }
    } catch(err) {
        console.error(err)
    }

}