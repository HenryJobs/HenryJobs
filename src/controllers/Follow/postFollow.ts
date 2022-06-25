import { Request, Response } from "express";
import { followModel, Follow } from "../../models/Follow";

export const createFollow = async (req: Request, res: Response) => {

    const { followUser: _id } = req.body

    try {



        const follow = await followModel.create({
            followUser: _id,
            followers: _id,
        });

        res.status(201).json(follow)

    } catch(err){
        console.error(err)
    }

}