import { Request, Response } from "express";
import { postModel, Post } from "../../models/Post";

export const updatePost = async(req: Request, res: Response) => {

    const { id } = req.params
    const { 
        text, 
        imgVideo, 
        date, 
        image, 
        workModality, 
        technologies, 
        backFront, 
        country } = req.body

    try {
        const updated: any = await postModel.findByIdAndUpdate({ _id: id }, {
            text,
            imgVideo,
            date,
            image,
            workModality,
            technologies,
            backFront,
            country
        })

        res.status(200).json(updated)
        
    } catch (err){
        console.error(err)
    }

}
