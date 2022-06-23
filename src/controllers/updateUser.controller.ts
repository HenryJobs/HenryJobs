import { Request, Response } from "express";
import { uploadImage } from "../cloudinary";
import { userModel, User } from "../models/User";

export const updateUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { firstName, lastName, userName, email, password, image } = req.body;

    try {

        let img;

        const user = await userModel.findById(id)
        if(user){
            if(user.image === image){
                img = image;
            } else {
                img = await uploadImage(image)
            }
        }

        const updated: any = await userModel.findByIdAndUpdate({ _id: id }, {
            firstName,
            lastName,
            userName,
            image,
            email,
            password
        });

        res.status(200).json(updated)

    } catch (error) {
        console.error(error)
    };
};