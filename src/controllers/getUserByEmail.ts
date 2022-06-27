import { Request, Response } from "express";
import { User, userModel } from "../models/User";
import { userId, userInterface } from "./interfaces/userInterface";

export const getUserEmail = async (req: Request, res: Response) => {

    const { email } = req.query

    if(email){
        const userEmail: userId | null = await userModel.findOne({
            email: email
        })
        if(userEmail){
            const allEmail: userInterface = {
                _id: userEmail._id,
                firstName: userEmail.firstName,
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
                otherstudies: userEmail.otherStudies,
                CurriculumCounter: userEmail.curriculumCounter,
                counterIngreso: userEmail.counterIngreso,
                banner: userEmail.banner
            }
            res.status(200).json(allEmail)
        }
    }


}
