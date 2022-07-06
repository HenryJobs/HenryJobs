import { Request, Response } from "express";
import { postModel } from "../../models/Post";

export const putLikesPost = async (req: Request, res: Response) => {
    const { id } = req.params
    const { likes } = req.body

    try {

        if(id !== likes) {
            const updateLikes = await postModel.findById(id); 
        
        if(updateLikes?.likes.includes(id)){
            await updateLikes.updateOne({
                $push: { likes: id }
            })
            let resp = await postModel.findById(likes)
            return res.status(200).json(resp?.likes)
            }

            if(!updateLikes?.likes.includes(id)){

                await updateLikes?.updateOne({
                    $pull: { likes: id }
                })
                let resp = await postModel.findById(likes)
                return res.status(200).json(resp?.likes)
            }

            // if(!updateLikes?.likes.includes(id)) {
            //     await updateLikes?.updateOne({ $push: { likes: likes }})
            // }
        }
    } catch (err){
        console.error(err)
    }

    }
