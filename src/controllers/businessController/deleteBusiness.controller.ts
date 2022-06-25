import { Request, Response } from "express";
import { BusinessModel } from "../../models/Bussiness";
import { businessInterface } from "../interfaces/businessInterface";

export const deleteBusiness = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        if(id){
            const deleteById = await BusinessModel.findOneAndDelete({_id: id})

            if(deleteById) {
                const myDelete: businessInterface = {
                    _id: deleteById._id,
                    name: deleteById.name,
                    email: deleteById.email,
                    password: deleteById.password,
                    description: deleteById.description,
                    jobSummary: deleteById.jobSummary,
                    image: deleteById.image,
                    country: deleteById.country
                }

                return res.status(200).json(myDelete)
            }
            res.status(404).json({ msg: "Business does not exist" })
        }

    } catch (err){
        console.error(err)
        res.status(500).json({ msg: "Business ID not valid" })
    }

}
