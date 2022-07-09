import { postModel } from "../../models/Post";
import { Request, Response } from "express";

export const updatePostApplicant =async (req: Request, res: Response) => {
    
    const { id } = req.params

    const { userId, step } = req.body

    try {

        let post = await postModel.findById(id)
        console.log(id, "id bro")
        const applicants = post?.applicants
        console.log(applicants)
        let applicantsUpdated: any = applicants?.map((applicant: any) => {
            if(applicant.userId !== userId) {
                return {...applicant, userId, step }
            }
        })

        console.log(applicantsUpdated)

        await post?.updateOne({ $addToSet: { applicants: applicantsUpdated }})

        res.status(200).json(post)

    } catch (err){
        console.error(err)
    };
};
