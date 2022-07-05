import { Request, Response, NextFunction } from "express";
import { User, userModel } from "../../models/User";

export const putFollow = async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;
    const { userId } = req.body;

    try {
        if (id !== userId) {
            console.log("primer línea dentro del if")
            const user = await userModel.findById(id)
            const currentUser = await userModel.findById(userId)

            console.log("llego al primer if anidado")
            if (!user?.followers.includes(userId)) {
                await user?.updateOne({ $push: { followers: userId }})
                await currentUser?.updateOne({ $push: { following: id }})
                return res.status(200).json(user?.followers)
            };
            console.log("llego al segundo if anidado")
            if (user?.followers.includes(userId)) {
                await user?.updateOne({ $pull: { followers: userId } })
                await user?.updateOne({ $pull: { following: id } })
                res.status(200).json(user?.followers)
            // res.status(500).json({ msg: "You already follow this user" })
            }
        }
    } catch (error) {
        res.status(500).json(error)
    };
};