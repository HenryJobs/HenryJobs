import { postModel } from "../../models/Post";
import { Request, Response } from "express";

export const updatePostApplicantStatus = async (req: Request, res: Response) => {
    
    const { id } = req.params

    const { userId, step } = req.body

    try {

        let post = await postModel.findById(id)

        if (!post?.active) {
            return res.status(404).json("this item has been removed");
        } 

        const applicants = post?.applicants
        let applicantsUpdated: any = applicants?.map((applicant: any) => {
            if (!(applicant.userId === userId)) return applicant;
            return { ...applicant, step }
        })

        await post?.updateOne({ $set: { applicants: applicantsUpdated } })

        res.status(200).json(post)

    } catch (err) {
        console.error(err)
    };
};