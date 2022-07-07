import { Request, Response } from "express";
import { postModel } from "../../models/Post";

export const updateStep = async (req: Request, res: Response) => {

    const { id } = req.params;
    const {
        userId,
        step,
        showStudent,
        showBusiness,
        name } = req.body

    try {

        const post = await postModel.findById(id)

        const userIdProperty: string[] | null | undefined = post?.applicants?.map(e => e.userId)
        const stepProperty: string[] | null | undefined = post?.applicants?.map(e => e.step)
        const showStudentProperty: any = post?.applicants?.map(e => e.showStudent)
        const showBusinessProperty: any = post?.applicants?.map(e => e.showBusiness)

        console.log("el forro de userIdProperty", userIdProperty?.includes(userId))
        console.log("el forro de stepProperty", stepProperty?.includes(step))


        if (
            userIdProperty?.includes(userId)
            && !stepProperty?.includes(step)
            || stepProperty?.includes(step)
        ) {
            console.log("el forro de userIdProperty", userIdProperty)
            console.log("el forro de stepProperty", stepProperty)
            await post?.updateOne({ $addToSet: { applicants: { userId, step, showStudent, showBusiness }}})
        }

        console.log("llega acá el forro")
        res.status(200).json(post)
        
    } catch (err) {
        console.error(err)
    };
};