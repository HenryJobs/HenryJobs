import { Request, Response } from "express";
import { postComent } from "../../models/postComent";

export const deleteComent = async (req: Request, res: Response) => {

    const { id } = req.query

    try {

        if(id){
            const deleteById = await postComent.findByIdAndDelete({_id: id })
            if(deleteById){
                res.status(200).json(deleteById)
            }

        }

    } catch(err){
        console.error(err)
    }

}