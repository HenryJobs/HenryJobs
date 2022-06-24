import { Request, Response } from "express";
import { userModel } from "../models/User";
import { userInterface } from "./interfaces/userInterface";
import { deleteImage } from "../cloudinary";

export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        if (id) {
            const deleteById = await userModel.findOneAndDelete({ _id: id })
            
            if (deleteById) {
                const myDelete: userInterface = {
                    _id: deleteById._id,
                    firstName: deleteById.firstName,
                    lastName: deleteById.lastName,
                    userName: deleteById.userName,
                    email: deleteById.email,
                    password: deleteById.password,
                    profileImage: deleteById.profileImage,
                    banner: deleteById.banner
                };

                await deleteImage(deleteById.profileImage.public_id);
                await deleteImage(deleteById.banner.public_id);
                return res.status(200).json(myDelete);
            };
            
            res.status(404).json({ msg: "User does not exist" })
        };
        
    } catch (error) {
        console.error(error)  
        res.status(500).json({ msg: "User ID not valid" })
    };
};