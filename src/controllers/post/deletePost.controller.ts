import { Request, Response } from "express";
import { Post, postModel } from "../../models/Post";

export const deletePost = async (req: Request, res: Response) => {

    const { id } = req.params

    try {

        if (id) {
            const deleteById = await postModel.findOneAndDelete({ _id: id })
            if (deleteById) {
                res.status(200).json(deleteById)
            };
        };

    } catch (err) {
        console.error(err)
    };
};