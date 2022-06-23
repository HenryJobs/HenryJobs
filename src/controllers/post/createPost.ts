import { Request, Response } from "express";
import { Post, postModel } from "../../models/Post";

export const createPost = async (req: Request, res: Response) => {

    const {  poster: {_id}, text } = req.body

    try {
        const post = await postModel.create({
            poster: {_id},
            text
        });

        res.status(201).json(post)

    } catch(err){
        console.error(err)
    };
};