import { Request, Response } from "express";
import { Likes, likeModel } from "../../models/Likes";

export const putLikes = async (req: Request, res: Response) => {
    const { id } = req.params
    const { likes, liked } = req.body

    try {

        if(id) {
            const updateLikes = await likeModel.findByIdAndUpdate({_id: id}, {
                liked: liked,
                likes: likes
            });

            res.status(200).json(updateLikes)
        }
    } catch (err){
        console.error(err)
    }

    }
