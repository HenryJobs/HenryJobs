import { Request, Response } from "express";
import { User, userModel } from "../models/User";
import { userId, userInterface } from "./interfaces/userInterface.controller";

export const getUserEmail = async (req: Request, res: Response) => {

    const { email } = req.query

    if (email) {
        const userEmail: userId | null = await userModel.findOne({
            email: email
        })
        if (userEmail) {
            const allEmail: userInterface = {
                _id: userEmail._id,
                name: userEmail.name,
                lastName: userEmail.lastName,
                userName: userEmail.userName,
                email: userEmail.email,
                password: userEmail.password,
                profileImage: userEmail.profileImage,
                userTypes: userEmail.userTypes,
                technologies: userEmail.technologies,
                country: userEmail.country,
                backFront: userEmail.backFront,
                languages: userEmail.languages,
                otherStudies: userEmail.otherStudies,
                curriculumCounter: userEmail.curriculumCounter,
                counterIncome: userEmail.counterIncome,
                workModality: userEmail.workModality,
                banner: userEmail.banner,
                premium: userEmail.premium
            }
            res.status(200).json(allEmail)
        }
    }


}
