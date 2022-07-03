import { Request, Response } from "express";
import { userModel } from "../models/User";
import { userInterface } from "./interfaces/userInterface.controller";
import { deleteImage } from "../cloudinary";

export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        if (id) {
            const deleteById = await userModel.findOneAndDelete({ _id: id })

            if (deleteById) {
                const myDelete: userInterface = {
                    _id: deleteById._id,
                    name: deleteById.name,
                    lastName: deleteById.lastName,
                    userName: deleteById.userName,
                    email: deleteById.email,
                    password: deleteById.password,
                    profileImage: deleteById.profileImage,
                    userTypes: deleteById.userTypes,
                    technologies: deleteById.technologies,
                    country: deleteById.country,
                    backFront: deleteById.backFront,
                    languages: deleteById.languages,
                    otherStudies: deleteById.otherStudies,
                    curriculumCounter: deleteById.curriculumCounter,
                    counterIncome: deleteById.counterIncome,
                    workModality: deleteById.workModality,
                    banner: deleteById.banner,
                    premium: deleteById.premium,
                    stars: deleteById.stars
                };

                await deleteImage(deleteById.profileImage.public_id);
                // await deleteImage(deleteById.banner.public_id);
                return res.status(200).json(myDelete);
            };

            res.status(404).json({ msg: "User does not exist" })
        };

    } catch (error) {
        console.error(error)
        res.status(500).json({ msg: "User ID not valid" })
    };
};