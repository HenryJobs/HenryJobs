import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../models/User";
import { uploadImage } from "../cloudinary";
import { UploadedFile } from "express-fileupload";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const { firstName, lastName, userName, email, password, profileImage, name } = req.body;

    const { tempFilePath } = req.files?.profileImage as UploadedFile;
    const banner = req.files?.banner as UploadedFile;

    try {

        if (
            !firstName || 
            !lastName || 
            !userName || 
            !email || 
            !password
            ) res.status(400).json({ msg: "Some fields are required" })

            const user = await userModel.create({
            firstName,
            lastName,
            userName,
            email,
            password,
            profileImage,
        });

        
        if (req.files?.profileImage) {
            const result = await uploadImage(tempFilePath)
            user.profileImage = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }    
        };

        if (req.files?.banner) {
            const result = await uploadImage(banner.tempFilePath)
            user.banner = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
        }

        await user.save();
        res.status(201).json(user)
    }
    catch (error) {
        console.error(error)
    };
};