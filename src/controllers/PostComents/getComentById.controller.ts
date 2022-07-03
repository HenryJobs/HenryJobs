import { Request, Response } from "express";
import { postComent, Coments } from "../../models/postComent";

export const getComentById = async (req: Request, res: Response) => {

    const { id } = req.params
    try {

        let comment: Coments | null

        comment = await postComent.findOne({ _id: id }).populate("comentUser")

        if(comment){
            res.status(200).json(comment)
        }

    } catch(err){
        console.error(err)
    }

}