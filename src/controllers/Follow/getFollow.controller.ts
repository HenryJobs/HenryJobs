import { Request, Response } from "express";
import { userModel, User } from '../../models/User'

export const getAllFollow = async (req: Request, res: Response) => {

    const {  } = req.body;

    try {
        const follower: User[] = await userModel.find().populate("followers", "follows")
        if(follower){
            res.status(200).json(follower)
        };

    } catch(err){
        console.error(err)
    };
};
