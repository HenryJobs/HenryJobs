import { Request, Response } from "express";
import { userModel, User } from "../../models/User";

export const createFollow = async (req: Request, res: Response) => {

    const { followera: _id } = req.body

    try {

        const follow = await userModel.create({
            follows: _id,
            followes: _id,
        });

        res.status(201).json(follow)

    } catch(err){
        console.error(err)
    };
};