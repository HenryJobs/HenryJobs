import { Request, Response, NextFunction } from "express";
import { User, userModel } from "../../models/User";

export const putFollow = async (req: Request, res: Response, next: NextFunction) => {
    
    const { id } = req.params;
    const userId = req.body.id;

    try {
        if (id !== userId) {
            const user = await userModel.findById(id)
            const currentUser = await userModel.findById(userId)

            if (!currentUser?.following.includes(id)) {
                await user?.updateOne({ $push: { followers: userId }})
                await currentUser?.updateOne({ $push: { following: id }})
                let resp = await userModel.findById(userId)
                return res.status(200).json(resp?.following)
            };
            if (currentUser?.following.includes(id)) {
                await user?.updateOne({ $pull: { followers: userId } })
                await currentUser?.updateOne({ $pull: { following: id } })
                let resp = await userModel.findById(userId)
                res.status(200).json(resp?.following)
            // res.status(500).json({ msg: "You already follow this user" })
            }
        }
    } catch (error) {
        res.status(500).json(error)
    };
};