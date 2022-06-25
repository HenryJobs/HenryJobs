import { Request, Response } from "express";
import { followModel, Follow } from '../../models/Follow'

export const getAllFollow = async (req: Request, res: Response) => {

    try {

        let follower: Follow[]

        follower = await followModel.find().populate("followUser", "followers")

        if(follower){
            res.status(200).json(follower)
        }

    } catch(err){

        console.error(err)

    }

}
