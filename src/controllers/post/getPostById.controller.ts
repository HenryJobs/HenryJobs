import { Request, Response } from "express";
import { Post, postModel } from "../../models/Post";

    export const getPostById = async(req: Request, res: Response) => {

        const { id } = req.params
        try {

            let post: null | Post;
            if(id){
                post = await postModel.findById(id).populate("posterUser");
                res.status(200).json(post)
            }
        } catch(err){
            console.error(err)
    }
}
