"use strict";
// import { Request, Response } from "express";
// import { postModel } from "../../models/Post";
// export const updateStep = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const { step } = req.body
//     try {
//         const post = await postModel.findByIdAndUpdate( { _id: id }, {})
//         res.status(200).json(post)
//     } catch (err) {
//         console.error(err)
//     };
// };
// if (!post?.applicants.hasOwnProperty(step) === step) {
//     console.log("entré al if que agrega")
//     await post?.updateOne({ $push: { applicants: step }})
// }
// if (post?.applicants.hasOwnProperty(step) === step) {
//     console.log("entré al if que saca")
//     await post?.updateOne({ $pull: { applicants: step } })
// }
