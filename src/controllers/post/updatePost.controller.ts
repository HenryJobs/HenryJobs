import { Request, Response } from "express";
import { postModel } from "../../models/Post";
import { applicantsInterface, userInterface } from "../interfaces/userInterface.controller";

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
        userId,
        step,
        showStudent,
        showBusiness,
        name } = req.body

    try {

        const post = await postModel.findById(id)

        console.log("showStudent & business", showStudent, showBusiness)
        const userIdProperty: string[] | null | undefined = post?.applicants?.map(e => e.userId)
        const stepProperty: string[] | null | undefined = post?.applicants?.map(e => e.step)
        const showStudentProperty: any = post?.applicants?.map(e => e.showStudent)
        const showBusinessProperty: any = post?.applicants?.map(e => e.showBusiness)

        console.log(userIdProperty)
        console.log(stepProperty)

        console.log("student", showStudentProperty)
        console.log("business", showBusinessProperty)

        // if (!userIdProperty?.includes(userId)) {
        //     console.log("userIdProperty primer if -> ", userIdProperty)
        //     await post?.updateOne({ $push: { applicants: { userId, step, showStudent, showBusiness}}})
        // }


        // if (userIdProperty?.includes(userId) && stepProperty?.includes(step)) {
        //     console.log("userIdProperty segundo if -> ", userIdProperty)
        //     console.log("-> ", showStudent, showBusiness)
        //     await post?.updateOne( { $pull: { applicants: { userId, step, showStudent, showBusiness }}})
        // }


        // if (userIdProperty?.includes(userId) && !stepProperty?.includes(step)) {
        //     console.log("userIdProperty segundo if -> ", userIdProperty)
        //     console.log("esto es esparta", showStudent, showBusiness)
        //     await post?.updateOne( { $set: { applicants: { userId, step, showStudent, showBusiness }}})
        // }


        // if (
        //     !userIdProperty?.includes(userId)
        //     && !stepProperty?.includes(step)
        //     && !showStudentProperty?.includes(showStudent)
        //     && !showBusinessProperty?.includes(showBusiness)
        // ) {
        //     console.log("entré al primer if")
        //     console.log("userIdProperty -> ", userIdProperty)
        //     console.log("stepProperty -> ", stepProperty)
        //     console.log("showStudentProperty -> ", showStudentProperty)
        //     console.log("showBusinessProperty -> ", showBusinessProperty)
        //     await post?.updateOne({ $push: { applicants: { userId, step, showStudent, showBusiness } } })
        // }

        if (
            userIdProperty?.includes(userId)
            && stepProperty?.includes(step)
            && showStudentProperty?.includes(showStudent)
            && showBusinessProperty?.includes(showBusiness)
        ) {
            await post?.updateOne({ $pull: { applicants: { userId, step, showStudent, showBusiness } } })
        }

        if(
            !userIdProperty?.includes(userId)
        || !stepProperty?.includes(step)
        || !showStudentProperty?.includes(showStudent)
        || !showBusinessProperty?.includes(showBusiness))

        {
            await post?.updateOne({ $addToSet: { applicants: { userId, step, showStudent, showBusiness }}})
        }

        if(
            userIdProperty?.includes(userId)
            || !stepProperty?.includes(step)
            || !showStudentProperty?.includes(showStudent)
            || !showBusinessProperty?.includes(showBusiness))
                {
                console.log("entré al tercero mi rey")
            console.log("userIdProperty -> ", userIdProperty)
            console.log("stepProperty -> ", stepProperty)
            console.log("showStudentProperty -> ", showStudentProperty)
            console.log("showBusinessProperty -> ", showBusinessProperty)
            await post?.updateOne({ $setOnInsert: { applicants: { userId, step, showStudent, showBusiness }}})

        } 

        // if( userIdProperty?.includes(userId)
        //     || !stepProperty?.includes(step)
        //     || !showStudentProperty?.includes(showStudent)
        //     || !showBusinessProperty?.includes(showBusiness)
        // ){

        //     await post?.updateOne({ $ { applicants: { userId, step, showStudent, showBusiness }}},  { upsert: true })

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

        console.log('llegó acá??')
        res.status(200).json(updated)

    } catch (err) {
        console.error(err)
    }

}