import { Request, Response } from "express";
import { userModel } from "../models/User";
import { userInterface } from "./interfaces/userInterface";

export const getUserById = async (req: Request, res: Response) => {

    const { id } = req.params

    try {

        if(id) {

            let userId = await userModel.findOne({ _id: id })
            if(userId){
                const allId: userInterface = {
                _id: userId._id,
                firstName: userId.firstName,
                lastName: userId.lastName,
                userName: userId.userName,
                email: userId.email,
                password: userId.password,
                profileImage: userId.profileImage,
                userTypes: userId.userTypes,
                technologies: userId.technologies,
                country: userId.country,
                backFront: userId.backFront,
                languages: userId.languages,
                otherstudies: userId.otherStudies,
                CurriculumCounter: userId.curriculumCounter,
                counterIngreso: userId.counterIngreso,
                banner: userId.banner,
                premium: userId.premium
                }
                return res.status(200).json(allId)
            };
            return res.status(404).json({ msg: "User does not exist" })
        };

    } catch(error) {
        console.error(error)
    };
};