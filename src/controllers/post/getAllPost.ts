import { Request, Response } from "express";
import { Post, postModel } from "../../models/Post";

export const getAllPost = async (_req: Request, res: Response) => {
    try {

        let posters: Post[]

        posters = await postModel.find().populate("poster")
        
        if(posters){
            res.status(200).json(posters)
        } 
    } catch(err){
        console.log(err)
    }
        
}