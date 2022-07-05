import { Request, Response, NextFunction } from "express";
import { User, userModel } from "../../models/User";

export const putFollow = async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;
    const { userId } = req.body;

    try {
        if (id !== userId) {
            const user = await userModel.findById(id)
            const currentUser = await userModel.findById(userId)

            if (!user?.followers.includes(userId)) {
                await user?.updateOne({ $push: { followers: userId }})
                await currentUser?.updateOne({ $push: { following: id }})
                return res.status(200).json(user?.followers)
            };

            if (user?.followers.includes(userId)) {
                await user?.updateOne({ $pull: { followers: userId } })
                await user?.updateOne({ $pull: { following: id } })
                res.status(200).json(user?.followers)
            }
        }
    } catch (error) {
        res.status(500).json(error)
    };
};