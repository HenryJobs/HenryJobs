import { Request, Response, NextFunction } from "express";
import { userModel } from "../models/User";

export const createUserGoogle = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const {
        name,
        lastName,
        userName,
        email,
        password,
        profileImage,
        banner,
        userTypes,
        technologies,
        country,
        city,
        backFront,
        languages,
        otherStudies,
        workModality,
        curriculumCounter,
        premium,
        stars,
        allStars,
        linkedin,
        github,
        gmail,
        acercaDe
    } = req.body.payload;

    try {

        if (email) {
            req.query.userEmail = email;
            console.log("email forro", email)
            return next()
        }
        else {

            const user = await userModel.create({
                name,
                lastName,
                userName,
                email,
                password,
                userTypes,
                profileImage,
                banner,
                technologies,
                country,
                city,
                backFront,
                languages,
                otherStudies,
                workModality,
                curriculumCounter,
                premium,
                stars,
                allStars,
                acercaDe,
                linkedin,
                github,
                gmail
            });

            await user.save()
            return res.status(200).json(user)
        }
    } catch (err) {
        console.error(err);

    }
};