import { Request, Response } from "express";
import { postModel, Post } from "../../models/Post";

export const updatePost = async (req: Request, res: Response) => {

    const { id } = req.params;
    const {
        text,
        imgVideo,
        date,
        image,
        workModality,
        technologies,
        backFront,
        country,
         } = req.body

    try {

        // const post = await postModel.findById(id)

        // if (!post?.applicants.hasOwnProperty(userId) === userId) {
        //     console.log("entré al if que agrega")
        //     console.log("este es el userId", userId)
        //     await post?.updateOne({ $push: { applicants: userId }})
        // }

        // if (post?.applicants.hasOwnProperty(userId) === userId) {
        //     console.log("entré al if que saca")
        //     await post?.updateOne({ $pull: { applicants: userId } })
        // }

        const updated: any = await postModel.findByIdAndUpdate({ _id: id }, {
            text,
            imgVideo,
            date,
            image,
            workModality,
            technologies,
            backFront,
            country
        })

        // res.status(200).json(updated)
        res.status(200).json(updated)

    } catch (err) {
        console.error(err)
    }

}
