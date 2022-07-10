import { postModel } from "../../models/Post";
import { Request, Response } from "express";

export const updatePostApplicant =async (req: Request, res: Response) => {
    
    const { id } = req.params

    const { userId, step, showBusiness, name } = req.body

    try {

        let post = await postModel.findById(id)
        // console.log(id, "id bro")
        // console.log("la chota del post", post)
        const applicants = post?.applicants
        // console.log("una chotita ",applicants)
        let applicantsUpdated: any = applicants?.map((applicant: any) => {
            // console.log("la chota", applicant.userId)
            if(applicant.userId !== userId) {
                return {...applicant, userId, step, showBusiness, name }
            }
        })

        console.log(applicantsUpdated)

        await post?.updateOne({ $unset: { applicants: applicantsUpdated }})

        res.status(200).json(post)

    } catch (err){
        console.error(err)
    };
    //////////////////////////////////// NO HAY QUE DARLE BOLA !!!!!! ////////////////////////////////////////////////////////////////
};
